import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { LucideCheck, LucideChevronDown } from "lucide-react";
import clsx from "clsx";
import useApp from "@/hooks/useApp";
import type { TailwindVersion } from "@/contexts/AppContext";

const OPTIONS: { value: TailwindVersion; label: string; short: string; hint: string }[] = [
    { value: "v3", label: "Tailwind v3.4", short: "v3.4", hint: "tailwind.config.js" },
    { value: "v4", label: "Tailwind v4", short: "v4", hint: "@plugin in CSS" },
];

// a styled replacement for <select>: same keyboard behaviour (arrows, Home/End, Enter, Escape)
const VersionSelect = () => {
    const { tailwindVersion, setTailwindVersion } = useApp();

    const [open, setOpen] = useState(false);
    const [highlight, setHighlight] = useState(0);

    const rootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const listId = useId();

    const selectedIndex = OPTIONS.findIndex((option) => option.value === tailwindVersion);
    const selected = OPTIONS[selectedIndex];

    // close when clicking anywhere outside
    useEffect(() => {
        if (!open) {
            return;
        }

        const onPointerDown = (event: PointerEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("pointerdown", onPointerDown);

        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [open]);

    const openList = () => {
        setHighlight(selectedIndex);
        setOpen(true);
    };

    const choose = (index: number) => {
        setTailwindVersion(OPTIONS[index].value);
        setOpen(false);
        buttonRef.current?.focus();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        const last = OPTIONS.length - 1;

        switch (event.key) {
            case "ArrowDown":
            case "ArrowUp": {
                event.preventDefault();

                if (!open) {
                    return openList();
                }

                const step = event.key === "ArrowDown" ? 1 : -1;

                return setHighlight((current) => (current + step + OPTIONS.length) % OPTIONS.length);
            }
            case "Home":
            case "End": {
                if (open) {
                    event.preventDefault();
                    setHighlight(event.key === "Home" ? 0 : last);
                }

                return;
            }
            case "Enter":
            case " ": {
                if (open) {
                    // stop the button's own click from toggling the list back open
                    event.preventDefault();
                    choose(highlight);
                }

                return;
            }
            case "Escape": {
                if (open) {
                    event.preventDefault();
                    setOpen(false);
                }

                return;
            }
            case "Tab":
                return setOpen(false);
        }
    };

    return (
        <div ref={rootRef} className="relative">
            <button
                ref={buttonRef}
                type="button"
                role="combobox"
                aria-label="Tailwind version"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={listId}
                aria-activedescendant={open ? `${listId}-${highlight}` : undefined}
                onClick={() => (open ? setOpen(false) : openList())}
                onKeyDown={handleKeyDown}
                className="inline-flex h-8 min-w-[4.5rem] cursor-pointer sm:min-w-32 items-center justify-between gap-2 rounded-lg border bg-surface pl-3 pr-2.5 text-xs font-medium text-ink transition hover:border-accent"
            >
                <span className="sm:hidden">{selected.short}</span>
                <span className="hidden sm:inline">{selected.label}</span>
                <LucideChevronDown
                    size={14}
                    aria-hidden="true"
                    className={clsx(
                        "text-muted transition-transform duration-200 motion-reduce:transition-none",
                        open && "rotate-180",
                    )}
                />
            </button>

            <ul
                id={listId}
                role="listbox"
                aria-label="Tailwind version"
                className={clsx(
                    "absolute right-0 top-full z-40 mt-2 w-52 origin-top-right rounded-xl border bg-surface p-1 shadow-lg",
                    "transition-[opacity,transform,visibility] duration-150 motion-reduce:transition-none",
                    open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0",
                )}
            >
                {OPTIONS.map((option, index) => (
                    <li
                        key={option.value}
                        id={`${listId}-${index}`}
                        role="option"
                        aria-selected={option.value === tailwindVersion}
                        onClick={() => choose(index)}
                        onMouseMove={() => setHighlight(index)}
                        className={clsx(
                            "flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2",
                            highlight === index ? "bg-accent-soft" : "",
                        )}
                    >
                        <span className="min-w-0">
                            <span
                                className={clsx(
                                    "block text-sm font-medium",
                                    highlight === index || option.value === tailwindVersion
                                        ? "text-accent"
                                        : "text-ink",
                                )}
                            >
                                {option.label}
                            </span>
                            <span className="block font-mono text-[11px] text-muted">{option.hint}</span>
                        </span>
                        {option.value === tailwindVersion && (
                            <LucideCheck size={16} aria-hidden="true" className="shrink-0 text-accent" />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VersionSelect;
