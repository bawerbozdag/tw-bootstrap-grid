import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

const TailwindBootstrapGrid = plugin(function ({
  addComponents,
  theme,
}: PluginAPI) {
  const generateColClasses = () => {
    const cols: Record<string, Record<string, string>> = {};
    const totalCols = 12;

    for (let i = 1; i <= totalCols; i++) {
      cols[`.col-${i}`] = {
        flex: "0 0 auto",
        width: `${(i / totalCols) * 100}%`,
      };
    }

    return cols;
  };

  const generateGutterVariableClasses = () => {
    const spacing = theme("spacing") as Record<string, string>;
    const classes: Record<string, Record<string, string>> = {};

    Object.entries(spacing).forEach(([key, value]) => {
      classes[`.g-${key}`] = {
        "--theme-gutter-x": value,
        "--theme-gutter-y": value,
      };
      classes[`.gx-${key}`] = {
        "--theme-gutter-x": value,
      };
      classes[`.gy-${key}`] = {
        "--theme-gutter-y": value,
      };
    });

    return classes;
  };

  const generateOffsetClasses = () => {
    const offsets: Record<string, Record<string, string>> = {};
    const totalCols = 12;

    for (let i = 1; i <= totalCols; i++) {
      offsets[`.offset-${i}`] = {
        marginLeft: `${(i / totalCols) * 100}%`,
      };
    }

    return offsets;
  };

  const generateOrderClasses = () => {
    const orders: Record<string, Record<string, string>> = {};

    for (let i = 0; i <= 12; i++) {
      orders[`.order-${i}`] = { order: `${i}` };
    }

    orders[".order-first"] = { order: "-9999" };
    orders[".order-last"] = { order: "9999" };

    return orders;
  };

  addComponents({
    ".container": {
      width: "100%",
      paddingRight: "calc(0.75rem + var(--theme-gutter-x, 0.5rem))",
      paddingLeft: "calc(0.75rem + var(--theme-gutter-x, 0.5rem))",
      marginRight: "auto",
      marginLeft: "auto",
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
    ".container-fluid": {
      width: "100%",
      paddingRight: "calc(0.75rem + var(--theme-gutter-x, 0.5rem))",
      paddingLeft: "calc(0.75rem + var(--theme-gutter-x, 0.5rem))",
    },
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: "calc(-1 * var(--theme-gutter-x, 0.5rem))",
      marginLeft: "calc(-1 * var(--theme-gutter-x, 0.5rem))",
      marginTop: "calc(-1 * var(--theme-gutter-y, 0rem))",
      marginBottom: "calc(-1 * var(--theme-gutter-y, 0rem))",
      "& > *": {
        flex: "0 0 100%",
        width: "100%",
        paddingRight: "var(--theme-gutter-x, 0.5rem)",
        paddingLeft: "var(--theme-gutter-x, 0.5rem)",
        paddingTop: "var(--theme-gutter-y, 0rem)",
        paddingBottom: "var(--theme-gutter-y, 0rem)",
      },
    },
    ".col": {
      flex: "1 0 0%",
    },
    ...generateColClasses(),
    ...generateGutterVariableClasses(),
    ...generateOffsetClasses(),
    ...generateOrderClasses(),
  });
});

export default TailwindBootstrapGrid;
module.exports = TailwindBootstrapGrid;
