import type { PluginAPI } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";

// define a custom Tailwind plugin for Bootstrap-style grid system
const TailwindBootstrapGrid = plugin(function ({
  addComponents,
  theme,
}: PluginAPI) {
  // total number of columns in the grid system
  const totalCols = 12;

  // generate .col-{1-12} classes for column widths
  const generateColClasses = () => {
    // create an empty object to hold column class definitions
    const cols: Record<string, Record<string, string>> = {};

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
    const classes: Record<string, Record<string, string>> = {};

    Object.entries(spacing).forEach(([key, value]) => {
      // .g-{key} => applies both horizontal and vertical gutter
      classes[`.g-${key}`] = {
        "--theme-gutter-x": value,
        "--theme-gutter-y": value,
      };

      // .gx-{key} => horizontal gutter only
      classes[`.gx-${key}`] = {
        "--theme-gutter-x": value,
      };

      // .gy-{key} => vertical gutter only
      classes[`.gy-${key}`] = {
        "--theme-gutter-y": value,
      };
    });

    return classes;
  };

  // generate .offset-{1-12} to add left margin as offset
  const generateOffsetClasses = () => {
    const offsets: Record<string, Record<string, string>> = {};

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
    const orders: Record<string, Record<string, string>> = {};

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
    // basic container class for fixed width layout
    ".container": {
      width: "100%",
      paddingRight: "calc(0.75rem + var(--theme-gutter-x, 0.5rem))",
      paddingLeft: "calc(0.75rem + var(--theme-gutter-x, 0.5rem))",
      marginRight: "auto",
      marginLeft: "auto",

      // responsive max-width settings per breakpoint
      "@screen sm": {
        maxWidth: "540px",
      },
      "@screen md": {
        maxWidth: "720px",
      },
      "@screen lg": {
        maxWidth: "960px",
      },
      "@screen xl": {
        maxWidth: "1140px",
      },
      "@screen xxl": {
        maxWidth: "1400px",
      },
    },

    // fluid container takes full width always
    ".container-fluid": {
      width: "100%",
      paddingRight: "calc(0.75rem + var(--theme-gutter-x, 0.5rem))",
      paddingLeft: "calc(0.75rem + var(--theme-gutter-x, 0.5rem))",
    },

    // row class with negative margins and wrapping
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: "calc(-1 * var(--theme-gutter-x, 0.5rem))",
      marginLeft: "calc(-1 * var(--theme-gutter-x, 0.5rem))",
      marginTop: "calc(-1 * var(--theme-gutter-y, 0rem))",
      marginBottom: "calc(-1 * var(--theme-gutter-y, 0rem))",

      // each child gets padding for gutter
      "& > *": {
        flex: "0 0 100%",
        width: "100%",
        paddingRight: "var(--theme-gutter-x, 0.5rem)",
        paddingLeft: "var(--theme-gutter-x, 0.5rem)",
        paddingTop: "var(--theme-gutter-y, 0rem)",
        paddingBottom: "var(--theme-gutter-y, 0rem)",
      },
    },

    // default column class that fills available space
    ".col": {
      flex: "1 0 0%",
    },

    // add generated utilities
    ...generateColClasses(),
    ...generateGutterVariableClasses(),
    ...generateOffsetClasses(),
    ...generateOrderClasses(),
  });
});

export default TailwindBootstrapGrid;
