// This is the server entry for the prerender, not something Fast Refresh ever reloads, so exporting plain functions is fine.
/* eslint-disable react-refresh/only-export-components */
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import App from "./App";
import { FAQ } from "./faq";
import { MIGRATION_STEPS } from "./migration-content";
import type { PageId } from "./site";

export { PAGES, SITE_URL } from "./site";

// used by scripts/prerender.mjs: the page as static HTML, so crawlers get real content without running any JavaScript
export const render = (page: PageId): string => renderToString(<App page={page} />);

const toText = (markup: string): string =>
    markup
        .replace(/<[^>]+>/g, "")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;|&#39;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/\s+/g, " ")
        .trim();

// the FAQ as plain text, for the FAQPage structured data
export const faqEntries = (): { question: string; answer: string }[] =>
    FAQ.map(({ question, answer }) => ({ question, answer: toText(renderToStaticMarkup(<>{answer}</>)) }));

// the steps of the migration guide as plain text, for the HowTo structured data
export const migrationSteps = (): { name: string; text: string }[] =>
    MIGRATION_STEPS.map(({ name, text }) => ({ name, text: toText(renderToStaticMarkup(<>{text}</>)) }));
