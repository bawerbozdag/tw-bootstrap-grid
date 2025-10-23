import DropdownTailwindVersion from "./Sidebar/components/DropdownTailwindVersion";
import useApp from "@/hooks/useApp";
import CopyButton from "./CopyButton";
import { LucidePalette, LucideSparkles } from "lucide-react";
import FeaturesList from "./FeaturesList";

const QUICK_EXAMPLE = `
<div class="container">
  <div class="row">
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
            className="container py-16 px-4 border-b border-slate-300/70"
            aria-labelledby="section-introduction-title"
            aria-describedby="section-introduction-description"
        >
            <h1
                id="section-introduction-title"
                className="text-nowrap mb-3 text-4xl font-bold inline-block tracking-tight bg-gradient-to-r from-sky-600/90 via-indigo-500 to-purple-600 bg-clip-text text-transparent leading-13"
            >
                tw-bootstrap-grid
            </h1>

            <p id="section-introduction-description" className="mb-4 leading-relaxed text-slate-600">
                A lightweight and intuitive grid system that brings the simplicity of Bootstrap’s layout to Tailwind
                CSS. Fully compatible with Tailwind v3.4.x and v4+.
            </p>

            <div className="mb-6 flex items-center gap-3">
                <a href="#installation" className="btn btn-primary">
                    Get Started
                </a>
                <a href="#playground" className="btn btn-secondary">
                    Try Playground
                </a>
            </div>

            <div className="mb-6">
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
                <DropdownTailwindVersion className="max-w-sm mb-1 block lg:hidden" />
                <p className="text-sm text-slate-500">
                    Installation steps differ between Tailwind v3.4.x and v4+.
                    <span className="hidden lg:inline">
                        {" "}
                        Use the version selector in the sidebar to switch examples.
                    </span>
                </p>
            </div>

            <div className="max-w-4xl mb-6 rounded-2xl border border-slate-200/70 bg-white/60 p-5 shadow">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Quick example</span>
                    <CopyButton text={QUICK_EXAMPLE} iconSize={18} />
                </div>
                <p className="text-xs text-slate-500 mb-4">
                    Tip: Add{" "}
                    <code
                        dir="ltr"
                        className="px-1.5 py-0.5 rounded-md bg-slate-200 text-slate-700 font-mono text-[11px]"
                    >
                        dir="rtl"
                    </code>{" "}
                    on a parent container to see RTL-aware offsets and ordering.
                </p>
                <div className="row px-2.5 mb-4 text-slate-700">
                    <div className="col-12 sm:col-6 md:col-4 bg-indigo-50 border border-indigo-200 p-6">Card 1</div>
                    <div className="col-12 sm:col-6 md:col-4 bg-indigo-50 border border-indigo-200 p-6">Card 2</div>
                    <div className="col-12 sm:col-6 md:col-4 bg-indigo-50 border border-indigo-200 p-6">Card 3</div>
                </div>
                <pre className="whitespace-pre overflow-x-auto rounded-lg bg-slate-900 border border-slate-700 py-4 px-6 text-sm text-slate-50 mb-4">
                    <code>
                        <span className="block">
                            <span className="text-sky-400">&lt;div</span> <span className="text-amber-300">class</span>
                            <span className="text-white">="container"</span>
                            <span className="text-sky-400">&gt;</span>
                        </span>
                        <span className="block pl-4">
                            <span className="text-sky-400">&lt;div</span> <span className="text-amber-300">class</span>
                            <span className="text-white">="row"</span>
                            <span className="text-sky-400">&gt;</span>
                        </span>
                        <span className="block pl-8">
                            <span className="text-sky-400">&lt;div</span> <span className="text-amber-300">class</span>
                            <span className="text-white">="col-12 sm:col-6 md:col-4"</span>
                            <span className="text-sky-400">&gt;</span>
                            <span className="text-slate-100">Card 1</span>
                            <span className="text-sky-400">&lt;/div&gt;</span>
                        </span>
                        <span className="block pl-8">
                            <span className="text-sky-400">&lt;div</span> <span className="text-amber-300">class</span>
                            <span className="text-white">="col-12 sm:col-6 md:col-4"</span>
                            <span className="text-sky-400">&gt;</span>
                            <span className="text-slate-100">Card 2</span>
                            <span className="text-sky-400">&lt;/div&gt;</span>
                        </span>
                        <span className="block pl-8">
                            <span className="text-sky-400">&lt;div</span> <span className="text-amber-300">class</span>
                            <span className="text-white">="col-12 sm:col-6 md:col-4"</span>
                            <span className="text-sky-400">&gt;</span>
                            <span className="text-slate-100">Card 3</span>
                            <span className="text-sky-400">&lt;/div&gt;</span>
                        </span>
                        <span className="block pl-4">
                            <span className="text-sky-400">&lt;/div&gt;</span>
                        </span>
                        <span className="block">
                            <span className="text-sky-400">&lt;/div&gt;</span>
                        </span>
                    </code>
                </pre>
                <p className="text-sm text-slate-500">
                    Bootstrap-like syntax with responsive column classes, powered by Tailwind utilities.
                </p>
            </div>

            <div className="py-6 border-y border-slate-300/70">
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-800 mb-4">
                    <LucidePalette className="text-amber-500 mt-0.5" size={24} />
                    Design Philosophy
                </h2>
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

            <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-800 mb-3 pt-6">
                <LucideSparkles size={24} className="text-indigo-500 mt-0.5" />
                Features
            </h2>
            <p className="mb-6 text-sm text-slate-600">
                Explore the core utilities that make responsive layouts simple, predictable, and flexible.
            </p>
            <FeaturesList />
        </section>
    );
};

export default SectionIntroduction;
