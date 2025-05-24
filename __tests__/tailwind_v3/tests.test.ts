import { describe } from "@jest/globals";
import runTailwind from "./utils/runTailwind";
// TESTS
import testCol from "../common/col.test";
import testContainer from "../common/container.test";
import testContainerWithOptions from "../common/container-with-options.test";
import testGutter from "../common/gutter.test";
import testOffset from "../common/offset.test";
import testOrder from "../common/order.test";
import testRow from "../common/row.test";
import testRowWithOptions from "../common/row-with-options.test";

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
