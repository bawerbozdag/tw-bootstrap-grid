import { useEffect, useRef, useState } from "react";
import srcLogo from "@/assets/images/logo.png";
import useApp from "@/hooks/useApp";
import Logo from "../Logo";

const Navbar = () => {
    return (
        <header id="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Logo />
                </div>
                <DropdownTailwindVersion />
            </div>
        </header>
    );
};

const DropdownTailwindVersion = () => {
    const { tailwindVersion, setTailwindVersion } = useApp();

    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement | null>(null);

    const items = [
        {
            id: "v3",
            label: "Tailwind v3.4.x",
            description: "Stable 3.x series",
        },
        {
            id: "v4",
            label: "Tailwind v4+",
            description: "Latest 4.x generation",
        },
    ];

    const current = items.find((i) => i.id === tailwindVersion);

    // dışarı tıklayınca kapat
    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (!open) return;
            const t = e.target as Node;
            if (wrapRef.current && !wrapRef.current.contains(t)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, [open]);

    return (
        <div ref={wrapRef} className="relative">
            <span className="sr-only" id="tw-version-label">
                Select Tailwind version
            </span>

            <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                aria-labelledby="tw-version-label"
                onClick={() => setOpen((s) => !s)}
                className={[
                    "group inline-flex items-center gap-2",
                    "rounded-xl border border-indigo-300/70 bg-white/90 px-3 py-2 text-sm font-medium text-indigo-700 shadow-sm outline-none",
                    "transition hover:border-indigo-400 hover:shadow-md",
                    "focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:border-indigo-400",
                    "active:scale-[0.99]",
                ].join(" ")}
            >
                <span className="relative top-[0.5px] inline-flex h-2.5 w-2.5 items-center justify-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-500/90 ring-2 ring-indigo-300/50" />
                </span>
                <span>{current?.label ?? "Tailwind"}</span>
                <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 transform opacity-70 text-indigo-600 transition group-hover:opacity-100 ${
                        open ? "rotate-180" : "rotate-0"
                    }`}
                >
                    <path
                        d="M5.5 7.5l4.5 4.5 4.5-4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Menu */}
            <div
                role="menu"
                aria-label="Tailwind versions"
                className={[
                    "absolute right-0 mt-2 w-64 origin-top-right rounded-2xl border border-indigo-200/60 bg-white/95 p-1.5 shadow-xl backdrop-blur-sm",
                    "ring-1 ring-black/5",
                    "transition will-change-transform",
                    open
                        ? "scale-100 opacity-100 duration-150 ease-out"
                        : "pointer-events-none scale-95 opacity-0 duration-100 ease-in",
                ].join(" ")}
            >
                {items.map((it) => {
                    const selected = it.id === tailwindVersion;

                    return (
                        <button
                            key={it.id}
                            role="menuitemradio"
                            aria-checked={selected}
                            onClick={() => setTailwindVersion(it.id)}
                            className={[
                                "w-full rounded-xl px-3.5 py-2.5 text-left outline-none transition",
                                "hover:bg-indigo-50 active:bg-indigo-100",
                            ].join(" ")}
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                                    {it.id === "v3" ? (
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                                            <path
                                                d="M4 12h16M4 17h10M4 7h14"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                                            <path
                                                d="M4 6h16M7 12h13M10 18h10"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    )}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="truncate text-sm font-semibold text-slate-900">
                                            {it.label}
                                        </span>
                                        <svg
                                            viewBox="0 0 20 20"
                                            className={[
                                                "h-4 w-4 shrink-0",
                                                selected ? "opacity-100 text-indigo-600" : "opacity-0",
                                            ].join(" ")}
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M5 10.5l3 3 7-7"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">{it.description}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;
