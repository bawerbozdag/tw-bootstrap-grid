import { runTailwind } from "./utils/runTailwind";
import { describe } from "vitest";
// TESTS
import testCol from "./tests/col.test";
import testContainer from "./tests/container.test";
import testGutter from "./tests/gutter.test";
import testRow from "./tests/row.test";
import testOffset from "./tests/offset.test";

describe("Col utilities (Tailwind v4)", () => {
    testCol(runTailwind);
});

describe("Container utilities (Tailwind v4)", () => {
    testContainer(runTailwind);
});

describe("Offset utilities (Tailwind v4)", () => {
    testOffset(runTailwind);
});

describe("Gutter utilities (Tailwind v4)", () => {
    testGutter(runTailwind);
});

describe("Row utilities (Tailwind v4)", () => {
    testRow(runTailwind);
});
