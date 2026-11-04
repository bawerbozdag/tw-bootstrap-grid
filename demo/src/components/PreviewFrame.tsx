import { useEffect, useRef, useState, type CSSProperties } from "react";
import clsx from "clsx";
import DOMPurify from "dompurify";
import useApp from "@/hooks/useApp";
import { breakpointFor } from "@/lib/devices";

interface IPreviewFrameProps {
    // names the frame for screen readers, the whole sentence
    title: string;
    // the HTML to show, it is sanitized before it goes into the frame
    html: string;
    // the viewport width to pretend to have, or null to use the width of the panel
    width: number | null;
    // on large screens, keep the panel as tall as the editor next to it instead of following the content
    matchEditor: boolean;
}

const MIN_HEIGHT = 192;
const MAX_HEIGHT = 360;

const SKELETON =
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body></body></html>';

// A real viewport for the live examples. Media queries look at the iframe's own width, so md: and lg: apply
// exactly as they would on a screen of that size. Wider viewports are scaled down to fit the panel.
const PreviewFrame = ({ title, html, width, matchEditor }: IPreviewFrameProps) => {
    const { theme } = useApp();

    const outerRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // frames are only created once their card is near the screen, so the page doesn't start nine of them at load
    const [near, setNear] = useState(false);
    const [outerWidth, setOuterWidth] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const outer = outerRef.current;

        if (!outer) {
            return;
        }

        const observer = new ResizeObserver(() => setOuterWidth(outer.clientWidth));

        observer.observe(outer);
        setOuterWidth(outer.clientWidth);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const outer = outerRef.current;

        if (!outer || near) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setNear(true);
                }
            },
            { rootMargin: "600px 0px" },
        );

        observer.observe(outer);

        return () => observer.disconnect();
    }, [near]);

    // the frame starts empty: copy this page's styles into it, so it renders with the same CSS (dev and production)
    const handleLoad = () => {
        const doc = iframeRef.current?.contentDocument;

        if (!doc || doc.head.querySelector("[data-copied-style]")) {
            return;
        }

        const loading: Promise<void>[] = [];

        document.head.querySelectorAll('link[rel="stylesheet"], style').forEach((node) => {
            const copy = node.cloneNode(true) as HTMLElement;

            copy.setAttribute("data-copied-style", "");
            doc.head.appendChild(copy);

            if (copy instanceof HTMLLinkElement) {
                loading.push(
                    new Promise((resolve) => {
                        copy.addEventListener("load", () => resolve());
                        copy.addEventListener("error", () => resolve());
                    }),
                );
            }
        });

        doc.body.className = "doc-preview";
        doc.body.style.background = "var(--surface)";
        doc.body.style.overflowX = "hidden";

        Promise.all(loading).then(() => setReady(true));
    };

    useEffect(() => {
        const doc = iframeRef.current?.contentDocument;

        if (ready && doc) {
            doc.body.innerHTML = DOMPurify.sanitize(html);
        }
    }, [ready, html]);

    useEffect(() => {
        const doc = iframeRef.current?.contentDocument;

        if (ready && doc) {
            doc.documentElement.classList.toggle("dark", theme === "dark");
            doc.documentElement.style.colorScheme = theme;
        }
    }, [ready, theme]);

    // follow the height of the content, so short examples don't leave an empty panel
    useEffect(() => {
        const body = iframeRef.current?.contentDocument?.body;

        if (!ready || !body) {
            return;
        }

        const observer = new ResizeObserver(() => setContentHeight(body.getBoundingClientRect().height));

        observer.observe(body);
        setContentHeight(body.getBoundingClientRect().height);

        return () => observer.disconnect();
    }, [ready]);

    const viewport = width ?? outerWidth;
    const scale = viewport > 0 ? Math.min(1, outerWidth / viewport) : 1;
    const height = Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, Math.ceil(contentHeight * scale)));
    const isNarrow = outerWidth > 0 && viewport < outerWidth;

    return (
        <div
            ref={outerRef}
            style={{ "--preview-h": `${height}px` } as CSSProperties}
            className={clsx(
                "relative h-(--preview-h) overflow-hidden rounded-xl border bg-sunken",
                matchEditor && "xl:h-[360px]",
            )}
        >
            <div
                style={{ width: viewport * scale }}
                className={clsx("mx-auto h-full bg-surface", isNarrow && "border-x")}
            >
                {near && (
                    <iframe
                        ref={iframeRef}
                        title={title}
                        srcDoc={SKELETON}
                        sandbox="allow-same-origin"
                        onLoad={handleLoad}
                        style={{
                            width: viewport,
                            height: `calc(100% / ${scale})`,
                            transform: `scale(${scale})`,
                            transformOrigin: "top left",
                        }}
                        className={clsx("block border-0 transition-opacity", ready ? "opacity-100" : "opacity-0")}
                    />
                )}
            </div>

            {viewport > 0 && (
                <span className="pointer-events-none absolute bottom-2 right-2 rounded-md border bg-surface/90 px-2 py-1 font-mono text-[11px] text-muted">
                    {Math.round(viewport)}px · {breakpointFor(viewport)}
                    {scale < 1 && ` · ${Math.round(scale * 100)}%`}
                </span>
            )}
        </div>
    );
};

export default PreviewFrame;
