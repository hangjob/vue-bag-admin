import path from 'path'

const setLibBuild = function() {
    return {
        emptyOutDir: true,
        lib: {
            entry: path.resolve(process.cwd(), 'src/packages/framework.ts'),
            name: 'VueViteAdminTs', // 构建依赖包的时候， 对外暴露的名称
            fileName: (format: string) => `index.${format}.js`,
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
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
