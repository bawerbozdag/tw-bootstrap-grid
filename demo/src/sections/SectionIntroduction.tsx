import {
    LucideArrowRight,
    LucideBox,
    LucideColumns3,
    LucideGlobe,
    LucideLayoutGrid,
    LucideMoveRight,
    LucideStretchHorizontal,
} from "lucide-react";
import { GITHUB_URL } from "@/_constants";
import CopyButton from "@/components/CopyButton";
import HeroGrid from "@/components/HeroGrid";
import NewTabHint from "@/components/NewTabHint";
import Rich from "@/components/Rich";
import useI18n from "@/hooks/useI18n";
import { fmt } from "@/i18n/format";

// in the same order as the features in the messages
const FEATURE_ICONS = [
    <LucideLayoutGrid key="grid" size={20} />,
    <LucideStretchHorizontal key="gutters" size={20} />,
    <LucideMoveRight key="offsets" size={20} />,
    <LucideColumns3 key="row-cols" size={20} />,
    <LucideBox key="containers" size={20} />,
    <LucideGlobe key="responsive" size={20} />,
];

const SectionIntroduction = () => {
    const { m } = useI18n();

    return (
        <section
            id="introduction"
            aria-labelledby="introduction-title"
            className="pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pt-16"
        >
            <div className="row items-center gy-10">
                <div className="col-12 xl:col-6">
                    <p className="mb-4 inline-flex items-center gap-2 rounded-full border bg-surface px-3 py-1 text-xs font-medium text-muted">
                        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                        {fmt(m.intro.chip, { version: __PLUGIN_VERSION__ })}
                    </p>
                    <h1
                        id="introduction-title"
                        className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
                    >
                        {m.intro.titleStart} <span className="text-accent">{m.intro.titleEnd}</span>
                    </h1>
                    <p className="lead mb-8 max-w-xl">
                        <Rich text={m.intro.lead} />
                    </p>

                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <a href="#installation" className="btn btn-primary">
                            {m.intro.getStarted}
                            <LucideArrowRight size={16} className="rtl:-scale-x-100" />
                        </a>
                        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
                            {m.intro.viewOnGithub}
                            <NewTabHint />
                        </a>
                    </div>

                    <div
                        dir="ltr"
                        className="inline-flex max-w-full items-center gap-3 rounded-lg border bg-surface py-1.5 pl-4 pr-2 font-mono text-sm"
                    >
                        <span className="shrink-0 select-none text-muted">$</span>
                        <span className="min-w-0 truncate">npm install tw-bootstrap-grid</span>
                        <CopyButton text="npm install tw-bootstrap-grid" className="shrink-0" />
                    </div>
                </div>

                <div className="col-12 xl:col-6">
                    <HeroGrid />
                </div>
            </div>

            <h2 className="sr-only">{m.intro.whatYouGet}</h2>
            <ul role="list" className="row mt-16 gy-6">
                {m.intro.features.map((feature, index) => (
                    <li key={feature.title} className="col-12 sm:col-6 lg:col-4">
                        <div className="panel h-full p-5">
                            <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                {FEATURE_ICONS[index]}
                            </span>
                            <h3 className="mb-1.5 font-semibold">{feature.title}</h3>
                            <p className="prose-sm-muted">
                                <Rich text={feature.body} />
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
                <Rich text={m.intro.note} />
            </p>
        </section>
    );
};

export default SectionIntroduction;
