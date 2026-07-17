import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/vue-bag-admin/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@bag/core': path.resolve(__dirname, '../../packages/core/src/index.ts'),
      '@bag/host-vue': path.resolve(__dirname, '../../packages/host-vue/src/index.ts'),
      '@bag/plugin-shop': path.resolve(__dirname, '../../packages/plugin-shop/src/index.ts'),
      '@bag/plugin-sys-setting': path.resolve(
        __dirname,
        '../../packages/plugin-sys-setting/src/index.ts'
      ),
      '@bag/request': path.resolve(__dirname, '../../packages/request/src/index.ts'),
      '@bag/ui': path.resolve(__dirname, '../../packages/ui/src/index.ts')
    }
  },
  server: {
    port: 3000
  }
})
