import DropdownTailwindVersion from "./Sidebar/components/DropdownTailwindVersion";
import useApp from "@/hooks/useApp";
import CopyButton from "./CopyButton";

const QUICK_EXAMPLE = `
<div class="container">
    <div class="row gy-6">
        <div class="col-12 sm:col-6 md:col-4">Card 1</div>
        <div class="col-12 sm:col-6 md:col-4">Card 2</div>
        <div class="col-12 sm:col-6 md:col-4">Card 3</div>
    </div>
</div>
`.trim();

const SectionIntroduction = () => {
    const { tailwindVersion } = useApp();

    return (
        <section
            id="introduction"
            className="container text-center py-12 border-b border-slate-300"
            aria-labelledby="section-introduction-title"
            aria-describedby="section-introduction-description"
        >
            <h1
                id="section-introduction-title"
                className="mb-3 text-4xl font-bold tracking-tight bg-gradient-to-r from-sky-600/90 via-indigo-500 to-purple-600 bg-clip-text text-transparent leading-13"
            >
                tw-bootstrap-grid
            </h1>

            <p id="section-introduction-description" className="mb-4 mx-auto max-w-xl leading-relaxed text-slate-600">
                A lightweight and intuitive grid system that brings the simplicity of Bootstrap’s layout to Tailwind
                CSS. Fully compatible with Tailwind v3.4.x and v4+.
            </p>

            <span
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                aria-live="polite"
            >
                <span className="inline-block size-2 rounded-full bg-indigo-500" aria-hidden="true" />
                Currently viewing:
                <strong className="font-medium text-indigo-700">
                    {tailwindVersion === "v3" ? "Tailwind v3.4.x" : "Tailwind v4+"}
                </strong>
            </span>

            <DropdownTailwindVersion className="max-w-sm mx-auto block lg:hidden" />

            <p className="mb-4 mx-auto max-w-xl text-sm text-slate-500">
                Installation steps differ between Tailwind v3.4.x and v4+.
                <span className="hidden lg:inline"> Use the version selector in the sidebar to switch examples.</span>
            </p>

            <div className="mb-12 flex items-center justify-center gap-3">
                <a href="#installation" className="btn btn-primary">
                    Get Started
                </a>
                <a href="#playground" className="btn btn-secondary">
                    Try Playground
                </a>
            </div>

            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow mb-12">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Quick example</span>
                    <CopyButton text={QUICK_EXAMPLE} iconSize={18} />
                </div>
                <div className="container mb-4">
                    <div className="row text-slate-700">
                        <div className="col-12 sm:col-6 md:col-4 bg-indigo-50 border border-indigo-200 p-6">Card 1</div>
                        <div className="col-12 sm:col-6 md:col-4 bg-indigo-50 border border-indigo-200 p-6">Card 2</div>
                        <div className="col-12 sm:col-6 md:col-4 bg-indigo-50 border border-indigo-200 p-6">Card 3</div>
                    </div>
                </div>
                <pre className="overflow-x-auto rounded-lg bg-slate-900 border border-slate-700 p-4 text-left text-sm text-slate-50 mb-4">
                    <code>{QUICK_EXAMPLE}</code>
                </pre>
                <p className="text-sm text-slate-500">
                    Bootstrap-like syntax with responsive column classes, powered by Tailwind utilities.
                </p>
            </div>

            <div className="text-left">
                <h2 className="mb-3 text-lg font-semibold text-slate-900">Design Philosophy</h2>
                <p className="mb-2 text-sm text-slate-600 ">
                    <strong>tw-bootstrap-grid</strong> bridges two worlds, the structured, reliable grid system of
                    Bootstrap and the utility-first flexibility of Tailwind. It focuses solely on layout, providing a
                    clean, predictable, and minimal grid layer without extra bloat or visual opinions.
                </p>
                <p className="text-sm text-slate-600">
                    Whether you're building quick prototypes or production-grade dashboards, this plugin gives you the
                    power of a proven 12-column grid while keeping the expressive Tailwind syntax you already know.
                </p>
            </div>
        </section>
    );
};

export default SectionIntroduction;
