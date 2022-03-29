import path from 'path'

const setLibBuild = function() {
    return {
        emptyOutDir: true,
        sourcemap: true,
        lib: {
            entry: path.resolve(process.cwd(), 'src/packages/framework.ts'),
            name: 'VueViteAdminTs', // 构建依赖包的时候， 对外暴露的名称
            fileName: (format: string) => `index.${format}.js`,
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: [
                "@antv/g2",
                "@antv/g2plot",
                "@braks/revue-draggable",
                "@element-plus/icons-vue",
                "@kangc/v-md-editor",
                "@mojs/core",
                "@soerenmartius/vue3-clipboard",
                "@vueuse/core",
                "ant-design-vue",
                "antd-theme-generator",
                "axios",
                "bootstrap",
                "bootstrap-icons",
                "core-js",
                "crypto-js",
                "dayjs",
                "default-passive-events",
                "echarts",
                "element-plus",
                "equal-vue",
                "file-saver",
                "fuse.js",
                "jquery",
                "lodash",
                "md-editor-v3",
                "minireset.css",
                "mitt",
                "mockjs",
                "moment",
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
                "vuex",
                "wangeditor"
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
