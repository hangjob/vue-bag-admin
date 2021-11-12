import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import' //按需加载模块
import theme from './src/packages/theme/ming'

const path = require('path');
export default defineConfig({
    plugins: [vue(), vueJsx(), styleImport({
        libs: [
            {
                libraryName: 'vxe-table',
                esModule: true,
                resolveComponent: (name) => `vxe-table/es/${name}`,
                resolveStyle: (name) => `vxe-table/es/${name}/style.css`
            }
        ]
    })],
    resolve: {
        alias: {
            // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
            "@": path.resolve(__dirname, "src"),
            "__ROOT__": path.resolve(__dirname, ""),
            "comps": path.resolve(__dirname, "src/components"),
        }
    },
    server: {
        host: '0.0.0.0',
        port: 8290,
        https: false,
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:7001',
                changeOrigin: true, //开启代理
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    ...theme
                },
                javascriptEnabled: true,
            },
        },
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