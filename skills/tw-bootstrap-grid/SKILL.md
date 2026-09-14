---
name: tw-bootstrap-grid
description: >-
    Build layouts with the tw-bootstrap-grid Tailwind CSS plugin, which adds a
    Bootstrap-style 12-column flexbox grid (.container, .row, .col-*, .offset-*,
    .row-cols-*, .g-*/.gx-*/.gy-* gutters) to Tailwind v3.4.x and v4+. Use when
    installing or configuring the plugin, writing markup with these classes,
    tuning gutters, adding RTL layouts, or debugging classes that render with no
    effect. Covers the v3 vs v4 setup differences and the class collisions with
    Tailwind's own col-* utilities.
---

# tw-bootstrap-grid

A Tailwind CSS plugin that adds Bootstrap 5's flexbox grid on top of Tailwind.
It ships **components only** — it adds no JavaScript and does not remove or
replace any Tailwind core utility.

Homepage / live docs: <https://tw-bootstrap-grid.vercel.app>

**Do not guess the API.** Everything the plugin generates is listed below or in
`references/`. If a class is not listed here, the plugin does not generate it —
reach for a native Tailwind utility instead (`order-*`, `items-*`, `flex-*`, …).

## Setup

Install: `npm install tw-bootstrap-grid` (peer dep: `tailwindcss >= 3.0.0`).

**Tailwind v3** — `tailwind.config.ts`:

```ts
import Grid from "tw-bootstrap-grid";

export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    plugins: [Grid],
};
```

**Tailwind v4** — main CSS file:

```css
@import "tailwindcss";
@plugin "tw-bootstrap-grid";
```

The plugin requires a build step (PostCSS, Vite, Webpack, …). It **cannot** be
used with the Tailwind CDN build.

Detect which version a project is on before writing setup code: Tailwind v4 has
no `tailwind.config.*` by default and configures itself from CSS (`@import
"tailwindcss"`), v3 has a config file and `@tailwind base/components/utilities`
directives. See [setup.md](references/setup.md) for options, gutter
configuration, and per-version details.

## Class reference

| Class                         | Effect                                                                            |
| :---------------------------- | :-------------------------------------------------------------------------------- |
| `.container`                  | `width: 100%`, auto horizontal margins, gutter/2 padding on both sides            |
| `.container-fluid`            | Same as `.container`, but never gets a `max-width`                                |
| `.row`                        | `display: flex; flex-wrap: wrap` + negative gutter margins                        |
| `.row > *`                    | Every direct child: `flex-shrink: 0; width: 100%` + gutter padding and top margin |
| `.col`                        | `flex: 1 0 0%` — split remaining space evenly                                     |
| `.col-auto`                   | `flex: 0 0 auto; width: auto` — size to content                                   |
| `.col-1` … `.col-12`          | `flex: 0 0 auto` + `width: N/12 * 100%`                                           |
| `.offset-0` … `.offset-12`    | `margin-inline-start: N/12 * 100%`                                                |
| `.row-cols-1` … `.row-cols-6` | On a `.row`: force every child to `100/N %` width                                 |
| `.row-cols-auto`              | On a `.row`: every child sizes to its content                                     |
| `.g-<n>`                      | Sets both `--bs-gutter-x` and `--bs-gutter-y`                                     |
| `.gx-<n>`                     | Sets `--bs-gutter-x` (horizontal) only                                            |
| `.gy-<n>`                     | Sets `--bs-gutter-y` (vertical) only                                              |

All of them accept Tailwind responsive variants: `md:col-6`, `lg:offset-3`,
`sm:row-cols-2`, `xl:gy-8`.

Exact generated CSS for every class: [classes.md](references/classes.md).

## Mental model

1. **`.row` styles its children, not just itself.** The gutter padding, the
   `width: 100%` default and the `margin-top` live in a `.row > *` rule. A
   column only behaves like a column when it is a **direct child** of a `.row`.
   Wrapping columns in an extra `<div>` breaks the layout.

2. **Columns default to full width.** `.row > *` sets `width: 100%`, so a child
   with no `.col-*` class becomes a full-width row of its own. This is what
   makes mobile-first markup work: `class="col-12 md:col-6"` is really just
   `class="md:col-6"` plus the default.

3. **Gutters are CSS variables, not fixed values.** `.row` and `.container`
   declare `--bs-gutter-x` / `--bs-gutter-y`; the padding and margin rules read
   them. `.g-*` / `.gx-*` / `.gy-*` only reassign those variables, which is why
   they must be placed **on the `.row`** (or on `.container`), never on a
   column.

    ```html
    <!-- correct -->
    <div class="row gy-4"><div class="col-6">…</div></div>
    <!-- wrong: sets the variable on an element that never reads it -->
    <div class="row"><div class="col-6 gy-4">…</div></div>
    ```

4. **Vertical gutters are 0 by default.** `--bs-gutter-y` defaults to `0`, so
   wrapped rows touch each other. Add `gy-*` (or `g-*`) whenever a row can wrap.

5. **The 12-column math is percentage widths on flex items** — not CSS Grid.
   Total per row must stay at or under 12 or the columns wrap.

## Common patterns

Responsive cards, mobile-first, with vertical gutter for the wrap:

```html
<div class="container">
    <div class="row gy-4">
        <div class="col-12 sm:col-6 lg:col-4">Card 1</div>
        <div class="col-12 sm:col-6 lg:col-4">Card 2</div>
        <div class="col-12 sm:col-6 lg:col-4">Card 3</div>
    </div>
</div>
```

Centering a column — offset half of the remaining columns:

```html
<div class="row">
    <div class="col-6 offset-3">Centered</div>
</div>
```

Equal-width columns without counting (`row-cols-*` sets the children's width):

```html
<div class="row row-cols-2 lg:row-cols-3 g-4">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
</div>
```

Reordering uses **Tailwind's own** `order-*` utilities — the plugin has no
order classes:

```html
<div class="row">
    <div class="col-6 order-2 md:order-1">Left on desktop</div>
    <div class="col-6 order-1 md:order-2">Right on desktop</div>
</div>
```

More recipes (nested rows, sidebar layouts, RTL, full-bleed sections):
[patterns.md](references/patterns.md).

## RTL

Set `dir="rtl"` and the grid flips on its own — no config, no variant, no
separate stylesheet:

```html
<div class="container" dir="rtl">
    <div class="row">
        <div class="col-4 offset-2">…</div>
    </div>
</div>
```

`.offset-*` uses the logical `margin-inline-start`, so it follows the element's
own resolved direction. Flex ordering follows `dir` natively. Do **not** add
`[dir="rtl"]` overrides or `rtl:` variants for offsets — they would double-flip.

## Gotchas

- **Gutter classes only exist for whole-number spacing keys.** The plugin skips
  every spacing key containing a `.`, so `g-0.5`, `gx-1.5`, `gy-2.5` and
  `g-3.5` **do not exist**. Valid keys: `px`, `0`–`12`, `14`, `16`, `20`, `24`,
  `28`, `32`, `36`, `40`, `44`, `48`, `52`, `56`, `60`, `64`, `72`, `80`, `96`.
  Arbitrary values (`g-[10px]`) are not supported either — set
  `--bs-gutter-x` inline or via a theme variable instead.
- **On Tailwind v4, `g-13`-style keys do not work** even though `p-13` does.
  The plugin reads the v3-compat `theme("spacing")` map, not v4's dynamic
  `--spacing` multiplier scale.
- **`col-*` collides with Tailwind's own `col-*` (`grid-column`).** On v4,
  `col-6` is also a core utility (`grid-column: 6`); on v3 only `col-auto` is.
  Both rules get emitted for the same class name — the plugin supplies
  `flex`/`width`, the core utility's `grid-column` survives alongside it.
  Harmless inside a `.row` (a flex container ignores `grid-column`), but on v4
  a `.col-6` inside a CSS Grid container will silently land in grid column 6.
  Use `col-span-6` for real CSS Grid, `col-6` for this plugin's grid.
- **`.container`'s responsive `max-width` comes from Tailwind, not this
  plugin.** The plugin only adds the gutter padding and `margin: auto`. Change
  the widths by editing your breakpoints (v3 `theme.screens`, v4
  `--breakpoint-*`), and note `.container-fluid` gets no `max-width` at all.
- **Dynamically built class names get purged.** `` `col-${n}` `` is invisible to
  Tailwind's scanner. Write the full class name out, or safelist it (v3
  `safelist`, v4 `@source inline(...)`).

Full list with symptoms and fixes: [troubleshooting.md](references/troubleshooting.md).
