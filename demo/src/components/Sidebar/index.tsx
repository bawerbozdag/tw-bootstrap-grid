import { Fragment } from "react/jsx-runtime";
import { SIDEBAR_TABS } from "@/_constants";
import DropdownTailwindVersion from "./components/DropdownTailwindVersion";
import useApp from "@/hooks/useApp";
import clsx from "clsx";
import srcLogo from "@/assets/images/logo.png";

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

            {/* Footer actions */}
            {/* <div className="mt-auto border-t px-5 py-3">
                <div className="row items-center">
                    <div className="col-6">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-slate-100"
                            aria-label="Toggle theme"
                        >
                            <span className="i">🌓</span>
                            <span>Theme</span>
                        </button>
                    </div>
                    <div className="col-6">
                        <a
                            href="https://github.com/your/repo" // repo linkini ekle
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-end gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:text-slate-900"
                            aria-label="GitHub repository"
                        >
                            <span>GitHub</span>
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                aria-hidden="true"
                                className="fill-slate-700 group-hover:fill-slate-900"
                            >
                                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.9 0-1.31.47-2.39 1.25-3.23-.13-.3-.54-1.52.12-3.17 0 0 1.02-.33 3.34 1.23.97-.27 2.01-.4 3.04-.4s2.07.13 3.04.4C18.3 6.1 19.32 6.43 19.32 6.43c.66 1.65.25 2.87.12 3.17.78.84 1.25 1.92 1.25 3.23 0 4.58-2.81 5.6-5.49 5.9.43.37.81 1.1.81 2.23v3.3c0 .32.21.69.83.57A12 12 0 0 0 12 .5Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div> */}
        </aside>
    );
};

export default Sidebar;
