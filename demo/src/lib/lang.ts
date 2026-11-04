export type CodeLang = "html" | "css" | "js" | "shell" | "text";

// picks the highlighter from a file name like tailwind.config.ts or main.css
export const langFromFile = (file?: string): CodeLang => {
    const extension = file?.split(".").pop();

    switch (extension) {
        case "html":
            return "html";
        case "css":
            return "css";
        case "js":
        case "ts":
        case "jsx":
        case "tsx":
            return "js";
        default:
            return "text";
    }
};
