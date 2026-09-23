# Troubleshooting

Symptom-first. Each entry names the cause and the fix.

## Nothing happens — no grid CSS at all

- **Tailwind CDN.** The plugin is a build-time plugin and the CDN build cannot
  load it. Move to PostCSS / Vite / Webpack / Next.js.
- **Plugin not registered.** v3 needs `plugins: [Grid]` in `tailwind.config.*`;
  v4 needs `@plugin "tw-bootstrap-grid";` in the CSS file that also has
  `@import "tailwindcss";`.
- **File not scanned.** v3: the file must match a `content` glob. v4: it must be
  under a scanned source root (`@source` if it is outside the CSS file's
  project directory).

Quick check: search the compiled CSS for `--bs-gutter-x`. If it is missing, the
plugin never ran.

## A specific class does nothing, others work

Almost always the scanner. ``className={`col-${n}`}``, `"col-" + n`, or class
names assembled in a config/CMS string are invisible to Tailwind. Write literal
class names, use a lookup map, or safelist:

```ts
// v3
safelist: ["col-4", "col-6", "col-8", { pattern: /^(col|offset)-(\d{1,2})$/ }];
```

```css
/* v4 */
@source inline("{col,offset}-{1,2,3,4,6,8,12}");
```

## `g-0.5`, `gx-1.5`, `g-2.5` are not generated

By design — the plugin skips every spacing key containing a dot. Whole-number
keys and `px` only. For a half-step gutter set the variable directly:

```html
<div class="row" style="--bs-gutter-x: 0.125rem">…</div>
```

or define `--bs-row-gutter-x` in your theme.

## `g-13` (or any custom spacing key) is not generated on Tailwind v4

The plugin builds gutters from `theme("spacing")`, which on v4 resolves to the
v3-compat spacing map rather than v4's dynamic `--spacing` multiplier. Extending
`--spacing` in `@theme` does not add gutter classes. Use `--bs-*-gutter-*`
variables instead.

## `g-*` on a column has no effect

Gutter classes only assign CSS variables. Only `.container` and `.row` read
them. Put the class on the `.row`:

```html
<div class="row gy-4">
    <div class="col-6">…</div>
</div>
```

## A `g-*` on `.container` gets ignored inside a `.row`

`.row` re-declares both `--bs-gutter-x` and `--bs-gutter-y` on itself, which
shadows the value inherited from the container. Put the gutter class on each
`.row`, or set `--bs-row-gutter-*` / `--bs-global-gutter-*` so the row's own
default already resolves to what you want.

## Rows are glued together vertically

`--bs-gutter-y` defaults to `0`. Add `gy-*` (or `g-*`, which sets both axes) to
any row that can wrap.

## Columns are wider than the row / everything wraps early

- The `col-*` values in one row add up to more than 12.
- A column is not a **direct child** of the `.row`. An intermediate wrapper
  `<div>` swallows the `.row > *` rule; the wrapper becomes the flex item and
  the column inside it is 100% wide. Remove the wrapper or move the `col-*`
  class onto it.

## Content bleeds half a gutter past the edge of the screen

`.row` carries negative horizontal margins that expect the parent to supply the
matching padding. Wrap it in `.container` / `.container-fluid`, or add your own
horizontal padding to the parent, or use `g-0` to zero the gutters out.

## `col-6` inside a CSS Grid container jumps to column 6

Tailwind v4's own `col-<number>` utility maps to `grid-column`. Both rules are
emitted for the same class name; the plugin supplies `flex` and `width`, but
`grid-column: 6` survives and takes effect inside a real grid container. Use
`col-span-6` for CSS Grid and reserve `col-6` for `.row`.

On Tailwind v3 only `col-auto` overlaps (`grid-column: auto`), and there the
core utility is emitted after the plugin's component, so `grid-column` wins on
that property while `flex: 0 0 auto; width: auto` still applies. Inside a flex
`.row` the result is identical either way.

## A Tailwind utility does not override a grid class

- **v3** — utilities come after the plugin's components, so `w-1/3` already
  wins over `col-6`. If it still does not, check for a `!important` elsewhere,
  or use `!w-1/3`.
- **v4** — both live in `@layer utilities`, and Tailwind sorts core utilities
  after the plugin's, so `w-1/3` wins there too. Use `w-1/3!` to force it.

## `.container` is the wrong width

The `max-width` steps come from Tailwind's own container, not from this plugin —
change your breakpoints (v3 `theme.screens`, v4 `--breakpoint-*`). Only the
horizontal padding and `margin: auto` come from the plugin, and those are tuned
with the container gutter (`containerGutters` in v3, `--bs-container-gutter-x`
in v4).

Note `.container-fluid` never receives a `max-width` — that is intentional.

## `.container` conflicts with an existing container style

Disable the plugin's version and keep your own:

```ts
Grid({ generateContainers: false }); // v3
```

<!-- prettier-ignore -->
```css
/* v4 */
@plugin "tw-bootstrap-grid" {
    generateContainers: false;
}
```

`.row`, `.col-*`, `.offset-*`, `.row-cols-*` and the gutter classes are
unaffected.

## RTL offsets land on the wrong side

The offset is being flipped twice. `.offset-*` compiles to
`margin-inline-start`, which already follows `dir`. Delete any `[dir="rtl"]`
override, `rtl:` variant, or `margin-left`/`margin-right` patch you added for
offsets, and make sure `dir="rtl"` is set on the element or an ancestor rather
than emulated in CSS.

## `row-cols-*` is overriding a nested row's width

`row-cols-*` targets `> *`, which includes a nested `.row`. Either avoid nesting
directly inside a `row-cols-*` parent, or wrap the nested row in a `.col-12`
child so only the wrapper is resized.

## `import Grid from "tw-bootstrap-grid"` throws in a pure ESM script

Loading the ESM build directly from Node with Tailwind v3 installed fails with
`Dynamic require of "tailwindcss/plugin" is not supported`. Normal setups are
unaffected because Tailwind loads `tailwind.config.*` through its own
CJS-capable loader. If you hit it in a standalone script, require the CJS
build (`require("tw-bootstrap-grid")`) instead.
