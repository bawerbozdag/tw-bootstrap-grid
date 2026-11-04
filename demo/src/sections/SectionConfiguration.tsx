import Callout from "@/components/Callout";
import Section from "@/components/Section";
import VersionCode from "@/components/VersionCode";

const V3_SCREENS = `export default {
  theme: {
    screens: {
      sm: "40rem",  // 640px
      md: "48rem",  // 768px
      lg: "64rem",  // 1024px
      xl: "80rem",  // 1280px
      "2xl": "96rem", // 1536px
    },
  },
  plugins: [Grid],
};`;

const V4_SCREENS = `@import "tailwindcss";
@plugin "tw-bootstrap-grid";

@theme {
  --breakpoint-sm: 40rem;  /* 640px */
  --breakpoint-md: 48rem;  /* 768px */
  --breakpoint-lg: 64rem;  /* 1024px */
  --breakpoint-xl: 80rem;  /* 1280px */
  --breakpoint-2xl: 96rem; /* 1536px */
}`;

const V3_GUTTERS = `import Grid from "tw-bootstrap-grid";

export default {
  plugins: [
    Grid({
      // used by containers and rows
      gutters: { x: "1.5rem", y: "0" },

      // overrides for one of them only
      containerGutters: { x: "1rem" },
      rowGutters: { x: "2rem", y: "1rem" },
    }),
  ],
};`;

const V4_GUTTERS = `@import "tailwindcss";
@plugin "tw-bootstrap-grid";

:root {
  /* used by containers and rows */
  --bs-global-gutter-x: 1.5rem;
  --bs-global-gutter-y: 0;

  /* overrides for one of them only */
  --bs-container-gutter-x: 1rem;
  --bs-row-gutter-x: 2rem;
  --bs-row-gutter-y: 1rem;
}`;

const V3_CONTAINERS = `export default {
  plugins: [Grid({ generateContainers: false })],
};`;

const V4_CONTAINERS = `@import "tailwindcss";
@plugin "tw-bootstrap-grid" {
  generateContainers: false;
}`;

const ORDER = [
    [
        "1",
        "--bs-row-gutter-x / --bs-container-gutter-x",
        "rowGutters / containerGutters",
        "The most specific value wins.",
    ],
    ["2", "--bs-global-gutter-x", "gutters", "Shared fallback for both."],
    ["3", "1.5rem (x) and 0 (y)", "built-in default", "The same defaults Bootstrap uses."],
];

const SectionConfiguration = () => (
    <Section
        id="configuration"
        eyebrow="Getting started"
        title="Configuration"
        description="The defaults match Bootstrap, so you can skip this page. Come back when you want different breakpoints or gutter sizes."
    >
        <div className="space-y-5">
            <div className="panel space-y-4 p-4 sm:p-6">
                <h3 className="text-lg font-semibold">Breakpoints</h3>
                <p className="prose-sm-muted">
                    The plugin has no breakpoints of its own. Prefixes like <code>md:col-6</code> and the max-width of{" "}
                    <code>.container</code> both come from Tailwind, so changing your screens changes the grid with
                    them.
                </p>
                <VersionCode
                    v3={{ file: "tailwind.config.ts", code: V3_SCREENS }}
                    v4={{ file: "main.css", code: V4_SCREENS }}
                />
            </div>

            <div className="panel space-y-4 p-4 sm:p-6">
                <h3 className="text-lg font-semibold">Gutter sizes</h3>
                <p className="prose-sm-muted">
                    Gutters are the space between columns. By default it's <code>1.5rem</code> horizontally and{" "}
                    <code>0</code> vertically. Set it once for everything, or separately for containers and rows. In v3
                    you pass options to the plugin, in v4 you set CSS variables.
                </p>
                <VersionCode
                    v3={{ file: "tailwind.config.ts", code: V3_GUTTERS }}
                    v4={{ file: "main.css", code: V4_GUTTERS }}
                />

                <div className="overflow-x-auto rounded-xl border">
                    <table className="w-full min-w-[34rem] text-left text-sm">
                        <caption className="sr-only">Gutter resolution order</caption>
                        <thead className="bg-sunken text-xs uppercase tracking-wider text-muted">
                            <tr>
                                <th className="px-4 py-2.5 font-medium">Priority</th>
                                <th className="px-4 py-2.5 font-medium">CSS variable</th>
                                <th className="px-4 py-2.5 font-medium">Option</th>
                                <th className="px-4 py-2.5 font-medium">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {ORDER.map(([priority, variable, option, notes]) => (
                                <tr key={priority}>
                                    <td className="px-4 py-2.5 text-muted">{priority}</td>
                                    <td className="px-4 py-2.5">
                                        <code>{variable}</code>
                                    </td>
                                    <td className="px-4 py-2.5">
                                        <code>{option}</code>
                                    </td>
                                    <td className="px-4 py-2.5 text-muted">{notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="prose-sm-muted">
                    The CSS variables are read at runtime, so in either version you can also override them on any
                    element to change the gutters for just that section. For a single row, use <code>.g-*</code>,{" "}
                    <code>.gx-*</code> and <code>.gy-*</code>.
                </p>
            </div>

            <div className="panel space-y-4 p-4 sm:p-6">
                <h3 className="text-lg font-semibold">Turn off the containers</h3>
                <p className="prose-sm-muted">
                    Prefer Tailwind's own <code>container</code> alone? Set <code>generateContainers</code> to{" "}
                    <code>false</code> and the plugin stops generating <code>.container-fluid</code> and its
                    gutter-aware padding. Rows and columns are unaffected.
                </p>
                <VersionCode
                    v3={{ file: "tailwind.config.ts", code: V3_CONTAINERS }}
                    v4={{ file: "main.css", code: V4_CONTAINERS }}
                />
            </div>

            <Callout kind="note" title="Why variables in v4?">
                Tailwind v4 can pass simple values like <code>generateContainers: false;</code> to a plugin, but not
                nested objects such as <code>gutters</code>. CSS variables cover that case and have the bonus of being
                overridable per element.
            </Callout>
        </div>
    </Section>
);

export default SectionConfiguration;
