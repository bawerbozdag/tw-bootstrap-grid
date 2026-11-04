import type { ReactNode } from "react";
import { LucideArrowRight } from "lucide-react";
import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import { MIGRATION_CARD_ICONS } from "@/components/MigrationCards";
import Rich from "@/components/Rich";
import VersionCode from "@/components/VersionCode";
import useI18n from "@/hooks/useI18n";
import { fmt } from "@/i18n/format";

const BEFORE = `<div class="container">
  <div class="row g-3">
    <div class="col-12 col-md-6 col-lg-4">A</div>
    <div class="col-12 col-md-6 col-lg-4">B</div>
    <div class="col-12 col-md-12 col-lg-4">C</div>
  </div>
</div>`;

const AFTER = `<div class="container">
  <div class="row g-4">
    <div class="col-12 md:col-6 lg:col-4">A</div>
    <div class="col-12 md:col-6 lg:col-4">B</div>
    <div class="col-12 md:col-12 lg:col-4">C</div>
  </div>
</div>`;

const V3_SCREENS = `export default {
  theme: {
    screens: {
      sm: "36rem",    // 576px
      md: "48rem",    // 768px
      lg: "62rem",    // 992px
      xl: "75rem",    // 1200px
      "2xl": "87.5rem", // 1400px
    },
  },
  plugins: [Grid],
};`;

const V4_SCREENS = `@import "tailwindcss";
@plugin "tw-bootstrap-grid";

@theme {
  --breakpoint-sm: 36rem;    /* 576px */
  --breakpoint-md: 48rem;    /* 768px */
  --breakpoint-lg: 62rem;    /* 992px */
  --breakpoint-xl: 75rem;    /* 1200px */
  --breakpoint-2xl: 87.5rem; /* 1400px */
}`;

// gutter sizes are renumbered first, then the responsive infix becomes a prefix
const CODEMOD = `perl -pi -e '
  s/\\b(g|gx|gy)-((?:sm|md|lg|xl|xxl)-)?([345])\\b/"$1-".($2\\/\\/"").{3=>4,4=>6,5=>12}->{$3}/ge;
  s/\\bno-gutters\\b/g-0/g;
  s/\\b(col|offset|order|row-cols|g|gx|gy)-(sm|md|lg|xl|xxl)(-([0-9]+|auto|first|last))?\\b/$2:$1$3/g;
  s/\\bxxl:/2xl:/g;
' $(git ls-files '*.html' '*.jsx' '*.tsx' '*.vue' '*.svelte')`;

// the class names in the tables are code, only the notes next to them are translated
const RESPONSIVE: [bootstrap: string, here: string][] = [
    ["col-md-6", "md:col-6"],
    ["col-lg", "lg:col"],
    ["col-xl-auto", "xl:col-auto"],
    ["offset-md-3", "md:offset-3"],
    ["row-cols-md-3", "md:row-cols-3"],
    ["g-md-4", "md:g-6"],
    ["col-xxl-4", "2xl:col-4"],
    ["order-md-2", "md:order-2"],
];

const GUTTERS: [bootstrap: string, here: string, size: string][] = [
    ["g-0", "g-0", "0"],
    ["g-1", "g-1", "0.25rem"],
    ["g-2", "g-2", "0.5rem"],
    ["g-3", "g-4", "1rem"],
    ["g-4", "g-6", "1.5rem"],
    ["g-5", "g-12", "3rem"],
];

const UTILITIES: [bootstrap: string, here: string][] = [
    ["d-flex", "flex"],
    ["d-none d-md-block", "hidden md:block"],
    ["justify-content-between", "justify-between"],
    ["align-items-center", "items-center"],
    ["align-self-end", "self-end"],
    ["mb-3, p-3", "mb-4, p-4"],
];

interface IMappingTableProps {
    caption: string;
    heads: [string, string, string];
    rows: [string, string, string][];
}

const MappingTable = ({ caption, heads, rows }: IMappingTableProps) => {
    const { m } = useI18n();

    return (
        <div className="panel overflow-hidden">
            <h3 className="border-b bg-sunken px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-muted">
                {caption}
            </h3>
            <div
                role="group"
                tabIndex={0}
                aria-label={fmt(m.classes.scrollableTable, { title: caption })}
                className="overflow-x-auto"
            >
                <table className="w-full min-w-[34rem] table-fixed text-start text-sm">
                    <caption className="sr-only">{caption}</caption>
                    <colgroup>
                        <col className="w-[30%]" />
                        <col className="w-[30%]" />
                        <col className="w-[40%]" />
                    </colgroup>
                    <thead className="border-b text-xs text-muted">
                        <tr>
                            {heads.map((head) => (
                                <th key={head} scope="col" className="px-5 py-2 text-start font-medium">
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {rows.map(([bootstrap, here, last]) => (
                            <tr key={bootstrap}>
                                <th scope="row" className="px-5 py-3 text-start align-top font-normal">
                                    <code>{bootstrap}</code>
                                </th>
                                <td className="px-5 py-3 align-top">
                                    <code>{here}</code>
                                </td>
                                <td className="px-5 py-3 align-top text-muted">{last}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// a titled block of the guide, which can be linked to
const Panel = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
    <section id={id} aria-labelledby={`${id}-title`} className="panel space-y-4 p-4 sm:p-6">
        <h2 id={`${id}-title`} className="text-lg font-semibold">
            {title}
        </h2>
        {children}
    </section>
);

// where "Keep going" leads, in the same order as the cards in the messages
const NEXT_LINKS = ["/#configuration", "/#classes", "/#examples"];

const MigrationPage = () => {
    const { m, url } = useI18n();
    const t = m.guide;
    const tables = t.tables;

    return (
        <div className="py-10 sm:py-14">
            <nav aria-label={t.breadcrumb} className="mb-8 text-sm text-muted">
                <ol className="flex flex-wrap items-center gap-2">
                    <li>
                        <a href={url("/")} className="hover:text-accent">
                            tw-bootstrap-grid
                        </a>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="text-ink">
                        {t.breadcrumbCurrent}
                    </li>
                </ol>
            </nav>

            <header className="mb-10 max-w-2xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">{t.eyebrow}</p>
                <h1 id="migration-title" className="mb-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                    {t.h1}
                </h1>
                <p className="lead">{t.lead}</p>
            </header>

            <div className="space-y-5">
                <Panel id="steps" title={t.stepsTitle}>
                    <ol className="space-y-4">
                        {t.steps.map((step, index) => (
                            <li key={step.name} className="flex gap-3">
                                <span
                                    aria-hidden="true"
                                    className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-ink"
                                >
                                    {index + 1}
                                </span>
                                <div className="min-w-0">
                                    <h3 className="font-semibold">{step.name}</h3>
                                    <p className="prose-sm-muted mt-1">
                                        <Rich text={step.text} />
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </Panel>

                <section aria-labelledby="changes-title" className="pt-4">
                    <h2 id="changes-title" className="mb-4 text-xl font-semibold">
                        {t.changesTitle}
                    </h2>
                    <ul role="list" className="row gy-5">
                        {m.migrationSummary.cards.map((card, index) => (
                            <li key={card.title} className="col-12 md:col-4">
                                <div className="panel h-full p-5">
                                    <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                        {MIGRATION_CARD_ICONS[index]}
                                    </span>
                                    <h3 className="mb-1.5 font-semibold">{card.title}</h3>
                                    <p className="prose-sm-muted">
                                        <Rich text={card.body} />
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <Panel id="before-after" title={t.beforeAfterTitle}>
                    <div className="row gy-4">
                        <div className="col-12 lg:col-6">
                            <p className="mb-2 text-xs font-medium text-muted">{t.bootstrap5}</p>
                            <CodeBlock code={BEFORE} file="index.html" lang="html" />
                        </div>
                        <div className="col-12 lg:col-6">
                            <p className="mb-2 text-xs font-medium text-muted">tw-bootstrap-grid</p>
                            <CodeBlock code={AFTER} file="index.html" lang="html" />
                        </div>
                    </div>
                </Panel>

                <section id="class-mapping" aria-labelledby="class-mapping-title" className="space-y-5 pt-4">
                    <h2 id="class-mapping-title" className="text-xl font-semibold">
                        {t.classMappingTitle}
                    </h2>
                    <MappingTable
                        caption={tables.responsive.caption}
                        heads={[tables.bootstrap, tables.here, tables.notes]}
                        rows={RESPONSIVE.map(([a, b], index) => [a, b, tables.responsive.notes[index]])}
                    />
                    <MappingTable
                        caption={tables.gutters.caption}
                        heads={[tables.bootstrap, tables.here, tables.size]}
                        rows={GUTTERS}
                    />
                    <MappingTable
                        caption={tables.utilities.caption}
                        heads={[tables.bootstrap, tables.here, tables.notes]}
                        rows={UTILITIES.map(([a, b], index) => [a, b, tables.utilities.notes[index]])}
                    />
                </section>

                <Panel id="breakpoints" title={t.breakpoints.title}>
                    <p className="prose-sm-muted">
                        <Rich text={t.breakpoints.before} />
                    </p>
                    <VersionCode
                        v3={{ file: "tailwind.config.ts", code: V3_SCREENS }}
                        v4={{ file: "main.css", code: V4_SCREENS }}
                    />
                    <p className="prose-sm-muted">
                        <Rich text={t.breakpoints.after} />
                    </p>
                </Panel>

                <Panel id="bulk-rename" title={t.bulk.title}>
                    <p className="prose-sm-muted">
                        <Rich text={t.bulk.body} />
                    </p>
                    <CodeBlock code={CODEMOD} file="terminal" lang="shell" />
                    <Callout kind="warning" title={t.bulk.warning.title}>
                        <Rich text={t.bulk.warning.body} />
                    </Callout>
                </Panel>

                <Callout kind="note" title={t.notIncluded.title}>
                    <Rich text={t.notIncluded.body} />
                </Callout>

                <section aria-labelledby="next-title" className="pt-6">
                    <h2 id="next-title" className="mb-4 text-xl font-semibold">
                        {t.nextTitle}
                    </h2>
                    <ul role="list" className="row gy-5">
                        {t.next.map((item, index) => (
                            <li key={item.title} className="col-12 md:col-4">
                                <a
                                    href={url(NEXT_LINKS[index])}
                                    className="panel group block h-full p-5 transition hover:border-accent"
                                >
                                    <span className="mb-1.5 flex items-center gap-2 font-semibold group-hover:text-accent">
                                        {item.title}
                                        <LucideArrowRight size={16} aria-hidden="true" className="rtl:-scale-x-100" />
                                    </span>
                                    <span className="prose-sm-muted block">{item.body}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default MigrationPage;
