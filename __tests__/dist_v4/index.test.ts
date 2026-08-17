import { describe, expect, it } from "vitest";
import { execFile } from "child_process";
import { createRequire } from "module";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

const execFileAsync = promisify(execFile);

const __dirname = dirname(fileURLToPath(import.meta.url));

// eslint-disable-next-line
const tailwind = (tailwindcss as any).default ?? tailwindcss;

/**
 * Load a snippet in a fresh Node process rooted at this project. Module resolution then
 * behaves exactly as it does for a consumer, with none of Vite's transforms, aliasing or
 * dependency pre-bundling in the way. That is the whole point of these tests: they check
 * that the published artifacts are loadable by Node itself, not that Vite can bundle them.
 */
const runInNode = async (type: "module" | "commonjs", source: string): Promise<string> => {
    const { stdout } = await execFileAsync(process.execPath, [`--input-type=${type}`, "-e", source], {
        cwd: __dirname,
    });

    return stdout.trim();
};

describe("Built package on a Tailwind v4-only install", () => {
    it("resolves Tailwind v4, not a hoisted v3", async () => {
        const require = createRequire(resolve(__dirname, "node_modules/tw-bootstrap-grid/"));
        const { version } = require("tailwindcss/package.json");

        // guards every other test here: if v3 leaked in from the repo root, the artifacts
        // would load for the wrong reason and the v4 claim would go unverified
        expect(version).toMatch(/^4\./);
    });

    it("loads dist/index.js as ESM", async () => {
        const output = await runInNode(
            "module",
            `import plugin from "tw-bootstrap-grid";
             console.log(typeof plugin, typeof plugin({}).handler);`,
        );

        expect(output).toBe("function function");
    });

    it("loads dist/index.cjs as CommonJS", async () => {
        const output = await runInNode(
            "commonjs",
            `const plugin = require("tw-bootstrap-grid");
             const factory = plugin.default ?? plugin;
             console.log(typeof factory, typeof factory({}).handler);`,
        );

        expect(output).toBe("function function");
    });

    it("generates grid utilities when Tailwind v4 loads the built package", async () => {
        const result = await postcss([tailwind({ content: [{ raw: "", extension: "html" }] })]).process(
            `@tailwind utilities;
                 @plugin "tw-bootstrap-grid";`,
            { from: resolve(__dirname, "test.css") },
        );

        expect(result.css).toContain(".row");
        expect(result.css).toContain(".col-6");
        expect(result.css).toContain("--bs-gutter-x");
    });
});
