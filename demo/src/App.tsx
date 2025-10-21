import { useEffect, useState } from "react";
import { DEFAULT_TAB_KEY, DEFAULT_TAILWIND_VERSION, LOCAL_STORAGE_KEY, SIDEBAR_TABS } from "./_constants";
import AppContext, { type IAppContext } from "./contexts/AppContext";
import Sidebar from "./components/Sidebar";
import SectionIntroduction from "./components/SectionIntroduction";
// style
import "@/assets/css/main.css";
import SectionInstallation from "./components/SectionInstallation";

const App = () => {
    const [activeTabKey, setActiveTabKey] = useState<IAppContext["activeTabKey"]>(DEFAULT_TAB_KEY);

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

        const currentTab = SIDEBAR_TABS.flatMap((tab) => tab.items).find((item) => item.id === activeTabKey)?.label;

        document.title = `${currentTab ?? ""} / tw-bootstrap-grid`;

        //
    }, [activeTabKey]);

    return (
        <AppContext.Provider
            value={{
                activeTabKey,
                setActiveTabKey,
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
            }}
        >
            <main className="lg:grid lg:grid-cols-[288px_auto] lg:gap-12">
                <Sidebar />
                <div>
                    <SectionIntroduction />
                    <SectionInstallation />
                </div>
            </main>
        </AppContext.Provider>
    );
};

export default App;
