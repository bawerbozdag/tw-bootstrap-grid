# Generated CSS reference

Exactly what the plugin emits. Anything not on this page is not generated.

## Container

Emitted unless `generateContainers: false`. `.container` and `.container-fluid`
share one rule:

```css
.container,
.container-fluid {
    --bs-gutter-x: var(--bs-container-gutter-x, var(--bs-global-gutter-x, 1.5rem));
    --bs-gutter-y: var(--bs-container-gutter-y, var(--bs-global-gutter-y, 0));
    width: 100%;
    padding-right: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
    padding-left: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
    margin-right: auto;
    margin-left: auto;
}
```

The responsive `max-width` steps you see on `.container` come from **Tailwind
itself** (v3's core container plugin, v4's `container` utility), not from here.
That is why `.container` is capped at each breakpoint and `.container-fluid`
never is.

## Row

```css
.row {
    --bs-gutter-x: var(--bs-row-gutter-x, var(--bs-global-gutter-x, 1.5rem));
    --bs-gutter-y: var(--bs-row-gutter-y, var(--bs-global-gutter-y, 0));
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y, 0));
    margin-right: calc(-0.5 * var(--bs-gutter-x, 1.5rem));
    margin-left: calc(-0.5 * var(--bs-gutter-x, 1.5rem));
}

.row > * {
    flex-shrink: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
    padding-left: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
    margin-top: var(--bs-gutter-y, 0);
}
```

The negative margins on `.row` cancel the padding the children add, so a row
still lines up flush with its container's edges. This is why a `.row` should
normally sit inside a `.container` (or another padded element) — dropping one
straight into `<body>` makes the first and last columns bleed by half a gutter.

## Columns

```css
.col {
    flex: 1 0 0%;
}
.col-auto {
    flex: 0 0 auto;
    width: auto;
}
```

`.col-1` … `.col-12` — `flex: 0 0 auto` plus `width: N/12 * 100%`:

| Class    | width                 | Class     | width                 |
| :------- | :-------------------- | :-------- | :-------------------- |
| `.col-1` | `8.333333333333332%`  | `.col-7`  | `58.333333333333336%` |
| `.col-2` | `16.666666666666664%` | `.col-8`  | `66.66666666666666%`  |
| `.col-3` | `25%`                 | `.col-9`  | `75%`                 |
| `.col-4` | `33.33333333333333%`  | `.col-10` | `83.33333333333334%`  |
| `.col-5` | `41.66666666666667%`  | `.col-11` | `91.66666666666666%`  |
| `.col-6` | `50%`                 | `.col-12` | `100%`                |

## Offsets

`.offset-0` … `.offset-12`, one logical property each:

```css
.offset-0 {
    margin-inline-start: 0;
}
.offset-3 {
    margin-inline-start: 25%;
}
.offset-12 {
    margin-inline-start: 100%;
}
```

`margin-inline-start` resolves against the element's own direction, so offsets
flip under `dir="rtl"` with no extra selector. The generated CSS contains **no**
`[dir="rtl"]` rules and no physical `margin-left` / `margin-right`.

## Row columns

Applied to the `.row`, styling `> .col` and `> *`:

```css
.row-cols-auto > .col,
.row-cols-auto > * {
    flex: 0 0 auto;
    width: auto;
}
.row-cols-1 > .col,
.row-cols-1 > * {
    flex: 0 0 auto;
    width: 100%;
}
```

| Class            | child width           |
| :--------------- | :-------------------- |
| `.row-cols-1`    | `100%`                |
| `.row-cols-2`    | `50%`                 |
| `.row-cols-3`    | `33.33333333333333%`  |
| `.row-cols-4`    | `25%`                 |
| `.row-cols-5`    | `20%`                 |
| `.row-cols-6`    | `16.666666666666664%` |
| `.row-cols-auto` | `auto`                |

Only 1–6 exist. `row-cols-*` targets **direct children**, so a nested `.row`
inside a `row-cols-3` parent gets its width set too.

## Gutters

Built from Tailwind's `theme("spacing")`, **skipping every key that contains a
dot**. Generated keys:

```
px  0  1  2  3  4  5  6  7  8  9  10  11  12  14  16  20  24  28  32  36
40  44  48  52  56  60  64  72  80  96
```

Not generated: `0.5`, `1.5`, `2.5`, `3.5` (fractional keys), and — on Tailwind
v4 — any key outside the list above, because the plugin reads the v3-compat
spacing map rather than v4's dynamic `--spacing` scale. `g-13` does not exist
even though `p-13` does.

```css
.g-4 {
    --bs-gutter-x: 1rem;
    --bs-gutter-y: 1rem;
}
.gx-4 {
    --bs-gutter-x: 1rem;
}
.gy-4 {
    --bs-gutter-y: 1rem;
}
```

They set variables only. Put them on the element that reads them — `.row` or
`.container` — and remember `.row` re-declares both variables, so a `g-*` on an
ancestor is overwritten by any `.row` below it.

## Gutter variable chain

| Variable                          | Set by                                         | Read by                    |
| :-------------------------------- | :--------------------------------------------- | :------------------------- |
| `--bs-gutter-x` / `--bs-gutter-y` | `.container`, `.row`, `.g-*`, `.gx-*`, `.gy-*` | the padding / margin rules |
| `--bs-container-gutter-x` / `-y`  | you (theme or inline)                          | `.container` default       |
| `--bs-row-gutter-x` / `-y`        | you (theme or inline)                          | `.row` default             |
| `--bs-global-gutter-x` / `-y`     | you (theme or inline)                          | fallback for both          |

Precedence, highest first: a `.g-*` class on the element → the scope-specific
variable (`--bs-row-gutter-x`) → the global variable
(`--bs-global-gutter-x`) → the build-time option → `1.5rem` / `0`.

## Not generated by this plugin

`order-*`, `col-span-*`, `justify-*`, `items-*`, `flex-*`, `gap-*`,
`.col-{breakpoint}-{n}` (Bootstrap's own syntax — use Tailwind's `md:col-6`
instead), and `.g-*` with arbitrary values. Use native Tailwind utilities for
all of these.
