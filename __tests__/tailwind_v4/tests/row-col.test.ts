import { test, expect } from "vitest";

// accept either flattened ".row-cols-2 > *" or nested ".row-cols-2 { & > * { ... } }"
const childRule = (cls: string) => new RegExp(`\\.${cls}(?:\\s*>\\s*\\*|\\s*\\{[\\s\\S]*?&\\s*>\\s*\\*)`);

// flex assertions (flattened or nested)
const flexRule = (cls: string) =>
    new RegExp(`\\.${cls}(?:\\s*>\\s*\\*|\\s*\\{[\\s\\S]*?&\\s*>\\s*\\*)[\\s\\S]*?flex:\\s*0\\s+0\\s+auto`);

// width assertions (flattened or nested)
const widthRule = (cls: string, value: string) =>
    new RegExp(`\\.${cls}(?:\\s*>\\s*\\*|\\s*\\{[\\s\\S]*?&\\s*>\\s*\\*)[\\s\\S]*?width:\\s*${value}`);

/* eslint-disable no-unused-vars */
const testRowCols = (runTailwind: (html: string) => Promise<string>) => {
    test("generates .row-cols-{n} and .row-cols-auto rules for children", async () => {
        const css = await runTailwind(`
      <div class="row row-cols-2"><div></div></div>
      <div class="row row-cols-4"><div></div></div>
      <div class="row row-cols-6"><div></div></div>
      <div class="row row-cols-auto"><div></div></div>
    `);

        // selectors (flattened or nested)
        expect(css).toMatch(childRule("row-cols-2"));
        expect(css).toMatch(childRule("row-cols-4"));
        expect(css).toMatch(childRule("row-cols-6"));
        expect(css).toMatch(childRule("row-cols-auto"));

        expect(css).toMatch(flexRule("row-cols-2"));
        expect(css).toMatch(flexRule("row-cols-4"));
        expect(css).toMatch(flexRule("row-cols-6"));
        expect(css).toMatch(flexRule("row-cols-auto"));

        expect(css).toMatch(widthRule("row-cols-2", "50%"));
        expect(css).toMatch(widthRule("row-cols-4", "25%"));
        expect(css).toMatch(widthRule("row-cols-6", "16\\.666(?:6|7)\\d*%"));
        expect(css).toMatch(widthRule("row-cols-auto", "auto"));
    });
};

export default testRowCols;
