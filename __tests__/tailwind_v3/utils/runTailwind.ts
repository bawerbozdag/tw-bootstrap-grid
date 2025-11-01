import type { IGridOptions } from "../../../src/utils/resolveGutters";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import plugin from "../../../src";

export const runTailwind = async (html: string, options?: IGridOptions): Promise<string> => {
    const result = await postcss([
        tailwindcss({
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
                "row-cols-auto",
                "row-cols-2",
                "row-cols-4",
                "row-cols-6",
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
