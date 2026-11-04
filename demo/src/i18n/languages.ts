export interface ILanguage {
    // the code used internally and in the messages file name
    code: string;
    // the first segment of the URL, English has none
    path: string;
    // what search engines are told in hreflang and <html lang>
    hreflang: string;
    // Open Graph locale
    locale: string;
    // the language's own name, shown in the language menu
    name: string;
    dir: "ltr" | "rtl";
}

export const LANGUAGES: ILanguage[] = [
    { code: "en", path: "", hreflang: "en", locale: "en_US", name: "English", dir: "ltr" },
];

export const DEFAULT_LANGUAGE = LANGUAGES[0];

export const languageByCode = (code: string): ILanguage => LANGUAGES.find((l) => l.code === code) ?? DEFAULT_LANGUAGE;

// "/migrate-from-bootstrap/" or "/#faq" in a language: English stays as it is, the others get their prefix
export const localizePath = (language: ILanguage, path: string): string => {
    if (!language.path || !path.startsWith("/")) {
        return path;
    }

    const hashAt = path.indexOf("#");
    const base = hashAt === -1 ? path : path.slice(0, hashAt);
    const hash = hashAt === -1 ? "" : path.slice(hashAt);

    return `/${language.path}${base}${hash}`;
};

// the language a URL path belongs to, and what is left of the path once the language prefix is removed
export const parsePath = (pathname: string): { language: ILanguage; rest: string } => {
    const [, first = "", ...others] = pathname.split("/");
    const language = LANGUAGES.find((l) => l.path && l.path === first);

    if (!language) {
        return { language: DEFAULT_LANGUAGE, rest: pathname };
    }

    return { language, rest: `/${others.join("/")}` };
};
