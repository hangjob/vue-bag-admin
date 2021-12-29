import path from "path";

const setLibBuild = function () {
    return {
        emptyOutDir: true,
        lib: {
            entry: path.resolve(process.cwd(), 'src/packages/install.ts'),
            name: 'vueViteAdminTs', // 构建依赖包的时候， 对外暴露的名称
            fileName: (format: string) => `index.${format}.js`,
            rollupOptions: {
                external: ['vue', 'vue-router'],
                output: {
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
            }
        }
    }
}

export default setLibBuild
