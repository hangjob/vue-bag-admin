import vue from '@vitejs/plugin-vue'
import {defineConfig, loadEnv} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import path from "path";
import {viteMockServe} from 'vite-plugin-mock'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd())
    const config = {
        // vite 配置
        plugins: [
            vue(),
            AutoImport({
                imports: [
                    'vue',
                    {
                        'naive-ui': [
                            'useDialog',
                            'useMessage',
                            'useNotification',
                            'useLoadingBar'
                        ]
                    }
                ]
            }),
            Components({
                resolvers: [NaiveUiResolver()]
            }),
            viteMockServe({
                mockPath: './mock/',
                localEnabled: true,
                prodEnabled: true
            }),
        ],
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        build: {
            outDir: 'lib',
            lib: {
                entry: path.resolve(__dirname, 'src/packages/install.js'),
                name: 'vue-bag-admin',
                formats: ['es', 'cjs'],
                fileName: (format) => `vue-bag-admin.${format}.js` // 打包后的文件名
            },
            rollupOptions:{
                output: {
                    manualChunks: () => {
                        return 'vendor'
                    }
                }
            }
        },
        server: {
            host: '0.0.0.0',
            port: 5100,
            proxy: {
                '/api': {
                    target: 'http://localhost:1337/api',
                    changeOrigin: true,
                    rewrite: (url) => url.replace(/^\/api/, ''),
                },
            },
        }
    }
    if(mode === 'lib'){
        config.plugins.push(cssInjectedByJsPlugin())
    }
    return config;
})
