import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        directory: fileURLToPath(new URL('./index.html', import.meta.url)),
        greeting: fileURLToPath(new URL('./greeting.html', import.meta.url)),
      },
    },
  },
})
