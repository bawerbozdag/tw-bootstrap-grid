import { Fragment, type ReactNode } from "react";
import useI18n from "@/hooks/useI18n";
import NewTabHint from "./NewTabHint";

// `code`, [label](link) and **bold** inside a message
const TOKEN = /(`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;

const LINK_CLASS = "underline decoration-line underline-offset-4 hover:text-accent";

const Rich = ({ text }: { text: string }) => {
    const { url } = useI18n();

    const nodes: ReactNode[] = text.split(TOKEN).map((part, index) => {
        if (part.startsWith("`")) {
            const code = part.slice(1, -1);

            // a long snippet may wrap on a narrow screen, short code stays on one line
            return (
                <code key={index} className={code.length > 30 ? "code-wrap" : undefined}>
                    {code}
                </code>
            );
        }

        if (part.startsWith("**")) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }

        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

        if (link) {
            const [, label, href] = link;
            const external = /^https?:/.test(href);

            return (
                <a
                    key={index}
                    href={external ? href : url(href)}
                    className={LINK_CLASS}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                    {label}
                    {external && <NewTabHint />}
                </a>
            );
        }

        return <Fragment key={index}>{part}</Fragment>;
    });

    return <>{nodes}</>;
};

export default Rich;
