const path = require('path')
const setLibBuild = function() {
    return {
        emptyOutDir: true,
        sourcemap: true,
        lib: {
            entry: path.resolve(process.cwd(), 'src/packages/install.ts'),
            name: 'BagAdmin', // 构建依赖包的时候， 对外暴露的名称
            fileName: (format: string) => `index.${format}.js`,
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: [
                "@braks/revue-draggable",
                "@element-plus/icons-vue",
                "@kangc/v-md-editor",
                "@mojs/core",
                "@soerenmartius/vue3-clipboard",
                "@vueuse/core",
                "ant-design-vue",
                "@ant-design",
                "antd-theme-generator",
                "axios",
                "bootstrap",
                "bootstrap-icons",
                "core-js",
                "crypto-js",
                "dayjs",
                "default-passive-events",
                "element-plus",
                "equal-vue",
                "file-saver",
                "fuse.js",
                "jquery",
                "lodash",
                "md-editor-v3",
                "mitt",
                "mockjs",
                "nanoid",
                "normalize.css",
                "nprogress",
                "pinia",
                "print-js",
                "quill",
                "socket.io-client",
                "store",
                "vue",
                "vue-router",
                "vue-cropper",
                "vue3-marquee",
                "vitepress",
                "wangeditor",
                "xlsx",
                '@antv',
                '@antv/g2plot',
                'highlight.js',
                '@antv/g2',
                '@antv/g2plot',
                'jsencrypt',
                '@ant-design/icons-vue',
            ],
            output: {
                inlineDynamicImports: true,
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        },
    }
}

export default setLibBuild

