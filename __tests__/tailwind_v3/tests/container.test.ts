import { test, expect } from "vitest";

/* eslint-disable no-unused-vars */
const testContainer = (runTailwind: (html: string) => Promise<string>) => {
    test("generates shared styles for .container and .container-fluid", async () => {
        const css = await runTailwind('<div class="container"></div><div class="container-fluid"></div>');

        expect(css).toContain(".container");
        expect(css).toContain(".container-fluid");

        expect(css).toContain("--bs-gutter-x: var(--bs-container-gutter-x, var(--bs-global-gutter-x, 1.5rem))");
        expect(css).toContain("--bs-gutter-y: var(--bs-container-gutter-y, var(--bs-global-gutter-y, 0))");

        expect(css).toContain("width: 100%");
        expect(css).toContain("padding-right: calc(var(--bs-gutter-x, 1.5rem) * 0.5)");
        expect(css).toContain("padding-left: calc(var(--bs-gutter-x, 1.5rem) * 0.5)");
        expect(css).toContain("margin-right: auto");
        expect(css).toContain("margin-left: auto");
    });
};

export default testContainer;
