import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve('src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', 'vue-router', '@vueuse/core', '@bag/core', '@bag/ui']
    }
  }
})
