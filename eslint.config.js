import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,ts,cjs,mjs}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: globals.node,
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            "@typescript-eslint/no-explicit-any": "warn", // disallow usage of the any type
            "@typescript-eslint/consistent-type-imports": "warn", // enforce consistent use of type imports
        },
    },
]);
