# Setup and configuration

## Install

```bash
npm install tw-bootstrap-grid
# or: yarn add tw-bootstrap-grid / pnpm add tw-bootstrap-grid
```

Peer dependency: `tailwindcss >= 3.0.0`. Tested against **v3.4.x** and **v4+**.
Node `>= 18`.

The plugin runs at build time and needs a real build pipeline (PostCSS, Vite,
Webpack, Next.js, …). It does **not** work with the Tailwind CDN script.

## Tailwind v3

```ts
// tailwind.config.ts
import Grid from "tw-bootstrap-grid";

export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    plugins: [Grid],
};
```

Pass options by calling the plugin:

```ts
import Grid from "tw-bootstrap-grid";

export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    plugins: [
        Grid({
            gutters: { x: "1.5rem", y: "0" }, // global fallback
            containerGutters: { x: "2rem", y: "0" }, // .container / .container-fluid
            rowGutters: { x: "1.5rem", y: "1rem" }, // .row
            generateContainers: true,
        }),
    ],
};
```

| Option               | Type                         | Default                   | Effect                                                             |
| :------------------- | :--------------------------- | :------------------------ | :----------------------------------------------------------------- |
| `gutters`            | `{ x?: string; y?: string }` | `{ x: "1.5rem", y: "0" }` | Fallback for both container and row                                |
| `containerGutters`   | `{ x?: string; y?: string }` | inherits `gutters`        | `.container` / `.container-fluid` only                             |
| `rowGutters`         | `{ x?: string; y?: string }` | inherits `gutters`        | `.row` only                                                        |
| `generateContainers` | `boolean`                    | `true`                    | `false` skips the `.container` / `.container-fluid` rules entirely |

Resolution order per axis: **specific → global → built-in default**. The
resolved value is only the _last_ fallback in the emitted CSS variable chain:

```css
.row {
    --bs-gutter-x: var(--bs-row-gutter-x, var(--bs-global-gutter-x, 1.5rem));
}
```

So a runtime `--bs-row-gutter-x` or `--bs-global-gutter-x` still wins over
whatever you configured at build time.

## Tailwind v4

```css
@import "tailwindcss";
@plugin "tw-bootstrap-grid";
```

`@plugin` option blocks only accept **flat** key/value pairs, so the nested
`gutters` / `containerGutters` / `rowGutters` objects are v3-only. The boolean
option works:

<!-- prettier-ignore -->
```css
@import "tailwindcss";
@plugin "tw-bootstrap-grid" {
    generateContainers: false;
}
```

Configure gutters in v4 by defining the CSS variables the plugin already falls
back to — this is the documented v4 path and it is equivalent to the v3 options:

```css
@import "tailwindcss";
@plugin "tw-bootstrap-grid";

@theme {
    /* global fallback for container + row */
    --bs-global-gutter-x: 1.5rem;
    --bs-global-gutter-y: 0;

    /* per-scope overrides (optional) */
    --bs-container-gutter-x: 2rem;
    --bs-container-gutter-y: 0;
    --bs-row-gutter-x: 1.5rem;
    --bs-row-gutter-y: 1rem;
}
```

Custom-namespace variables like these are always emitted by v4 — they are not
tree-shaken the way unused `--color-*` / `--spacing-*` theme values are.

Because they are plain CSS variables, you can also scope them without touching
the build:

```html
<section style="--bs-row-gutter-y: 2rem">
    <div class="row">…</div>
</section>
```

## Breakpoints

The plugin generates no breakpoints of its own — responsive variants
(`md:col-6`) and `.container`'s `max-width` steps both come from Tailwind. To
change them, change Tailwind's breakpoints.

**v3:**

```ts
export default {
    theme: {
        screens: {
            sm: "40rem", // 640px
            md: "48rem", // 768px
            lg: "64rem", // 1024px
            xl: "80rem", // 1280px
            "2xl": "96rem", // 1536px
        },
    },
    plugins: [Grid],
};
```

**v4:**

```css
@theme {
    --breakpoint-sm: 40rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
    --breakpoint-xl: 80rem;
    --breakpoint-2xl: 96rem;
}
```

## Where the classes land in the cascade

The plugin uses `addComponents`, but the two Tailwind versions place the output
differently:

- **v3** — components layer, i.e. _before_ utilities. Tailwind utilities beat
  the plugin: `class="col-6 w-1/3"` renders at one third.
- **v4** — the rules end up inside `@layer utilities`, after Tailwind's own
  utilities of the same name. For a class that exists in both (`col-6`,
  `col-auto`) the plugin's declarations win on the properties it sets; the core
  utility's other properties (`grid-column`) still apply.

Either way, use `!` (`w-1/3!` in v4, `!w-1/3` in v3) when you need a utility to
beat the grid unconditionally.

## Turning containers off

Set `generateContainers: false` when you already have your own `.container` (a
common clash in projects migrating from Bootstrap, or when Tailwind's own
`container` utility with `center`/`padding` config is enough). The plugin then
emits no `.container` and no `.container-fluid` — `.row`, `.col-*`, offsets,
gutters and `row-cols-*` are unaffected.
