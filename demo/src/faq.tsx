import type { ReactNode } from "react";
import { MIGRATION_PATH } from "./site";

export interface IFaqItem {
    question: string;
    answer: ReactNode;
}

export const FAQ: IFaqItem[] = [
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
    {
        question: "I'm moving from Bootstrap. How do I migrate?",
        answer: (
            <>
                The class names are close: <code>col-md-6</code> becomes <code>md:col-6</code>, and gutter numbers
                follow Tailwind's scale. The{" "}
                <a href={MIGRATION_PATH} className="underline decoration-line underline-offset-4 hover:text-accent">
                    migration guide
                </a>{" "}
                has the full mapping and a command that converts your markup.
            </>
        ),
    },
];
