import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  minify: true, // remove comments and gaps
  dts: true, // generates types file
  clean: true,
  sourcemap: false,
  target: "es2018",
});
