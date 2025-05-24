import { test, expect } from "vitest";

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
        expect(css).toMatch(
            /\.offset-1\s*\{\s*margin-left:\s*8\.333.*?\[dir="rtl"\]\s*&\s*\{\s*margin-left:\s*0;\s*margin-right:\s*8\.333.*?\s*\}/s,
        );

        // .offset-6
        expect(css).toContain(".offset-6");
        expect(css).toMatch(
            /\.offset-6\s*\{\s*margin-left:\s*50%;.*?\[dir="rtl"\]\s*&\s*\{\s*margin-left:\s*0;\s*margin-right:\s*50%;\s*\}/s,
        );

        // .offset-12
        expect(css).toContain(".offset-12");
        expect(css).toMatch(
            /\.offset-12\s*\{\s*margin-left:\s*100%;.*?\[dir="rtl"\]\s*&\s*\{\s*margin-left:\s*0;\s*margin-right:\s*100%;\s*\}/s,
        );
    });
};

export default testOffset;
