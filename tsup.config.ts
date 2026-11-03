import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    minify: true, // remove comments and gaps
    dts: true, // generates types file
    clean: true,
    sourcemap: false,
    target: "es2018",
    // let require("tw-bootstrap-grid") return the plugin itself, while keeping .default working
    footer: ({ format }) =>
        format === "cjs"
            ? {
                  js: "module.exports=Object.assign(module.exports.default,{default:module.exports.default,__esModule:true});",
              }
            : {},
});
