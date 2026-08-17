import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        environment: "node",
        include: ["./index.test.ts"],
        globalSetup: ["./setup/installBuiltPackage.ts"],
    },
});
