// "Live preview: {title}" with { title: "Gutters" }
export const fmt = (text: string, values: Record<string, string | number>): string =>
    text.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));

// a message without its markup, for places that can only show text: meta tags, structured data, aria-labels
export const plain = (text: string): string =>
    text
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/`([^`]+)`/g, "$1");
