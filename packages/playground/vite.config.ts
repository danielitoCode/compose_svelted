import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath } from "node:url";

const playgroundRoot = fileURLToPath(new URL(".", import.meta.url));
const composeLib = fileURLToPath(
    new URL("../compose-svelted/src/lib", import.meta.url)
);

export default defineConfig({
    root: playgroundRoot,
    plugins: [svelte()],
    resolve: {
        alias: [
            // ⚠️ EL ORDEN ES CRÍTICO (más específico primero)
            {
                find: "@danielito1996/compose-svelted/baseline.css",
                replacement: `${composeLib}/core/styles/baseline.css`
            },
            {
                find: "@danielito1996/compose-svelted",
                replacement: composeLib
            }
        ]
    }
});