# tw-bootstrap-grid

**The Bootstrap grid you already know, running on Tailwind.**

If you've ever typed `row`, `col-md-6` and `offset-2` without thinking, this plugin lets you keep doing exactly that inside a Tailwind project. No new mental model, no rewriting layouts from scratch. It works with **Tailwind CSS v3.4+ and v4**, and it behaves properly in **right-to-left** layouts too.

[![npm version](https://img.shields.io/npm/v/tw-bootstrap-grid.svg)](https://www.npmjs.com/package/tw-bootstrap-grid)
[![npm downloads](https://img.shields.io/npm/dm/tw-bootstrap-grid.svg)](https://www.npmjs.com/package/tw-bootstrap-grid)
[![bundle size](https://badgen.net/bundlephobia/minzip/tw-bootstrap-grid)](https://bundlephobia.com/result?p=tw-bootstrap-grid)
[![license](https://img.shields.io/npm/l/tw-bootstrap-grid.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/Live-Demo-0EA5E9)](https://tw-bootstrap-grid.vercel.app)

---

## Why this exists

Tailwind is great, but sometimes you just want a 12-column grid. Maybe you're migrating a Bootstrap project, maybe your team already thinks in columns, or maybe you simply find `col-4` easier to read than a pile of flex and width utilities. This plugin adds that grid and gets out of your way. It doesn't replace any Tailwind utility (it only adds to `.container`), so you can mix both styles freely on the same page.

```html
<div class="container">
    <div class="row g-4">
        <div class="col-12 md:col-6 lg:col-4">One</div>
        <div class="col-12 md:col-6 lg:col-4">Two</div>
        <div class="col-12 lg:col-4">Three</div>
    </div>
</div>
```

---

## Install

```bash
npm install tw-bootstrap-grid
```

## Set it up

**Tailwind v4** (in your CSS file):

```css
@import "tailwindcss";
@plugin "tw-bootstrap-grid";
```

**Tailwind v3** (in `tailwind.config.js` / `.ts`):

```ts
import Grid from "tw-bootstrap-grid";

export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    plugins: [Grid],
};
```

If your v3 config is a CommonJS file, `plugins: [require("tw-bootstrap-grid")]` works as well.

> The plugin needs a build step (PostCSS, Vite, Webpack and friends). It can't work with the Tailwind Play CDN script.

---

## What you get

| Class                                  | What it does                                                              |
| -------------------------------------- | ------------------------------------------------------------------------- |
| `.container`, `.container-fluid`       | Centered wrapper with horizontal padding that matches the gutter          |
| `.row`                                 | Flex row that wraps, with negative margins so gutters line up             |
| `.col`                                 | Column that shares the remaining space equally                            |
| `.col-auto`                            | Column sized by its content                                               |
| `.col-1` … `.col-12`                   | Fixed-width columns on a 12-column grid                                   |
| `.offset-0` … `.offset-12`             | Push a column to the right (to the left in RTL)                           |
| `.row-cols-auto`, `.row-cols-1` … `-6` | Put equal-width columns in a row without styling each child               |
| `.g-*`, `.gx-*`, `.gy-*`               | Gutter size (both, horizontal, vertical) from your Tailwind spacing scale |

Everything supports Tailwind's responsive variants, so `md:col-6`, `lg:offset-3` and `sm:row-cols-2` all work as you'd expect.

### About `.container`

The plugin supplies the container's centering and gutter padding. The breakpoint-based `max-width` comes from Tailwind's own `container`, so changing your screens (v3) or `--breakpoint-*` values (v4) changes the container widths automatically.

### About gutters

`.g-4` uses the `4` step of your Tailwind spacing scale, so it follows your theme. Steps with a dot (like `0.5`) are skipped to keep class names clean.

---

## Configuration

Everything is optional. Out of the box, gutters are `1.5rem` horizontally and `0` vertically, just like Bootstrap.

```ts
import Grid from "tw-bootstrap-grid";

export default {
    plugins: [
        Grid({
            // used by both containers and rows
            gutters: { x: "1.5rem", y: "0" },

            // override only for containers
            containerGutters: { x: "1rem" },

            // override only for rows
            rowGutters: { x: "2rem", y: "1rem" },

            // set to false if you don't want .container / .container-fluid
            generateContainers: true,
        }),
    ],
};
```

Values are resolved in this order: **specific option → `gutters` → default**.

On Tailwind v4 you can't pass these options through `@plugin`, so use CSS variables instead. They are read at runtime, so you can also override them on any element to change the gutters for just that section (`:root` works as well as `@theme`):

```css
@theme {
    --bs-global-gutter-x: 1.5rem;
    --bs-global-gutter-y: 0;

    --bs-container-gutter-x: var(--bs-global-gutter-x);
    --bs-row-gutter-x: var(--bs-global-gutter-x);
}
```

The variables follow the same fallback chain as the options: `--bs-row-gutter-*` / `--bs-container-gutter-*` → `--bs-global-gutter-*` → the built-in default. Individual `.g-*`, `.gx-*` and `.gy-*` classes override the gutter on the element they're applied to by setting `--bs-gutter-x` and `--bs-gutter-y`.

---

## Right-to-left support

Offsets use logical properties (`margin-inline-start`), and the row's gutters are symmetric, so layouts flip correctly when you set `dir="rtl"`. There's nothing extra to configure.

---

## Docs and live examples

Interactive examples and a full walkthrough live at **[tw-bootstrap-grid.vercel.app](https://tw-bootstrap-grid.vercel.app)**.

---

## Contributing

Found a bug or have an idea? Please open an [issue](https://github.com/bawerbozdag/tw-bootstrap-grid/issues) or send a [pull request](https://github.com/bawerbozdag/tw-bootstrap-grid/pulls). To work on the plugin locally:

```bash
npm install
npm test        # builds, then runs the Tailwind v3 and v4 test suites
```

---

## License

MIT © [Baver Bozdağ](https://github.com/bawerbozdag)
