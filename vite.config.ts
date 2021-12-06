import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression' // 开启压缩
import styleImport from 'vite-plugin-style-import' //按需加载模块
import theme from './src/packages/theme/ming'

const path = require('path');

export default ({mode}: { mode: any }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    let build: any = {
        minify: false, // 跟踪这个警告[https://github.com/element-plus/element-plus/issues/3219#issuecomment-960374776]
        outDir: process.env.VITE_MODE, //打包文件名称
        assetsDir: "assets", //打包静态文件的存储地址
        chunkSizeWarningLimit: 500,
    }
    if (mode === 'production') {
        build.rollupOptions = {
            input: {
                web: path.resolve(__dirname, 'index.html'), // 把页面放在外面，路径简短 防止src/packages/web/index.html ，建议vite把key(web、lib)可也阔以映射成页面路径，就避免这个问题
                lib: path.resolve(__dirname, 'lib.html')
            },
            output: {
                manualChunks: {
                    "vxe-table": ["vxe-table"],
                    "echarts": ["echarts"],
                    "xe-utils": ["xe-utils"],
                    "lodash": ['lodash'],
                    "ant-design-vue": ['ant-design-vue']
                }
            },
        }
    }
    if (mode === 'lib') {
        build.lib = {
            entry: path.resolve(__dirname, 'src/packages/install.ts'),
            name: 'yxs-admin',
            fileName: (format: any) => `yxs-admin.${format}.js`,
            formats: ['es']
        }
    }
    return defineConfig({
        base: './',
        plugins: [vue(), vueJsx(), styleImport({
            libs: [
                {
                    libraryName: 'vxe-table',
                    esModule: true,
                    resolveComponent: (name) => `vxe-table/es/${name}`,
                    resolveStyle: (name) => `vxe-table/es/${name}/style.css`
                }
            ]
        }),
            viteCompression(),
        ],
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
                    changeOrigin: true,
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
        build
    })
}
