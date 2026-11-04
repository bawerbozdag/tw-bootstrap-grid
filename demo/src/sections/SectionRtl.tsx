import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import Rich from "@/components/Rich";
import Section from "@/components/Section";
import useI18n from "@/hooks/useI18n";

const WHOLE_PAGE = `<html dir="rtl">
  ...
</html>`;

const SCOPED = `<div class="container" dir="rtl">
  <div class="row">
    <div class="col-6 offset-3">Starts from the right</div>
  </div>
</div>`;

const SectionRtl = () => {
    const { m } = useI18n();
    const t = m.rtl;

    return (
        <Section id="rtl" eyebrow={t.eyebrow} title={t.title} description={t.description}>
            <div className="space-y-5">
                <div className="row gy-5">
                    <div className="col-12 lg:col-6">
                        <p className="mb-2 text-xs font-medium text-muted">{t.wholePage}</p>
                        <CodeBlock code={WHOLE_PAGE} file="index.html" />
                    </div>
                    <div className="col-12 lg:col-6">
                        <p className="mb-2 text-xs font-medium text-muted">{t.oneSection}</p>
                        <CodeBlock code={SCOPED} file="index.html" />
                    </div>
                </div>

                <Callout kind="note" title={t.why.title}>
                    <Rich text={t.why.body} />
                </Callout>
            </div>
        </Section>
    );
};

export default SectionRtl;
