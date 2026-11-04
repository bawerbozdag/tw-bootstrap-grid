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

const App = ({ page }: { page: PageId }) => {
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

    const value = useMemo<IAppContext>(
        () => ({ page, activeSection, tailwindVersion, setTailwindVersion, theme, toggleTheme }),
        [page, activeSection, tailwindVersion, setTailwindVersion, theme, toggleTheme],
    );

    return (
        <AppContext.Provider value={value}>
            <a href="#main" className="skip-link">
                Skip to content
            </a>
            <Header />
            <main id="main" tabIndex={-1} className="container max-w-6xl outline-none">
                {page === "home" ? <HomePage /> : <MigrationPage />}
            </main>
            <Footer />
        </AppContext.Provider>
    );
};

export default App;
