import clsx from "clsx";
import CopyButton from "./CopyButton";
import HighlightedCode from "./HighlightedCode";
import { langFromFile, type CodeLang } from "@/lib/lang";

interface ICodeBlockProps {
    code: string;
    file?: string;
    lang?: CodeLang;
    className?: string;
}

const CodeBlock = ({ code, file, lang, className }: ICodeBlockProps) => (
    <figure className={clsx("overflow-hidden rounded-xl border bg-sunken", className)}>
        <figcaption className="flex items-center justify-between gap-3 border-b bg-surface px-3 py-1.5">
            <span className="truncate font-mono text-xs text-muted">{file ?? "code"}</span>
            <CopyButton text={code} />
        </figcaption>
        <pre
            tabIndex={0}
            role="group"
            aria-label={file ? `Code: ${file}` : "Code"}
            className="code-scroll overflow-x-auto p-4 font-mono text-[13px] leading-6 text-ink"
        >
            <HighlightedCode code={code} lang={lang ?? langFromFile(file)} />
        </pre>
    </figure>
);

export default CodeBlock;
