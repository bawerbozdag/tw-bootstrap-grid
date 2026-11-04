// Every message is plain text. `code`, [label](link) and **bold** are the only markup, and links that start
// with "/" are put into the current language. {name} is filled in by fmt().
// This file is the source of truth: the other languages must have the same shape and keep every `code` and link as is.

export interface IPageMeta {
    title: string;
    description: string;
    shareTitle: string;
    shareDescription: string;
}

export interface IExampleText {
    title: string;
    description: string;
    tip?: string;
}

export interface IQuestion {
    question: string;
    answer: string;
}

export interface ICard {
    title: string;
    body: string;
}

export interface IFeature {
    title: string;
    body: string;
}

export interface IClassRow {
    what: string;
    note: string;
}

export interface IClassGroup {
    title: string;
    rows: IClassRow[];
}

export interface IStep {
    name: string;
    text: string;
}

export interface IMessages {
    meta: { home: IPageMeta; migration: IPageMeta; imageAlt: string };
    nav: {
        label: string;
        introduction: string;
        installation: string;
        configuration: string;
        classes: string;
        migration: string;
        examples: string;
        rtl: string;
        faq: string;
        more: string;
    };
    common: {
        skipToContent: string;
        newTab: string;
        copy: string;
        copied: string;
        failed: string;
        backToTop: string;
        githubRepo: string;
        npmPackage: string;
        github: string;
        npm: string;
        changelog: string;
        projectLinks: string;
        switchToLight: string;
        switchToDark: string;
        lightTheme: string;
        darkTheme: string;
        tailwindVersion: string;
        language: string;
        code: string;
        codeFile: string;
        installCommand: string;
        packageManager: string;
        license: string;
    };
    versions: { v3Hint: string; v4Hint: string };
    intro: {
        chip: string;
        titleStart: string;
        titleEnd: string;
        lead: string;
        getStarted: string;
        viewOnGithub: string;
        whatYouGet: string;
        features: IFeature[];
        note: string;
    };
    installation: {
        eyebrow: string;
        title: string;
        description: string;
        step1: string;
        step2: { title: string; body: string; note: string };
        step3: { title: string; body: string };
        buildStep: ICard;
    };
    configuration: {
        eyebrow: string;
        title: string;
        description: string;
        breakpoints: ICard;
        gutters: {
            title: string;
            body: string;
            tableCaption: string;
            priority: string;
            cssVariable: string;
            option: string;
            notes: string;
            orderNotes: string[];
            defaultVariable: string;
            defaultOption: string;
            after: string;
        };
        containers: ICard;
        variablesNote: ICard;
    };
    classes: {
        eyebrow: string;
        title: string;
        description: string;
        tableCaption: string;
        scrollableTable: string;
        columns: { name: string; what: string; notes: string };
        groups: IClassGroup[];
        responsive: ICard;
        gutterSteps: ICard;
        alignment: ICard;
    };
    migrationSummary: {
        eyebrow: string;
        title: string;
        description: string;
        cards: ICard[];
        ctaBody: string;
        ctaButton: string;
    };
    examples: {
        eyebrow: string;
        title: string;
        description: string;
        preview: string;
        editable: string;
        reset: string;
        rtl: string;
        previewWidth: string;
        devices: { fit: string; phone: string; tablet: string; desktop: string };
        previewTitle: string;
        editorLabel: string;
        editorLoading: string;
        items: {
            basic: IExampleText;
            "equal-and-auto": IExampleText;
            responsive: IExampleText;
            gutters: IExampleText;
            offset: IExampleText;
            "row-cols": IExampleText;
            nesting: IExampleText;
            "alignment-and-order": IExampleText;
            rtl: IExampleText;
        };
    };
    rtl: {
        eyebrow: string;
        title: string;
        description: string;
        wholePage: string;
        oneSection: string;
        why: ICard;
    };
    faq: {
        eyebrow: string;
        title: string;
        description: string;
        items: IQuestion[];
        feedback: ICard;
    };
    guide: {
        breadcrumb: string;
        breadcrumbCurrent: string;
        eyebrow: string;
        h1: string;
        lead: string;
        stepsTitle: string;
        steps: IStep[];
        changesTitle: string;
        beforeAfterTitle: string;
        bootstrap5: string;
        classMappingTitle: string;
        tables: {
            responsive: { caption: string; notes: string[] };
            gutters: { caption: string };
            utilities: { caption: string; notes: string[] };
            bootstrap: string;
            here: string;
            notes: string;
            size: string;
        };
        breakpoints: { title: string; before: string; after: string };
        bulk: { title: string; body: string; warning: ICard };
        notIncluded: ICard;
        nextTitle: string;
        next: ICard[];
    };
}

export const en: IMessages = {
    meta: {
        home: {
            title: "tw-bootstrap-grid | Bootstrap grid for Tailwind CSS",
            description:
                "A Tailwind CSS plugin that adds the Bootstrap 12-column grid: rows, columns, gutters, offsets, row-cols and RTL. Works with Tailwind v3.4 and v4.",
            shareTitle: "tw-bootstrap-grid | Bootstrap grid for Tailwind CSS",
            shareDescription:
                "The Bootstrap 12-column grid as a Tailwind CSS plugin: rows, columns, gutters, offsets, row-cols and RTL. Works with Tailwind v3.4 and v4.",
        },
        migration: {
            title: "Migrate a Bootstrap grid to Tailwind CSS | tw-bootstrap-grid",
            description:
                "Move a Bootstrap 5 grid to Tailwind CSS: class mapping tables, gutter size changes, Bootstrap's breakpoints and a Perl command that converts your markup.",
            shareTitle: "Migrate a Bootstrap grid to Tailwind CSS",
            shareDescription:
                "Class mapping tables, gutter size changes, Bootstrap's breakpoints and a Perl command that converts your markup.",
        },
        imageAlt:
            "tw-bootstrap-grid: the Bootstrap grid, for Tailwind. A twelve column grid with three highlighted columns.",
    },
    nav: {
        label: "Sections",
        introduction: "Introduction",
        installation: "Installation",
        configuration: "Configuration",
        classes: "Classes",
        migration: "Migration",
        examples: "Examples",
        rtl: "RTL",
        faq: "FAQ",
        more: "More",
    },
    common: {
        skipToContent: "Skip to content",
        newTab: "(opens in a new tab)",
        copy: "Copy",
        copied: "Copied",
        failed: "Failed",
        backToTop: "tw-bootstrap-grid, back to the top",
        githubRepo: "GitHub repository",
        npmPackage: "npm package",
        github: "GitHub",
        npm: "npm",
        changelog: "Changelog",
        projectLinks: "Project links",
        switchToLight: "Switch to light theme",
        switchToDark: "Switch to dark theme",
        lightTheme: "Light theme",
        darkTheme: "Dark theme",
        tailwindVersion: "Tailwind version",
        language: "Language",
        code: "Code",
        codeFile: "Code: {file}",
        installCommand: "Install command",
        packageManager: "Package manager",
        license: "MIT © {year}",
    },
    versions: { v3Hint: "tailwind.config.js", v4Hint: "@plugin in CSS" },
    intro: {
        chip: "Tailwind CSS plugin · v{version}",
        titleStart: "The Bootstrap grid,",
        titleEnd: "for Tailwind.",
        lead: "If you already think in rows and columns, keep doing it. tw-bootstrap-grid adds the familiar 12-column grid, `.row`, `.col-6`, `.offset-2`, `.g-4`, to Tailwind, with RTL support and no opinions about how your components should look.",
        getStarted: "Get started",
        viewOnGithub: "View on GitHub",
        whatYouGet: "What you get",
        features: [
            {
                title: "12-column grid",
                body: "`.row`, `.col`, `.col-auto` and `.col-1` to `.col-12`, just like Bootstrap.",
            },
            {
                title: "Gutters from your theme",
                body: "`.g-*`, `.gx-*` and `.gy-*` use your Tailwind spacing scale, so they match the rest of your design.",
            },
            {
                title: "Offsets",
                body: "`.offset-0` to `.offset-12` to center a column or leave a gap.",
            },
            {
                title: "Row columns",
                body: "`.row-cols-1` to `.row-cols-6` and `.row-cols-auto` size every child from one class on the row.",
            },
            {
                title: "Containers",
                body: "`.container` and `.container-fluid` with gutter-aware padding. Max widths come from Tailwind's own breakpoints.",
            },
            {
                title: "Responsive and RTL",
                body: 'Every class takes Tailwind\'s breakpoint prefixes, like `md:col-6`, and flips correctly with `dir="rtl"`.',
            },
        ],
        note: "It only does layout: no colors, no components, no resets. It adds to Tailwind rather than replacing any of it, so you can mix `col-4` and `flex` on the same page without a second thought.",
    },
    installation: {
        eyebrow: "Getting started",
        title: "Installation",
        description: "Three steps: install the package, register the plugin, start using the classes.",
        step1: "Install the package",
        step2: {
            title: "Register the plugin",
            body: "Pick your Tailwind version in the header and the snippet below follows. Tailwind v4 registers plugins in CSS, v3 in the config file.",
            note: 'In a CommonJS v3 config, `plugins: [require("tw-bootstrap-grid")]` works as well.',
        },
        step3: {
            title: "Use the classes",
            body: "That's it. Use them in your markup like any other Tailwind class. Anything you can do with `sm:`, `md:` or `hover:` works here too.",
        },
        buildStep: {
            title: "You need a build step",
            body: "The plugin runs inside Tailwind's compiler (PostCSS, Vite, Webpack, the Tailwind CLI…). It can't work with the Tailwind Play CDN script, which has no way to load plugins from npm.",
        },
    },
    configuration: {
        eyebrow: "Getting started",
        title: "Configuration",
        description:
            "The defaults match Bootstrap, so you can skip this page. Come back when you want different breakpoints or gutter sizes.",
        breakpoints: {
            title: "Breakpoints",
            body: "The plugin has no breakpoints of its own. Prefixes like `md:col-6` and the max-width of `.container` both come from Tailwind, so changing your screens changes the grid with them.",
        },
        gutters: {
            title: "Gutter sizes",
            body: "Gutters are the space between columns. By default it's `1.5rem` horizontally and `0` vertically. Set it once for everything, or separately for containers and rows. In v3 you pass options to the plugin, in v4 you set CSS variables.",
            tableCaption: "Gutter resolution order",
            priority: "Priority",
            cssVariable: "CSS variable",
            option: "Option",
            notes: "Notes",
            orderNotes: [
                "The most specific value wins.",
                "Shared fallback for both.",
                "The same defaults Bootstrap uses.",
            ],
            defaultVariable: "1.5rem (x) and 0 (y)",
            defaultOption: "built-in default",
            after: "The CSS variables are read at runtime, so in either version you can also override them on any element to change the gutters for just that section. For a single row, use `.g-*`, `.gx-*` and `.gy-*`.",
        },
        containers: {
            title: "Turn off the containers",
            body: "Prefer Tailwind's own `container` alone? Set `generateContainers` to `false` and the plugin stops generating `.container-fluid` and its gutter-aware padding. Rows and columns are unaffected.",
        },
        variablesNote: {
            title: "Why variables in v4?",
            body: "Tailwind v4 can pass simple values like `generateContainers: false;` to a plugin, but not nested objects such as `gutters`. CSS variables cover that case and have the bonus of being overridable per element.",
        },
    },
    classes: {
        eyebrow: "Reference",
        title: "Classes",
        description: "Everything the plugin adds, in one place.",
        tableCaption: "{title} classes",
        scrollableTable: "{title}, scrollable table",
        columns: { name: "Class", what: "What it does", notes: "Notes" },
        groups: [
            {
                title: "Layout",
                rows: [
                    {
                        what: "width: 100%; centered; padding from the gutter",
                        note: "Max width comes from Tailwind's breakpoints.",
                    },
                    { what: "same as .container", note: "Full width at every breakpoint." },
                    {
                        what: "display: flex; flex-wrap: wrap; negative margins",
                        note: "Cancels the outer gutter and lays out its children.",
                    },
                ],
            },
            {
                title: "Columns",
                rows: [
                    { what: "flex: 1 0 0%", note: "Shares the remaining space equally." },
                    { what: "flex: 0 0 auto; width: auto", note: "Sized by its content." },
                    { what: "flex: 0 0 auto; width: n / 12", note: "Takes n of 12 slots." },
                ],
            },
            {
                title: "Offsets and row columns",
                rows: [
                    { what: "margin-inline-start: n / 12", note: "Flips automatically in RTL." },
                    { what: "children get width: 1 / n", note: "Set on the .row, applies to every child." },
                    { what: "children get width: auto", note: "Children are sized by content." },
                ],
            },
            {
                title: "Gutters",
                rows: [
                    { what: "--bs-gutter-x and --bs-gutter-y", note: "Both directions." },
                    { what: "--bs-gutter-x", note: "Horizontal only." },
                    { what: "--bs-gutter-y", note: "Vertical only." },
                ],
            },
        ],
        responsive: {
            title: "Everything is responsive",
            body: "Add a breakpoint prefix to any class above: `md:col-6`, `lg:offset-3`, `sm:row-cols-2`, `xl:g-8`.",
        },
        gutterSteps: {
            title: "Which gutter steps exist?",
            body: "`.g-*`, `.gx-*` and `.gy-*` are built from your spacing theme. In v3 that's every key of `theme.spacing` without a dot (so `g-4` yes, `g-0.5` no). In v4 it's the default scale, `g-0` to `g-96` and `g-px`.",
        },
        alignment: {
            title: "Alignment and order come from Tailwind",
            body: "The plugin doesn't ship its own `justify-*`, `items-*` or `order-*`. A `.row` is a regular flex container, so Tailwind's utilities work on it directly.",
        },
    },
    migrationSummary: {
        eyebrow: "Coming from Bootstrap",
        title: "Migrating from Bootstrap",
        description:
            "The grid works the way you remember. Three things look different: how responsive classes are written, the spacing numbers, and the breakpoint widths.",
        cards: [
            {
                title: "What stays the same",
                body: "The structure: `.container`, `.row`, `.col-*`, `.offset-*`, `.row-cols-*`. Even the CSS variables keep their names, `--bs-gutter-x` and `--bs-gutter-y`, so custom CSS that reads them still works.",
            },
            {
                title: "Prefix, not infix",
                body: "Bootstrap writes `col-md-6`. Tailwind writes `md:col-6`. This is the change you will touch most, and a script can do it for you.",
            },
            {
                title: "Different numbers",
                body: "Gutter and spacing numbers follow Tailwind's scale, so Bootstrap's `g-3` is `g-4` here. Breakpoint widths differ a little too.",
            },
        ],
        ctaBody:
            "The full guide has the class mapping tables, the gutter size changes, how to match Bootstrap's breakpoints and a command that converts your markup.",
        ctaButton: "Read the migration guide",
    },
    examples: {
        eyebrow: "Usage",
        title: "Examples",
        description:
            "Every example is live. Edit the HTML on the left and the preview updates as you type. If you know the [Bootstrap grid](https://getbootstrap.com/docs/5.3/layout/grid/), this will feel familiar.",
        preview: "Preview",
        editable: "Editable HTML",
        reset: "Reset",
        rtl: "RTL",
        previewWidth: "Preview width",
        devices: { fit: "Fit to panel", phone: "Phone, 375px", tablet: "Tablet, 768px", desktop: "Desktop, 1280px" },
        previewTitle: "Live preview: {title}",
        editorLabel: "Editable HTML, {title}",
        editorLoading: "Editable HTML, {title} (loading the editor)",
        items: {
            basic: {
                title: "A basic layout",
                description:
                    "A `.container` centers your content, a `.row` lines columns up side by side, and each `.col-*` takes that many of the 12 available slots. Two `col-6` columns split the row in half.",
                tip: "Columns always wrap. Anything past 12 slots in a single row drops down to the next line, which is handy for card lists.",
            },
            "equal-and-auto": {
                title: "Equal and auto-width columns",
                description:
                    "A bare `.col` shares whatever space is left, so three of them are three equal columns. `.col-auto` sizes itself to its content, and the neighbouring `.col` takes the rest.",
            },
            responsive: {
                title: "Responsive columns",
                description:
                    "Every class takes Tailwind's breakpoint prefixes. Start mobile-first with `col-12`, then change the width at larger screens with `sm:`, `md:`, `lg:` and so on. Use the width buttons above the preview to see each breakpoint kick in.",
                tip: "The preview is a real viewport. It shows the width and breakpoint in the corner, and the phone, tablet and desktop buttons switch it, so `md:` and `lg:` apply just as they would on that screen.",
            },
            gutters: {
                title: "Gutters",
                description:
                    "Gutters are the gaps between columns. `.g-*` sets both directions, `.gx-*` only horizontal and `.gy-*` only vertical. The numbers come from Tailwind's spacing scale, so `g-4` is the same step as `p-4`.",
                tip: "Put gutter classes on the `.row`. Use `g-0` to remove the gaps completely.",
            },
            offset: {
                title: "Offsets",
                description:
                    "`.offset-*` pushes a column over by that many slots. It's the quick way to center a column or leave a gap. Offsets work with breakpoint prefixes too, like `lg:offset-3`.",
                tip: "Offsets use `margin-inline-start`, so they push from the correct side when the page is right-to-left. Try the RTL button above the preview.",
            },
            "row-cols": {
                title: "Row columns",
                description:
                    "When every column is the same size, set it once on the row instead of on each child. `.row-cols-1` to `.row-cols-6` give each child an equal share, and `.row-cols-auto` sizes them by content.",
                tip: "Combine it with breakpoints to change the column count as the screen grows, for example `row-cols-2 lg:row-cols-3`.",
            },
            nesting: {
                title: "Nesting",
                description:
                    "A column can hold its own `.row`. The nested row starts a fresh 12-slot grid inside the column, so you can split a space as many times as you need.",
            },
            "alignment-and-order": {
                title: "Alignment and order",
                description:
                    "A `.row` is a normal flex container, so Tailwind's own flexbox utilities work on it: `items-*`, `justify-*`, `self-*` and `order-*`. The plugin doesn't redefine them.",
                tip: "`order-2 md:order-1` style swaps are a common pattern: stack in one order on phones, flip them on larger screens.",
            },
            rtl: {
                title: "Right-to-left",
                description:
                    'Set `dir="rtl"` on the container, or on `<html>` for the whole page, and the grid flows from the right. This is the one to use for Arabic, Persian, Hebrew and other RTL languages.',
                tip: "Nothing to configure. The row's gutters are symmetric and offsets use logical properties, so they flip on their own.",
            },
        },
    },
    rtl: {
        eyebrow: "Good to know",
        title: "Right-to-left",
        description: 'Add `dir="rtl"` and the grid mirrors itself. There is nothing to configure.',
        wholePage: "For the whole page",
        oneSection: "For one section",
        why: {
            title: "Why it just works",
            body: "Offsets use `margin-inline-start`, and the row's negative margins and the columns' padding are symmetric, so they flip on their own. Use the RTL button on any example above to see it.",
        },
    },
    faq: {
        eyebrow: "Good to know",
        title: "Frequently asked questions",
        description: "Answers to the questions that come up most.",
        items: [
            {
                question: "Does it replace Tailwind's container?",
                answer: "No. Tailwind's `container` keeps providing the per-breakpoint max widths. The plugin adds centering and gutter-aware padding on top. If you'd rather not have that, set `generateContainers` to `false`.",
            },
            {
                question: "Can I mix it with normal Tailwind utilities?",
                answer: "Yes, that's the idea. A `.row` is a flex container, so `items-center`, `justify-between`, `order-2`, `mt-4` and the rest apply to it and to its columns as usual.",
            },
            {
                question: "Why does my live preview ignore a class?",
                answer: "Tailwind only generates CSS for classes it can find in your source files. In your own project that's automatic. On this page the editable examples can contain anything, so the demo pre-generates every plugin class and breakpoint.",
            },
            {
                question: "Can I use it with the Tailwind CDN?",
                answer: "No. The CDN script can't load plugins from npm. Use a build setup such as Vite, PostCSS, Webpack or the Tailwind CLI.",
            },
            {
                question: "Which versions are supported?",
                answer: "Tailwind v3.4 and v4, on Node 18 or newer. The package ships ESM and CommonJS builds with TypeScript types.",
            },
            {
                question: "I'm moving from Bootstrap. How do I migrate?",
                answer: "The class names are close: `col-md-6` becomes `md:col-6`, and gutter numbers follow Tailwind's scale. The [migration guide](/migrate-from-bootstrap/) has the full mapping and a command that converts your markup.",
            },
        ],
        feedback: {
            title: "Found a bug or have an idea?",
            body: "Please [open an issue](https://github.com/bawerbozdag/tw-bootstrap-grid/issues/new) or send a [pull request](https://github.com/bawerbozdag/tw-bootstrap-grid/pulls) on GitHub. Small fixes and documentation improvements are very welcome.",
        },
    },
    guide: {
        breadcrumb: "Breadcrumb",
        breadcrumbCurrent: "Migrating from Bootstrap",
        eyebrow: "Guide",
        h1: "Migrating a Bootstrap grid to Tailwind CSS",
        lead: "Moving a layout from Bootstrap's grid to Tailwind takes five steps and, for most of it, one command. This guide covers what changes, how the classes map across, and the few things a script can't do for you.",
        stepsTitle: "Migration in five steps",
        steps: [
            {
                name: "Install the plugin",
                text: "Install tw-bootstrap-grid and register it in your Tailwind setup. The [installation guide](/#installation) has the snippets for Tailwind v3 and v4.",
            },
            {
                name: "Match Bootstrap's breakpoints (optional)",
                text: "If you want layouts to switch at the same widths as before, set Tailwind's screens to 576, 768, 992, 1200 and 1400px. See [the breakpoints](#breakpoints) below.",
            },
            {
                name: "Rename the classes",
                text: "Commit your work, then run the [Perl command](#bulk-rename) below. It renumbers the gutters and turns Bootstrap's `col-md-6` into `md:col-6`.",
            },
            {
                name: "Fix what the command can't",
                text: "Change spacing utilities such as `mb-3` to `mb-4`, swap Bootstrap's display and flex utilities for Tailwind's, and replace classes like `container-md`.",
            },
            {
                name: "Remove Bootstrap's CSS and check the result",
                text: "Take out the Bootstrap stylesheet, then look through your pages at phone, tablet and desktop widths.",
            },
        ],
        changesTitle: "What changes, and what doesn't",
        beforeAfterTitle: "The same layout, before and after",
        bootstrap5: "Bootstrap 5",
        classMappingTitle: "Class mapping",
        tables: {
            responsive: {
                caption: "Responsive classes",
                notes: [
                    "Tailwind puts the breakpoint in front, as a prefix.",
                    "Same for the equal-width column.",
                    "",
                    "",
                    "",
                    "The number changes too, see the gutter sizes below.",
                    "Bootstrap's xxl is called 2xl in Tailwind.",
                    "order-* is Tailwind's own, and it goes up to 12.",
                ],
            },
            gutters: { caption: "Gutter sizes" },
            utilities: {
                caption: "Utilities that come from Tailwind",
                notes: ["", "", "", "", "", "Spacing utilities shift the same way as gutters."],
            },
            bootstrap: "Bootstrap",
            here: "Here",
            notes: "Notes",
            size: "Size",
        },
        breakpoints: {
            title: "Match Bootstrap's breakpoints",
            before: "Bootstrap's breakpoints are 576, 768, 992, 1200 and 1400px. Tailwind's are 640, 768, 1024, 1280 and 1536px, so a layout can switch a little earlier or later after migrating. If that matters, set Tailwind's screens to Bootstrap's values.",
            after: "Tailwind's `container` is as wide as the breakpoint it sits on, so its max widths become 576, 768, 992, 1200 and 1400px. That is close to Bootstrap's 540, 720, 960, 1140 and 1320px, but not identical.",
        },
        bulk: {
            title: "Rename in bulk",
            body: "This Perl command renumbers the gutters and turns `col-md-6` into `md:col-6`, `col-xxl-4` into `2xl:col-4` and the old `no-gutters` into `g-0`. It rewrites the files in place, so commit first and read the diff afterwards.",
            warning: {
                title: "Run it once, and check the result",
                body: "Running it a second time would renumber the gutters again. It also only knows the class names above, so spacing utilities such as `mb-3` or `p-3` need a manual pass, and the pattern matches any text that looks like a class, including inside comments.",
            },
        },
        notIncluded: {
            title: "What doesn't carry over",
            body: "The plugin only adds `.container` and `.container-fluid`, so Bootstrap's `.container-sm`, `.container-md` and the other responsive containers are not included. Build them with Tailwind's `max-w-*` utilities if you need them. Bootstrap's other utilities (display, flex, spacing, text) are replaced by Tailwind's own, as in the last table above.",
        },
        nextTitle: "Keep going",
        next: [
            { title: "Configuration", body: "Gutter sizes, breakpoints and turning off the containers." },
            { title: "Class reference", body: "Every class the plugin adds, in one place." },
            { title: "Examples", body: "Editable layouts with a phone, tablet and desktop preview." },
        ],
    },
};

export type Messages = IMessages;
export default en;
