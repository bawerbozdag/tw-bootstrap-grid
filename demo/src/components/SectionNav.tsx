import { useEffect, useId, useRef, useState } from "react";
import { LucideChevronDown } from "lucide-react";
import clsx from "clsx";
import { useOverflowTabs } from "react-overflow-tabs";
import { SECTIONS } from "@/_constants";
import useApp from "@/hooks/useApp";

const LINK = "block whitespace-nowrap rounded-md px-3 py-2 text-xs font-medium transition lg:px-2 lg:py-1.5 lg:text-sm";

// the section links: those that don't fit move into a "More" menu as the space shrinks
const SectionNav = () => {
    const { activeSection } = useApp();

    const navRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const moreRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuId = useId();

    const { overflowKeys: measuredKeys } = useOverflowTabs({ container: listRef });

    const [open, setOpen] = useState(false);
    const [fitsAll, setFitsAll] = useState(false);

    // The "More" button takes room from the list, so with the button showing the hook can no longer tell that
    // everything would fit without it, and the button would stay forever. So whether all the links fit is also
    // measured against the nav's own width, which doesn't depend on the button.
    useEffect(() => {
        const nav = navRef.current;
        const list = listRef.current;

        if (!nav || !list) {
            return;
        }

        const measure = () => {
            const items = Array.from(list.children) as HTMLElement[];
            const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
            const needed = items.reduce((sum, item) => sum + item.offsetWidth, 0) + gap * (items.length - 1);
            const style = getComputedStyle(nav);
            const available = nav.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);

            setFitsAll(needed <= available + 0.5);
        };

        const observer = new ResizeObserver(measure);

        observer.observe(nav);
        document.fonts?.ready.then(measure);

        return () => observer.disconnect();
    }, []);

    const overflowKeys = fitsAll ? [] : measuredKeys;
    const isOverflowing = overflowKeys.length > 0;

    // the menu only exists while something overflows
    const menuOpen = open && isOverflowing;

    const overflowSections = SECTIONS.filter((section) => overflowKeys.includes(section.id));
    const activeIsHidden = overflowKeys.includes(activeSection);

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        const onPointerDown = (event: PointerEvent) => {
            if (!moreRef.current?.contains(event.target as Node)) {
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
    }, [menuOpen]);

    return (
        <nav
            ref={navRef}
            aria-label="Sections"
            className="order-3 flex w-full min-w-0 items-center gap-1 pb-2 lg:order-none lg:w-auto lg:flex-1 lg:px-3 lg:pb-0"
        >
            {/* overflowing links stay in the layout but are invisible, which is how the hook knows when they fit again */}
            <ul ref={listRef} className="flex min-w-0 flex-1 gap-1 overflow-hidden lg:gap-0.5">
                {SECTIONS.map((section) => (
                    <li
                        key={section.id}
                        data-overflow-key={section.id}
                        className={clsx("shrink-0", overflowKeys.includes(section.id) && "invisible")}
                    >
                        <a
                            href={`#${section.id}`}
                            aria-current={activeSection === section.id ? "location" : undefined}
                            className={clsx(
                                LINK,
                                activeSection === section.id
                                    ? "bg-accent-soft text-accent"
                                    : "text-muted hover:text-ink",
                            )}
                        >
                            {section.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* outside the list, so the list's overflow: hidden never clips it */}
            {isOverflowing && (
                <div ref={moreRef} className="relative shrink-0">
                    <button
                        ref={buttonRef}
                        type="button"
                        aria-expanded={menuOpen}
                        aria-controls={menuId}
                        onClick={() => setOpen((current) => !current)}
                        className={clsx(
                            LINK,
                            "flex cursor-pointer items-center gap-1.5",
                            activeIsHidden || menuOpen ? "bg-accent-soft text-accent" : "text-muted hover:text-ink",
                        )}
                    >
                        More
                        <LucideChevronDown
                            size={14}
                            aria-hidden="true"
                            className={clsx(
                                "transition-transform duration-200 motion-reduce:transition-none",
                                menuOpen && "rotate-180",
                            )}
                        />
                    </button>

                    <ul
                        id={menuId}
                        className={clsx(
                            "absolute right-0 top-full z-40 mt-2 w-48 origin-top-right rounded-xl border bg-surface p-1 shadow-lg",
                            "transition-[opacity,transform,visibility] duration-150 motion-reduce:transition-none",
                            menuOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0",
                        )}
                    >
                        {overflowSections.map((section) => (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    aria-current={activeSection === section.id ? "location" : undefined}
                                    onClick={() => setOpen(false)}
                                    className={clsx(
                                        "block rounded-lg px-3 py-2 text-sm font-medium transition",
                                        activeSection === section.id
                                            ? "bg-accent-soft text-accent"
                                            : "text-ink hover:bg-sunken",
                                    )}
                                >
                                    {section.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default SectionNav;
