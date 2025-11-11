import { LucideSettings, LucideLightbulb } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { vscodeLight, vscodeDark } from "@uiw/codemirror-theme-vscode";
import CopyButton from "@/components/CopyButton";
import useApp from "@/hooks/useApp";

const SectionConfiguration = () => {
    const { tailwindVersion, theme } = useApp();

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

    const v4Theme = `@import "tailwindcss";
@plugin "tw-bootstrap-grid";

@theme {
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
      /* Global gutter options */
      gutters: { x: "1.5rem", y: "0" },
      /* Container-specific */
      containerGutters: {x: "1.5rem", y: "0" },
      /* Row-specific */
      rowGutters: { x: "1.5rem", y: "0" },
    }),
  ],
};`;

    const v4ThemeGutters = `@import "tailwindcss";
@plugin "tw-bootstrap-grid";

@theme {
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
            className="container py-16 px-4 border-b"
            aria-labelledby="configuration-title"
            aria-describedby="configuration-description"
        >
            <h2 id="configuration-title" className="mb-3">
                <LucideSettings className="text-indigo-600 dark:text-indigo-400" size={24} />
                Configuration
            </h2>
            <p id="configuration-description" className="mb-6">
                The <span className="font-semibold">tw-bootstrap-grid</span> plugin provides several configuration
                options that let you tailor its behavior to your project's layout system. You can adjust container
                breakpoints, gutter spacing, and layout behavior for both Tailwind v3 and v4.
            </p>

            <div className="card mb-10">
                <div className="flex items-start justify-between mb-3">
                    <h3>1) Define custom breakpoints</h3>
                    <span className="badge-version">
                        {tailwindVersion === "v3" ? "Tailwind v3.4.x" : "Tailwind v4+"}
                    </span>
                </div>
                <p className="mb-6">
                    You can override the default<code className="badge">.container</code>breakpoints to match your
                    project's responsive design system. The plugin automatically uses these values to generate
                    responsive container max-widths.
                </p>
                <div className="mb-6">
                    {tailwindVersion === "v3" ? (
                        <div className="rounded-lg border overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2 border-b bg-slate-50 dark:bg-slate-800">
                                <span className="text-[11px] font-semibold tracking-wider text-slate-600 dark:text-slate-200">
                                    tailwind.config.ts
                                </span>
                                <CopyButton text={v3Config} />
                            </div>
                            <CodeMirror
                                aria-label="Read-only Tailwind v3 config example defining custom breakpoints"
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
                    ) : (
                        <div className="rounded-lg border overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2 border-b bg-slate-50 dark:bg-slate-800">
                                <span className="text-[11px] font-semibold tracking-wider text-slate-600 dark:text-slate-200">
                                    main.css
                                </span>
                                <CopyButton text={v4Theme} />
                            </div>
                            <CodeMirror
                                aria-label="Read-only Tailwind v4 config example defining custom breakpoints "
                                className="text-sm"
                                extensions={[css()]}
                                theme={theme == "light" ? vscodeLight : vscodeDark}
                                editable={false}
                                basicSetup={{
                                    highlightActiveLine: false,
                                    highlightActiveLineGutter: false,
                                    foldGutter: false,
                                }}
                                value={v4Theme}
                            />
                        </div>
                    )}
                </div>
                <p className="tip-info">
                    <LucideLightbulb size={16} />
                    Tip: Breakpoints defined here automatically affect<code className="badge">.container</code>widths
                    and responsive column utilities (<code className="badge">md:col-*</code>,
                    <code className="badge">lg:col-*</code>, etc.).
                </p>
            </div>

            <div className="card">
                <div className="flex items-start justify-between">
                    <h3 className="mb-3">2) Configure gutter spacing</h3>
                    <span className="badge-version">
                        {tailwindVersion === "v3" ? "Tailwind v3.4.x" : "Tailwind v4+"}
                    </span>
                </div>
                <p className="mb-6">
                    Gutters control the horizontal (<code className="badge">gx-*</code>) and vertical (
                    <code className="badge">gy-*</code>) spacing between columns and rows. You can customize their
                    default values globally or per-container/row level.
                </p>
                <div className="mb-6">
                    {tailwindVersion === "v3" ? (
                        <div className="rounded-lg border overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2 border-b bg-slate-50 dark:bg-slate-800">
                                <span className="text-[11px] font-semibold tracking-wider text-slate-600 dark:text-slate-200">
                                    tailwind.config.ts
                                </span>
                                <CopyButton text={v3Gutters} />
                            </div>
                            <CodeMirror
                                aria-label="Tailwind v3 config example for gutter spacing"
                                className="text-sm"
                                extensions={[javascript()]}
                                theme={theme == "light" ? vscodeLight : vscodeDark}
                                editable={false}
                                basicSetup={{
                                    highlightActiveLine: false,
                                    highlightActiveLineGutter: false,
                                    foldGutter: false,
                                }}
                                value={v3Gutters}
                            />
                        </div>
                    ) : (
                        <div className="rounded-lg border overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2 border-b bg-slate-50 dark:bg-slate-800">
                                <span className="text-[11px] font-semibold tracking-wider text-slate-600 dark:text-slate-200">
                                    main.css
                                </span>
                                <CopyButton text={v4ThemeGutters} />
                            </div>
                            <CodeMirror
                                aria-label="Tailwind v4 config example for gutter spacing"
                                className="text-sm"
                                extensions={[css()]}
                                theme={theme == "light" ? vscodeLight : vscodeDark}
                                editable={false}
                                basicSetup={{
                                    highlightActiveLine: false,
                                    highlightActiveLineGutter: false,
                                    foldGutter: false,
                                }}
                                value={v4ThemeGutters}
                            />
                        </div>
                    )}
                </div>
                <p className="tip-info">
                    <LucideLightbulb size={16} />
                    Tip: <code className="badge">g-*</code>, <code className="badge">gx-*</code>, and
                    <code className="badge">gy-*</code> classes use Tailwind's{" "}
                    <code className="badge">theme.spacing</code> scale. Updating your spacing scale automatically
                    updates all gutter utilities.
                </p>
            </div>
        </section>
    );
};

export default SectionConfiguration;
