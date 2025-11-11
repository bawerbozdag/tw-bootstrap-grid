import { useEffect, useState } from "react";
import { DEFAULT_TAB_KEY, DEFAULT_TAILWIND_VERSION, LOCAL_STORAGE_KEY, SIDEBAR_TABS, TAB_KEYS } from "./_constants";
import AppContext, { type IAppContext } from "./contexts/AppContext";
import Sidebar from "./components/Sidebar";
import SectionIntroduction from "./sections/SectionIntroduction";
import SectionInstallation from "./sections/SectionInstallation";
import SectionConfiguration from "./sections/SectionConfiguration";
import SectionExamples from "./sections/SectionExamples";
// style
import "@/assets/css/main.css";

const isTabKey = (key: string): key is IAppContext["activeTab"] => {
    return (TAB_KEYS as readonly string[]).includes(key);
};

const App = () => {
    const [activeTab, setActiveTab] = useState<IAppContext["activeTab"]>(DEFAULT_TAB_KEY);

    const updateActiveTabOnScroll = () => {
        const tabSections = document.querySelectorAll<HTMLElement>("#sections > section");

        if (!tabSections || !tabSections.length) {
            return;
        }

        const visibleSection = Array.from(tabSections).find((section) => {
            const { top, bottom } = section.getBoundingClientRect();

            return top < 100 && bottom > 100;
        });

        if (!visibleSection) {
            return;
        }

        const visibleTab = `tab-${visibleSection.id}`;

        if (!isTabKey(visibleTab)) {
            return;
        }

        return setActiveTab((currentTab) => {
            // if the current active tab matches the new tab, do nothing
            if (currentTab == visibleTab) {
                return currentTab;
            }

            // update
            return visibleTab;
        });
    };

    useEffect(() => {
        // run first time
        updateActiveTabOnScroll();

        window.addEventListener("scroll", updateActiveTabOnScroll);

        // cleanup
        return () => window.removeEventListener("scroll", updateActiveTabOnScroll);

        //
    }, []);

    const [tailwindVersion, setTailwindVersion] = useState<IAppContext["tailwindVersion"]>(() => {
        const currentTailwindVersion = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (!currentTailwindVersion || (currentTailwindVersion !== "v3" && currentTailwindVersion !== "v4")) {
            localStorage.setItem(LOCAL_STORAGE_KEY, DEFAULT_TAILWIND_VERSION);

            return DEFAULT_TAILWIND_VERSION;
        }

        return currentTailwindVersion;
    });

    useEffect(() => {
        if (!document) {
            return;
        }

        const currentTab = SIDEBAR_TABS.flatMap((tab) => tab.items).find((item) => item.id === activeTab)?.label;

        document.title = `${currentTab ?? "Docs"} / tw-bootstrap-grid`;

        //
    }, [activeTab]);

    return (
        <AppContext.Provider
            value={{
                activeTab,
                setActiveTab,
                tailwindVersion,
                setTailwindVersion: (tailwindVersion) => {
                    // validate tailwind version
                    if (tailwindVersion !== "v3" && tailwindVersion !== "v4") {
                        localStorage.setItem(LOCAL_STORAGE_KEY, DEFAULT_TAILWIND_VERSION);

                        return setTailwindVersion(DEFAULT_TAILWIND_VERSION);
                    }

                    localStorage.setItem(LOCAL_STORAGE_KEY, tailwindVersion);

                    return setTailwindVersion(tailwindVersion);
                },
                theme: matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
            }}
        >
            <main className="xl:grid xl:grid-cols-[280px_auto]">
                <Sidebar />
                <div id="sections">
                    <SectionIntroduction />
                    <SectionInstallation />
                    <SectionConfiguration />
                    <SectionExamples />
                </div>
            </main>
        </AppContext.Provider>
    );
};

export default App;
