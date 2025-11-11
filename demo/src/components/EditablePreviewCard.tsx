import { useEffect, useMemo, useState, type ReactNode } from "react";
import { LucideAlignLeft, LucideAlignRight, LucideLightbulb, LucideRotateCcw } from "lucide-react";
import DOMPurify from "dompurify";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeLight, vscodeDark } from "@uiw/codemirror-theme-vscode";
import CopyButton from "./CopyButton";
import clsx from "clsx";
import useApp from "@/hooks/useApp";

interface IEditablePreviewCardProps {
    title: string;
    description: ReactNode;
    example: string;
    tip?: ReactNode;
}

const EditablePreviewCard = ({ description, example, tip, title }: IEditablePreviewCardProps) => {
    const { theme } = useApp();

    const [code, setCode] = useState<string>(example);
    const [isRTL, setIsRTL] = useState<boolean>(isRTLActive(code));

    useEffect(() => {
        setCode(example);

        //
    }, [example]);

    const toggleRTL = () => {
        const currentRTL = isRTL;

        setIsRTL(!currentRTL);

        try {
            const wrapper = document.createElement("div");
            wrapper.innerHTML = code;

            const container = wrapper.querySelector(".container") as HTMLElement | null;

            if (currentRTL === false) {
                // RTL on
                if (container) {
                    // prefer a scoped RTL by setting dir on .container
                    container.setAttribute("dir", "rtl");

                    //
                } else {
                    // .container not found → wrap whole snippet with an RTL div
                    wrapper.innerHTML = `<div dir="rtl">${wrapper.innerHTML}</div>`;
                }

                // RTL off
            } else {
                // remove scoped RTL from .container if it was applied
                if (container && container.hasAttribute("dir")) {
                    container.removeAttribute("dir");

                    //
                } else {
                    // otherwise, look for a top-level RTL wrapper
                    const outer = wrapper.querySelector("[dir='rtl']");

                    if (outer) {
                        outer.replaceWith(...Array.from(outer.childNodes));
                    }
                }
            }

            setCode(wrapper.innerHTML);

            //
        } catch {
            //
        }
    };

    const previewHtml = useMemo(() => DOMPurify.sanitize(code), [code]);

    const htmlExtensions = useMemo(() => [html({ autoCloseTags: true, matchClosingTags: true })], []);

    const codeMirrorBasicSetup = useMemo(
        () => ({
            history: true,
            lineNumbers: true,
            highlightActiveLine: true,
            highlightActiveLineGutter: true,
            foldGutter: true,
            autocompletion: true,
            bracketMatching: true,
            closeBrackets: true,
            indentOnInput: true,
        }),
        [],
    );

    return (
        <div className="card mb-6">
            <h3 className="mb-3">{title}</h3>
            <p className="mb-6">{description}</p>
            <div className="row gy-6 mb-6">
                <div className="order-1 xl:order-0 xl:col-6">
                    <div className="rounded-lg border p-6 shadow dark:shadow-slate-600/50 h-full">
                        <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                                Editable HTML
                            </span>
                            <div className="flex items-center gap-4">
                                <button
                                    type="button"
                                    onClick={toggleRTL}
                                    className={clsx(
                                        "btn btn-secondary rounded-lg py-1 px-3 gap-1",
                                        isRTL &&
                                            "text-indigo-600 border-indigo-200 dark:text-indigo-400 dark:border-indigo-600",
                                    )}
                                    aria-pressed={isRTL}
                                    aria-label="Toggle RTL preview"
                                    title={isRTL ? "Switch to LTR" : "Switch to RTL"}
                                >
                                    {isRTL ? <LucideAlignRight size={14} /> : <LucideAlignLeft size={14} />}
                                    RTL
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setCode(example);
                                        setIsRTL(isRTLActive(example));
                                    }}
                                    className="btn btn-secondary rounded-lg py-1 px-3"
                                    aria-label="Reset to default example"
                                    title="Reset"
                                >
                                    <LucideRotateCcw size={14} />
                                    Reset
                                </button>
                            </div>
                        </div>

                        <div className="rounded-lg border overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2 border-b bg-slate-50 dark:bg-slate-800">
                                <span className="text-[11px] font-semibold tracking-wider text-slate-600 dark:text-slate-200">
                                    example.html
                                </span>
                                <CopyButton text={code} />
                            </div>
                            <CodeMirror
                                aria-label="Editable HTML"
                                className="text-sm dark:scheme-dark"
                                value={code.trim()}
                                height="500px"
                                extensions={htmlExtensions}
                                theme={theme == "light" ? vscodeLight : vscodeDark}
                                onChange={(value) => setCode(value)}
                                basicSetup={codeMirrorBasicSetup}
                            />
                        </div>
                    </div>
                </div>

                <div className="order-0 xl:order-1 xl:col-6">
                    <div className="rounded-lg border p-6 pt-7 shadow dark:shadow-slate-600/50 h-full">
                        <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-[18px]">
                            Live Preview
                        </div>
                        <div
                            aria-label="Live preview"
                            role="region"
                            className="doc-preview"
                            dangerouslySetInnerHTML={{ __html: previewHtml }}
                        />
                    </div>
                </div>
            </div>

            {tip && (
                <p className="tip-info">
                    <LucideLightbulb size={16} />
                    Tip: {tip}
                </p>
            )}
        </div>
    );
};

const isRTLActive = (code: string): boolean => {
    try {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = code;

        const container = wrapper.querySelector(".container") as HTMLElement | null;

        if (container && container.getAttribute("dir") === "rtl") {
            return true;
        }

        return false;
        //
    } catch {
        return false;
    }
};

export default EditablePreviewCard;
