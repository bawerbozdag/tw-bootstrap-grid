# tw-bootstrap-grid demo

The documentation site for [tw-bootstrap-grid](https://github.com/bawerbozdag/tw-bootstrap-grid), live at
[tw-bootstrap-grid.vercel.app](https://tw-bootstrap-grid.vercel.app).

It's a small React 19 + Vite + Tailwind v4 app that uses the published `tw-bootstrap-grid` package, so the examples
on the page are rendered by the plugin itself.

## Run it

```bash
npm install
npm run dev
```

| Script                      | What it does                                                  |
| --------------------------- | ------------------------------------------------------------- |
| `npm run dev`               | Start the Vite dev server                                     |
| `npm run build`             | Type-check and build to `dist/`                               |
| `npm run preview`           | Serve the production build locally                            |
| `npm run lint`              | Run ESLint                                                    |
| `npm run generate:safelist` | Regenerate `src/assets/css/safelist-tailwind.txt` (see below) |

## How it's organised

```
src/
  App.tsx            page layout, theme and Tailwind-version state
  _constants.ts      section list, links, storage keys
  examples.tsx       the live examples (title, text, editable HTML)
  sections/          one file per section of the page
  components/        header, code blocks, live example, ...
  hooks/             useApp (context) and useScrollSpy
  assets/css/        main.css (design tokens, shared styles), tailwind.css
```

## Good to know

- **Safelist.** The live examples are editable, so visitors can type any class. Tailwind only generates CSS for classes
  it finds in source files, so `safelist-tailwind.txt` lists every plugin class at every breakpoint. If the plugin gains
  new classes, update `scripts/generate-safelist.js` and run `npm run generate:safelist`.
- **Tailwind v3 / v4 switch.** The page itself is built with v4. The switch in the header only changes which setup
  snippets are shown.
- **Theme.** Light and dark are class based (`.dark` on `<html>`). The choice is saved in `localStorage` and falls back
  to the system preference. A tiny inline script in `index.html` applies it before first paint.
- **Live preview.** Each example renders in a sandboxed `<iframe>`, so Tailwind's breakpoints respond to the frame's own
  width rather than the browser window. The page's stylesheets are copied into it at runtime, which works the same in
  dev and in production. The buttons above the preview pick a phone, tablet or desktop width, and wider ones are scaled
  down to fit.
- **Migration section.** The Bootstrap-to-Tailwind class mappings and the Perl command in
  `src/sections/SectionMigration.tsx` were checked against the plugin's real output. If you change one, rerun the
  command on a sample file before publishing it.
- **Editor.** CodeMirror is loaded lazily the first time the examples render, to keep the initial bundle small.
