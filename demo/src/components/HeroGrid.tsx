import { useEffect, useState } from "react";
import clsx from "clsx";

// each layout is a list of column spans that add up to 12
const LAYOUTS = [[12], [6, 6], [4, 4, 4], [3, 6, 3], [8, 4], [2, 8, 2], [3, 3, 3, 3]];

// these full class names exist so Tailwind's scanner keeps them in the CSS
const COL_CLASS: Record<number, string> = {
    2: "col-2",
    3: "col-3",
    4: "col-4",
    6: "col-6",
    8: "col-8",
    12: "col-12",
};

const HeroGrid = () => {
    const [index, setIndex] = useState(2);

    useEffect(() => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const timer = setInterval(() => setIndex((current) => (current + 1) % LAYOUTS.length), 2200);

        return () => clearInterval(timer);
    }, []);

    const layout = LAYOUTS[index];

    return (
        <div className="panel overflow-hidden p-5 sm:p-6" aria-hidden="true">
            {/* the twelve columns of the grid */}
            <div className="row gx-2 mb-3">
                {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className="col-1">
                        <div className="h-7 rounded-sm bg-guide" />
                    </div>
                ))}
            </div>

            {/* a layout built with the plugin's own classes */}
            <div className="row gx-2 gy-3">
                {layout.map((span, i) => (
                    <div key={`${index}-${i}`} className={clsx("hero-col", COL_CLASS[span])}>
                        <div className="flex h-20 items-center justify-center rounded-md bg-accent font-mono text-xs font-medium text-accent-ink">
                            col-{span}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroGrid;
