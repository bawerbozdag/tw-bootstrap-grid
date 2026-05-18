import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-disable-next-line
const tailwind = (tailwindcss as any).default ?? tailwindcss;

export const runTailwind = async (html: string): Promise<string> => {
    const pluginPath = resolve(__dirname, "../../../src/index").replace(/\\/g, "/");

    const result = await postcss([
        tailwind({
            content: [
                {
                    raw: html,
                    extension: "html",
                },
            ],
        }),
    ]).process(
        `
        @tailwind base; 
        @tailwind components; 
        @tailwind utilities; 
        @plugin "${pluginPath}"; 
        `,
        {
            from: resolve(__dirname, "test.css"),
        },
    );

    return result.css;
};
