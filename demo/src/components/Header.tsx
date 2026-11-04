import { LucideMoon, LucideSun } from "lucide-react";
import { GITHUB_URL, NPM_URL } from "@/_constants";
import useApp from "@/hooks/useApp";
import { IconGithub, IconNpm } from "./BrandIcons";
import SectionNav from "./SectionNav";
import VersionSelect from "./VersionSelect";

const ICON_LINK =
    "inline-flex size-8 items-center justify-center rounded-lg border bg-surface text-muted transition hover:text-accent";

const Header = () => {
    const { theme, toggleTheme, page } = useApp();

    return (
        <header className="sticky top-0 z-30 border-b bg-canvas/85 backdrop-blur">
            {/* on small screens the section links wrap onto a second row, from lg up they sit between logo and controls */}
            <div className="container max-w-6xl flex flex-wrap items-center justify-between gap-x-3">
                <div className="flex h-14 items-center">
                    <a
                        href={page === "home" ? "#introduction" : "/"}
                        aria-label="tw-bootstrap-grid, back to the top"
                        className="-m-1.5 flex shrink-0 items-center gap-2.5 whitespace-nowrap p-1.5 font-semibold tracking-tight"
                    >
                        <img src="/favicon-48x48.webp" width={26} height={26} alt="" className="rounded-md" />
                        <span className="hidden sm:inline lg:hidden">tw-bootstrap-grid</span>
                    </a>
                </div>

                <SectionNav />

                <div className="order-2 flex h-14 items-center gap-2 sm:gap-3 lg:order-none">
                    <VersionSelect />

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                        title={theme === "dark" ? "Light theme" : "Dark theme"}
                        className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border bg-surface text-muted transition hover:text-accent"
                    >
                        {theme === "dark" ? <LucideSun size={16} /> : <LucideMoon size={16} />}
                    </button>

                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository (opens in a new tab)"
                        title="GitHub"
                        className={ICON_LINK}
                    >
                        <IconGithub />
                    </a>
                    <a
                        href={NPM_URL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="npm package (opens in a new tab)"
                        title="npm"
                        className={ICON_LINK}
                    >
                        <IconNpm />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
