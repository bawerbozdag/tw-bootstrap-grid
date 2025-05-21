# [1.2.0](https://github.com/bawerbozdag/tw-bootstrap-grid/compare/v1.1.1...v1.2.0) (2025-05-21)


### Features

* add `RTL` support for offset classes ([b3ca47f](https://github.com/bawerbozdag/tw-bootstrap-grid/commit/b3ca47fd2e250df495e897a79b0990d372f45f92))

## [1.1.1](https://github.com/bawerbozdag/tw-bootstrap-grid/compare/v1.1.0...v1.1.1) (2025-05-21)


### Bug Fixes

* trigger release ([e128332](https://github.com/bawerbozdag/tw-bootstrap-grid/commit/e128332f12c6640092a10061853b980b57744bef))

# [1.1.0](https://github.com/bawerbozdag/tw-bootstrap-grid/compare/v1.0.0...v1.1.0) (2025-05-21)


### Features

* add GitHub Actions workflow for build checks ([dcdbf23](https://github.com/bawerbozdag/tw-bootstrap-grid/commit/dcdbf23fe83ff3d19b6fc0d3762c0a0fbaaed99d))

# 1.0.0 (2025-05-21)


### Bug Fixes

* remove redundant text in README description ([6cc7cd2](https://github.com/bawerbozdag/tw-bootstrap-grid/commit/6cc7cd2cfa64a8e33f876edfd949cca701284316))


### Features

* add `.col-auto` class for auto width based on content ([dae1a8c](https://github.com/bawerbozdag/tw-bootstrap-grid/commit/dae1a8c1eb677e4e98110183dd0223307d8e22e9))
* implement `resolveGutters` utility for grid layout management ([9291240](https://github.com/bawerbozdag/tw-bootstrap-grid/commit/9291240483d8f3b9d9a5745a9f63cebb10cac93c))
* setup `semantic-release` and GitHub release integration ([72b7049](https://github.com/bawerbozdag/tw-bootstrap-grid/commit/72b704999092bb75eeec5a8f06ba16d764f8707f))
* setup Tailwind plugin providing Bootstrap-style grid system with responsive containers and gutters ([ea36473](https://github.com/bawerbozdag/tw-bootstrap-grid/commit/ea36473ad113b58b8b605a7be0e42acab300a3d5))

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
