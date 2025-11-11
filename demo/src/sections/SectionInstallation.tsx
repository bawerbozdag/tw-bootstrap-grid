import { LucidePackage } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { vscodeLight, vscodeDark } from "@uiw/codemirror-theme-vscode";
import CopyButton from "@/components/CopyButton";
import useApp from "@/hooks/useApp";

const SectionInstallation = () => {
    const { tailwindVersion, theme } = useApp();

    const INSTALL_CMD = {
        npm: `npm install tw-bootstrap-grid`,
        yarn: `yarn add tw-bootstrap-grid`,
        pnpm: `pnpm add tw-bootstrap-grid`,
    };

    const v3Config = `import Grid from "tw-bootstrap-grid";

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [Grid],
};`;

    const v4Css = `@import "tailwindcss";
@plugin "tw-bootstrap-grid";`;

    return (
        <section
            id="installation"
            className="container py-16 px-4 border-b"
            aria-labelledby="installation-title"
            aria-describedby="installation-description"
        >
            <h2 id="installation-title" className="mb-3">
                <LucidePackage className="text-violet-500" size={24} />
                Installation
            </h2>
            <p id="installation-description" className="mb-6">
                Follow the steps below to install and configure{" "}
                <span className="font-semibold">tw-bootstrap-grid </span>
                in your Tailwind CSS project.
            </p>

            <div className="card mb-8 space-y-4">
                <h3 className="mb-3">1) Install the package</h3>
                <p className="mb-4">
                    Choose your preferred package manager and run one of the commands below to install
                    <span className="font-semibold"> tw-bootstrap-grid </span>.
                </p>
                {(Object.keys(INSTALL_CMD) as Array<keyof typeof INSTALL_CMD>).map((key) => {
                    const cmd = INSTALL_CMD[key];

                    return (
                        <Fragment key={key}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    {key}
                                </span>
                                <CopyButton text={cmd} />
                            </div>
                            <pre className="rounded-lg border bg-slate-50 dark:bg-slate-800 px-4 py-3 text-sm font-mono tracking-tight">
                                <code>{cmd}</code>
                            </pre>
                        </Fragment>
                    );
                })}
            </div>
            <div className="card">
                <h3 className="text-lg font-semibold mb-3 flex items-center justify-between gap-2">
                    2) Wire up the plugin
                    <span className="badge-version">
                        {tailwindVersion === "v3" ? "Tailwind v3.4.x" : "Tailwind v4+"}
                    </span>
                </h3>

                {tailwindVersion === "v3" ? (
                    <>
                        {/* Body */}
                        <ul className="mb-4 text-sm text-slate-600 space-y-1.5 list-decimal ps-4">
                            <li>
                                Import the plugin in<code className="badge">tailwind.config.ts</code>and register it
                                under<code className="badge">plugins</code>array.
                            </li>
                            <li>
                                Ensure your<code className="badge">content</code>paths include all your source files.
                            </li>
                        </ul>
                        <div className="rounded-lg border overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2 border-b bg-slate-50 dark:bg-slate-800">
                                <span className="text-[11px] font-semibold tracking-wider text-slate-600 dark:text-slate-200">
                                    tailwind.config.ts
                                </span>
                                <CopyButton text={v3Config} />
                            </div>
                            <CodeMirror
                                aria-label="Read-only code example for Tailwind v3 plugin setup"
                                className="text-sm"
                                extensions={[javascript()]}
                                theme={theme == "light" ? vscodeLight : vscodeDark}
                                editable={false}
                                basicSetup={{
                                    highlightActiveLine: false,
                                    highlightActiveLineGutter: false,
                                    foldGutter: false,
                                }}
                                value={v3Config}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <ul className="mb-4 text-sm text-slate-600 space-y-1.5 list-decimal ps-4">
                            <li>
                                Add<code className="badge">@import "tailwindcss"</code>and
                                <code className="badge">@plugin "tw-bootstrap-grid"</code>to your main CSS file.
                            </li>
                            <li>
                                Make sure your build tool (e.g.,{" "}
                                <span className="text-slate-900 font-semibold">Vite</span>,{" "}
                                <span className="text-slate-900 font-semibold">PostCSS</span>, etc.) processes this CSS
                                file.
                            </li>
                        </ul>
                        <div className="rounded-md border-l-4 border-amber-400 bg-amber-50 px-4 py-3 mb-3 text-sm text-amber-800">
                            <strong className="font-semibold">Important:</strong> In Tailwind v4, all plugin references
                            must be declared inside your CSS file. Make sure to include
                            <code className="badge !bg-amber-200/70 !text-amber-800">@plugin "tw-bootstrap-grid"</code>
                            after<code className="badge !bg-amber-200/70 !text-amber-800">@import "tailwindcss"</code>.
                            Otherwise, the grid system won’t be generated because Tailwind’s v4 compiler ignores
                            unreferenced plugins.
                        </div>
                        <div className="rounded-lg border overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2 border-b bg-slate-50 dark:bg-slate-800">
                                <span className="text-[11px] font-semibold tracking-wider text-slate-600 dark:text-slate-200">
                                    main.css
                                </span>
                                <CopyButton text={v4Css} />
                            </div>
                            <CodeMirror
                                aria-label="Read-only code example for Tailwind v4 plugin setup"
                                className="text-sm"
                                extensions={[css()]}
                                theme={theme == "light" ? vscodeLight : vscodeDark}
                                editable={false}
                                basicSetup={{
                                    highlightActiveLine: false,
                                    highlightActiveLineGutter: false,
                                    foldGutter: false,
                                }}
                                value={v4Css}
                            />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default SectionInstallation;
