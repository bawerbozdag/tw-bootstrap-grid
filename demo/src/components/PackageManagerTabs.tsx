import { useId, useRef, useState, type KeyboardEvent } from "react";
import clsx from "clsx";
import { PACKAGE_MANAGERS, type PackageManager } from "@/_constants";
import CopyButton from "./CopyButton";
import HighlightedCode from "./HighlightedCode";

const PackageManagerTabs = () => {
    const [active, setActive] = useState<PackageManager>("npm");
    const baseId = useId();
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    const managers = Object.keys(PACKAGE_MANAGERS) as PackageManager[];

    // arrow keys move between the tabs, like a native tab list
    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        const target =
            event.key === "ArrowRight"
                ? (index + 1) % managers.length
                : event.key === "ArrowLeft"
                  ? (index - 1 + managers.length) % managers.length
                  : event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? managers.length - 1
                      : null;

        if (target === null) {
            return;
        }

        event.preventDefault();
        setActive(managers[target]);
        tabRefs.current[managers[target]]?.focus();
    };

    const command = PACKAGE_MANAGERS[active];

    return (
        <div className="overflow-hidden rounded-xl border bg-sunken">
            <div className="flex items-center justify-between border-b bg-surface pr-3">
                <div role="tablist" aria-label="Package manager" className="flex">
                    {managers.map((manager, index) => (
                        <button
                            key={manager}
                            ref={(element) => {
                                tabRefs.current[manager] = element;
                            }}
                            id={`${baseId}-${manager}`}
                            role="tab"
                            type="button"
                            aria-selected={active === manager}
                            aria-controls={`${baseId}-panel`}
                            tabIndex={active === manager ? 0 : -1}
                            onClick={() => setActive(manager)}
                            onKeyDown={(event) => handleKeyDown(event, index)}
                            className={clsx(
                                "-mb-px cursor-pointer border-b-2 px-3 py-2.5 font-mono text-xs transition sm:px-4",
                                active === manager
                                    ? "border-accent text-accent"
                                    : "border-transparent text-muted hover:text-ink",
                            )}
                        >
                            {manager}
                        </button>
                    ))}
                </div>
                <CopyButton text={command} compact />
            </div>
            <pre
                id={`${baseId}-panel`}
                role="tabpanel"
                aria-labelledby={`${baseId}-${active}`}
                tabIndex={0}
                className="code-scroll overflow-x-auto p-4 font-mono text-[13px]"
            >
                <HighlightedCode code={command} lang="shell" />
            </pre>
        </div>
    );
};

export default PackageManagerTabs;
