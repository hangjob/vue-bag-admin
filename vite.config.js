import vue from '@vitejs/plugin-vue'
import {defineConfig, loadEnv} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import path from "path";
import {viteMockServe} from 'vite-plugin-mock'

export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd())
    return {
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
                name: 'PmWebFramework',
                fileName: 'PmWebFramework',
            },
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
})
