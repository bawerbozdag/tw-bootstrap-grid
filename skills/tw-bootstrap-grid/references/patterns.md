# Layout patterns

All examples assume the plugin is installed and the markup sits inside a
`.container` or `.container-fluid`.

## Mobile-first card grid

Start full width, narrow as the viewport grows. `gy-*` is what keeps the rows
from touching once they wrap.

```html
<div class="container">
    <div class="row gy-4">
        <div class="col-12 sm:col-6 lg:col-4">Card 1</div>
        <div class="col-12 sm:col-6 lg:col-4">Card 2</div>
        <div class="col-12 sm:col-6 lg:col-4">Card 3</div>
    </div>
</div>
```

`col-12` is technically redundant — `.row > *` already defaults to `width: 100%`
— but writing it keeps the intent readable and survives refactors.

## Uniform grid without counting columns

`row-cols-*` sets the width from the parent, so adding or removing children
needs no edits:

```html
<div class="row row-cols-2 md:row-cols-3 xl:row-cols-4 g-4">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
</div>
```

Use this for rendered lists (`items.map(...)`) — it avoids computing a class
name per item, which the Tailwind scanner cannot see anyway.

## Sidebar + main

```html
<div class="row gx-6 gy-4">
    <aside class="col-12 lg:col-3">Sidebar</aside>
    <main class="col-12 lg:col-9">Content</main>
</div>
```

Sidebar last in the DOM but first on desktop — use Tailwind's `order-*`:

```html
<div class="row gx-6 gy-4">
    <main class="col-12 lg:col-9 order-1 lg:order-2">Content</main>
    <aside class="col-12 lg:col-3 order-2 lg:order-1">Sidebar</aside>
</div>
```

## Centering with offsets

An offset of `(12 - n) / 2` centers an `n`-wide column:

```html
<div class="row">
    <div class="col-8 offset-2">8 wide, centered</div>
</div>

<!-- narrows as the viewport grows -->
<div class="row">
    <div class="col-12 sm:col-8 sm:offset-2 lg:col-6 lg:offset-3">Responsive centered column</div>
</div>
```

Reset an offset at a larger breakpoint with `offset-0`:

```html
<div class="col-10 offset-1 md:col-12 md:offset-0">…</div>
```

## Pushing a column to the right

Offset the gap instead of adding a spacer element:

```html
<div class="row">
    <div class="col-4">Left</div>
    <div class="col-4 offset-4">Right</div>
</div>
```

## Nested rows

A nested `.row` works because its negative margins cancel the parent column's
gutter padding. The inner row is its own 12-column context:

```html
<div class="row">
    <div class="col-12 md:col-8">
        <div class="row gy-3">
            <div class="col-6">Nested A</div>
            <div class="col-6">Nested B</div>
        </div>
    </div>
    <div class="col-12 md:col-4">Aside</div>
</div>
```

Note that `row-cols-*` on the outer row also hits the nested `.row` (it matches
`> *`). Keep nested rows out of `row-cols-*` parents, or re-set the width on the
wrapper.

## Auto-sizing columns

`.col` splits whatever is left; `.col-auto` takes only what it needs:

```html
<div class="row">
    <div class="col-auto">Label</div>
    <div class="col">Fills the rest</div>
    <div class="col-auto">Action</div>
</div>
```

Several `.col`s in one row share the free space equally.

## Removing gutters

```html
<!-- edge-to-edge tiles -->
<div class="row g-0">
    <div class="col-6">A</div>
    <div class="col-6">B</div>
</div>

<!-- horizontal gutters only, no vertical -->
<div class="row gx-4 gy-0">…</div>
```

## Full-bleed section with contained content

```html
<section class="container-fluid g-0">
    <div class="container">
        <div class="row gy-5">…</div>
    </div>
</section>
```

## RTL

No configuration and no `rtl:` variants — set `dir` and everything mirrors:

```html
<div class="container" dir="rtl">
    <div class="row gy-4">
        <div class="col-4">١</div>
        <div class="col-4 offset-4">٢</div>
    </div>
</div>
```

`offset-4` becomes a right-hand offset because it compiles to
`margin-inline-start`. Flex order follows `dir` too, so `order-*` keeps working.
Adding `[dir="rtl"]` overrides or `rtl:offset-*` would flip the offset a second
time and put it back on the wrong side.

## Rendering lists safely

Tailwind only sees class names that appear literally in your source. This is
broken:

```jsx
<div className={`col-${span}`}>…</div> // never generated
```

Pick one of:

```jsx
// 1. row-cols-* on the parent — nothing per item to generate
<div className="row row-cols-2 md:row-cols-4">
    {items.map((i) => (
        <div key={i.id} className="col">
            {i.name}
        </div>
    ))}
</div>;

// 2. a literal lookup map
const SPAN = { 4: "col-4", 6: "col-6", 12: "col-12" };
<div className={SPAN[span]}>…</div>;
```

If you truly need dynamic names, safelist them: Tailwind v3 `safelist` in the
config, Tailwind v4 `@source inline("col-{1,2,3,4,6,12}")`.
