interface IGutterConfig {
    x?: string;
    y?: string;
}

export interface IGridOptions {
    gutters?: IGutterConfig;
    containerGutters?: IGutterConfig;
    rowGutters?: IGutterConfig;
}

interface IGutterResult {
    x: string;
    y: string;
}

// global fallback gutter CSS variable prefix
const GLOBAL_GUTTER_PREFIX = "--bs-global-gutter";

// default gutter values if none are provided
const DEFAULT_GUTTERS: IGutterConfig = {
    x: "1.5rem",
    y: "0",
};

function resolveGutters(type: "container" | "row", options: IGridOptions): IGutterResult {
    const CSS_PREFIX = `--bs-${type}-gutter`;

    // get type-specific gutter settings (container or row)
    const specific = type === "container" ? options.containerGutters : options.rowGutters;

    // get global gutter fallback settings
    const global = options.gutters ?? {};

    // resolve X axis gutter with fallback priority: specific → global → default
    const resolvedX = specific?.x ?? global.x ?? DEFAULT_GUTTERS.x;

    // resolve Y axis gutter with fallback priority: specific → global → default
    const resolvedY = specific?.y ?? global.y ?? DEFAULT_GUTTERS.y;

    // uses CSS variables with fallbacks to generate final values
    return {
        x: `var(${CSS_PREFIX}-x, var(${GLOBAL_GUTTER_PREFIX}-x, ${resolvedX}))`,
        y: `var(${CSS_PREFIX}-y, var(${GLOBAL_GUTTER_PREFIX}-y, ${resolvedY}))`,
    };
}

export default resolveGutters;
