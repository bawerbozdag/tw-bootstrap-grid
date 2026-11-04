import { lazy, Suspense, useMemo, useState } from "react";
import {
    LucideAlignLeft,
    LucideAlignRight,
    LucideLightbulb,
    LucideMaximize2,
    LucideMonitor,
    LucideRotateCcw,
    LucideSmartphone,
    LucideTablet,
    type LucideIcon,
} from "lucide-react";
import DOMPurify from "dompurify";
import clsx from "clsx";
import type { IExample } from "@/examples";
import CopyButton from "./CopyButton";
import PreviewFrame from "./PreviewFrame";
import { DEVICES, type DeviceId } from "@/lib/devices";
import { hasRootRtl, setRootRtl } from "@/lib/rootDir";

// CodeMirror is heavy, load it only when the examples are reached
const CodeEditor = lazy(() => import("./CodeEditor"));

interface ILiveExampleProps {
    example: IExample;
}

const DEVICE_ICONS: Record<DeviceId, LucideIcon> = {
    fit: LucideMaximize2,
    phone: LucideSmartphone,
    tablet: LucideTablet,
    desktop: LucideMonitor,
};

const LiveExample = ({ example }: ILiveExampleProps) => {
    const [code, setCode] = useState(example.code);
    const [revision, setRevision] = useState(0);
    const [deviceId, setDeviceId] = useState<DeviceId>(example.device ?? "fit");

    // for changes that don't come from typing: the editor is told to pick them up immediately
    const replaceCode = (next: string) => {
        setCode(next);
        setRevision((current) => current + 1);
    };

    // the code is the single source of truth: the RTL button edits the root element's dir, and follows manual edits
    const rtl = hasRootRtl(code);

    const previewHtml = useMemo(() => DOMPurify.sanitize(code), [code]);

    const isModified = code !== example.code;

    const device = DEVICES.find((item) => item.id === deviceId) ?? DEVICES[0];

    // a tablet or desktop needs room, so on large screens the preview takes the full width and the editor moves below it
    const expanded = deviceId === "tablet" || deviceId === "desktop";

    return (
        <article id={`example-${example.id}`} className="panel p-4 sm:p-6">
            <h3 className="mb-2 flex items-center gap-3 text-lg font-semibold">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <example.icon size={18} aria-hidden="true" />
                </span>
                {example.title}
            </h3>
            <p className="prose-sm-muted mb-5 max-w-3xl">{example.description}</p>

            <div className="row gy-4">
                <div className={clsx("col-12 min-w-0", expanded ? "xl:order-1" : "xl:col-6 xl:order-2")}>
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted">Preview</span>
                        <div className="flex items-center gap-2">
                            <div
                                role="radiogroup"
                                aria-label="Preview width"
                                className="flex rounded-lg border bg-surface p-0.5"
                            >
                                {DEVICES.map((item) => {
                                    const Icon = DEVICE_ICONS[item.id];

                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            role="radio"
                                            aria-checked={deviceId === item.id}
                                            aria-label={item.label}
                                            title={item.label}
                                            onClick={() => setDeviceId(item.id)}
                                            className={clsx(
                                                "inline-flex size-8 cursor-pointer items-center justify-center rounded-md transition",
                                                deviceId === item.id
                                                    ? "bg-accent text-accent-ink"
                                                    : "text-muted hover:text-ink",
                                            )}
                                        >
                                            <Icon size={14} aria-hidden="true" />
                                        </button>
                                    );
                                })}
                            </div>
                            <button
                                type="button"
                                aria-pressed={rtl}
                                onClick={() => replaceCode(setRootRtl(code, !rtl))}
                                className={clsx("btn btn-secondary btn-sm", rtl && "border-accent text-accent")}
                            >
                                {rtl ? <LucideAlignRight size={13} /> : <LucideAlignLeft size={13} />}
                                RTL
                            </button>
                        </div>
                    </div>
                    <PreviewFrame html={previewHtml} width={device.width} matchEditor={!expanded} />
                </div>

                <div className={clsx("col-12 min-w-0", expanded ? "xl:order-2" : "xl:col-6 xl:order-1")}>
                    <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                            Editable HTML
                        </span>
                        <div className="flex items-center gap-1">
                            <CopyButton text={code} />
                            <button
                                type="button"
                                disabled={!isModified}
                                onClick={() => replaceCode(example.code)}
                                className="inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted transition hover:text-accent disabled:pointer-events-none disabled:opacity-40"
                            >
                                <LucideRotateCcw size={13} />
                                Reset
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-xl border">
                        <Suspense
                            fallback={
                                <pre
                                    className={clsx(
                                        "code-scroll max-h-[360px] min-h-48 overflow-auto bg-sunken p-4 font-mono text-[13px] leading-6",
                                        !expanded && "xl:h-[360px]",
                                    )}
                                >
                                    {code}
                                </pre>
                            }
                        >
                            <CodeEditor value={code} onChange={setCode} revision={revision} matchPreview={!expanded} />
                        </Suspense>
                    </div>
                </div>
            </div>

            {example.tip && (
                <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted">
                    <LucideLightbulb size={16} className="mt-0.5 shrink-0 text-amber-500" />
                    <span>{example.tip}</span>
                </p>
            )}
        </article>
    );
};

export default LiveExample;
