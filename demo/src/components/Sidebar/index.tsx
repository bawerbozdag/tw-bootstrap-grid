import { Fragment } from "react/jsx-runtime";
import { SIDEBAR_TABS } from "@/_constants";
import DropdownTailwindVersion from "./components/DropdownTailwindVersion";
import useApp from "@/hooks/useApp";
import clsx from "clsx";
import srcLogo from "@/assets/images/logo.webp";

const Sidebar = () => {
    const { activeTab, setActiveTab } = useApp();

    return (
        <aside aria-label="Sidebar" id="sidebar">
            <header>
                <div className="select-none flex items-center justify-center gap-2 mb-6">
                    <img src={srcLogo} width={30} height={30} alt="Logo" className="rounded" />
                    <span className="bg-gradient-to-r from-sky-600/90 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
                        tw-bootstrap-grid
                    </span>
                </div>
                <DropdownTailwindVersion />
            </header>

            <nav role="navigation" aria-label="Sidebar">
                <ul>
                    {SIDEBAR_TABS.map((tab, index) => (
                        <Fragment key={index}>
                            <li>
                                <span>{tab.title}</span>
                            </li>
                            {tab.items.map((item) => {
                                const isActiveTab = activeTab == item.id;

                                return (
                                    <li key={item.id}>
                                        <a
                                            aria-current={isActiveTab ? "page" : undefined}
                                            href={`#${item.id.replace("tab-", "")}`}
                                            className={clsx(
                                                isActiveTab && "active",
                                                item.id == "tab-configuration" ? "mb-4" : "mb-1",
                                            )}
                                            onClick={(e) => {
                                                e.preventDefault();

                                                setActiveTab(item.id);

                                                return document
                                                    .getElementById(item.id.replace("tab-", ""))!
                                                    .scrollIntoView({ behavior: "smooth" });
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </Fragment>
                    ))}
                </ul>
            </nav>

            <footer className="p-6 text-sm text-center">
                <a
                    href="https://github.com/bawerbozdag/tw-bootstrap-grid"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition mb-3"
                    aria-label="GitHub repository"
                >
                    <IconGithub />
                    <span>View on GitHub</span>
                </a>

                <p className="text-xs text-slate-500">© {new Date().getFullYear()} tw-bootstrap-grid</p>
            </footer>
        </aside>
    );
};

const IconGithub = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
        <path
            fill="#62748e"
            d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
    </svg>
);

export default Sidebar;
