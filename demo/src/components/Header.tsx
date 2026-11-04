import { LucideMoon, LucideSun } from "lucide-react";
import { GITHUB_URL, NPM_URL } from "@/_constants";
import useApp from "@/hooks/useApp";
import useI18n from "@/hooks/useI18n";
import { IconGithub, IconNpm } from "./BrandIcons";
import LanguageMenu from "./LanguageMenu";
import SectionNav from "./SectionNav";
import VersionSelect from "./VersionSelect";

const ICON_LINK =
    "inline-flex size-8 items-center justify-center rounded-lg border bg-surface text-muted transition hover:text-accent";

const Header = () => {
    const { theme, toggleTheme, page } = useApp();
    const { m, url } = useI18n();

    return (
        <header className="sticky top-0 z-30 border-b bg-canvas/85 backdrop-blur">
            {/* on small screens the section links wrap onto a second row, from lg up they sit between logo and controls */}
            <div className="container max-w-6xl flex flex-wrap items-center justify-between gap-x-3">
                <div className="flex h-14 items-center">
                    <a
                        href={page === "home" ? "#introduction" : url("/")}
                        aria-label={m.common.backToTop}
                        className="-m-1.5 flex shrink-0 items-center gap-2.5 whitespace-nowrap p-1.5 font-semibold tracking-tight"
                    >
                        <img src="/favicon-48x48.webp" width={26} height={26} alt="" className="rounded-md" />
                        <span className="hidden sm:inline lg:hidden">tw-bootstrap-grid</span>
                    </a>
                </div>

                <SectionNav />

                <div className="order-2 flex h-14 items-center gap-2 sm:gap-3 lg:order-none">
                    <LanguageMenu />
                    <VersionSelect />

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={theme === "dark" ? m.common.switchToLight : m.common.switchToDark}
                        title={theme === "dark" ? m.common.lightTheme : m.common.darkTheme}
                        className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border bg-surface text-muted transition hover:text-accent"
                    >
                        {theme === "dark" ? (
                            <LucideSun key="sun" size={16} className="icon-swap" />
                        ) : (
                            <LucideMoon key="moon" size={16} className="icon-swap" />
                        )}
                    </button>

                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${m.common.githubRepo} ${m.common.newTab}`}
                        title={m.common.github}
                        className={ICON_LINK}
                    >
                        <IconGithub />
                    </a>
                    <a
                        href={NPM_URL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${m.common.npmPackage} ${m.common.newTab}`}
                        title={m.common.npm}
                        // on the narrowest phones the controls would not fit, and the footer links to npm as well
                        className={`${ICON_LINK} max-[399px]:hidden`}
                    >
                        <IconNpm />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
