import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// the version of the plugin this site documents, shown on the page and in the structured data
const pluginVersion = (
    JSON.parse(readFileSync(new URL("./node_modules/tw-bootstrap-grid/package.json", import.meta.url), "utf8")) as {
        version: string;
    }
).version;

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
    define: {
        __PLUGIN_VERSION__: JSON.stringify(pluginVersion),
    },
    resolve: {
        tsconfigPaths: true,
    },
    plugins: [
        react(),
        tailwindcss(), //
    ],
    build: {
        rollupOptions: {
            output: {
                // the prerender build only needs one entry, vendor chunks would just get in the way
                manualChunks: isSsrBuild
                    ? undefined
                    : (id: string) => {
                          // Split vendor dependencies into separate chunks for better caching and lazy-loading.
                          // This helps reduce the size of the main bundle and improves initial page load performance.
                          if (id.includes("node_modules")) {
                              // Group all CodeMirror-related packages into a dedicated "codemirror" chunk.
                              // It is loaded lazily, only once the live examples are rendered.
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
        chunkSizeWarningLimit: 600,
    },
}));
