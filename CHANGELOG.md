# Changelog

All notable changes to this project will be documented in this file.

---

## [1.1.0] - 2025-05-20

### Features

- Add `resolveGutters` utility function to centralize gutter resolution logic for container and row
- Support custom gutter configuration (`gutters`, `containerGutters`, `rowGutters`) via plugin options
- Add default fallback gutter values when custom ones are not provided

### Documentation

- Add documentation for all gutter options in the README
- Introduce responsive column usage examples using `.row` and `.col-*` classes

### Refactoring

- Clean up internal plugin code for better maintainability
- Improve variable naming and separate utility logic from plugin body

### CI/CD

- Add ESLint and TypeScript type-check GitHub Actions workflow
- Introduce `dependabot.yml` to automatically track dependency updates

---

## [1.0.0] - 2025-05-19

Initial release of `tw-bootstrap-grid`, a Tailwind CSS plugin that brings a responsive, Bootstrap-style grid system to Tailwind.

### Features

- Generate `.container`, `.row`, and `.col-{n}` classes (up to 12 columns)
- Responsive utility support via Tailwind’s breakpoint syntax
- Minimal default styling with full control via Tailwind config

---

## [0.1.0] - _Pre-release commits (before 1.0)_

> ⚠️ The initial versioning before `v1.0.0` may not fully reflect SemVer. These changes were experimental and foundational.

- Setup Tailwind plugin boilerplate
- Add basic `.container`, `.row`, and `.col-*` styles
- Prototype responsive behavior and testing on example layouts
