import { test, expect } from "@jest/globals";

/* eslint-disable no-unused-vars */
const testOffset = (runTailwind: (html: string) => Promise<string>) => {
    // we only test .offset-1, .offset-6 and .offset-12 as representative samples.
    test("generates .offset-{1-12} classes with correct margin-left and RTL overrides", async () => {
        const css = await runTailwind(`
            <div class="offset-1"></div>
            <div class="offset-6"></div>
            <div class="offset-12"></div>
        `);

        // .offset-1
        expect(css).toContain(".offset-1");
        expect(css).toContain("margin-left: 8.333333333333332%");
        // for RTL
        expect(css).toContain('[dir="rtl"] .offset-1');
        expect(css).toContain("margin-right: 8.333333333333332%");

        // .offset-6
        expect(css).toContain(".offset-6");
        expect(css).toContain("margin-left: 50%");
        // for RTL
        expect(css).toContain('[dir="rtl"] .offset-6');
        expect(css).toContain("margin-right: 50%");

        // .offset-12
        expect(css).toContain(".offset-12");
        expect(css).toContain("margin-left: 100%");
        // for RTL
        expect(css).toContain('[dir="rtl"] .offset-12');
        expect(css).toContain("margin-right: 100%");
    });
};

export default testOffset;
