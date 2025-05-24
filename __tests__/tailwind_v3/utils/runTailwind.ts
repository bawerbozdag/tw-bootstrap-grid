import type { IGridOptions } from "../../../src/utils/resolveGutters";
import postcss from "postcss";
import tailwind from "tailwindcss";
import plugin from "../../../src/index";

const runTailwind = async (html: string, options?: IGridOptions): Promise<string> => {
    const config = {
        content: [{ raw: html }],
        theme: {
            extend: {},
        },
        plugins: [plugin(options ?? {})],
    };

    const result = await postcss([tailwind(config)]).process(`@tailwind components;`, {
        from: undefined,
    });

    return result.css;
};

export default runTailwind;
