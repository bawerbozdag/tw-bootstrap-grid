import { useEffect, useState } from "react";
import type { IToken } from "@/lib/highlight";
import type { CodeLang } from "@/lib/lang";

interface IHighlightedCodeProps {
    code: string;
    lang: CodeLang;
}

// the parsers are loaded on demand, so the plain text shows first and gets its colors a moment later
const HighlightedCode = ({ code, lang }: IHighlightedCodeProps) => {
    const [result, setResult] = useState<{ code: string; lang: CodeLang; tokens: IToken[] } | null>(null);

    useEffect(() => {
        let cancelled = false;

        const run = () =>
            import("@/lib/highlight").then(({ highlight }) => {
                if (!cancelled) {
                    setResult({ code, lang, tokens: highlight(code, lang) });
                }
            });

        // colors are a nicety, so they wait until the browser has nothing more urgent to do
        const handle =
            "requestIdleCallback" in window ? window.requestIdleCallback(run, { timeout: 1500 }) : setTimeout(run, 200);

        return () => {
            cancelled = true;

            if ("cancelIdleCallback" in window && typeof handle === "number") {
                window.cancelIdleCallback(handle);
            } else {
                clearTimeout(handle);
            }
        };
    }, [code, lang]);

    const tokens = result && result.code === code && result.lang === lang ? result.tokens : null;

    return (
        <code className={`language-${lang}`}>
            {tokens
                ? tokens.map((token, index) =>
                      token.className ? (
                          <span key={index} className={token.className}>
                              {token.text}
                          </span>
                      ) : (
                          token.text
                      ),
                  )
                : code}
        </code>
    );
};

export default HighlightedCode;
