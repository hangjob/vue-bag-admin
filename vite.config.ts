import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import html from 'vite-plugin-html'
import legacy from '@vitejs/plugin-legacy'
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
                example: path.resolve(__dirname, 'index.html'), // 把页面放在外面，路径简短 防止src/packages/web/index.html ，建议vite把key(web、lib)可也阔以映射成页面路径，就避免这个问题
                lib: path.resolve(__dirname, 'lib.html')
            },
            // 也可以指定包名打包
            // output: {
            //     manualChunks: {
            //         "vxe-table": ["vxe-table"],
            //         "echarts": ["echarts"],
            //         "xe-utils": ["xe-utils"],
            //         "lodash": ['lodash'],
            //         "ant-design-vue": ['ant-design-vue'],
            //         "@antv/g2plot": ['@antv/g2plot'],
            //         "@antv/g2": ['@antv/g2'],
            //     }
            // },
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/static/[name]-[hash].[ext]',
                manualChunks(id: any) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            },
        }
        build.terserOptions = {
            compress: {
                //生产环境时移除console
                drop_console: true,
                drop_debugger: true,
            },
        }
    }
    if (mode === 'lib') {
        build.emptyOutDir = true
        build.lib = {
            entry: path.resolve(__dirname, 'src/packages/install.ts'),
            name: 'vueViteAdminTs',
            fileName: (format: string) => `index.${format}.js`,
            rollupOptions: {
                external: ['vue', 'vue-router'],
                output: {
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        }
        build.rollupOptions = {
            output: {
                inlineDynamicImports: true,
            }
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
            // 开启压缩 [文档](https://github.com/anncwb/vite-plugin-compression/blob/main/README.zh_CN.md)
            viteCompression({
                verbose: true,
                disable: false,
                // filter:()=>{}, // 那些资源不压缩
                threshold: 1024 * 50, // 体积大于 threshold 才会被压缩,单位 b
                deleteOriginFile: false,// 压缩后是否删除源文件
                algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
                ext: '.gz', // 生成的压缩包后缀
            }),
            //  注入环境变量到html模板中 在html中这样获取  <%- VITE_MODE %>
            html({
                inject: {
                    injectData: {...process.env}
                },
                minify: true
            }),
            // 兼容插件
            // legacy({
            //     targets: ['defaults', 'not IE 11']
            // }),
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
