import { highlightCode, tagHighlighter, tags as t } from "@lezer/highlight";
import { htmlLanguage } from "@codemirror/lang-html";
import { cssLanguage } from "@codemirror/lang-css";
import { javascriptLanguage } from "@codemirror/lang-javascript";
import type { CodeLang } from "./lang";

export interface IToken {
    text: string;
    className?: string;
}

// maps lezer tags to the .tok-* classes, which carry the VS Code colors (see main.css)
const highlighter = tagHighlighter([
    { tag: t.comment, class: "tok-comment" },
    { tag: [t.keyword, t.bool, t.null, t.self, t.operatorKeyword, t.definitionKeyword], class: "tok-keyword" },
    { tag: [t.controlKeyword, t.moduleKeyword], class: "tok-control" },
    { tag: [t.string, t.special(t.string), t.regexp], class: "tok-string" },
    { tag: t.attributeValue, class: "tok-attr-value" },
    { tag: [t.number, t.unit, t.integer, t.float, t.atom], class: "tok-number" },
    { tag: [t.propertyName, t.definition(t.propertyName)], class: "tok-property" },
    { tag: [t.variableName, t.definition(t.variableName), t.labelName], class: "tok-variable" },
    { tag: [t.function(t.variableName), t.function(t.propertyName)], class: "tok-function" },
    { tag: [t.tagName, t.className], class: "tok-tag" },
    { tag: t.angleBracket, class: "tok-bracket" },
    { tag: t.attributeName, class: "tok-attr" },
    { tag: [t.typeName, t.namespace], class: "tok-type" },
]);

const PARSERS = {
    html: htmlLanguage.parser,
    css: cssLanguage.parser,
    js: javascriptLanguage.parser,
};

// there is no shell grammar here, so a tiny scanner does it: command, flags, strings
const highlightShell = (code: string): IToken[] => {
    const tokens: IToken[] = [];

    code.split("\n").forEach((line, lineIndex) => {
        if (lineIndex > 0) {
            tokens.push({ text: "\n" });
        }

        let isFirstWord = true;

        line.match(/\s+|"[^"]*"|'[^']*'|\S+/g)?.forEach((part) => {
            if (/^\s+$/.test(part)) {
                tokens.push({ text: part });

                return;
            }

            let className: string | undefined;

            if (isFirstWord) {
                className = "tok-function";
            } else if (part.startsWith("-")) {
                className = "tok-property";
            } else if (/^["']/.test(part)) {
                className = "tok-string";
            }

            isFirstWord = false;

            tokens.push({ text: part, className });
        });
    });

    return tokens;
};

export const highlight = (code: string, lang: CodeLang): IToken[] => {
    if (lang === "text") {
        return [{ text: code }];
    }

    if (lang === "shell") {
        return highlightShell(code);
    }

    const tokens: IToken[] = [];

    highlightCode(
        code,
        PARSERS[lang].parse(code),
        highlighter,
        (text, className) => tokens.push({ text, className: className || undefined }),
        () => tokens.push({ text: "\n" }),
    );

    return tokens;
};
