import resolveGutters, { type IGridOptions } from "./utils/resolveGutters";
import type { CSSRuleObject } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";

// define a custom Tailwind plugin for Bootstrap-style grid system
const TailwindBootstrapGrid = plugin.withOptions((options: IGridOptions = {}) => ({ addComponents, theme }) => {
    // total number of columns in the grid system
    const totalCols = 12;

    // resolve container-specific gutter values using provided options
    const containerGutters = resolveGutters("container", options);

    // resolve row-specific gutter values using provided options
    const rowGutters = resolveGutters("row", options);

    // generate .col-{1-12} classes for column widths
    const generateColClasses = () => {
        // create an empty object to hold column class definitions
        const cols: CSSRuleObject = {};

        for (let i = 1; i <= totalCols; i++) {
            // define .col-{i} classes with corresponding flex and width
            cols[`.col-${i}`] = {
                flex: "0 0 auto",
                width: `${(i / totalCols) * 100}%`, // calculate in %
            };
        }

        return cols;
    };

    // generate .g-{key}, .gx-{key}, and .gy-{key} for gutter spacing
    const generateGutterVariableClasses = () => {
        const spacing = theme("spacing") as Record<string, string>;
        const classes: CSSRuleObject = {};

        Object.entries(spacing).forEach(([key, value]) => {
            // .g-{key} => applies both horizontal and vertical gutter
            classes[`.g-${key}`] = {
                "--bs-gutter-x": value,
                "--bs-gutter-y": value,
            };

            // .gx-{key} => horizontal gutter only
            classes[`.gx-${key}`] = {
                "--bs-gutter-x": value,
            };

            // .gy-{key} => vertical gutter only
            classes[`.gy-${key}`] = {
                "--bs-gutter-y": value,
            };
        });

        return classes;
    };

    // generate .offset-{1-12} to add left margin as offset
    const generateOffsetClasses = () => {
        const offsets: CSSRuleObject = {};

        for (let i = 1; i <= totalCols; i++) {
            // .offset-{1-12} => adds left margin to offset the column
            offsets[`.offset-${i}`] = {
                marginLeft: `${(i / totalCols) * 100}%`, // calculate in %
            };
        }

        return offsets;
    };

    // generate .order-{0-12}, .order-first, .order-last for ordering flex items
    const generateOrderClasses = () => {
        const orders: CSSRuleObject = {};

        // .order-{0-12}
        for (let i = 0; i <= 12; i++) {
            orders[`.order-${i}`] = { order: `${i}` };
        }

        // .order-first sets item to very beginning
        orders[".order-first"] = { order: "-9999" };

        // .order-last sets item to very end
        orders[".order-last"] = { order: "9999" };

        return orders;
    };

    addComponents({
        ".container, .container-fluid": {
            // define horizontal and vertical gutter spacing using CSS variables for container
            "--bs-gutter-x": containerGutters.x,
            "--bs-gutter-y": containerGutters.y,

            // full width with automatic horizontal centering
            width: "100%",
            paddingRight: "calc(var(--bs-gutter-x, 1.5rem) * 0.5)",
            paddingLeft: "calc(var(--bs-gutter-x, 1.5rem) * 0.5)",
            marginRight: "auto",
            marginLeft: "auto",
        },

        // row class with negative margins and wrapping
        ".row": {
            // define horizontal and vertical gutter spacing using CSS variables for row
            "--bs-gutter-x": rowGutters.x,
            "--bs-gutter-y": rowGutters.y,

            display: "flex",
            flexWrap: "wrap",
            marginTop: "calc(-1 * var(--bs-gutter-y, 0))",
            marginRight: "calc(-.5 * var(--bs-gutter-x, 1.5rem))",
            marginLeft: "calc(-.5 * var(--bs-gutter-x, 1.5rem))",

            // each child gets padding for gutter
            "& > *": {
                flexShrink: "0",
                width: "100%",
                paddingRight: "calc(var(--bs-gutter-x, 1.5rem) * .5)",
                paddingLeft: "calc(var(--bs-gutter-x, 1.5rem) * .5)",
                marginTop: "var(--bs-gutter-y, 0)",
            },
        },

        // default column class that fills available space
        ".col": {
            flex: "1 0 0%",
        },

        // column with auto width based on content
        ".col-auto": {
            flex: "0 0 auto",
            width: "auto",
        },

        // add generated utilities
        ...generateColClasses(),
        ...generateGutterVariableClasses(),
        ...generateOffsetClasses(),
        ...generateOrderClasses(),
    });
});

export default TailwindBootstrapGrid;
