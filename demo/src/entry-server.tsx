import { renderToStaticMarkup, renderToString } from "react-dom/server";
import App from "./App";
import { FAQ } from "./faq";

// used by scripts/prerender.mjs: the page as static HTML, so crawlers get real content without running any JavaScript
export const render = (): string => renderToString(<App />);

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
