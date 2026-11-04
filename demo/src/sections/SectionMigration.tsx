import type { ReactNode } from "react";
import { LucideArrowRightLeft, LucideEqual, LucideRuler } from "lucide-react";
import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import Section from "@/components/Section";
import VersionCode from "@/components/VersionCode";

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

type TRow = [bootstrap: string, here: string, note: ReactNode];

const RESPONSIVE: TRow[] = [
    ["col-md-6", "md:col-6", "Tailwind puts the breakpoint in front, as a prefix."],
    ["col-lg", "lg:col", "Same for the equal-width column."],
    ["col-xl-auto", "xl:col-auto", ""],
    ["offset-md-3", "md:offset-3", ""],
    ["row-cols-md-3", "md:row-cols-3", ""],
    ["g-md-4", "md:g-6", "The number changes too, see the gutter sizes below."],
    ["col-xxl-4", "2xl:col-4", "Bootstrap's xxl is called 2xl in Tailwind."],
    ["order-md-2", "md:order-2", "order-* is Tailwind's own, and it goes up to 12."],
];

const GUTTERS: TRow[] = [
    ["g-0", "g-0", "0"],
    ["g-1", "g-1", "0.25rem"],
    ["g-2", "g-2", "0.5rem"],
    ["g-3", "g-4", "1rem"],
    ["g-4", "g-6", "1.5rem"],
    ["g-5", "g-12", "3rem"],
];

const UTILITIES: TRow[] = [
    ["d-flex", "flex", ""],
    ["d-none d-md-block", "hidden md:block", ""],
    ["justify-content-between", "justify-between", ""],
    ["align-items-center", "items-center", ""],
    ["align-self-end", "self-end", ""],
    ["mb-3, p-3", "mb-4, p-4", "Spacing utilities shift the same way as gutters."],
];

const CARDS: { icon: ReactNode; title: string; body: ReactNode }[] = [
    {
        icon: <LucideEqual size={20} />,
        title: "What stays the same",
        body: (
            <>
                The structure: <code>.container</code>, <code>.row</code>, <code>.col-*</code>, <code>.offset-*</code>,{" "}
                <code>.row-cols-*</code>. Even the CSS variables keep their names, <code>--bs-gutter-x</code> and{" "}
                <code>--bs-gutter-y</code>, so custom CSS that reads them still works.
            </>
        ),
    },
    {
        icon: <LucideArrowRightLeft size={20} />,
        title: "Prefix, not infix",
        body: (
            <>
                Bootstrap writes <code>col-md-6</code>. Tailwind writes <code>md:col-6</code>. This is the change you
                will touch most, and a script can do it for you.
            </>
        ),
    },
    {
        icon: <LucideRuler size={20} />,
        title: "Different numbers",
        body: (
            <>
                Gutter and spacing numbers follow Tailwind's scale, so Bootstrap's <code>g-3</code> is <code>g-4</code>{" "}
                here. Breakpoint widths differ a little too.
            </>
        ),
    },
];

const MappingTable = ({ caption, heads, rows }: { caption: string; heads: [string, string, string]; rows: TRow[] }) => (
    <div className="panel overflow-hidden">
        <h3 className="border-b bg-sunken px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-muted">
            {caption}
        </h3>
        <div role="group" tabIndex={0} aria-label={`${caption}, scrollable table`} className="overflow-x-auto">
            <table className="w-full min-w-[34rem] table-fixed text-left text-sm">
                <caption className="sr-only">{caption}</caption>
                <colgroup>
                    <col className="w-[30%]" />
                    <col className="w-[30%]" />
                    <col className="w-[40%]" />
                </colgroup>
                <thead className="border-b text-xs text-muted">
                    <tr>
                        {heads.map((head) => (
                            <th key={head} scope="col" className="px-5 py-2 font-medium">
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {rows.map(([bootstrap, here, note]) => (
                        <tr key={bootstrap}>
                            <th scope="row" className="px-5 py-3 text-left align-top font-normal">
                                <code>{bootstrap}</code>
                            </th>
                            <td className="px-5 py-3 align-top">
                                <code>{here}</code>
                            </td>
                            <td className="px-5 py-3 align-top text-muted">{note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const SectionMigration = () => (
    <Section
        id="migration"
        eyebrow="Coming from Bootstrap"
        title="Migrating from Bootstrap"
        description="The grid works the way you remember. Three things look different: how responsive classes are written, the spacing numbers, and the breakpoint widths."
    >
        <div className="space-y-5">
            <ul role="list" className="row gy-5">
                {CARDS.map((card) => (
                    <li key={card.title} className="col-12 md:col-4">
                        <div className="panel h-full p-5">
                            <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                {card.icon}
                            </span>
                            <h3 className="mb-1.5 font-semibold">{card.title}</h3>
                            <p className="prose-sm-muted">{card.body}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="panel space-y-4 p-4 sm:p-6">
                <h3 className="text-lg font-semibold">The same layout, before and after</h3>
                <div className="row gy-4">
                    <div className="col-12 lg:col-6">
                        <p className="mb-2 text-xs font-medium text-muted">Bootstrap 5</p>
                        <CodeBlock code={BEFORE} file="index.html" lang="html" />
                    </div>
                    <div className="col-12 lg:col-6">
                        <p className="mb-2 text-xs font-medium text-muted">tw-bootstrap-grid</p>
                        <CodeBlock code={AFTER} file="index.html" lang="html" />
                    </div>
                </div>
            </div>

            <MappingTable caption="Responsive classes" heads={["Bootstrap", "Here", "Notes"]} rows={RESPONSIVE} />
            <MappingTable caption="Gutter sizes" heads={["Bootstrap", "Here", "Size"]} rows={GUTTERS} />
            <MappingTable
                caption="Utilities that come from Tailwind"
                heads={["Bootstrap", "Here", "Notes"]}
                rows={UTILITIES}
            />

            <div className="panel space-y-4 p-4 sm:p-6">
                <h3 className="text-lg font-semibold">Match Bootstrap's breakpoints</h3>
                <p className="prose-sm-muted">
                    Bootstrap's breakpoints are 576, 768, 992, 1200 and 1400px. Tailwind's are 640, 768, 1024, 1280 and
                    1536px, so a layout can switch a little earlier or later after migrating. If that matters, set
                    Tailwind's screens to Bootstrap's values.
                </p>
                <VersionCode
                    v3={{ file: "tailwind.config.ts", code: V3_SCREENS }}
                    v4={{ file: "main.css", code: V4_SCREENS }}
                />
                <p className="prose-sm-muted">
                    Tailwind's <code>container</code> is as wide as the breakpoint it sits on, so its max widths become
                    576, 768, 992, 1200 and 1400px. That is close to Bootstrap's 540, 720, 960, 1140 and 1320px, but not
                    identical.
                </p>
            </div>

            <div className="panel space-y-4 p-4 sm:p-6">
                <h3 className="text-lg font-semibold">Rename in bulk</h3>
                <p className="prose-sm-muted">
                    This Perl command renumbers the gutters and turns <code>col-md-6</code> into <code>md:col-6</code>,{" "}
                    <code>col-xxl-4</code> into <code>2xl:col-4</code> and the old <code>no-gutters</code> into{" "}
                    <code>g-0</code>. It rewrites the files in place, so commit first and read the diff afterwards.
                </p>
                <CodeBlock code={CODEMOD} file="terminal" lang="shell" />
                <Callout kind="warning" title="Run it once, and check the result">
                    Running it a second time would renumber the gutters again. It also only knows the class names above,
                    so spacing utilities such as <code>mb-3</code> or <code>p-3</code> need a manual pass, and the
                    pattern matches any text that looks like a class, including inside comments.
                </Callout>
            </div>

            <Callout kind="note" title="What doesn't carry over">
                The plugin only adds <code>.container</code> and <code>.container-fluid</code>, so Bootstrap's{" "}
                <code>.container-sm</code>, <code>.container-md</code> and the other responsive containers are not
                included. Build them with Tailwind's <code>max-w-*</code> utilities if you need them. Bootstrap's other
                utilities (display, flex, spacing, text) are replaced by Tailwind's own, as in the last table above.
            </Callout>
        </div>
    </Section>
);

export default SectionMigration;
