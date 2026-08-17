import { test, expect } from "vitest";

/* eslint-disable no-unused-vars */
const testOffset = (runTailwind: (html: string) => Promise<string>) => {
    // we only test .offset-1, .offset-6 and .offset-12 as representative samples.
    test("generates .offset-{1-12} classes with correct margin-inline-start", async () => {
        const css = await runTailwind(`
            <div class="offset-1"></div>
            <div class="offset-6"></div>
            <div class="offset-12"></div>
        `);

        // .offset-1
        expect(css).toContain(".offset-1");
        expect(css).toMatch(/\.offset-1\s*\{\s*margin-inline-start:\s*8\.333[^;]*;\s*\}/);

        // .offset-6
        expect(css).toContain(".offset-6");
        expect(css).toMatch(/\.offset-6\s*\{\s*margin-inline-start:\s*50%;\s*\}/);

        // .offset-12
        expect(css).toContain(".offset-12");
        expect(css).toMatch(/\.offset-12\s*\{\s*margin-inline-start:\s*100%;\s*\}/);
    });

    // the logical property flips with the element's own direction, so no
    // [dir="rtl"] ancestor selector (and no physical margin) is emitted.
    test("flips offsets via the logical property, including dir on the element itself", async () => {
        const css = await runTailwind(`
            <div class="offset-3" dir="rtl"></div>
        `);

        expect(css).toMatch(/\.offset-3\s*\{\s*margin-inline-start:\s*25%;\s*\}/);
        expect(css).not.toContain('[dir="rtl"]');
        expect(css).not.toMatch(/\.offset-3\s*\{[^}]*margin-left/);
        expect(css).not.toMatch(/\.offset-3\s*\{[^}]*margin-right/);
    });
};

export default testOffset;
