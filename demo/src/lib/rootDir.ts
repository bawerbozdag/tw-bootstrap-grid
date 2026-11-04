// the first opening tag of a snippet, split into name, attributes and the closing "/>" or ">"
const ROOT_TAG = /<([a-zA-Z][\w-]*)([^>]*?)(\s*\/?)>/;

// reads or writes dir="rtl" on the outermost element of an HTML snippet, leaving the rest of the text untouched
export const hasRootRtl = (code: string): boolean => {
    const attributes = code.match(ROOT_TAG)?.[2] ?? "";

    return /\sdir\s*=\s*["']?rtl["']?/i.test(attributes);
};

export const setRootRtl = (code: string, rtl: boolean): string => {
    const match = code.match(ROOT_TAG);

    if (!match || match.index === undefined) {
        return code;
    }

    const [tag, name, attributes, ending] = match;

    // drop any dir the root already has, then add dir="rtl" back when asked
    const withoutDir = attributes.replace(/\sdir\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/i, "");
    const next = `<${name}${withoutDir}${rtl ? ' dir="rtl"' : ""}${ending}>`;

    return code.slice(0, match.index) + next + code.slice(match.index + tag.length);
};
