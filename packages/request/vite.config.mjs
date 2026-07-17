import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', 'axios', '@vueuse/core', 'lodash-es', 'lodash-es/debounce', 'lodash-es/throttle']
    }
  }
})
