// This is the server entry for the prerender, not something Fast Refresh ever reloads, so exporting plain functions is fine.
/* eslint-disable react-refresh/only-export-components */
import { renderToString } from "react-dom/server";
import App from "./App";
import { loadMessages } from "./i18n/load";
import { languageByCode, type ILanguage } from "./i18n/languages";
import { plain } from "./i18n/format";
import type { PageId } from "./site";

export { LANGUAGES, localizePath } from "./i18n/languages";
export { PAGES, SITE_URL, pageFile, pageUrl } from "./site";
export { plain } from "./i18n/format";
export { loadMessages } from "./i18n/load";

// used by scripts/prerender.mjs: a page in a language as static HTML, so crawlers get real content without running any JavaScript
export const render = async (page: PageId, language: ILanguage): Promise<string> =>
    renderToString(<App page={page} language={language} messages={await loadMessages(language.code)} />);

// the FAQ as plain text, for the FAQPage structured data
export const faqEntries = async (code: string): Promise<{ question: string; answer: string }[]> =>
    (await loadMessages(languageByCode(code).code)).faq.items.map(({ question, answer }) => ({
        question: plain(question),
        answer: plain(answer),
    }));

// the steps of the migration guide as plain text, for the HowTo structured data
export const migrationSteps = async (code: string): Promise<{ name: string; text: string }[]> =>
    (await loadMessages(languageByCode(code).code)).guide.steps.map(({ name, text }) => ({
        name: plain(name),
        text: plain(text),
    }));
