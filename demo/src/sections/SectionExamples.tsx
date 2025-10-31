import { LucideLayoutGrid } from "lucide-react";
import EditablePreviewCard from "@/components/EditablePreviewCard";
import { EXAMPLES } from "@/_constants";

const SectionExamples = () => {
    return (
        <section
            id="examples"
            className="container py-16 px-4 border-b"
            aria-labelledby="examples-title"
            aria-describedby="examples-description"
        >
            <h2 id="examples-title" className="mb-3">
                <LucideLayoutGrid className="text-sky-600" size={24} />
                Examples
            </h2>
            <p id="examples-description" className="mb-3">
                Explore how <span className="font-semibold">tw-bootstrap-grid</span> helps you build responsive and
                flexible layouts using familiar, easy-to-read Tailwind classes.
            </p>
            <p className="text-xs text-slate-500 mb-6">
                Reference:{" "}
                <a
                    href="https://getbootstrap.com/docs/5.3/layout/grid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-indigo-600"
                >
                    Bootstrap 5 Grid System
                </a>{" "}
                |{" "}
                <a
                    href="https://getbootstrap.com/docs/4.0/layout/grid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-indigo-600"
                >
                    Bootstrap 4 Grid System
                </a>
            </p>
            <EditablePreviewCard
                title="1) Basic Grid Layout"
                description={
                    <>
                        The<code className="badge">.container</code>class centers your content with responsive
                        max-widths, while<code className="badge">.row</code>creates horizontal groups of columns. Each
                        <code className="badge">.col-*</code>divides the row into a 12-column grid.
                    </>
                }
                example={EXAMPLES.basic}
                tip={
                    <>
                        The<code className="badge">gy-4</code>class adds vertical spacing between rows using Tailwind's
                        spacing scale, while the<code className="badge">col-*</code>utilities automatically manage
                        horizontal gutters.
                    </>
                }
            />
            <EditablePreviewCard
                title="2) Responsive Columns"
                description={
                    <>
                        Use Tailwind's responsive prefixes (<code className="badge">sm:</code>,
                        <code className="badge">md:</code>,<code className="badge">lg:</code>, …) with
                        <code className="badge">.col-*</code>to change column widths across breakpoints.
                    </>
                }
                example={EXAMPLES.responsive}
                tip={
                    <>
                        Start mobile-first with<code className="badge">col-12</code>, then refine at larger breakpoints
                        (e.g.,<code className="badge">sm:col-6</code>,<code className="badge">md:col-4</code>). Vertical
                        spacing is handled with<code className="badge">gy-*</code>.
                    </>
                }
            />
            <EditablePreviewCard
                title="3) Offset Example"
                description={
                    <>
                        The <span className="font-semibold">offset utilities</span> are used to create horizontal
                        spacing before a column. They are helpful for centering content or creating asymmetric layouts
                        within a row. You can use<code className="badge">offset-{`{1..12}`}</code>to move a column
                        rightward based on the 12-column grid, or combine them with responsive modifiers such as
                        <code className="badge">sm:offset-*</code>and<code className="badge">lg:offset-*</code>for
                        adaptive layouts.
                    </>
                }
                example={EXAMPLES.offset}
                tip={
                    <>
                        Offsets automatically respect the document direction. In<code className="badge">dir="rtl"</code>
                        layouts, the offset is applied from the opposite side without any additional setup.
                    </>
                }
            />
            <EditablePreviewCard
                title="4) Order Example"
                description={
                    <>
                        The <span className="font-semibold">order utilities</span> control the visual order of columns
                        within a row, regardless of their source order in the HTML. You can use
                        <code className="badge">order-{`{1..12}`}</code>to assign a numeric order, or use
                        <code className="badge">order-first</code>and<code className="badge">order-last</code> to move
                        elements directly to the start or end of the row.
                    </>
                }
                example={EXAMPLES.order}
                tip={
                    <>
                        Use responsive prefixes to adjust the order across breakpoints. For example,
                        <code className="badge">order-2 md:order-1</code>swaps positions between mobile and desktop
                        layouts. The same utilities also work in<code className="badge">dir="rtl"</code>environments
                        without extra setup.
                    </>
                }
            />
            <EditablePreviewCard
                title="5) RTL (Right-to-Left)"
                description={
                    <>
                        The grid system in <span className="font-semibold">tw-bootstrap-grid</span> automatically adapts
                        to the text direction of your layout. Setting <code className="badge">dir="rtl"</code> makes the
                        grid flow from right to left, which is ideal for languages such as Arabic, Persian, or Hebrew.
                        If no direction is specified, the layout defaults to <code className="badge">dir="ltr"</code>
                        (left to right).
                    </>
                }
                example={EXAMPLES.rtl}
                tip={
                    <>
                        When<code className="badge">dir="rtl"</code>is active, the plugin automatically flips
                        <code className="badge">offset-*</code>,<code className="badge">order-*</code>and container
                        paddings. No additional configuration is required.
                    </>
                }
            />
            <EditablePreviewCard
                title="6) Row columns"
                description={
                    <>
                        Use <code className="badge">.row-cols-(1–6)</code> classes to automatically divide row children
                        into equal-width columns. This helps you quickly create flexible grid layouts without manually
                        defining column widths.
                    </>
                }
                example={EXAMPLES.row_cols}
                tip={
                    <>
                        You can combine <code className="badge">row-cols-*</code> with responsive prefixes like{" "}
                        <code className="badge">lg:row-cols-3</code> to adjust the number of columns at different
                        breakpoints.
                    </>
                }
            />
        </section>
    );
};

export default SectionExamples;
