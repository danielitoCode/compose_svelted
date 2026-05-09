import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,
  plugins: [svelte()],
  resolve: {
    alias: [
      {
        find: '@danielito1996/compose-svelted/baseline.css',
        replacement: path.resolve(__dirname, '../src/lib/core/styles/baseline.css')
      },
      {
        find: '@danielito1996/compose-svelted/baseline-safe.css',
        replacement: path.resolve(__dirname, '../src/lib/core/styles/baseline-safe.css')
      },
      {
        find: '@danielito1996/compose-svelted',
        replacement: path.resolve(__dirname, '../src/lib/index.ts')
      }
    ]
  }
});
