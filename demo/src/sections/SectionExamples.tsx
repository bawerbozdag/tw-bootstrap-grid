import LiveExample from "@/components/LiveExample";
import Section from "@/components/Section";
import useI18n from "@/hooks/useI18n";
import { EXAMPLES } from "@/examples";

const SectionExamples = () => {
    const { m } = useI18n();
    const t = m.examples;

    return (
        <Section id="examples" eyebrow={t.eyebrow} title={t.title} description={t.description}>
            <div className="space-y-5">
                {EXAMPLES.map((example) => (
                    <LiveExample key={example.id} example={example} />
                ))}
            </div>
        </Section>
    );
};

export default SectionExamples;
