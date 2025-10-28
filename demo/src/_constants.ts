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
            // {
            //     id: "tab-playground",
            //     label: "Playground",
            // },
        ],
    },
];

export const TAB_KEYS = SIDEBAR_TABS.flatMap((tab) => tab.items).map((tab) => tab.id) as readonly string[];

export const EXAMPLES = {
    basic: `<div class="container">
    <div class="row">
        <div class="col-6">
            Card 1
        </div>
        <div class="col-6">
            Card 2
        </div>
    </div>
</div>`,
    responsive: `<div class="container">
    <div class="row">
        <div class="col-12 sm:col-6 md:col-4">
            Card 1
        </div>
        <div class="col-12 sm:col-6 md:col-8">
            Card 2
        </div>
    </div>
    <div class="row">
        <div class="col-6 md:col-3">
            Card 1
        </div>
        <div class="col-6 md:col-3">
            Card 2
        </div>
        <div class="col-6 md:col-3">
            Card 3
        </div>
        <div class="col-6 md:col-3">
            Card 4
        </div>
    </div>
</div>`,
    offset: `<div class="container">
    <div class="row">
        <div class="col-6 offset-3">
            Centered (col-6 offset-3)
        </div>
    </div>
    <div class="row">
        <div class="col-4">
            Column 1
        </div>
        <div class="col-4 offset-4">
            Column 2 (offset-4)
        </div>
    </div>
    <div class="row">
        <div class="sm:col-8 sm:offset-2 lg:col-6 lg:offset-3">
            Responsive Centered (sm:offset-2 lg:offset-3)
        </div>
    </div>
</div>`,
    order: `<div class="container">
    <div class="row">
        <div class="col-4">
            Card 1
        </div>
        <div class="col-4">
            Card 2
        </div>
        <div class="col-4">
            Card 3
        </div>
    </div>
    <div class="row">
        <div class="col-4 order-3">
            Card 1 (order-3)
        </div>
        <div class="col-4 order-1">
            Card 2 (order-1)
        </div>
        <div class="col-4 order-2">
            Card 3 (order-2)
        </div>
    </div>
    <div class="row">
        <div class="col-6 order-2 md:order-1">
            Left on desktop
        </div>
        <div class="col-6 order-1 md:order-2">
            Right on desktop
        </div>
    </div>
</div>`,
    rtl: `<div class="container" dir="rtl">
    <div class="row">
        <div class="col-4">
            Card 1
        </div>
        <div class="col-4">
            Card 2
        </div>
        <div class="col-4">
            Card 3
        </div>
    </div>
    <div class="row">
        <div class="col-4 order-2">
            Card 1
        </div>
        <div class="col-4 order-1">
            Card 2
        </div>
        <div class="col-4 order-3">
            Card 3
        </div>
    </div>
</div>`,
};
