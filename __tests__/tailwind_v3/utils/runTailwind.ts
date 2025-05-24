import type { IGridOptions } from "../../../src/utils/resolveGutters";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import plugin from "../../../src";

const tailwind = ("default" in tailwindcss ? tailwindcss.default : tailwindcss) as typeof tailwindcss;

export const runTailwind = async (html: string, options?: IGridOptions): Promise<string> => {
    const result = await postcss([
        tailwind({
            content: [{ raw: html, extension: "html" }],
            safelist: [
                "col",
                "col-1",
                "col-6",
                "col-12",
                "offset-1",
                "offset-6",
                "offset-12",
                "container",
                "container-fluid",
                "row",
                "order-0",
                "order-12",
                "order-last",
                "g-4",
                "gx-2",
                "gy-8",
            ],
            plugins: [plugin(options ?? {})],
        }),
    ]).process(`@tailwind base; @tailwind components; @tailwind utilities;`, {
        from: undefined,
    });

    return result.css;
};
