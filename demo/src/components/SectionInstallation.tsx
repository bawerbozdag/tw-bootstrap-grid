import useApp from "@/hooks/useApp";
import CopyButton from "./CopyButton";
import { LucidePackage } from "lucide-react";

const SectionInstallation = () => {
    const { tailwindVersion } = useApp();

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
            className="container py-12 border-b border-slate-300"
            aria-labelledby="installation-title"
        >
            <h2
                id="installation-title"
                className="flex items-center gap-2 mb-6 text-2xl font-bold tracking-tight text-slate-700"
            >
                <LucidePackage className="mt-0.5" size={24} />
                Installation
            </h2>

            {/* Step 1 – Install */}
            <div className="mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow space-y-4">
                <h3 className="mb-3 text-lg font-semibold text-slate-700">1) Install the package</h3>
                {(Object.keys(INSTALL_CMD) as Array<keyof typeof INSTALL_CMD>).map((key) => {
                    const cmd = INSTALL_CMD[key];

                    return (
                        <div key={key}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    {key}
                                </span>
                                <CopyButton text={cmd} />
                            </div>
                            <pre className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 font-mono tracking-tight">
                                <code>{cmd}</code>
                            </pre>
                        </div>
                    );
                })}
            </div>

            {/* Step 2 – Wire up (v3 vs v4) */}
            <div className="mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow">
                <h3 className="text-lg font-semibold text-slate-700 mb-3 flex items-center justify-between gap-2">
                    2) Wire up the plugin
                    <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider mt-0.5">
                        {tailwindVersion === "v3" ? "Tailwind v3.4.x" : "Tailwind v4+"}
                    </span>
                </h3>

                {tailwindVersion === "v3" ? (
                    <div className="relative">
                        {/* Body */}
                        <ul className="mb-4 text-sm text-slate-600 space-y-1.5 list-decimal ps-4">
                            <li>
                                Import the plugin in{" "}
                                <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] text-slate-800">
                                    tailwind.config.ts
                                </code>{" "}
                                and register it under{" "}
                                <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] text-slate-800">
                                    plugins
                                </code>{" "}
                                array.
                            </li>
                            <li>
                                Ensure your{" "}
                                <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] text-slate-800">
                                    content
                                </code>{" "}
                                paths include all your source files.
                            </li>
                        </ul>

                        <div className="rounded-lg border border-slate-700/70 bg-slate-900">
                            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/70">
                                <span className="text-[11px] font-semibold tracking-wider text-slate-300">
                                    tailwind.config.ts
                                </span>
                                <CopyButton text={v3Config} className="text-slate-300 hover:text-slate-200" />
                            </div>
                            <pre className="overflow-x-auto p-4 text-sm text-slate-50">
                                <code>
                                    <span className="text-slate-300">// tailwind.config.ts</span>
                                    {"\n"}
                                    <span className="text-sky-400">import</span>{" "}
                                    <span className="text-amber-300">Grid</span>{" "}
                                    <span className="text-sky-400">from</span>{" "}
                                    <span className="text-emerald-400">"tw-bootstrap-grid"</span>;{"\n\n"}
                                    <span className="text-sky-400">export default</span> {"{"}
                                    {"\n"}
                                    &nbsp;&nbsp;<span className="text-amber-300">content</span>: [
                                    <span className="text-emerald-400">{`"./src/**/*.{html,js,ts,jsx,tsx}"`}</span>
                                    ],
                                    {"\n"}
                                    &nbsp;&nbsp;<span className="text-amber-300">theme</span>: {"{"}{" "}
                                    <span className="text-amber-300">extend</span>: {"{}"} {"},"}
                                    {"\n"}
                                    &nbsp;&nbsp;<span className="text-amber-300">plugins</span>: [
                                    <span className="text-amber-300">Grid</span>],
                                    {"\n"}
                                    {"};"}
                                </code>
                            </pre>
                        </div>
                    </div>
                ) : (
                    <div className="relative">
                        <ul className="mb-4 text-sm text-slate-600 space-y-1.5 list-decimal ps-4">
                            <li>
                                Add{" "}
                                <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] text-slate-800">
                                    @import "tailwindcss"
                                </code>{" "}
                                and{" "}
                                <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] text-slate-800">
                                    @plugin "tw-bootstrap-grid"
                                </code>{" "}
                                to your main CSS file.
                            </li>
                            <li>
                                Make sure your build tool (e.g.,{" "}
                                <span className="text-slate-900 font-semibold">Vite</span>,{" "}
                                <span className="text-slate-900 font-semibold">PostCSS</span>, etc.) processes this CSS
                                file.
                            </li>
                        </ul>

                        <div className="overflow-hidden rounded-lg border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 shadow-lg">
                            <div className="flex items-center justify-between border-b border-slate-700/70 bg-slate-900/80 px-3 py-2">
                                <span className="text-[11px] font-semibold tracking-wider text-slate-300">
                                    styles.css
                                </span>
                                <CopyButton text={v4Css} className="text-slate-300 hover:text-slate-200" />
                            </div>

                            <pre className="overflow-x-auto p-5 text-sm font-mono leading-relaxed tracking-tight text-slate-100">
                                <code>
                                    <span className="text-slate-300">/* src/styles.css */</span>
                                    {"\n"}
                                    <span className="text-sky-400">@import</span>{" "}
                                    <span className="text-emerald-400">"tailwindcss"</span>;{"\n"}
                                    <span className="text-sky-400">@plugin</span>{" "}
                                    <span className="text-emerald-400">"tw-bootstrap-grid"</span>;
                                </code>
                            </pre>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SectionInstallation;
