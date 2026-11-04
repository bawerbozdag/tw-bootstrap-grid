import type { ReactNode } from "react";
import { LucideInfo, LucideLightbulb, LucideTriangleAlert } from "lucide-react";
import clsx from "clsx";

interface ICalloutProps {
    kind?: "note" | "tip" | "warning";
    title?: string;
    children: ReactNode;
    className?: string;
}

const ICONS = {
    note: LucideInfo,
    tip: LucideLightbulb,
    warning: LucideTriangleAlert,
};

const Callout = ({ kind = "note", title, children, className }: ICalloutProps) => {
    const Icon = ICONS[kind];

    return (
        <aside
            className={clsx(
                "flex gap-3 rounded-xl border p-4 text-sm leading-relaxed",
                kind === "warning" ? "border-amber-500/40 bg-amber-500/10" : "bg-surface",
                className,
            )}
        >
            <Icon
                size={18}
                className={clsx(
                    "mt-0.5 shrink-0",
                    kind === "warning" ? "text-amber-600 dark:text-amber-400" : "text-accent",
                )}
            />
            <div className="min-w-0">
                {title && <p className="mb-1 font-semibold">{title}</p>}
                <div className="text-muted [&_strong]:text-ink">{children}</div>
            </div>
        </aside>
    );
};

export default Callout;
