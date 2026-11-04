import { useCallback, useEffect, useMemo, useState } from "react";
import {
    DEFAULT_TAILWIND_VERSION,
    SECTION_IDS,
    THEME_STORAGE_KEY,
    VERSION_STORAGE_KEY,
    type SectionId,
} from "./_constants";
import AppContext, { type IAppContext, type TailwindVersion, type Theme } from "./contexts/AppContext";
import useScrollSpy from "./hooks/useScrollSpy";
import { readStorage, writeStorage } from "./lib/storage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MigrationPage from "./pages/MigrationPage";
import I18nContext, { type II18n } from "./i18n/I18nContext";
import { localizePath, type ILanguage } from "./i18n/languages";
import type { Messages } from "./i18n/messages/en";
import type { PageId } from "./site";
// style
import "@/assets/css/main.css";

const readVersion = (): TailwindVersion => {
    const stored = readStorage(VERSION_STORAGE_KEY);

    return stored === "v3" || stored === "v4" ? stored : DEFAULT_TAILWIND_VERSION;
};

const readTheme = (): Theme => {
    const stored = readStorage(THEME_STORAGE_KEY);

    if (stored === "light" || stored === "dark") {
        return stored;
    }

    // there is no matchMedia while the page is prerendered at build time
    return typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const NO_SECTIONS: readonly SectionId[] = [];

interface IAppProps {
    page: PageId;
    language: ILanguage;
    messages: Messages;
}

const App = ({ page, language, messages }: IAppProps) => {
    const [tailwindVersion, setVersionState] = useState<TailwindVersion>(readVersion);
    const [theme, setTheme] = useState<Theme>(readTheme);

    // only the home page has sections to follow, the migration page is a section of its own
    const spied = useScrollSpy(page === "home" ? SECTION_IDS : NO_SECTIONS, "introduction");
    const activeSection = page === "home" ? spied : "migration";

    const setTailwindVersion = useCallback((version: TailwindVersion) => {
        writeStorage(VERSION_STORAGE_KEY, version);
        setVersionState(version);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((current) => {
            const next = current === "dark" ? "light" : "dark";

            writeStorage(THEME_STORAGE_KEY, next);

            return next;
        });
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.style.colorScheme = theme;
    }, [theme]);

    // The prerendered page is replaced when the app mounts, which can move or reset the scroll position, and a saved
    // Tailwind version can change the height of what is above a #link's target. Navigating to the same fragment again
    // makes the browser align the target the way it does for any link, without adding a history entry.
    useEffect(() => {
        if (location.hash.length > 1) {
            location.replace(location.hash);
        }
    }, []);

    // the prerendered HTML already has these, this keeps them right in development and after any client-side change
    useEffect(() => {
        document.documentElement.lang = language.hreflang;
        document.documentElement.dir = language.dir;
    }, [language]);

    const i18n = useMemo<II18n>(
        () => ({ language, m: messages, url: (path: string) => localizePath(language, path) }),
        [language, messages],
    );

    const value = useMemo<IAppContext>(
        () => ({ page, activeSection, tailwindVersion, setTailwindVersion, theme, toggleTheme }),
        [page, activeSection, tailwindVersion, setTailwindVersion, theme, toggleTheme],
    );

    return (
        <I18nContext.Provider value={i18n}>
            <AppContext.Provider value={value}>
                <a href="#main" className="skip-link">
                    {messages.common.skipToContent}
                </a>
                <Header />
                <main id="main" tabIndex={-1} className="container max-w-6xl outline-none">
                    {page === "home" ? <HomePage /> : <MigrationPage />}
                </main>
                <Footer />
            </AppContext.Provider>
        </I18nContext.Provider>
    );
};

export default App;
