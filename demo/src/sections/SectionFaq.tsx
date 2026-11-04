import { useId, useState } from "react";
import { LucideChevronDown } from "lucide-react";
import clsx from "clsx";
import Callout from "@/components/Callout";
import Rich from "@/components/Rich";
import Section from "@/components/Section";
import useI18n from "@/hooks/useI18n";

// one question, the answer slides open and closed
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
    const [open, setOpen] = useState(false);
    const panelId = useId();
    const buttonId = `${panelId}-question`;

    return (
        <div>
            <h3>
                <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpen((current) => !current)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left text-sm font-medium transition hover:text-accent"
                >
                    {question}
                    <LucideChevronDown
                        size={18}
                        aria-hidden="true"
                        className={clsx(
                            "shrink-0 text-muted transition-transform duration-300 motion-reduce:transition-none",
                            open && "rotate-180",
                        )}
                    />
                </button>
            </h3>
            {/* animating grid-template-rows from 0fr to 1fr lets the height follow the content, even after a resize */}
            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                inert={!open}
                className={clsx(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
            >
                <div className="overflow-hidden">
                    <p className="prose-sm-muted max-w-3xl px-6 pb-5">
                        <Rich text={answer} />
                    </p>
                </div>
            </div>
        </div>
    );
};

const SectionFaq = () => {
    const { m } = useI18n();
    const t = m.faq;

    return (
        <Section id="faq" eyebrow={t.eyebrow} title={t.title} description={t.description}>
            <div className="space-y-5">
                <div className="panel divide-y">
                    {t.items.map((item) => (
                        <FaqItem key={item.question} question={item.question} answer={item.answer} />
                    ))}
                </div>

                <Callout kind="tip" title={t.feedback.title}>
                    <Rich text={t.feedback.body} />
                </Callout>
            </div>
        </Section>
    );
};

export default SectionFaq;
