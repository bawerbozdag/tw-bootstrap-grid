import { useId, useState, type ReactNode } from "react";
import { LucideChevronDown } from "lucide-react";
import clsx from "clsx";
import Callout from "@/components/Callout";
import { ISSUES_URL, PULLS_URL } from "@/_constants";
import Section from "@/components/Section";

const FAQ = [
    {
        question: "Does it replace Tailwind's container?",
        answer: (
            <>
                No. Tailwind's <code>container</code> keeps providing the per-breakpoint max widths. The plugin adds
                centering and gutter-aware padding on top. If you'd rather not have that, set{" "}
                <code>generateContainers</code> to <code>false</code>.
            </>
        ),
    },
    {
        question: "Can I mix it with normal Tailwind utilities?",
        answer: (
            <>
                Yes, that's the idea. A <code>.row</code> is a flex container, so <code>items-center</code>,{" "}
                <code>justify-between</code>, <code>order-2</code>, <code>mt-4</code> and the rest apply to it and to
                its columns as usual.
            </>
        ),
    },
    {
        question: "Why does my live preview ignore a class?",
        answer: (
            <>
                Tailwind only generates CSS for classes it can find in your source files. In your own project that's
                automatic. On this page the editable examples can contain anything, so the demo pre-generates every
                plugin class and breakpoint.
            </>
        ),
    },
    {
        question: "Can I use it with the Tailwind CDN?",
        answer: (
            <>
                No. The CDN script can't load plugins from npm. Use a build setup such as Vite, PostCSS, Webpack or the
                Tailwind CLI.
            </>
        ),
    },
    {
        question: "Which versions are supported?",
        answer: (
            <>
                Tailwind v3.4 and v4, on Node 18 or newer. The package ships ESM and CommonJS builds with TypeScript
                types.
            </>
        ),
    },
];

// one question, the answer slides open and closed
const FaqItem = ({ question, answer }: { question: string; answer: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const panelId = useId();

    return (
        <div>
            <h4>
                <button
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
            </h4>
            {/* animating grid-template-rows from 0fr to 1fr lets the height follow the content, even after a resize */}
            <div
                id={panelId}
                role="region"
                inert={!open}
                className={clsx(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
            >
                <div className="overflow-hidden">
                    <p className="prose-sm-muted max-w-3xl px-6 pb-5">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const SectionFaq = () => (
    <Section
        id="faq"
        eyebrow="Good to know"
        title="Frequently asked questions"
        description="Answers to the questions that come up most."
    >
        <div className="space-y-5">
            <div className="panel divide-y">
                {FAQ.map((item) => (
                    <FaqItem key={item.question} question={item.question} answer={item.answer} />
                ))}
            </div>

            <Callout kind="tip" title="Found a bug or have an idea?">
                Please{" "}
                <a
                    href={`${ISSUES_URL}/new`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent underline underline-offset-4"
                >
                    open an issue
                </a>{" "}
                or send a{" "}
                <a
                    href={PULLS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent underline underline-offset-4"
                >
                    pull request
                </a>{" "}
                on GitHub. Small fixes and documentation improvements are very welcome.
            </Callout>
        </div>
    </Section>
);

export default SectionFaq;
