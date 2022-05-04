const path = require('path')
const setUtilsBuild = function () {
    return {
        emptyOutDir: true,
        sourcemap: true,
        lib: {
            entry: path.resolve(process.cwd(), 'src/bag-utils/index.ts'), //web工具化
            name: 'BagUtils', // 构建依赖包的时候， 对外暴露的名称
            fileName: (format: string) => `utils.${format}.js`,
        },
    }
}

export default setUtilsBuild
