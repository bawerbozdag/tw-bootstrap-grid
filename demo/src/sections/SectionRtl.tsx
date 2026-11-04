import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import Section from "@/components/Section";

const WHOLE_PAGE = `<html dir="rtl">
  ...
</html>`;

const SCOPED = `<div class="container" dir="rtl">
  <div class="row">
    <div class="col-6 offset-3">Starts from the right</div>
  </div>
</div>`;

const SectionRtl = () => (
    <Section
        id="rtl"
        eyebrow="Good to know"
        title="Right-to-left"
        description={
            <>
                Add <code>dir="rtl"</code> and the grid mirrors itself. There is nothing to configure.
            </>
        }
    >
        <div className="space-y-5">
            <div className="row gy-5">
                <div className="col-12 lg:col-6">
                    <p className="mb-2 text-xs font-medium text-muted">For the whole page</p>
                    <CodeBlock code={WHOLE_PAGE} file="index.html" />
                </div>
                <div className="col-12 lg:col-6">
                    <p className="mb-2 text-xs font-medium text-muted">For one section</p>
                    <CodeBlock code={SCOPED} file="index.html" />
                </div>
            </div>

            <Callout kind="note" title="Why it just works">
                Offsets use <code>margin-inline-start</code>, and the row's negative margins and the columns' padding
                are symmetric, so they flip on their own. Use the RTL button on any example above to see it.
            </Callout>
        </div>
    </Section>
);

export default SectionRtl;
