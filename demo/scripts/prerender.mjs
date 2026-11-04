// Runs after `vite build` and `vite build --ssr`. Renders every page in every language to static HTML and writes it into
// dist, together with each page's title, social cards, hreflang links and structured data, and the sitemap, so crawlers
// that don't run JavaScript still get the real content.
import { execSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const ssrDist = resolve(root, "dist-ssr");

const REPO = "https://github.com/bawerbozdag/tw-bootstrap-grid";
const NPM = "https://www.npmjs.com/package/tw-bootstrap-grid";

const { version } = JSON.parse(readFileSync(resolve(root, "node_modules/tw-bootstrap-grid/package.json"), "utf8"));
const server = await import(pathToFileURL(resolve(ssrDist, "entry-server.js")).href);
const {
    render,
    faqEntries,
    migrationSteps,
    loadMessages,
    plain,
    PAGES,
    LANGUAGES,
    pageFile,
    pageUrl,
    SITE_URL: SITE,
} = server;

// ---------------------------------------------------------------- translations must match the English source

const tokens = (text, pattern) => (text.match(pattern) ?? []).sort().join("\u0000");

// what a translation may not change: the `code`, the link targets and the {placeholders} of the English message
const SIGNATURES = {
    code: (text) => tokens(text, /`[^`]+`/g),
    links: (text) => tokens([...text.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]).join("\n"), /[^\n]+/g),
    placeholders: (text) => tokens(text, /\{\w+\}/g),
};

const compare = (source, target, path, problems) => {
    if (typeof source === "string") {
        if (typeof target !== "string") {
            return problems.push(`${path}: should be text`);
        }

        // an empty message stays empty, a translation must not invent or drop one
        if ((source === "") !== (target === "")) {
            problems.push(`${path}: ${source === "" ? "should be empty" : "is empty"}`);
        }

        for (const [name, signature] of Object.entries(SIGNATURES)) {
            if (signature(source) !== signature(target)) {
                problems.push(`${path}: the ${name} differ from English`);
            }
        }

        return;
    }

    if (Array.isArray(source)) {
        if (!Array.isArray(target) || target.length !== source.length) {
            return problems.push(`${path}: should have ${source.length} items`);
        }

        return source.forEach((item, index) => compare(item, target[index], `${path}[${index}]`, problems));
    }

    for (const key of Object.keys(source)) {
        if (!(key in (target ?? {}))) {
            problems.push(`${path}.${key}: missing`);
        } else {
            compare(source[key], target[key], `${path}.${key}`, problems);
        }
    }

    for (const key of Object.keys(target ?? {})) {
        if (!(key in source)) {
            problems.push(`${path}.${key}: not in English`);
        }
    }
};

const allMessages = Object.fromEntries(
    await Promise.all(LANGUAGES.map(async (l) => [l.code, await loadMessages(l.code)])),
);

const problems = [];

for (const language of LANGUAGES.filter((l) => l.code !== "en")) {
    compare(allMessages.en, allMessages[language.code], language.code, problems);
}

if (problems.length) {
    throw new Error(`prerender: the translations do not match the English messages:\n  ${problems.join("\n  ")}`);
}

// ---------------------------------------------------------------- pages

const AUTHOR_URL = "https://github.com/bawerbozdag";

// what each page must contain, whatever the language: ids and code, which are never translated
const EXPECTED = {
    home: ["<h1", 'id="installation"', 'id="migration"', 'id="faq"', "npm install tw-bootstrap-grid"],
    migration: ["<h1", 'id="steps"', 'id="class-mapping"', 'id="bulk-rename"', "perl -pi -e"],
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
        .replace(/&#x27;/g, "'")
        .replace(/\s+/g, " ")
        .trim();

const attr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const structuredData = async (page, language, meta, app) => {
    const url = pageUrl(language, page.id);
    const homeUrl = pageUrl(language, "home");

    const website = {
        "@type": "WebSite",
        "@id": `${homeUrl}#website`,
        url: homeUrl,
        name: "tw-bootstrap-grid",
        description: meta.home.description,
        inLanguage: language.hreflang,
        publisher: { "@id": `${homeUrl}#author` },
    };

    const author = { "@type": "Person", "@id": `${homeUrl}#author`, name: "Baver Bozdağ", url: AUTHOR_URL };

    if (page.id === "home") {
        return {
            "@context": "https://schema.org",
            "@graph": [
                website,
                author,
                {
                    "@type": ["SoftwareApplication", "SoftwareSourceCode"],
                    "@id": `${homeUrl}#software`,
                    name: "tw-bootstrap-grid",
                    description: meta.home.description,
                    url,
                    inLanguage: language.hreflang,
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
                    author: { "@id": `${homeUrl}#author` },
                    sameAs: [REPO, NPM],
                },
                {
                    "@type": "FAQPage",
                    "@id": `${homeUrl}#faq`,
                    inLanguage: language.hreflang,
                    mainEntity: (await faqEntries(language.code)).map(({ question, answer }) => ({
                        "@type": "Question",
                        name: question,
                        acceptedAnswer: { "@type": "Answer", text: answer },
                    })),
                },
            ],
        };
    }

    // the page's own heading is the headline, so the data can't drift from what is on the page
    const headline = stripTags(app.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1] ?? meta.migration.shareTitle);
    const steps = await migrationSteps(language.code);

    return {
        "@context": "https://schema.org",
        "@graph": [
            website,
            author,
            {
                "@type": "TechArticle",
                "@id": `${url}#article`,
                headline,
                description: meta.migration.description,
                url,
                mainEntityOfPage: url,
                inLanguage: language.hreflang,
                dateModified: lastmod,
                isPartOf: { "@id": `${homeUrl}#website` },
                author: { "@id": `${homeUrl}#author` },
                about: { "@type": "SoftwareApplication", name: "tw-bootstrap-grid", url: homeUrl },
            },
            {
                "@type": "HowTo",
                "@id": `${url}#howto`,
                name: headline,
                description: meta.migration.description,
                inLanguage: language.hreflang,
                step: steps.map(({ name, text }, index) => ({
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
                    { "@type": "ListItem", position: 1, name: "tw-bootstrap-grid", item: homeUrl },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: plain(allMessages[language.code].guide.breadcrumbCurrent),
                        item: url,
                    },
                ],
            },
        ],
    };
};

const headFor = async (page, language, app) => {
    const messages = allMessages[language.code];
    const meta = messages.meta[page.id];
    const url = pageUrl(language, page.id);

    // "<" is escaped so no text in the data can ever close the script tag early
    const jsonLd = JSON.stringify(await structuredData(page, language, messages.meta, app)).replace(/</g, "\\u003c");

    const alternates = [
        ...LANGUAGES.map((l) => `<link rel="alternate" hreflang="${l.hreflang}" href="${pageUrl(l, page.id)}" />`),
        `<link rel="alternate" hreflang="x-default" href="${pageUrl(LANGUAGES[0], page.id)}" />`,
    ];

    return [
        `<title>${attr(plain(meta.title))}</title>`,
        `<meta name="description" content="${attr(plain(meta.description))}" />`,
        `<link rel="canonical" href="${url}" />`,
        ...alternates,
        `<meta property="og:type" content="${page.id === "home" ? "website" : "article"}" />`,
        `<meta property="og:site_name" content="tw-bootstrap-grid" />`,
        `<meta property="og:locale" content="${language.locale}" />`,
        ...LANGUAGES.filter((l) => l !== language).map(
            (l) => `<meta property="og:locale:alternate" content="${l.locale}" />`,
        ),
        `<meta property="og:title" content="${attr(plain(meta.shareTitle))}" />`,
        `<meta property="og:description" content="${attr(plain(meta.shareDescription))}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:image" content="${SITE}/og-image.png" />`,
        `<meta property="og:image:type" content="image/png" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:alt" content="${attr(plain(messages.meta.imageAlt))}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${attr(plain(meta.shareTitle))}" />`,
        `<meta name="twitter:description" content="${attr(plain(meta.shareDescription))}" />`,
        `<meta name="twitter:image" content="${SITE}/og-image.png" />`,
        `<meta name="twitter:image:alt" content="${attr(plain(messages.meta.imageAlt))}" />`,
        `<script type="application/ld+json">${jsonLd}</script>`,
    ].join("\n        ");
};

// every page starts from the built index.html, which is read once before any page is written
const template = readFileSync(resolve(dist, "index.html"), "utf8");

for (const marker of ['<div id="root"></div>', "<!--prerender:head-->", '<html lang="en">']) {
    if (!template.includes(marker)) {
        throw new Error(`prerender: ${marker} not found in dist/index.html`);
    }
}

const written = [];
const warnings = [];

for (const language of LANGUAGES) {
    for (const page of Object.values(PAGES)) {
        const app = await render(page.id, language);

        for (const needle of EXPECTED[page.id]) {
            if (!app.includes(needle)) {
                throw new Error(`prerender: the ${language.code} ${page.id} page is missing ${needle}`);
            }
        }

        const meta = allMessages[language.code].meta[page.id];
        const title = plain(meta.title);
        const description = plain(meta.description);

        // search results cut these off, so a long one is worth a look (a warning, not an error)
        if (title.length > 65) warnings.push(`${language.code}/${page.id} title is ${title.length} characters`);
        if (description.length > 170)
            warnings.push(`${language.code}/${page.id} description is ${description.length} characters`);

        const html = template
            .replace('<html lang="en">', `<html lang="${language.hreflang}" dir="${language.dir}">`)
            // the build leaves the dev fallback title in place, each page brings its own
            .replace(/<title>.*?<\/title>\s*/s, "")
            .replace('<div id="root"></div>', () => `<div id="root">${app}</div>`)
            .replace("<!--prerender:head-->", () => "<!--HEAD-->");

        const target = resolve(dist, pageFile(language, page.id));

        mkdirSync(dirname(target), { recursive: true });
        writeFileSync(target, html.replace("<!--HEAD-->", await headFor(page, language, app)));
        written.push(`${language.code}${page.path}`);
    }
}

// the sitemap lists every page in every language, each with links to its translations
const entry = (language, page) => `    <url>
        <loc>${pageUrl(language, page.id)}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${page.id === "home" ? "1.0" : "0.8"}</priority>
${LANGUAGES.map(
    (l) => `        <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${pageUrl(l, page.id)}" />`,
).join("\n")}
        <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(LANGUAGES[0], page.id)}" />
    </url>`;

writeFileSync(
    resolve(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGUAGES.flatMap((language) => Object.values(PAGES).map((page) => entry(language, page))).join("\n")}
</urlset>
`,
);

rmSync(ssrDist, { recursive: true, force: true });

console.log(
    `prerendered ${written.length} pages in ${LANGUAGES.length} languages (${LANGUAGES.map((l) => l.code).join(", ")}); plugin v${version}; sitemap lastmod ${lastmod}`,
);

for (const warning of warnings) {
    console.warn(`  warning: ${warning}`);
}
