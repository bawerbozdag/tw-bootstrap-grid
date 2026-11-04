// Runs after `vite build` and `vite build --ssr`. Renders the page to static HTML and writes it into dist/index.html,
// together with the structured data and the sitemap, so crawlers that don't run JavaScript still get the real content.
import { execSync } from "node:child_process";
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const ssrDist = resolve(root, "dist-ssr");

const SITE = "https://tw-bootstrap-grid.vercel.app";
const REPO = "https://github.com/bawerbozdag/tw-bootstrap-grid";
const NPM = "https://www.npmjs.com/package/tw-bootstrap-grid";
const AUTHOR = {
    "@type": "Person",
    "@id": `${SITE}/#author`,
    name: "Baver Bozdağ",
    url: "https://github.com/bawerbozdag",
};
const DESCRIPTION =
    "A Tailwind CSS plugin that adds the Bootstrap 12-column grid: rows, columns, gutters, offsets, row-cols and RTL. Works with Tailwind v3.4 and v4.";

const { version } = JSON.parse(readFileSync(resolve(root, "node_modules/tw-bootstrap-grid/package.json"), "utf8"));
const { render, faqEntries } = await import(pathToFileURL(resolve(ssrDist, "entry-server.js")).href);

const app = render();

// a build that quietly ships an empty page would defeat the whole point
if (!app.includes("<h1") || !app.includes('id="faq"') || !app.includes('id="migration"')) {
    throw new Error("prerender: the rendered page is missing its heading or sections");
}

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${SITE}/#website`,
            url: `${SITE}/`,
            name: "tw-bootstrap-grid",
            description: DESCRIPTION,
            inLanguage: "en",
            publisher: { "@id": `${SITE}/#author` },
        },
        AUTHOR,
        {
            "@type": ["SoftwareApplication", "SoftwareSourceCode"],
            "@id": `${SITE}/#software`,
            name: "tw-bootstrap-grid",
            description: DESCRIPTION,
            url: `${SITE}/`,
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

// "<" is escaped so no text in the data can ever close the script tag early
const jsonLd = `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>`;

let page = readFileSync(resolve(dist, "index.html"), "utf8");

for (const [marker, replacement] of [
    ['<div id="root"></div>', `<div id="root">${app}</div>`],
    ["<!--prerender:jsonld-->", jsonLd],
]) {
    if (!page.includes(marker)) {
        throw new Error(`prerender: ${marker} not found in dist/index.html`);
    }

    page = page.replace(marker, () => replacement);
}

writeFileSync(resolve(dist, "index.html"), page);

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

writeFileSync(
    resolve(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${SITE}/</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>
`,
);

rmSync(ssrDist, { recursive: true, force: true });

console.log(`prerendered ${(app.length / 1024).toFixed(0)} kB of HTML, plugin v${version}, sitemap lastmod ${lastmod}`);
