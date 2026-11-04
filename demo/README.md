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
  site.ts            the pages (path, title, description) and the site URL
  _constants.ts      section list, links, storage keys
  examples.tsx       the live examples (title, text, editable HTML)
  i18n/              languages.ts (the list, URL prefixes), messages/<code>.ts (one file per language), load.ts
  pages/             HomePage (the sections below) and MigrationPage (the guide)
  sections/          one file per section of the home page
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
- **Languages.** The site is available in nine languages: English (the source), Turkish, Spanish, German, French,
  Portuguese (Brazil), Russian, Chinese (Simplified) and Japanese. English lives at `/`, the others under a prefix
  (`/tr/`, `/es/`, …), and every page in every language is its own prerendered HTML file with `hreflang` links, its own
  title, description and structured data, and an entry in the sitemap. The language menu in the header links to the same
  page in each language. Class names and code are never translated.
- **Translations.** Every message lives in `src/i18n/messages/<code>.ts` as plain text: `code`, `[label](link)` and
  `**bold**` are the only markup, links that start with `/` are put into the current language, and `{name}` is filled in
  by `fmt()`. English (`en.ts`) defines the shape, so a missing or extra key is a type error. The build also compares
  every translation with the English one and fails if a `code` token, a link target, a `{placeholder}` or the number of
  items in a list differs. To add a language: copy `en.ts`, translate it, add the language to `LANGUAGES` in
  `src/i18n/languages.ts` and to `LOADERS` in `src/i18n/load.ts`, then run `npm run build`. The translations were
  written without a native review, so corrections from native speakers are welcome.
- **Pages.** There are two, each its own static HTML file: the home page (`/`) and the migration guide
  (`/migrate-from-bootstrap/`). They share one JavaScript bundle, and the URL tells it which page to render. The links
  between them are normal links, so they are full page loads, and the theme and Tailwind version carry over through
  `localStorage`. To add a page: add it to `PAGES` in `src/site.ts`, render it from `src/App.tsx`, and list what it must
  contain in `EXPECTED` in `scripts/prerender.mjs`. `vercel.json` sets `trailingSlash` so every page has a single URL.
- **Prerendering.** The site is a client-side React app, but `npm run build` also renders every page to static HTML
  (`src/entry-server.tsx`, then `scripts/prerender.mjs`) and writes it into `dist`. Crawlers that don't run
  JavaScript, which includes most AI crawlers, therefore get the real content. The same step writes each page's title,
  description, social cards and JSON-LD structured data (the plugin version comes from the installed package, the FAQ and the guide's steps from the messages of each language) and the sitemap. It fails the build if a
  page comes out without what it should contain. In the browser the app still mounts with `createRoot`, so nothing is
  hydrated; after mounting it re-aligns a `#link` target, because replacing the prerendered markup resets the scroll
  position.
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
- **Migration guide.** The Bootstrap-to-Tailwind class mappings and the Perl command in
  `src/pages/MigrationPage.tsx` were checked against the plugin's real output. If you change one, rerun the
  command on a sample file before publishing it.
- **Editor.** CodeMirror is loaded lazily the first time the examples render, to keep the initial bundle small.
