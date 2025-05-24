import { test, expect } from "vitest";

/* eslint-disable no-unused-vars */
const testCol = (runTailwind: (html: string) => Promise<string>) => {
    // we only test .col, .col-auto, .col-1, .col-6, and .col-12 as representative samples.
    // testing all 12 classes individually would be redundant and unnecessarily expensive.
    test("generates .col-{1-12} classes with correct flex and width", async () => {
        const css = await runTailwind(`
            <div class="col"></div>
            <div class="col-1"></div>
            <div class="col-6"></div>
            <div class="col-12"></div>
            <div class="col-auto"></div>
            `);

        // .col
        expect(css).toContain(".col");
        expect(css).toContain("flex: 1 0 0%");

        // common value for .col-auto, .col-1, .col-6, and .col-12
        expect(css).toContain("flex: 0 0 auto");

        // .col-auto
        expect(css).toContain(".col-auto");
        expect(css).toContain("width: auto");
        // .col-1
        expect(css).toContain(".col-1");
        expect(css).toMatch(/width:\s*8\.33333/);
        // .col-6
        expect(css).toContain(".col-6");
        expect(css).toContain("width: 50%");
        // .col-12
        expect(css).toContain(".col-12");
        expect(css).toContain("width: 100%");
    });
};

export default testCol;
