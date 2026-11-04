import { useEffect, useId, useRef, useState } from "react";
import { LucideCheck, LucideChevronDown, LucideLanguages } from "lucide-react";
import clsx from "clsx";
import useApp from "@/hooks/useApp";
import useI18n from "@/hooks/useI18n";
import { LANGUAGES, localizePath } from "@/i18n/languages";
import { PAGES } from "@/site";

// The other languages are real links to the same page, so search engines can follow them and a middle click works.
// Only the current #section is carried along when the link is followed normally.
const LanguageMenu = () => {
    const { page } = useApp();
    const { language, m } = useI18n();

    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuId = useId();

    useEffect(() => {
        if (!open) {
            return;
        }

        const onPointerDown = (event: PointerEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
                buttonRef.current?.focus();
            }
        };

        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    return (
        <div ref={rootRef} className="relative">
            <button
                ref={buttonRef}
                type="button"
                aria-expanded={open}
                aria-controls={menuId}
                title={m.common.language}
                onClick={() => setOpen((current) => !current)}
                className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border bg-surface px-2.5 text-xs font-medium text-ink transition hover:border-accent"
            >
                <LucideLanguages size={14} aria-hidden="true" className="text-muted" />
                <span>{language.code.toUpperCase()}</span>
                <span className="sr-only">
                    , {m.common.language}: {language.name}
                </span>
                <LucideChevronDown
                    size={12}
                    aria-hidden="true"
                    className={clsx(
                        "text-muted transition-transform duration-200 motion-reduce:transition-none",
                        open && "rotate-180",
                    )}
                />
            </button>

            <ul
                id={menuId}
                aria-label={m.common.language}
                className={clsx(
                    "absolute end-0 top-full z-40 mt-2 max-h-[70vh] w-48 origin-top-right overflow-y-auto rounded-xl border bg-surface p-1 shadow-lg",
                    "transition-[opacity,transform,visibility] duration-150 motion-reduce:transition-none",
                    open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0",
                )}
            >
                {LANGUAGES.map((item) => {
                    const href = localizePath(item, PAGES[page].path);
                    const current = item.code === language.code;

                    return (
                        <li key={item.code}>
                            <a
                                href={href}
                                lang={item.hreflang}
                                hrefLang={item.hreflang}
                                aria-current={current ? "true" : undefined}
                                onClick={(event) => {
                                    if (
                                        current ||
                                        event.ctrlKey ||
                                        event.metaKey ||
                                        event.shiftKey ||
                                        event.button !== 0
                                    ) {
                                        return;
                                    }

                                    event.preventDefault();
                                    window.location.assign(href + window.location.hash);
                                }}
                                className={clsx(
                                    "flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                                    current ? "bg-accent-soft text-accent" : "text-ink hover:bg-sunken",
                                )}
                            >
                                {item.name}
                                {current && <LucideCheck size={16} aria-hidden="true" className="shrink-0" />}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default LanguageMenu;
