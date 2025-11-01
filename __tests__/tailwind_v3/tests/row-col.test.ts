import { test, expect } from "vitest";

/* eslint-disable no-unused-vars */
const testRowCols = (runTailwind: (html: string) => Promise<string>) => {
    test("generates .row-cols-{n} and .row-cols-auto rules for children", async () => {
        const css = await runTailwind(`
      <div class="row row-cols-2"><div></div></div>
      <div class="row row-cols-4"><div></div></div>
      <div class="row row-cols-6"><div></div></div>
      <div class="row row-cols-auto"><div></div></div>
    `);

        // common selectors for row-cols variants
        expect(css).toContain(".row-cols-2 > *");
        expect(css).toContain(".row-cols-4 > *");
        expect(css).toContain(".row-cols-6 > *");
        expect(css).toContain(".row-cols-auto > *");

        // all row-cols variants should define flex: 0 0 auto for children
        expect(css).toMatch(/\.row-cols-2\s*>\s*\*\s*{[^}]*flex:\s*0\s+0\s+auto/);
        expect(css).toMatch(/\.row-cols-4\s*>\s*\*\s*{[^}]*flex:\s*0\s+0\s+auto/);
        expect(css).toMatch(/\.row-cols-6\s*>\s*\*\s*{[^}]*flex:\s*0\s+0\s+auto/);
        expect(css).toMatch(/\.row-cols-auto\s*>\s*\*\s*{[^}]*flex:\s*0\s+0\s+auto/);

        // width expectations (allow slight decimal variance from minifiers)
        expect(css).toMatch(/\.row-cols-2\s*>\s*\*\s*{[^}]*width:\s*50%/);
        expect(css).toMatch(/\.row-cols-4\s*>\s*\*\s*{[^}]*width:\s*25%/);
        expect(css).toMatch(/\.row-cols-6\s*>\s*\*\s*{[^}]*width:\s*16\.666(?:6|7)\d*%/);

        // auto variant should not set a fixed width
        expect(css).toMatch(/\.row-cols-auto\s*>\s*\*\s*{[^}]*width:\s*auto/);
    });
};

export default testRowCols;
