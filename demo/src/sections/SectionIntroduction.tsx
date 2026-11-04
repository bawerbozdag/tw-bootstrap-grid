import type { ReactNode } from "react";
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

interface IFeature {
    icon: ReactNode;
    title: string;
    body: ReactNode;
}

const FEATURES: IFeature[] = [
    {
        icon: <LucideLayoutGrid size={20} />,
        title: "12-column grid",
        body: (
            <>
                <code>.row</code>, <code>.col</code>, <code>.col-auto</code> and <code>.col-1</code> to{" "}
                <code>.col-12</code>, just like Bootstrap.
            </>
        ),
    },
    {
        icon: <LucideStretchHorizontal size={20} />,
        title: "Gutters from your theme",
        body: (
            <>
                <code>.g-*</code>, <code>.gx-*</code> and <code>.gy-*</code> use your Tailwind spacing scale, so they
                match the rest of your design.
            </>
        ),
    },
    {
        icon: <LucideMoveRight size={20} />,
        title: "Offsets",
        body: (
            <>
                <code>.offset-0</code> to <code>.offset-12</code> to center a column or leave a gap.
            </>
        ),
    },
    {
        icon: <LucideColumns3 size={20} />,
        title: "Row columns",
        body: (
            <>
                <code>.row-cols-1</code> to <code>.row-cols-6</code> and <code>.row-cols-auto</code> size every child
                from one class on the row.
            </>
        ),
    },
    {
        icon: <LucideBox size={20} />,
        title: "Containers",
        body: (
            <>
                <code>.container</code> and <code>.container-fluid</code> with gutter-aware padding. Max widths come
                from Tailwind's own breakpoints.
            </>
        ),
    },
    {
        icon: <LucideGlobe size={20} />,
        title: "Responsive and RTL",
        body: (
            <>
                Every class takes Tailwind's breakpoint prefixes, like <code>md:col-6</code>, and flips correctly with{" "}
                <code>dir="rtl"</code>.
            </>
        ),
    },
];

const SectionIntroduction = () => (
    <section id="introduction" aria-labelledby="introduction-title" className="pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pt-16">
        <div className="row items-center gy-10">
            <div className="col-12 xl:col-6">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border bg-surface px-3 py-1 text-xs font-medium text-muted">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                    Tailwind CSS plugin · v3.4 and v4
                </p>
                <h1
                    id="introduction-title"
                    className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
                >
                    The Bootstrap grid, <span className="text-accent">for Tailwind.</span>
                </h1>
                <p className="lead mb-8 max-w-xl">
                    If you already think in rows and columns, keep doing it. tw-bootstrap-grid adds the familiar
                    12-column grid, <code>.row</code>, <code>.col-6</code>, <code>.offset-2</code>, <code>.g-4</code>,
                    to Tailwind, with RTL support and no opinions about how your components should look.
                </p>

                <div className="mb-6 flex flex-wrap items-center gap-3">
                    <a href="#installation" className="btn btn-primary">
                        Get started
                        <LucideArrowRight size={16} />
                    </a>
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
                        View on GitHub
                    </a>
                </div>

                <div className="inline-flex max-w-full items-center gap-3 rounded-lg border bg-surface py-1.5 pl-4 pr-2 font-mono text-sm">
                    <span className="shrink-0 select-none text-muted">$</span>
                    <span className="min-w-0 truncate">npm install tw-bootstrap-grid</span>
                    <CopyButton text="npm install tw-bootstrap-grid" className="shrink-0" />
                </div>
            </div>

            <div className="col-12 xl:col-6">
                <HeroGrid />
            </div>
        </div>

        <div className="row mt-16 gy-6">
            {FEATURES.map((feature) => (
                <div key={feature.title} className="col-12 sm:col-6 lg:col-4">
                    <div className="panel h-full p-5">
                        <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                            {feature.icon}
                        </span>
                        <h3 className="mb-1.5 font-semibold">{feature.title}</h3>
                        <p className="prose-sm-muted">{feature.body}</p>
                    </div>
                </div>
            ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
            It only does layout: no colors, no components, no resets. It adds to Tailwind rather than replacing any of
            it, so you can mix <code>col-4</code> and <code>flex</code> on the same page without a second thought.
        </p>
    </section>
);

export default SectionIntroduction;
