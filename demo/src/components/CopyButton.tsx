import { useEffect, useRef, useState } from "react";
import { LucideCheck, LucideCopy, LucideX } from "lucide-react";
import clsx from "clsx";

interface ICopyButtonProps {
    text: string;
    className?: string;
    label?: string;
    // hides the word on phones and keeps just the icon, for crowded bars
    compact?: boolean;
}

type TCopyState = "idle" | "copied" | "failed";

const CopyButton = ({ text, className, label = "Copy", compact }: ICopyButtonProps) => {
    const [state, setState] = useState<TCopyState>("idle");
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => () => clearTimeout(timer.current), []);

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(text);

            setState("copied");
        } catch {
            setState("failed");
        }

        clearTimeout(timer.current);

        timer.current = setTimeout(() => setState("idle"), 1800);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            title={label}
            className={clsx(
                "inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-xs transition",
                state === "idle" && "text-muted hover:text-accent",
                state === "copied" && "text-emerald-600 dark:text-emerald-400",
                state === "failed" && "text-red-600 dark:text-red-400",
                className,
            )}
        >
            {state === "copied" ? (
                <LucideCheck size={14} />
            ) : state === "failed" ? (
                <LucideX size={14} />
            ) : (
                <LucideCopy size={14} />
            )}
            <span aria-live="polite" className={compact ? "sr-only sm:not-sr-only" : undefined}>
                {state === "copied" ? "Copied" : state === "failed" ? "Failed" : label}
            </span>
        </button>
    );
};

export default CopyButton;
