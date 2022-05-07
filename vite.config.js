import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  publicDir: "../dist",
  plugins: [
    svelte(
      {
        preprocess: sveltePreprocess()
      }
    )],

  server: {
    port: 5000
  },
  build: {
    outDir: '../dist',
  }
})
