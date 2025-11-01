import { writeFileSync } from "fs";

// tailwind breakpoints
const breakpoints = ["", "sm:", "md:", "lg:", "xl:", "2xl:"];

// base classes
const baseSingletons = ["container", "container-fluid", "row", "col", "col-auto"];

// .col-{1..12}
const colClasses = Array.from({ length: 12 }, (_, i) => `col-${i + 1}`);

// .offset-{0..12}
const offsetClasses = Array.from({ length: 13 }, (_, i) => `offset-${i}`);

// .row-cols-auto, .row-cols-{1..6}
const rowCols = ["row-cols-auto", ...Array.from({ length: 6 }, (_, i) => `row-cols-${i + 1}`)];

// tailwind spacing scale (default)
const spacingScale = [
    "px",
    "0",
    "0.5",
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "3.5",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "14",
    "16",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "44",
    "48",
    "52",
    "56",
    "60",
    "64",
    "72",
    "80",
    "96",
];

// g, gx, gy classes
const gutterPrefixes = ["g", "gx", "gy"];
const gutterClasses = gutterPrefixes.flatMap((gp) => spacingScale.map((s) => `${gp}-${s}`));

// breakpoint inserter
function withBreakpoints(classes) {
    return breakpoints.flatMap((bp) => classes.map((c) => (bp ? `${bp}${c}` : c)));
}

// merge all classes
const allClasses = [
    ...withBreakpoints(baseSingletons),
    ...withBreakpoints(colClasses),
    ...withBreakpoints(offsetClasses),
    ...withBreakpoints(rowCols),
    ...withBreakpoints(gutterClasses),
];

// sort
const sorted = [...new Set(allClasses)].sort((a, b) => a.localeCompare(b));

// write file
writeFileSync("./src/assets/css/safelist-tailwind.txt", sorted.join("\n"), "utf8");

console.log(`safelist-tailwind.txt has been created. A total of ${sorted.length} classes have been generated.`);
