import { useEffect, useMemo, useRef } from "react";
import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import clsx from "clsx";
import useApp from "@/hooks/useApp";

interface ICodeEditorProps {
    value: string;
    onChange: (value: string) => void;
    // bump it whenever the code is replaced from outside (Reset, the RTL button), not by typing
    revision: number;
    // on large screens, keep the editor as tall as the preview next to it
    matchPreview: boolean;
}

const BASIC_SETUP = {
    lineNumbers: true,
    foldGutter: false,
    highlightActiveLine: false,
    highlightActiveLineGutter: false,
    autocompletion: true,
    closeBrackets: true,
};

const CodeEditor = ({ value, onChange, revision, matchPreview }: ICodeEditorProps) => {
    const { theme } = useApp();
    const viewRef = useRef<EditorView | null>(null);

    // react-codemirror holds outside changes back for a while after each keystroke (so they can't clobber typing),
    // which made Reset and the RTL button lag behind. They are explicit actions, so apply them straight away.
    useEffect(() => {
        const view = viewRef.current;

        if (!view) {
            return;
        }

        const current = view.state.doc.toString();

        if (current === value) {
            return;
        }

        // replace only the part that differs, so the cursor and scroll position stay where they were
        let start = 0;
        let currentEnd = current.length;
        let nextEnd = value.length;

        while (start < currentEnd && start < nextEnd && current[start] === value[start]) {
            start++;
        }

        while (currentEnd > start && nextEnd > start && current[currentEnd - 1] === value[nextEnd - 1]) {
            currentEnd--;
            nextEnd--;
        }

        view.dispatch({ changes: { from: start, to: currentEnd, insert: value.slice(start, nextEnd) } });

        // only the revision should trigger this, not every keystroke
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [revision]);

    const extensions = useMemo(
        () => [html({ autoCloseTags: true, matchClosingTags: true }), EditorView.lineWrapping],
        [],
    );

    return (
        <CodeMirror
            aria-label="Editable HTML"
            className={clsx("text-[13px]", matchPreview && "xl:[&_.cm-editor]:min-h-[360px]!")}
            value={value}
            minHeight="12rem"
            maxHeight="360px"
            extensions={extensions}
            theme={theme === "dark" ? vscodeDark : vscodeLight}
            onChange={onChange}
            onCreateEditor={(view) => {
                viewRef.current = view;
            }}
            basicSetup={BASIC_SETUP}
        />
    );
};

export default CodeEditor;
