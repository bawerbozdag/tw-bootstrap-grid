export const GITHUB_URL = "https://github.com/bawerbozdag/tw-bootstrap-grid";
export const NPM_URL = "https://www.npmjs.com/package/tw-bootstrap-grid";
export const ISSUES_URL = `${GITHUB_URL}/issues`;
export const PULLS_URL = `${GITHUB_URL}/pulls`;
export const CHANGELOG_URL = `${GITHUB_URL}/blob/master/CHANGELOG.md`;

export const VERSION_STORAGE_KEY = "tailwind-version";
export const THEME_STORAGE_KEY = "theme";

export const DEFAULT_TAILWIND_VERSION = "v4";

export const SECTIONS = [
    { id: "introduction", label: "Introduction" },
    { id: "installation", label: "Installation" },
    { id: "configuration", label: "Configuration" },
    { id: "classes", label: "Classes" },
    { id: "migration", label: "Migration" },
    { id: "examples", label: "Examples" },
    { id: "rtl", label: "RTL" },
    { id: "faq", label: "FAQ" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const SECTION_IDS = SECTIONS.map((section) => section.id);

export const PACKAGE_MANAGERS = {
    npm: "npm install tw-bootstrap-grid",
    yarn: "yarn add tw-bootstrap-grid",
    pnpm: "pnpm add tw-bootstrap-grid",
    bun: "bun add tw-bootstrap-grid",
} as const;

export type PackageManager = keyof typeof PACKAGE_MANAGERS;
