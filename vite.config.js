import vue from '@vitejs/plugin-vue'
import {defineConfig, loadEnv} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js" // css 整合 js
import {analyzer} from "vite-bundle-analyzer"; // 分析包大小依赖
import VueDevTools from 'vite-plugin-vue-devtools' // 调试面板
import history from 'connect-history-api-fallback'
function historyPlugin() {
    return {
        name: 'vite-plugin-history',
        configureServer(server) {
            server.middlewares.use(history({
                rewrites: [
                    { from: /\/admin/, to: '/admin.html' } // 解决页面 在history 刷新下会 404 的问题
                ],
                htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
            }))
        }
    }
}

export default defineConfig(({mode}) => {
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
            VueDevTools(),
            historyPlugin()
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
            rollupOptions: {}
        },
        server: {
            // hmr: false,
            host: '0.0.0.0',
            port: 5100,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            proxy: {
                '/api': {
                    target: 'http://localhost:1337/api',
                    changeOrigin: true,
                    rewrite: (url) => url.replace(/^\/api/, ''),
                },
            },
        }
    }
    if (mode === 'lib') {
        config.build.lib = {
            entry: path.resolve(__dirname, 'src/packages/install.js'),
            name: 'vue-bag-admin',
            formats: ['es', 'cjs'],
            fileName: (format) => `vue-bag-admin.${format}.js` // 打包后的文件名
        }
        config.build.rollupOptions = {
            output: {
                manualChunks: () => {
                    return 'vendor'
                }
            },
            //设置为库模式
            external: ['vue', 'naive-ui'], // 这个配置很重要，不然会导致 公用的组件无法使用
        }
        config.build.minify = 'terser'
        config.build.terserOptions = {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        }
        config.plugins.push(cssInjectedByJsPlugin())
        // config.plugins.push(analyzer())
    } else {
        config.build.outDir = 'dist'
        config.build.rollupOptions.input = {
            main: path.resolve(__dirname, 'index.html'),
            admin: path.resolve(__dirname, 'admin.html'),
        }
    }
    return config;
})
