import { access, cp, mkdir, rm } from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const repoRoot = resolve(__dirname, "../../..");
const target = resolve(__dirname, "../node_modules/tw-bootstrap-grid");

/**
 * Copy the built package into this project's node_modules so that it is loaded exactly
 * the way a consumer loads it: through the published "exports" map, with its bare
 * "tailwindcss/*" imports resolving against this project's dependencies only.
 *
 * A workspace dependency is deliberately not used here. npm would link it, and Node
 * resolves a symlinked package's imports from the link's realpath, which lands back in
 * the repo root node_modules where Tailwind v3 is hoisted. Copying keeps the lookup
 * inside this v4-only project.
 */
export const setup = async (): Promise<void> => {
    const dist = resolve(repoRoot, "dist");

    try {
        await access(dist);
    } catch {
        throw new Error(`No build output at ${dist}. Run "npm run build" in the repo root first.`);
    }

    await rm(target, { recursive: true, force: true });
    await mkdir(target, { recursive: true });

    await cp(dist, resolve(target, "dist"), { recursive: true });
    await cp(resolve(repoRoot, "package.json"), resolve(target, "package.json"));
};

export const teardown = async (): Promise<void> => {
    await rm(target, { recursive: true, force: true });
};
