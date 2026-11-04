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
- **Prerendering.** The site is a client-side React app, but `npm run build` also renders the page to static HTML
  (`src/entry-server.tsx`, then `scripts/prerender.mjs`) and writes it into `dist/index.html`. Crawlers that don't run
  JavaScript, which includes most AI crawlers, therefore get the real content. The same step writes the JSON-LD
  structured data (the plugin version comes from the installed package, the FAQ from `src/faq.tsx`) and the sitemap, and
  it fails the build if the page comes out without its heading or sections. In the browser the app still mounts with
  `createRoot`, so nothing is hydrated.
- **For search engines and AI assistants.** `public/llms.txt` is a plain summary of the plugin and the docs, and
  `public/robots.txt` welcomes crawlers. `llms.txt` is written by hand, so when the plugin's options or classes change,
  update it along with the page. The social image is `public/og-image.png` (1200 × 630).
- **Accessibility.** There is a skip link, the headings never skip a level, code and table areas that scroll can be
  reached with the keyboard, and the preview frames and editors are named after their example. The colors were checked
  with axe-core in the light and dark themes.
- **Live preview.** Each example renders in a sandboxed `<iframe>`, so Tailwind's breakpoints respond to the frame's own
  width rather than the browser window. The page's stylesheets are copied into it at runtime, which works the same in
  dev and in production. The buttons above the preview pick a phone, tablet or desktop width, and wider ones are scaled
  down to fit.
- **Migration section.** The Bootstrap-to-Tailwind class mappings and the Perl command in
  `src/sections/SectionMigration.tsx` were checked against the plugin's real output. If you change one, rerun the
  command on a sample file before publishing it.
- **Editor.** CodeMirror is loaded lazily the first time the examples render, to keep the initial bundle small.
