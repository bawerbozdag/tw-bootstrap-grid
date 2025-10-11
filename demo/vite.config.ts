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
});
