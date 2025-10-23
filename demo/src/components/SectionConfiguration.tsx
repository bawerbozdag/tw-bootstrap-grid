import { LucideSettings, LucideRuler, LucideLightbulb, LucidePanelsTopLeft } from "lucide-react";
import useApp from "@/hooks/useApp";
import CopyButton from "./CopyButton";

const SectionConfiguration = () => {
    const { tailwindVersion } = useApp();

    const v3Config = `import Grid from "tw-bootstrap-grid";

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "40rem", // 640px
      md: "48rem", // 768px
      lg: "64rem", // 1024px
      xl: "80rem", // 1280px
      2xl: "96rem", // 1536px
    },
    extend: {},
  },
  plugins: [Grid],
};`;

    const v4Theme = `@theme {
  --breakpoint-sm: 40rem; /* 640px */
  --breakpoint-md: 48rem; /* 768px */
  --breakpoint-lg: 64rem; /* 1024px */
  --breakpoint-xl: 80rem; /* 1280px */
  --breakpoint-2xl: 96rem; /* 1536px */
}`;

    const v3Gutters = `import Grid from "tw-bootstrap-grid";

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [
    Grid({
      gutters: { x: "1.5rem", y: "0" },
      containerGutters: { x: "1.5rem" },
      rowGutters: { y: "0" },
    }),
  ],
};`;

    const v4ThemeGutters = `@theme {
  /* Global gutter variables */
  --bs-global-gutter-x: 1.5rem;
  --bs-global-gutter-y: 0;

  /* Container-specific */
  --bs-container-gutter-x: var(--bs-global-gutter-x);
  --bs-container-gutter-y: var(--bs-global-gutter-y);

  /* Row-specific */
  --bs-row-gutter-x: var(--bs-global-gutter-x);
  --bs-row-gutter-y: var(--bs-global-gutter-y);
}`;

    return (
        <section
            id="configuration"
            className="container py-16 px-4 border-b border-slate-300"
            aria-labelledby="section-configuration-title"
        >
            <h2
                id="section-configuration-title"
                className="flex items-center gap-2 mb-3 text-2xl font-bold tracking-tight text-slate-700"
            >
                <LucideSettings className="text-indigo-600 mt-0.5" size={24} />
                Configuration
            </h2>
            <p className="mb-6 text-slate-600">
                The <span className="font-semibold">tw-bootstrap-grid</span> plugin provides several configuration
                options that let you tailor its behavior to your project’s layout system. You can adjust container
                breakpoints, gutter spacing, and layout behavior for both Tailwind v3 and v4.
            </p>

            {/* h3 Breakpoints */}
            <div className="mb-10">
                <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-slate-700">
                    <LucideRuler className="text-sky-600" size={20} />
                    Breakpoints
                </h3>

                <p className="mb-6 text-slate-600">
                    You can override the default <code className="font-mono text-[13px]">.container</code> breakpoints
                    to match your project’s responsive design system. The plugin automatically uses these values to
                    generate responsive container max-widths.
                </p>

                <div className="max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow">
                    <h4 className="text-lg font-semibold text-slate-700 mb-3 flex items-center justify-between">
                        1) Define custom breakpoints
                        <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider">
                            {tailwindVersion === "v3" ? "Tailwind v3.4.x" : "Tailwind v4+"}
                        </span>
                    </h4>

                    {tailwindVersion === "v3" ? (
                        <div className="relative">
                            <div className="rounded-lg border border-slate-700/70 bg-slate-900 overflow-hidden">
                                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/70 bg-slate-900/80">
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-300">
                                        tailwind.config.ts
                                    </span>
                                    <CopyButton text={v3Config} className="text-slate-300 hover:text-slate-200" />
                                </div>
                                <pre className="overflow-x-auto p-5 text-sm font-mono leading-relaxed tracking-tight text-slate-100">
                                    <code>{v3Config}</code>
                                </pre>
                            </div>
                        </div>
                    ) : (
                        <div className="relative">
                            <div className="rounded-lg border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 shadow-lg overflow-hidden">
                                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/70 bg-slate-900/80">
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-300">
                                        @theme
                                    </span>
                                    <CopyButton text={v4Theme} className="text-slate-300 hover:text-slate-200" />
                                </div>
                                <pre className="overflow-x-auto p-5 text-sm font-mono leading-relaxed tracking-tight text-slate-100">
                                    <code>{v4Theme}</code>
                                </pre>
                            </div>
                        </div>
                    )}
                </div>

                <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
                    <LucideLightbulb className="text-amber-500" size={18} />
                    Tip: Breakpoints defined here automatically affect <code>.container</code> widths and responsive
                    column utilities (<code>md:col-*</code>, <code>lg:col-*</code>, etc.).
                </p>
            </div>

            <div className="mt-14 mb-10">
                <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-slate-700">
                    <LucidePanelsTopLeft className="text-violet-600" size={20} />
                    Gutters
                </h3>

                <p className="mb-6 text-slate-600">
                    Gutters control the horizontal (<code className="font-mono text-[13px]">gx-*</code>) and vertical (
                    <code className="font-mono text-[13px]">gy-*</code>) spacing between columns and rows. You can
                    customize their default values globally or per-container/row level.
                </p>

                <div className="max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow">
                    <h4 className="text-lg font-semibold text-slate-700 mb-3 flex items-center justify-between">
                        2) Configure gutter spacing
                        <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider">
                            {tailwindVersion === "v3" ? "Tailwind v3.4.x" : "Tailwind v4+"}
                        </span>
                    </h4>

                    {tailwindVersion === "v3" ? (
                        <div className="relative">
                            <div className="rounded-lg border border-slate-700/70 bg-slate-900 overflow-hidden">
                                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/70 bg-slate-900/80">
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-300">
                                        tailwind.config.ts
                                    </span>
                                    <CopyButton text={v3Gutters} className="text-slate-300 hover:text-slate-200" />
                                </div>
                                <pre className="overflow-x-auto p-5 text-sm font-mono leading-relaxed tracking-tight text-slate-100">
                                    <code>{v3Gutters}</code>
                                </pre>
                            </div>
                        </div>
                    ) : (
                        <div className="relative">
                            <div className="rounded-lg border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 shadow-lg overflow-hidden">
                                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/70 bg-slate-900/80">
                                    <span className="text-[11px] font-semibold tracking-wider text-slate-300">
                                        @theme
                                    </span>
                                    <CopyButton text={v4ThemeGutters} className="text-slate-300 hover:text-slate-200" />
                                </div>
                                <pre className="overflow-x-auto p-5 text-sm font-mono leading-relaxed tracking-tight text-slate-100">
                                    <code>{v4ThemeGutters}</code>
                                </pre>
                            </div>
                        </div>
                    )}
                </div>

                <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
                    <LucideLightbulb className="text-amber-500" size={18} />
                    Tip: <code>g-*</code>, <code>gx-*</code>, and <code>gy-*</code> classes use Tailwind’s{" "}
                    <code>theme.spacing</code> scale. Updating your spacing scale automatically updates all gutter
                    utilities.
                </p>
            </div>
        </section>
    );
};

export default SectionConfiguration;
