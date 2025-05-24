import { runTailwind } from "./utils/runTailwind";
import { describe } from "vitest";
// TESTS
import testCol from "./tests/col.test";
import testContainer from "./tests/container.test";
import testContainerWithOptions from "./tests/container-with-options.test";
import testGutter from "./tests/gutter.test";
import testOffset from "./tests/offset.test";
import testOrder from "./tests/order.test";
import testRow from "./tests/row.test";
import testRowWithOptions from "./tests/row-with-options.test";

describe("Col utilities (Tailwind v3)", () => {
    testCol(runTailwind);
});

describe("Container utilities (Tailwind v3)", () => {
    testContainer(runTailwind);
});

describe("Container utilities with options (Tailwind v3)", () => {
    testContainerWithOptions(runTailwind);
});

describe("Gutter utilities (Tailwind v3)", () => {
    testGutter(runTailwind);
});

describe("Offset utilities (Tailwind v3)", () => {
    testOffset(runTailwind);
});

describe("Order utilities (Tailwind v3)", () => {
    testOrder(runTailwind);
});

describe("Row utilities (Tailwind v3)", () => {
    testRow(runTailwind);
});

describe("Row utilities with options (Tailwind v3)", () => {
    testRowWithOptions(runTailwind);
});
