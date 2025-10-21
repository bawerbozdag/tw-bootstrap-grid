import type { ISidebarTab } from "./_types";

export const DEFAULT_TAB_KEY = "tab-introduction";
export const DEFAULT_TAILWIND_VERSION = "v4";
export const LOCAL_STORAGE_KEY = "tailwind-version";

export const SIDEBAR_TABS: ISidebarTab[] = [
    {
        title: "Getting Started",
        items: [
            {
                id: "tab-introduction",
                label: "Introduction",
            },
            {
                id: "tab-installation",
                label: "Installation",
            },
            {
                id: "tab-configuration",
                label: "Configuration",
            },
        ],
    },
    {
        title: "Usage",
        items: [
            {
                id: "tab-examples",
                label: "Examples",
            },
            {
                id: "tab-playground",
                label: "Playground",
            },
        ],
    },
];
