import { test, expect } from "vitest";
import type { IGridOptions } from "../../../src/utils/resolveGutters";

const ROW_GUTTERS = {
    x: "3rem",
    y: "1rem",
};

/* eslint-disable no-unused-vars */
const testRow = (runTailwind: (html: string, options: IGridOptions) => Promise<string>) => {
    test("generates shared styles for .row with options", async () => {
        const css = await runTailwind('<div class="row"></div>', {
            rowGutters: ROW_GUTTERS,
        });

        expect(css).toContain(".row");

        expect(css).toContain(`--bs-gutter-x: var(--bs-row-gutter-x, var(--bs-global-gutter-x, ${ROW_GUTTERS.x}))`);
        expect(css).toContain(`--bs-gutter-y: var(--bs-row-gutter-y, var(--bs-global-gutter-y, ${ROW_GUTTERS.y}))`);

        expect(css).toContain("display: flex");
        expect(css).toContain("flex-wrap: wrap");
        expect(css).toContain("margin-top: calc(-1 * var(--bs-gutter-y, 0))");
        expect(css).toContain("margin-right: calc(-.5 * var(--bs-gutter-x, 1.5rem))");
        expect(css).toContain("margin-left: calc(-.5 * var(--bs-gutter-x, 1.5rem))");
    });

    test("generates styles for .row > * children with options", async () => {
        const css = await runTailwind('<div class="row"><div>child</div></div>', {
            rowGutters: ROW_GUTTERS,
        });

        expect(css).toContain(".row > *");
        expect(css).toContain("flex-shrink: 0");
        expect(css).toContain("width: 100%");
        expect(css).toContain("padding-right: calc(var(--bs-gutter-x, 1.5rem) * .5)");
        expect(css).toContain("padding-left: calc(var(--bs-gutter-x, 1.5rem) * .5)");
        expect(css).toContain("margin-top: var(--bs-gutter-y, 0)");
    });
};

export default testRow;
