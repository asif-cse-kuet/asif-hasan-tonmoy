import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const isVitest = Boolean(process.env.VITEST)
const isProdBuild = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [vue(), tailwindcss(), ...(!isVitest && !isProdBuild ? [vueDevTools()] : [])],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Three.js and Mermaid stay over 500 kB; both load only via dynamic import().
    chunkSizeWarningLimit: 700,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'three',
              test: /node_modules[\\/]three(?:[\\/]|$)/,
              priority: 20,
            },
          ],
        },
      },
    },
  },
})
