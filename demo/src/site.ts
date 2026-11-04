export const SITE_URL = "https://tw-bootstrap-grid.vercel.app";

export type PageId = "home" | "migration";

export interface IPage {
    id: PageId;
    // the URL path, with the trailing slash the static files are served under
    path: string;
    // where the prerender writes the page, inside dist
    file: string;
    title: string;
    description: string;
    // shorter texts for social cards
    shareTitle: string;
    shareDescription: string;
}

export const MIGRATION_PATH = "/migrate-from-bootstrap/";

export const PAGES: Record<PageId, IPage> = {
    home: {
        id: "home",
        path: "/",
        file: "index.html",
        title: "tw-bootstrap-grid | Bootstrap grid for Tailwind CSS",
        description:
            "A Tailwind CSS plugin that adds the Bootstrap 12-column grid: rows, columns, gutters, offsets, row-cols and RTL. Works with Tailwind v3.4 and v4.",
        shareTitle: "tw-bootstrap-grid | Bootstrap grid for Tailwind CSS",
        shareDescription:
            "The Bootstrap 12-column grid as a Tailwind CSS plugin: rows, columns, gutters, offsets, row-cols and RTL. Works with Tailwind v3.4 and v4.",
    },
    migration: {
        id: "migration",
        path: MIGRATION_PATH,
        file: "migrate-from-bootstrap/index.html",
        title: "Migrate a Bootstrap grid to Tailwind CSS | tw-bootstrap-grid",
        description:
            "Move a Bootstrap 5 grid to Tailwind CSS: class mapping tables, gutter size changes, Bootstrap's breakpoints and a Perl command that converts your markup.",
        shareTitle: "Migrate a Bootstrap grid to Tailwind CSS",
        shareDescription:
            "Class mapping tables, gutter size changes, Bootstrap's breakpoints and a Perl command that converts your markup.",
    },
};

// the page a URL belongs to, with or without a trailing slash
export const pageFromPath = (pathname: string): PageId =>
    pathname.replace(/\/+$/, "") === MIGRATION_PATH.replace(/\/+$/, "") ? "migration" : "home";
