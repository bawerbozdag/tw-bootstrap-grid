# tw-bootstrap-grid

> A **Tailwind CSS plugin** that adds a responsive, Bootstrap-like 12-column grid system to Tailwind.  
> Works with **Tailwind CSS v3.4.x** and **v4+**, including full **RTL** (Right-to-Left) support.

[![npm version](https://img.shields.io/npm/v/tw-bootstrap-grid.svg)](https://www.npmjs.com/package/tw-bootstrap-grid)
[![npm downloads](https://img.shields.io/npm/dm/tw-bootstrap-grid.svg)](https://www.npmjs.com/package/tw-bootstrap-grid)
[![bundle size](https://badgen.net/bundlephobia/minzip/tw-bootstrap-grid)](https://bundlephobia.com/result?p=tw-bootstrap-grid)
[![license](https://img.shields.io/npm/l/tw-bootstrap-grid.svg)](LICENSE)
[![RTL Support](https://img.shields.io/badge/RTL-Supported-blueviolet)](#)
[![Demo](https://img.shields.io/badge/Live-Demo-0EA5E9)](https://tw-bootstrap-grid.vercel.app)

---

## ✨ Features

- `.row`, `.col`, `.col-1` to `.col-12` for flexible column layouts.
- `.g-*`, `.gx-*` and `.gy-*` for gutter spacing (uses Tailwind spacing scale).
- `.offset-*` to add horizontal column offsets.
- `.row-cols-(1-6)` classes evenly divide row children into equal columns.
- `.container` and `.container-fluid` with responsive max-widths.
- Automatically adapts `.row`, `.offset-*` and `.container` for right-to-left layouts.

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

## ⚙️ Quick Setup

### Tailwind v3 Config

```ts
import Grid from "tw-bootstrap-grid";

export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    plugins: [Grid],
};
```

### Tailwind v4 (CSS / PostCSS)

```css
@import "tailwindcss";
@plugin "tw-bootstrap-grid";
```

---

## 📘 Documentation & Examples

👉 Find the full documentation, setup guide, and interactive examples on **[Docs & Live Examples](https://tw-bootstrap-grid.vercel.app)**.

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
