import { LucideCopy, LucideCopyCheck, LucideCopyX } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

interface ICopyButtonProps {
    text: string;
    className?: string;
    iconSize?: number;
}

const CopyButton = ({ text, className, iconSize = 16 }: ICopyButtonProps) => {
    const [copied, setCopied] = useState<boolean | undefined>(false);

    const copyStatus = copied == undefined ? "Failed" : copied == true ? "Copied" : "Copy";

    const handleClick = async () => {
        try {
            if (!navigator.clipboard) {
                console.warn("Clipboard API not supported");
                setCopied(undefined);

                return;
            }

            await navigator.clipboard.writeText(text);

            setCopied(true);

            //
        } catch {
            setCopied(undefined);

            //
        } finally {
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <button
            type="button"
            disabled={copied === true}
            onClick={handleClick}
            title={copyStatus}
            className={clsx(
                "inline-flex items-center gap-1.5 text-xs transition duration-200",
                copied === true && "scale-110 text-green-600",
                copied === undefined && "scale-110 text-red-600",
                copied === false &&
                    "text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-500",
                className,
            )}
            aria-live="polite"
        >
            {copied === true ? (
                <LucideCopyCheck size={iconSize} />
            ) : copied === undefined ? (
                <LucideCopyX size={iconSize} />
            ) : (
                <LucideCopy size={iconSize} />
            )}
            <span aria-live="polite" role="status" className="sr-only">
                {copyStatus}
            </span>
        </button>
    );
};

export default CopyButton;
