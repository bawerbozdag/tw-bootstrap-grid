import Callout from "@/components/Callout";
import Rich from "@/components/Rich";
import Section from "@/components/Section";
import VersionCode from "@/components/VersionCode";
import useI18n from "@/hooks/useI18n";
import { fmt } from "@/i18n/format";

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

const SectionConfiguration = () => {
    const { m } = useI18n();
    const t = m.configuration;
    const g = t.gutters;

    // the first two rows are names from the plugin, the last one is a description of the built-in default
    const order = [
        ["1", "--bs-row-gutter-x / --bs-container-gutter-x", "rowGutters / containerGutters"],
        ["2", "--bs-global-gutter-x", "gutters"],
        ["3", g.defaultVariable, g.defaultOption],
    ];

    return (
        <Section id="configuration" eyebrow={t.eyebrow} title={t.title} description={t.description}>
            <div className="space-y-5">
                <div className="panel space-y-4 p-4 sm:p-6">
                    <h3 className="text-lg font-semibold">{t.breakpoints.title}</h3>
                    <p className="prose-sm-muted">
                        <Rich text={t.breakpoints.body} />
                    </p>
                    <VersionCode
                        v3={{ file: "tailwind.config.ts", code: V3_SCREENS }}
                        v4={{ file: "main.css", code: V4_SCREENS }}
                    />
                </div>

                <div className="panel space-y-4 p-4 sm:p-6">
                    <h3 className="text-lg font-semibold">{g.title}</h3>
                    <p className="prose-sm-muted">
                        <Rich text={g.body} />
                    </p>
                    <VersionCode
                        v3={{ file: "tailwind.config.ts", code: V3_GUTTERS }}
                        v4={{ file: "main.css", code: V4_GUTTERS }}
                    />

                    <div
                        role="group"
                        tabIndex={0}
                        aria-label={fmt(m.classes.scrollableTable, { title: g.tableCaption })}
                        className="overflow-x-auto rounded-xl border"
                    >
                        <table className="w-full min-w-[34rem] text-start text-sm">
                            <caption className="sr-only">{g.tableCaption}</caption>
                            <thead className="bg-sunken text-xs uppercase tracking-wider text-muted">
                                <tr>
                                    {[g.priority, g.cssVariable, g.option, g.notes].map((head) => (
                                        <th key={head} scope="col" className="px-4 py-2.5 text-start font-medium">
                                            {head}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {order.map(([priority, variable, option], index) => (
                                    <tr key={priority}>
                                        <th scope="row" className="px-4 py-2.5 text-start font-normal text-muted">
                                            {priority}
                                        </th>
                                        <td className="px-4 py-2.5">
                                            <code>{variable}</code>
                                        </td>
                                        <td className="px-4 py-2.5">{index === 2 ? option : <code>{option}</code>}</td>
                                        <td className="px-4 py-2.5 text-muted">{g.orderNotes[index]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="prose-sm-muted">
                        <Rich text={g.after} />
                    </p>
                </div>

                <div className="panel space-y-4 p-4 sm:p-6">
                    <h3 className="text-lg font-semibold">{t.containers.title}</h3>
                    <p className="prose-sm-muted">
                        <Rich text={t.containers.body} />
                    </p>
                    <VersionCode
                        v3={{ file: "tailwind.config.ts", code: V3_CONTAINERS }}
                        v4={{ file: "main.css", code: V4_CONTAINERS }}
                    />
                </div>

                <Callout kind="note" title={t.variablesNote.title}>
                    <Rich text={t.variablesNote.body} />
                </Callout>
            </div>
        </Section>
    );
};

export default SectionConfiguration;
