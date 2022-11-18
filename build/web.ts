import path from 'path'


const setWebBuild = function() {
    return {
        emptyOutDir: true,
        sourcemap: true,
        lib: {
            entry: path.resolve(process.cwd(), 'src/bag-web/install.ts'),
            name: 'BagWeb', // 构建依赖包的时候， 对外暴露的名称
            fileName: (format: string) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [
                '@element-plus/icons-vue',
                '@kangc/v-md-editor',
                '@mojs/core',
                '@soerenmartius/vue3-clipboard',
                '@vueuse/core',
                'ant-design-vue',
                'antd-theme-generator',
                'axios',
                'bootstrap',
                'bootstrap-icons',
                'core-js',
                'crypto-js',
                'dayjs',
                'default-passive-events',
                'element-plus',
                'equal-vue',
                'file-saver',
                'fuse.js',
                'jquery',
                'lodash',
                'md-editor-v3',
                'mitt',
                'mockjs',
                'nanoid',
                'normalize.css',
                'nprogress',
                'pinia',
                'print-js',
                'quill',
                'socket.io-client',
                'store',
                'vue',
                "vue-router",
                "vue-cropper",
                "vue3-marquee",
                "vuex",
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
                globals: {
                    vue: 'Vue',
                },
            },
        },
    }
}

export default setWebBuild
