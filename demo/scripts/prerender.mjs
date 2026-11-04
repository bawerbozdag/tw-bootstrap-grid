// Runs after `vite build` and `vite build --ssr`. Renders every page to static HTML and writes it into dist, together
// with each page's title, social cards and structured data, and the sitemap, so crawlers that don't run JavaScript
// still get the real content.
import { execSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const ssrDist = resolve(root, "dist-ssr");

const REPO = "https://github.com/bawerbozdag/tw-bootstrap-grid";
const NPM = "https://www.npmjs.com/package/tw-bootstrap-grid";
const IMAGE_ALT =
    "tw-bootstrap-grid: the Bootstrap grid, for Tailwind. A twelve column grid with three highlighted columns.";

const { version } = JSON.parse(readFileSync(resolve(root, "node_modules/tw-bootstrap-grid/package.json"), "utf8"));
const {
    render,
    faqEntries,
    migrationSteps,
    PAGES,
    SITE_URL: SITE,
} = await import(pathToFileURL(resolve(ssrDist, "entry-server.js")).href);

const AUTHOR = {
    "@type": "Person",
    "@id": `${SITE}/#author`,
    name: "Baver Bozdağ",
    url: "https://github.com/bawerbozdag",
};

const WEBSITE = {
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: `${SITE}/`,
    name: "tw-bootstrap-grid",
    description: PAGES.home.description,
    inLanguage: "en",
    publisher: { "@id": `${SITE}/#author` },
};

// lastmod: the date of the last change to the site, or today when git isn't available (some hosts build without it)
let lastmod = new Date().toISOString().slice(0, 10);

try {
    lastmod =
        execSync("git log -1 --format=%cs -- .", { cwd: root, stdio: ["ignore", "pipe", "ignore"] })
            .toString()
            .trim() || lastmod;
} catch {
    // keep today's date
}

const stripTags = (html) =>
    html
        .replace(/<[^>]+>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/\s+/g, " ")
        .trim();

// what each page must contain, so a build that quietly ships a broken page fails instead
const EXPECTED = {
    home: ["<h1", 'id="installation"', 'id="migration"', 'id="faq"', "npm install tw-bootstrap-grid"],
    migration: ["<h1", 'id="steps"', 'id="class-mapping"', 'id="bulk-rename"', "perl -pi -e"],
};

const structuredData = (page, app) => {
    const url = `${SITE}${page.path}`;

    if (page.id === "home") {
        return {
            "@context": "https://schema.org",
            "@graph": [
                WEBSITE,
                AUTHOR,
                {
                    "@type": ["SoftwareApplication", "SoftwareSourceCode"],
                    "@id": `${SITE}/#software`,
                    name: "tw-bootstrap-grid",
                    description: page.description,
                    url,
                    softwareVersion: version,
                    applicationCategory: "DeveloperApplication",
                    operatingSystem: "Any",
                    programmingLanguage: "TypeScript",
                    runtimePlatform: "Node.js",
                    codeRepository: REPO,
                    downloadUrl: NPM,
                    license: "https://opensource.org/licenses/MIT",
                    isAccessibleForFree: true,
                    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                    author: { "@id": `${SITE}/#author` },
                    sameAs: [REPO, NPM],
                },
                {
                    "@type": "FAQPage",
                    "@id": `${SITE}/#faq`,
                    mainEntity: faqEntries().map(({ question, answer }) => ({
                        "@type": "Question",
                        name: question,
                        acceptedAnswer: { "@type": "Answer", text: answer },
                    })),
                },
            ],
        };
    }

    // the page's own heading is the headline, so the data can't drift from what is on the page
    const headline = stripTags(app.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1] ?? page.shareTitle);

    return {
        "@context": "https://schema.org",
        "@graph": [
            WEBSITE,
            AUTHOR,
            {
                "@type": "TechArticle",
                "@id": `${url}#article`,
                headline,
                description: page.description,
                url,
                mainEntityOfPage: url,
                inLanguage: "en",
                dateModified: lastmod,
                isPartOf: { "@id": `${SITE}/#website` },
                author: { "@id": `${SITE}/#author` },
                about: { "@type": "SoftwareApplication", name: "tw-bootstrap-grid", url: `${SITE}/` },
            },
            {
                "@type": "HowTo",
                "@id": `${url}#howto`,
                name: headline,
                description: page.description,
                step: migrationSteps().map(({ name, text }, index) => ({
                    "@type": "HowToStep",
                    position: index + 1,
                    name,
                    text,
                    url: `${url}#steps`,
                })),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "tw-bootstrap-grid", item: `${SITE}/` },
                    { "@type": "ListItem", position: 2, name: "Migrating from Bootstrap", item: url },
                ],
            },
        ],
    };
};

const attr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const headFor = (page, app) => {
    const url = `${SITE}${page.path}`;

    // "<" is escaped so no text in the data can ever close the script tag early
    const jsonLd = JSON.stringify(structuredData(page, app)).replace(/</g, "\\u003c");

    return [
        `<title>${attr(page.title)}</title>`,
        `<meta name="description" content="${attr(page.description)}" />`,
        `<link rel="canonical" href="${url}" />`,
        `<meta property="og:type" content="${page.id === "home" ? "website" : "article"}" />`,
        `<meta property="og:site_name" content="tw-bootstrap-grid" />`,
        `<meta property="og:locale" content="en_US" />`,
        `<meta property="og:title" content="${attr(page.shareTitle)}" />`,
        `<meta property="og:description" content="${attr(page.shareDescription)}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:image" content="${SITE}/og-image.png" />`,
        `<meta property="og:image:type" content="image/png" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:alt" content="${attr(IMAGE_ALT)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${attr(page.shareTitle)}" />`,
        `<meta name="twitter:description" content="${attr(page.shareDescription)}" />`,
        `<meta name="twitter:image" content="${SITE}/og-image.png" />`,
        `<meta name="twitter:image:alt" content="${attr(IMAGE_ALT)}" />`,
        `<script type="application/ld+json">${jsonLd}</script>`,
    ].join("\n        ");
};

// every page starts from the built index.html, which is read once before any page is written
const template = readFileSync(resolve(dist, "index.html"), "utf8");

for (const marker of ['<div id="root"></div>', "<!--prerender:head-->"]) {
    if (!template.includes(marker)) {
        throw new Error(`prerender: ${marker} not found in dist/index.html`);
    }
}

const written = [];

for (const page of Object.values(PAGES)) {
    const app = render(page.id);

    for (const needle of EXPECTED[page.id]) {
        if (!app.includes(needle)) {
            throw new Error(`prerender: the ${page.id} page is missing ${needle}`);
        }
    }

    const html = template
        // the build leaves the dev fallback title in place, each page brings its own
        .replace(/<title>.*?<\/title>\s*/s, "")
        .replace('<div id="root"></div>', () => `<div id="root">${app}</div>`)
        .replace("<!--prerender:head-->", () => headFor(page, app));

    const target = resolve(dist, page.file);

    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, html);
    written.push(`${page.path} (${(app.length / 1024).toFixed(0)} kB)`);
}

writeFileSync(
    resolve(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.values(PAGES)
    .map(
        (page) => `    <url>
        <loc>${SITE}${page.path}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${page.id === "home" ? "1.0" : "0.8"}</priority>
    </url>`,
    )
    .join("\n")}
</urlset>
`,
);

rmSync(ssrDist, { recursive: true, force: true });

console.log(`prerendered ${written.join(", ")}; plugin v${version}; sitemap lastmod ${lastmod}`);
