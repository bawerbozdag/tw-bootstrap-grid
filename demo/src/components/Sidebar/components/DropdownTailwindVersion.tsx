import { useEffect, useRef, useState, type DetailedHTMLProps, type HTMLAttributes } from "react";
import { LucideCheck, LucideChevronDown } from "lucide-react";
import type { IAppContext } from "@/contexts/AppContext";
import clsx from "clsx";
import useApp from "@/hooks/useApp";

interface IDropdownItem {
    id: IAppContext["tailwindVersion"];
    label: string;
    description: string;
}

const DROPDOWN_ITEMS: IDropdownItem[] = [
    {
        id: "v4",
        label: "Tailwind v4+",
        description: "Latest 4.x generation",
    },
    {
        id: "v3",
        label: "Tailwind v3.4.x",
        description: "Stable 3.x series",
    },
];

const DropdownTailwindVersion = ({
    className,
    ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const { tailwindVersion, setTailwindVersion } = useApp();

    const wrapRef = useRef<HTMLDivElement | null>(null);
    const refToggle = useRef<HTMLButtonElement | null>(null);

    const [open, setOpen] = useState(false);

    const currentItem = DROPDOWN_ITEMS.find((item) => item.id === tailwindVersion);

    useEffect(() => {
        if (!open) {
            return;
        }

        const onDocClick = (e: MouseEvent) => {
            if (!wrapRef.current || wrapRef.current.contains(e.target as Node)) {
                return;
            }

            setOpen(false);
        };

        document.addEventListener("mousedown", onDocClick);

        // cleanup
        return () => document.removeEventListener("mousedown", onDocClick);

        //
    }, [open]);

    return (
        <div ref={wrapRef} className={clsx("dropdown-tailwind-version", className)} {...props}>
            <span className="sr-only">Select Tailwind version</span>

            <button
                type="button"
                className={clsx("dropdown-tailwind-version__toggle", open && "dropdown-tailwind-version__toggle--open")}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label="Select Tailwind version"
                onClick={() => setOpen(!open)}
                ref={refToggle}
            >
                <span className="dropdown-tailwind-version__status" aria-hidden>
                    <span className="dropdown-tailwind-version__status-dot" />
                </span>
                <span
                    className="truncate"
                    style={{
                        maxWidth: 120,
                    }}
                >
                    {currentItem?.label ?? DROPDOWN_ITEMS[0].label}
                </span>
                <LucideChevronDown className="dropdown-tailwind-version__icon" size={16} />
            </button>

            <div
                role="menu"
                aria-label="Tailwind versions"
                className={clsx("dropdown-tailwind-version__menu", open && "dropdown-tailwind-version__menu--open")}
            >
                {DROPDOWN_ITEMS.map((item) => {
                    const selected = item.id === tailwindVersion;

                    return (
                        <button
                            key={item.id}
                            role="menuitemradio"
                            aria-checked={selected}
                            onClick={() => {
                                setTailwindVersion(item.id);
                                setOpen(false);
                            }}
                            className={clsx(
                                "dropdown-tailwind-version__item",
                                selected && "dropdown-tailwind-version__item--selected",
                            )}
                        >
                            <div className="dropdown-tailwind-version__item-inner">
                                <div className="dropdown-tailwind-version__item-badge">
                                    {item.id === "v4" ? (
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                                            <path
                                                d="M4 6h16M7 12h13M10 18h10"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                                            <path
                                                d="M4 12h16M4 17h10M4 7h14"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    )}
                                </div>

                                <div className="dropdown-tailwind-version__item-main">
                                    <div className="dropdown-tailwind-version__item-row">
                                        <span className="dropdown-tailwind-version__item-label">{item.label}</span>
                                        <LucideCheck size={16} />
                                    </div>
                                    <p className="dropdown-tailwind-version__item-description">{item.description}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default DropdownTailwindVersion;
