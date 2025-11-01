import { Fragment } from "react/jsx-runtime";
import { LucideGithub } from "lucide-react";
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
                    className="inline-flex items-center gap-2 font-medium text-slate-700 hover:text-indigo-600 transition mb-3"
                    aria-label="GitHub repository"
                >
                    <LucideGithub size={18} />
                    <span>View on GitHub</span>
                </a>

                <p className="text-xs text-slate-500">© {new Date().getFullYear()} tw-bootstrap-grid</p>
            </footer>
        </aside>
    );
};

export default Sidebar;
