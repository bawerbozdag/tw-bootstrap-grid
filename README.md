# tw-bootstrap-grid

[![npm version](https://img.shields.io/npm/v/tw-bootstrap-grid.svg)](https://www.npmjs.com/package/tw-bootstrap-grid)
[![license](https://img.shields.io/npm/l/tw-bootstrap-grid.svg)](https://github.com/bawerbozdag/tw-bootstrap-grid/blob/master/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/tw-bootstrap-grid.svg)](https://www.npmjs.com/package/tw-bootstrap-grid)
[![RTL Support](https://img.shields.io/badge/RTL-Supported-blueviolet)](#)

A **Tailwind CSS plugin** that brings a responsive, Bootstrap-like grid system to Tailwind, complete with rows, columns, gutters, offsets, and ordering utilities.

> 📌 This plugin supports **Tailwind CSS v3 and v4**.  
> 🌐 Includes full **RTL (Right-to-Left) support** for layouts in languages like Arabic, Hebrew, and Persian.

---

## ✨ Features

- 🧱 `.row`, `.col`, `.col-1` to `.col-12` for flexible column layouts
- 🧩 `.g-*`, `.gx-*`, `.gy-*` for gutter spacing (uses Tailwind spacing scale)
- 📏 `.offset-*` to add horizontal column offsets
- 🔀 `.order-*`, `.order-first`, `.order-last` for reordering flex items
- 📦 `.container`, `.container-fluid` with responsive max-widths

---

## 📦 Installation

Install the plugin via NPM:

```bash
npm install tw-bootstrap-grid
```

or with Yarn:

```bash
yarn add tw-bootstrap-grid
```

---

## ⚙️ Usage

### ✅ 1. Tailwind Config (`tailwind.config.js` / `tailwind.config.ts`)

```ts
import TailwindBootstrapGrid from "tw-bootstrap-grid";

export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [TailwindBootstrapGrid],
};
```

---

### ✅ 2. CSS / PostCSS Plugin Usage (Tailwind v4 only)

If you're using Tailwind via CSS (e.g., with PostCSS or Vite), you can import the plugin directly:

```css
@import "tailwindcss";
@plugin "tw-bootstrap-grid";
```

✅ The plugin will automatically be resolved from `node_modules`.

---

## 🎛️ Customizing Breakpoints

You can override the default container breakpoints in two ways:

### ✅ Option 1: Using CSS `@theme` directive (Tailwind v4 only)

```css
@theme {
    --breakpoint-sm: 40rem; /* 640px */
    --breakpoint-md: 48rem; /* 768px */
    --breakpoint-lg: 64rem; /* 1024px */
    --breakpoint-xl: 80rem; /* 1280px */
    --breakpoint-xxl: 96rem; /* 1536px */
}
```

> ⚠️ **Requires Tailwind CSS v4**

---

### ✅ Option 2: Via Tailwind Config (`tailwind.config.js` / `tailwind.config.ts`)

```ts
import TailwindBootstrapGrid from "tw-bootstrap-grid";

export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "40rem", // 640px
            md: "48rem", // 768px
            lg: "64rem", // 1024px
            xl: "80rem", // 1280px
            xxl: "96rem", // 1536px
        },
        extend: {},
    },
    plugins: [TailwindBootstrapGrid],
};
```

> ✅ Compatible with both Tailwind v3 and v4.  
> The plugin will automatically use these values to generate responsive container max-widths.

---

## 🎛️ Customizing Gutters

This plugin provides flexible ways to configure horizontal (`x`) and vertical (`y`) gutters:

### ✅ Option 1: Via Tailwind Config (`tailwind.config.js` / `tailwind.config.ts`)

You can configure gutter behavior directly through plugin options when adding the plugin:

```ts
import TailwindBootstrapGrid from "tw-bootstrap-grid";

export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    plugins: [
        TailwindBootstrapGrid({
            // shared gutter values used when no specific values are set for container or row
            gutters: {
                x: "1.5rem",
                y: "0",
            },
            // specific gutter values for `.container`
            // overrides `gutters` if provided
            containerGutters: {
                x: "1.5rem", // used instead of gutters.x
                // y not provided → falls back to gutters.y or default ("0")
            },
            // specific gutter values for `.row`
            // overrides `gutters` if provided
            rowGutters: {
                // x not provided → falls back to gutters.x or default ("1.5rem")
                y: "0", // overrides gutters.y
            },
        }),
    ],
};
```

#### Priority:

| Target Element | Priority Order                                                     |
| -------------- | ------------------------------------------------------------------ |
| `.container`   | 1️⃣ `containerGutters` → 2️⃣ `gutters` → 3️⃣ Default (`1.5rem` / `0`) |
| `.row`         | 1️⃣ `rowGutters` → 2️⃣ `gutters` → 3️⃣ Default (`1.5rem` / `0`)       |

> ✅ Compatible with both Tailwind v3 and v4.

---

### ✅ Option 2: Using CSS `@theme` directive (Tailwind v4 only)

Tailwind CSS v4 introduces native CSS variable theming using @theme. You can declare gutter variables directly in your CSS:

```css
@theme {
    --bs-global-gutter-x: 1.5rem;
    --bs-global-gutter-y: 0;

    --bs-container-gutter-x: var(--bs-global-gutter-x);
    --bs-container-gutter-y: var(--bs-global-gutter-y);

    --bs-row-gutter-x: var(--bs-global-gutter-x);
    --bs-row-gutter-y: var(--bs-global-gutter-y);
}
```

This approach is ideal when you want to control spacing purely from CSS or dynamically change gutter values in different themes/modes.

#### Priority:

| Variable                  | Fallback Chain                      |
| ------------------------- | ----------------------------------- |
| `--bs-container-gutter-x` | → `--bs-global-gutter-x` → `1.5rem` |
| `--bs-container-gutter-y` | → `--bs-global-gutter-y` → `0`      |
| `--bs-row-gutter-x`       | → `--bs-global-gutter-x` → `1.5rem` |
| `--bs-row-gutter-y`       | → `--bs-global-gutter-y` → `0`      |

> ⚠️ **This method requires Tailwind CSS v4**

---

### 🧠 How It Works

Each component uses a fallback chain like:

```
--bs-container-gutter-x → --bs-global-gutter-x → 1.5rem
--bs-row-gutter-y       → --bs-global-gutter-y → 0
```

- `containerGutters` and `rowGutters` always take top priority.
- If not defined, it falls back to `gutters`.
- If `gutters` is not defined, hardcoded defaults are used (`1.5rem` for x, `0` for y).
- In Tailwind v4, CSS custom properties are resolved similarly.

This makes it easy to maintain consistent spacing across your layout while allowing overrides at any layer.

---

## 🧱 Examples

### 🔹 Basic Grid

```html
<div class="container">
    <div class="row">
        <div class="col-6">Left</div>
        <div class="col-6">Right</div>
    </div>
</div>
```

---

### 🔹 RTL Example

```html
<div class="container" dir="rtl">
    <div class="row">
        <div class="col-4 offset-4">Right-Aligned Box</div>
        <div class="col-4">Left Box</div>
    </div>
</div>
```

> `offset-*`, `.row`, and `.container` classes automatically adapt to `dir="rtl"`, making layouts RTL-friendly without extra configuration.

---

### 🔹 Responsive Columns

```html
<div class="row">
    <div class="col-12 md:col-6">50% on md and above</div>
    <div class="col-12 md:col-6">50% on md and above</div>
</div>
```

This demonstrates how you can use Tailwind’s responsive syntax (`sm:`, `md:`, etc.) in place of Bootstrap’s `col-sm-*`, `col-md-*` conventions, while keeping the layout responsive and Tailwind-native.

---

### 🔹 Offset Usage

```html
<div class="row">
    <div class="col-4 offset-4">Centered Column</div>
</div>
```

---

### 🔹 Order Usage

```html
<div class="row">
    <div class="col-6 order-2 order-md-1">Second on mobile, first on desktop</div>
    <div class="col-6 order-1 order-md-2">First on mobile, second on desktop</div>
</div>
```

---

## 📘 Generated Utility Classes

| Class              | Description                                         |
| ------------------ | --------------------------------------------------- |
| `.row`             | Flex container with horizontal and vertical gutters |
| `.col`             | Auto-width column (`flex: 1 0 0%`)                  |
| `.col-{1-12}`      | Fixed-width column (1–12 / 12 fraction)             |
| `.offset-{1-12}`   | Adds left/right margin offset based on direction    |
| `.order-{0-12}`    | Sets flex item order                                |
| `.order-first`     | Pushes item to the beginning                        |
| `.order-last`      | Pushes item to the end                              |
| `.g-{key}`         | Sets both X and Y gutters                           |
| `.gx-{key}`        | Sets only horizontal gutter                         |
| `.gy-{key}`        | Sets only vertical gutter                           |
| `.container`       | Fixed-width responsive container                    |
| `.container-fluid` | Full-width container with padding                   |

---

## 🧠 Notes

- The plugin **does not override any core Tailwind utility**.
- All grid utilities support **responsive variants** (`sm:`, `md:`, `lg:`, etc).
- Gutters are handled using CSS custom properties: `--theme-gutter-x` and `--theme-gutter-y`.
- Fully RTL-compatible: all directional utilities (offset, container, row) adapt automatically to dir="rtl".
- This plugin is not compatible with Tailwind via CDN. Use it in a build environment (PostCSS, Vite, Webpack, etc.).

---

## 🤝 Contributing

Found a bug or have a feature request? Feel free to open an [issue](https://github.com/bawerbozdag/tw-bootstrap-grid/issues) or submit a [pull request](https://github.com/bawerbozdag/tw-bootstrap-grid/pulls)!

---

## 🪪 License

MIT © [Baver Bozdağ](https://github.com/bawerbozdag)
