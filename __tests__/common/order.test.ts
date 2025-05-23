import { test, expect } from "@jest/globals";

/* eslint-disable no-unused-vars */
const testOrder = (runTailwind: (html: string) => Promise<string>) => {
    // we only test .order-{0, 6, 12}, .order-first, and .order-last as representative samples.
    test("generates .order-{0-12}, .order-first, .order-last classes", async () => {
        const css = await runTailwind(`
            <div class="order-0"></div>
            <div class="order-6"></div>
            <div class="order-12"></div>
            <div class="order-first"></div>
            <div class="order-last"></div>
        `);

        // .order-0
        expect(css).toContain(".order-0");
        expect(css).toContain("order: 0");

        // .order-6
        expect(css).toContain(".order-6");
        expect(css).toContain("order: 6");

        // .order-12
        expect(css).toContain(".order-12");
        expect(css).toContain("order: 12");

        // .order-first
        expect(css).toContain(".order-first");
        expect(css).toContain("order: -9999");

        // .order-last
        expect(css).toContain(".order-last");
        expect(css).toContain("order: 9999");
    });
};

export default testOrder;
