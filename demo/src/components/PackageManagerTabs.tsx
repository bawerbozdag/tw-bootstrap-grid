import { useState } from "react";
import clsx from "clsx";
import { PACKAGE_MANAGERS, type PackageManager } from "@/_constants";
import CopyButton from "./CopyButton";
import HighlightedCode from "./HighlightedCode";

const PackageManagerTabs = () => {
    const [active, setActive] = useState<PackageManager>("npm");

    const command = PACKAGE_MANAGERS[active];

    return (
        <div className="overflow-hidden rounded-xl border bg-sunken">
            <div className="flex items-center justify-between border-b bg-surface pr-3">
                <div role="tablist" aria-label="Package manager" className="flex">
                    {(Object.keys(PACKAGE_MANAGERS) as PackageManager[]).map((manager) => (
                        <button
                            key={manager}
                            role="tab"
                            type="button"
                            aria-selected={active === manager}
                            onClick={() => setActive(manager)}
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
            <pre className="code-scroll overflow-x-auto p-4 font-mono text-[13px]">
                <HighlightedCode code={command} lang="shell" />
            </pre>
        </div>
    );
};

export default PackageManagerTabs;
