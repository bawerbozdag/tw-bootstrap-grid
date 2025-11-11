import { LucideSparkles } from "lucide-react";
import DropdownTailwindVersion from "@/components/Sidebar/components/DropdownTailwindVersion";
import FeaturesList from "@/components/FeaturesList";
import useApp from "@/hooks/useApp";

const SectionIntroduction = () => {
    const { tailwindVersion } = useApp();

    return (
        <section
            id="introduction"
            className="container py-16 px-4 border-b"
            aria-labelledby="section-introduction-title"
            aria-describedby="section-introduction-description"
        >
            <h1
                id="section-introduction-title"
                className="text-nowrap mb-3 text-4xl font-bold inline-block tracking-tight bg-gradient-to-r from-sky-600/90 via-indigo-500 to-purple-600 bg-clip-text text-transparent leading-13"
            >
                tw-bootstrap-grid
            </h1>

            <p id="section-introduction-description" className="mb-4 leading-relaxed">
                A lightweight and intuitive grid system that brings the simplicity of Bootstrap's layout to Tailwind
                CSS. Fully compatible with Tailwind v3.4.x and v4+.
            </p>

            <div className="mb-6 flex items-center gap-3">
                <a
                    href="#installation"
                    className="btn btn-primary"
                    onClick={(e) => {
                        e.preventDefault();

                        const element = document.querySelector("section#installation");

                        if (!element) {
                            return;
                        }

                        return element.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Get Started
                </a>
                {/* <a
                    href="#playground"
                    className="btn btn-secondary"
                    onClick={(e) => {
                        e.preventDefault();

                        const element = document.querySelector("section#playground");

                        if (!element) {
                            return;
                        }

                        return element.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Try Playground
                </a> */}
            </div>

            <div className="mb-8 border-b pb-8">
                <span
                    className="mb-4 inline-flex items-center gap-2 rounded-full border bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    aria-live="polite"
                    role="status"
                >
                    <span className="inline-block size-2 rounded-full bg-indigo-500" aria-hidden="true" />
                    Currently viewing:
                    <strong className="font-medium text-indigo-700 dark:text-indigo-400">
                        {tailwindVersion === "v3" ? "Tailwind v3.4.x" : "Tailwind v4+"}
                    </strong>
                </span>
                <DropdownTailwindVersion className="mb-1 block xl:hidden" />
                <p className="text-sm mb-2">
                    Installation steps differ between Tailwind v3.4.x and v4+.
                    <span className="hidden lg:inline">
                        {" "}
                        Use the version selector in the sidebar to switch examples.
                    </span>
                </p>
                <p className="mb-2 text-sm">
                    <strong>tw-bootstrap-grid</strong> bridges two worlds, the structured, reliable grid system of
                    Bootstrap and the utility-first flexibility of Tailwind. It focuses solely on layout, providing a
                    clean, predictable, and minimal grid layer without extra bloat or visual opinions.
                </p>
                <p className="text-sm">
                    Whether you're building quick prototypes or production-grade dashboards, this plugin gives you the
                    power of a proven 12-column grid while keeping the expressive Tailwind syntax you already know.
                </p>
            </div>

            <h2 className="mb-3">
                <LucideSparkles size={24} className="text-indigo-500 dark:text-indigo-400 mt-0.5" />
                Features
            </h2>
            <p className="mb-6">
                Explore the core utilities that make responsive layouts simple, predictable, and flexible.
            </p>
            <FeaturesList />
        </section>
    );
};

export default SectionIntroduction;
