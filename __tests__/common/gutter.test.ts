import { test, expect } from "@jest/globals";

/* eslint-disable no-unused-vars */
const testGutter = (runTailwind: (html: string) => Promise<string>) => {
    // we only test .g-4, .gx-2, and .gy-8 as representative samples.
    test("generates .g-{key}, .gx-{key}, .gy-{key} classes from spacing", async () => {
        const css = await runTailwind(`
            <div class="g-4"></div>
            <div class="gx-2"></div>
            <div class="gy-8"></div>
        `);

        // .g-4 → x and y
        expect(css).toContain(".g-4");
        expect(css).toContain("--bs-gutter-x: 1rem");
        expect(css).toContain("--bs-gutter-y: 1rem");

        // .gx-2 → x only
        expect(css).toContain(".gx-2");
        expect(css).toContain("--bs-gutter-x: 0.5rem");

        // .gy-8 → y only
        expect(css).toContain(".gy-8");
        expect(css).toContain("--bs-gutter-y: 2rem");
    });
};

export default testGutter;
