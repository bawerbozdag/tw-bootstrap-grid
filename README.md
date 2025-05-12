# tw-bootstrap-grid

A **Tailwind CSS plugin** that brings a responsive, Bootstrap-like grid system to Tailwind — complete with rows, columns, gutters, offsets, and ordering utilities.

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

### ✅ 2. CSS / PostCSS Plugin Usage

If you're using Tailwind via CSS (e.g., with PostCSS or Vite), you can import the plugin directly:

```css
@import "tailwindcss";
@plugin "tw-bootstrap-grid";
```

> ✅ The plugin will automatically be resolved from `node_modules`.

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

### 🔹 Responsive Columns

```html
<div class="row">
  <div class="col-12 md:col-6">50% on md and above</div>
  <div class="col-12 md:col-6">50% on md and above</div>
</div>
```

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
| `.offset-{1-12}`   | Adds left margin offset based on column size        |
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

---

## 🪪 License

MIT © [Baver Bozdağ](https://github.com/bawerbozdag)
