import type { ReactNode } from "react";
import { LucideArrowRightLeft, LucideEqual, LucideRuler } from "lucide-react";

// shown as cards on the home page and again on the migration page
export const MIGRATION_CARDS: { icon: ReactNode; title: string; body: ReactNode }[] = [
    {
        icon: <LucideEqual size={20} />,
        title: "What stays the same",
        body: (
            <>
                The structure: <code>.container</code>, <code>.row</code>, <code>.col-*</code>, <code>.offset-*</code>,{" "}
                <code>.row-cols-*</code>. Even the CSS variables keep their names, <code>--bs-gutter-x</code> and{" "}
                <code>--bs-gutter-y</code>, so custom CSS that reads them still works.
            </>
        ),
    },
    {
        icon: <LucideArrowRightLeft size={20} />,
        title: "Prefix, not infix",
        body: (
            <>
                Bootstrap writes <code>col-md-6</code>. Tailwind writes <code>md:col-6</code>. This is the change you
                will touch most, and a script can do it for you.
            </>
        ),
    },
    {
        icon: <LucideRuler size={20} />,
        title: "Different numbers",
        body: (
            <>
                Gutter and spacing numbers follow Tailwind's scale, so Bootstrap's <code>g-3</code> is <code>g-4</code>{" "}
                here. Breakpoint widths differ a little too.
            </>
        ),
    },
];

export interface IMigrationStep {
    name: string;
    text: ReactNode;
}

// the steps of the guide, also used to describe it to search engines (HowTo structured data)
export const MIGRATION_STEPS: IMigrationStep[] = [
    {
        name: "Install the plugin",
        text: (
            <>
                Install tw-bootstrap-grid and register it in your Tailwind setup. The{" "}
                <a href="/#installation" className="underline decoration-line underline-offset-4 hover:text-accent">
                    installation guide
                </a>{" "}
                has the snippets for Tailwind v3 and v4.
            </>
        ),
    },
    {
        name: "Match Bootstrap's breakpoints (optional)",
        text: (
            <>
                If you want layouts to switch at the same widths as before, set Tailwind's screens to 576, 768, 992,
                1200 and 1400px. See{" "}
                <a href="#breakpoints" className="underline decoration-line underline-offset-4 hover:text-accent">
                    the breakpoints
                </a>{" "}
                below.
            </>
        ),
    },
    {
        name: "Rename the classes",
        text: (
            <>
                Commit your work, then run the{" "}
                <a href="#bulk-rename" className="underline decoration-line underline-offset-4 hover:text-accent">
                    Perl command
                </a>{" "}
                below. It renumbers the gutters and turns Bootstrap's <code>col-md-6</code> into <code>md:col-6</code>.
            </>
        ),
    },
    {
        name: "Fix what the command can't",
        text: (
            <>
                Change spacing utilities such as <code>mb-3</code> to <code>mb-4</code>, swap Bootstrap's display and
                flex utilities for Tailwind's, and replace classes like <code>container-md</code>.
            </>
        ),
    },
    {
        name: "Remove Bootstrap's CSS and check the result",
        text: <>Take out the Bootstrap stylesheet, then look through your pages at phone, tablet and desktop widths.</>,
    },
];
