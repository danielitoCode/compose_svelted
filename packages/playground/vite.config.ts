import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath } from "node:url";

const playgroundRoot = fileURLToPath(new URL(".", import.meta.url));
const composeSrc = fileURLToPath(
    new URL("../compose-svelted/src/lib", import.meta.url)
);

export default defineConfig({
    root: playgroundRoot,
    plugins: [svelte()],
    resolve: {
        alias: {
            "@danielito1996/compose-svelted": composeSrc
        }
    }
});