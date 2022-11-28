import path from 'path'

const setProBuild = function() {
    return {
        rollupOptions: {
            input: {
                index: path.resolve(process.cwd(), 'index.html'), // 把页面放在外面，路径简短 防止src/packages/web/index.html ，建议vite把key(web、lib)可也阔以映射成页面路径，就避免这个问题
                lib: path.resolve(process.cwd(), 'lib.html'),
                admin: path.resolve(process.cwd(), 'admin.html'),
                web: path.resolve(process.cwd(), 'web.html'),
            },
            // 两种方式 也可以指定包名打包
            // output: {
            //     manualChunks: {
            //         "vxe-table": ["vxe-table"],
            //         "echarts": ["echarts"],
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
                        return id.toString().split('node_modules/')[1].split('/')[0].toString()
                    }
                },
            },
        },
        terserOptions: {
            compress: {
                //生产环境时移除console
                drop_console: true,
                drop_debugger: true,
            },
        },
    }
}

export default setProBuild
