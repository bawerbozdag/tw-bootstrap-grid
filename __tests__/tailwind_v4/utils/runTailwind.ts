import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

// eslint-disable-next-line
const tailwind = (tailwindcss as any).default ?? tailwindcss;

export const runTailwind = async (html: string): Promise<string> => {
    const result = await postcss([
        tailwind({
            content: [
                {
                    raw: html,
                    extension: "html",
                },
            ],
            plugins: [],
        }),
    ]).process(`@tailwind base; @tailwind components; @tailwind utilities; @plugin "tw-bootstrap-grid";`, {
        from: undefined,
    });

    return result.css;
};
