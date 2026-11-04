import LiveExample from "@/components/LiveExample";
import NewTabHint from "@/components/NewTabHint";
import Section from "@/components/Section";
import { EXAMPLES } from "@/examples";

const SectionExamples = () => (
    <Section
        id="examples"
        eyebrow="Usage"
        title="Examples"
        description={
            <>
                Every example is live. Edit the HTML on the left and the preview updates as you type. If you know the{" "}
                <a
                    href="https://getbootstrap.com/docs/5.3/layout/grid/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-line underline-offset-4 hover:text-accent"
                >
                    Bootstrap grid
                    <NewTabHint />
                </a>
                , this will feel familiar.
            </>
        }
    >
        <div className="space-y-5">
            {EXAMPLES.map((example) => (
                <LiveExample key={example.id} example={example} />
            ))}
        </div>
    </Section>
);

export default SectionExamples;
