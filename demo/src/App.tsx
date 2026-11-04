import { useCallback, useEffect, useMemo, useState } from "react";
import { DEFAULT_TAILWIND_VERSION, SECTION_IDS, THEME_STORAGE_KEY, VERSION_STORAGE_KEY } from "./_constants";
import AppContext, { type IAppContext, type TailwindVersion, type Theme } from "./contexts/AppContext";
import useScrollSpy from "./hooks/useScrollSpy";
import { readStorage, writeStorage } from "./lib/storage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionIntroduction from "./sections/SectionIntroduction";
import SectionInstallation from "./sections/SectionInstallation";
import SectionConfiguration from "./sections/SectionConfiguration";
import SectionClasses from "./sections/SectionClasses";
import SectionMigration from "./sections/SectionMigration";
import SectionExamples from "./sections/SectionExamples";
import SectionRtl from "./sections/SectionRtl";
import SectionFaq from "./sections/SectionFaq";
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

const App = () => {
    const [tailwindVersion, setVersionState] = useState<TailwindVersion>(readVersion);
    const [theme, setTheme] = useState<Theme>(readTheme);

    const activeSection = useScrollSpy(SECTION_IDS, "introduction");

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
        () => ({ activeSection, tailwindVersion, setTailwindVersion, theme, toggleTheme }),
        [activeSection, tailwindVersion, setTailwindVersion, theme, toggleTheme],
    );

    return (
        <AppContext.Provider value={value}>
            <Header />
            <main className="container max-w-6xl">
                <SectionIntroduction />
                <SectionInstallation />
                <SectionConfiguration />
                <SectionClasses />
                <SectionMigration />
                <SectionExamples />
                <SectionRtl />
                <SectionFaq />
            </main>
            <Footer />
        </AppContext.Provider>
    );
};

export default App;
