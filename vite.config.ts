import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const path = require('path');
export default defineConfig({
    plugins: [vue(),vueJsx()],
    resolve: {
        alias: {
            // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
            "@": path.resolve(__dirname, "src"),
            "comps": path.resolve(__dirname, "src/components"),
        }
    },
    server: {
        port: 3001,
    },
    build: {
        rollupOptions: {
            input: {
                web: path.resolve(__dirname, 'index.html'), // 把页面放在外面，路径简短 防止src/packages/web/index.html ，建议vite把key(web、admin)可也阔以映射成页面路径，就避免这个问题
                admin: path.resolve(__dirname, 'admin.html')
            },
        },
    }
})