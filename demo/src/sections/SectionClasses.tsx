import Callout from "@/components/Callout";
import Section from "@/components/Section";

interface IClassGroup {
    title: string;
    rows: [name: string, css: string, notes: string][];
}

const GROUPS: IClassGroup[] = [
    {
        title: "Layout",
        rows: [
            [
                ".container",
                "width: 100%; centered; padding from the gutter",
                "Max width comes from Tailwind's breakpoints.",
            ],
            [".container-fluid", "same as .container", "Full width at every breakpoint."],
            [
                ".row",
                "display: flex; flex-wrap: wrap; negative margins",
                "Cancels the outer gutter and lays out its children.",
            ],
        ],
    },
    {
        title: "Columns",
        rows: [
            [".col", "flex: 1 0 0%", "Shares the remaining space equally."],
            [".col-auto", "flex: 0 0 auto; width: auto", "Sized by its content."],
            [".col-1 … .col-12", "flex: 0 0 auto; width: n / 12", "Takes n of 12 slots."],
        ],
    },
    {
        title: "Offsets and row columns",
        rows: [
            [".offset-0 … .offset-12", "margin-inline-start: n / 12", "Flips automatically in RTL."],
            [".row-cols-1 … .row-cols-6", "children get width: 1 / n", "Set on the .row, applies to every child."],
            [".row-cols-auto", "children get width: auto", "Children are sized by content."],
        ],
    },
    {
        title: "Gutters",
        rows: [
            [".g-*", "--bs-gutter-x and --bs-gutter-y", "Both directions."],
            [".gx-*", "--bs-gutter-x", "Horizontal only."],
            [".gy-*", "--bs-gutter-y", "Vertical only."],
        ],
    },
];

const SectionClasses = () => (
    <Section id="classes" eyebrow="Reference" title="Classes" description="Everything the plugin adds, in one place.">
        <div className="space-y-5">
            {GROUPS.map((group) => (
                <div key={group.title} className="panel overflow-hidden">
                    <h3 className="border-b bg-sunken px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-muted">
                        {group.title}
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[40rem] table-fixed text-left text-sm">
                            <caption className="sr-only">{group.title} classes</caption>
                            <colgroup>
                                <col className="w-[32%]" />
                                <col className="w-[34%]" />
                                <col className="w-[34%]" />
                            </colgroup>
                            <thead className="sr-only">
                                <tr>
                                    <th>Class</th>
                                    <th>What it does</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {group.rows.map(([name, css, notes]) => (
                                    <tr key={name}>
                                        <td className="px-5 py-3 align-top">
                                            <code>{name}</code>
                                        </td>
                                        <td className="px-5 py-3 align-top font-mono text-xs text-muted">{css}</td>
                                        <td className="px-5 py-3 align-top text-muted">{notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}

            <div className="row gy-5">
                <div className="col-12 lg:col-6">
                    <Callout kind="tip" title="Everything is responsive" className="h-full">
                        Add a breakpoint prefix to any class above: <code>md:col-6</code>, <code>lg:offset-3</code>,{" "}
                        <code>sm:row-cols-2</code>, <code>xl:g-8</code>.
                    </Callout>
                </div>
                <div className="col-12 lg:col-6">
                    <Callout kind="note" title="Which gutter steps exist?" className="h-full">
                        <code>.g-*</code>, <code>.gx-*</code> and <code>.gy-*</code> are built from your spacing theme.
                        In v3 that's every key of <code>theme.spacing</code> without a dot (so <code>g-4</code> yes,{" "}
                        <code>g-0.5</code> no). In v4 it's the default scale, <code>g-0</code> to <code>g-96</code> and{" "}
                        <code>g-px</code>.
                    </Callout>
                </div>
            </div>

            <Callout kind="note" title="Alignment and order come from Tailwind">
                The plugin doesn't ship its own <code>justify-*</code>, <code>items-*</code> or <code>order-*</code>. A{" "}
                <code>.row</code> is a regular flex container, so Tailwind's utilities work on it directly.
            </Callout>
        </div>
    </Section>
);

export default SectionClasses;
