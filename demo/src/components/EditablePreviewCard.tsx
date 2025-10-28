import { useEffect, useMemo, useState, type ReactNode } from "react";
import { LucideLightbulb, LucideRotateCcw } from "lucide-react";
import DOMPurify from "dompurify";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import CopyButton from "./CopyButton";

interface IEditablePreviewCardProps {
    title: string;
    description: ReactNode;
    example: string;
    tip?: ReactNode;
}

const EditablePreviewCard = ({ description, example, tip, title }: IEditablePreviewCardProps) => {
    const [code, setCode] = useState<string>(example);

    useEffect(() => {
        setCode(example);

        //
    }, [example]);

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
                    <div className="rounded-lg border p-6 shadow h-full">
                        <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-sm font-semibold text-slate-700">Editable HTML</span>
                            <button
                                type="button"
                                onClick={() => setCode(example)}
                                className="btn btn-secondary rounded-lg btn-size py-1 px-3"
                                aria-label="Reset to default example"
                                title="Reset"
                            >
                                <LucideRotateCcw size={14} />
                                Reset
                            </button>
                        </div>

                        <div className="rounded-lg border overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2 border-b bg-slate-50">
                                <span className="text-[11px] font-semibold tracking-wider text-slate-600">
                                    example.html
                                </span>
                                <CopyButton text={code} />
                            </div>
                            <CodeMirror
                                aria-label="Editable HTML"
                                className="text-sm"
                                value={code}
                                height="500px"
                                extensions={htmlExtensions}
                                theme={vscodeLight}
                                onChange={(value) => setCode(value)}
                                basicSetup={codeMirrorBasicSetup}
                            />
                        </div>
                    </div>
                </div>

                <div className="order-0 xl:order-1 xl:col-6">
                    <div className="rounded-lg border p-6 pt-7 shadow h-full">
                        <div className="text-sm font-semibold text-slate-700 mb-[18px]">Live Preview</div>
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

export default EditablePreviewCard;
