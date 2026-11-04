import { DEFAULT_LANGUAGE, localizePath, parsePath, type ILanguage } from "@/i18n/languages";

export const SITE_URL = "https://tw-bootstrap-grid.vercel.app";

export type PageId = "home" | "migration";

export interface IPage {
    id: PageId;
    // the URL path in English, with the trailing slash the static files are served under
    path: string;
    // where the prerender writes the page inside dist, in English
    file: string;
}

export const MIGRATION_PATH = "/migrate-from-bootstrap/";

export const PAGES: Record<PageId, IPage> = {
    home: { id: "home", path: "/", file: "index.html" },
    migration: { id: "migration", path: MIGRATION_PATH, file: "migrate-from-bootstrap/index.html" },
};

// the page a path belongs to, with or without a trailing slash and once the language prefix is gone
export const pageFromPath = (path: string): PageId =>
    path.replace(/\/+$/, "") === MIGRATION_PATH.replace(/\/+$/, "") ? "migration" : "home";

// which language and which page a URL is
export const parseLocation = (pathname: string): { language: ILanguage; page: PageId } => {
    const { language, rest } = parsePath(pathname);

    return { language, page: pageFromPath(rest) };
};

export const pageUrl = (language: ILanguage, page: PageId): string =>
    SITE_URL + localizePath(language, PAGES[page].path);

export const pageFile = (language: ILanguage, page: PageId): string =>
    language === DEFAULT_LANGUAGE || !language.path ? PAGES[page].file : `${language.path}/${PAGES[page].file}`;
