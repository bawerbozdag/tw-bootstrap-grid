import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // define a custom alias "@tailwind-core" for the Tailwind CSS core file
            "@tailwind-core": path.resolve(__dirname, "./app/assets/css/tailwind.css"),
        },
    },
    plugins: [
        react(),
        tsconfigPaths(),
        tailwindcss(), //
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Split vendor dependencies into separate chunks for better caching and lazy-loading.
                    // This helps reduce the size of the main bundle and improves initial page load performance.
                    if (id.includes("node_modules")) {
                        // Group all CodeMirror-related packages into a dedicated "codemirror" chunk.
                        // These packages are heavy and only needed on specific pages (e.g., Examples).
                        if (id.includes("@uiw/react-codemirror") || id.includes("@codemirror")) {
                            return "codemirror";
                        }

                        // Group all Lucide icons into a separate "icons" chunk.
                        // This allows icon assets to be cached independently from the main application logic.
                        if (id.includes("lucide-react")) {
                            return "icons";
                        }

                        // Group React and React DOM into a dedicated "react" chunk.
                        // These are core dependencies that rarely change and benefit from long-term caching.
                        if (id.includes("react")) {
                            return "react";
                        }
                    }
                },
            },
        },
        chunkSizeWarningLimit: 1200,
    },
});
