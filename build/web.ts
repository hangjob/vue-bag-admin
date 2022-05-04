const path = require('path')
const setWebBuild = function () {
    return {
        emptyOutDir: true,
        sourcemap: true,
        lib: {
            entry: path.resolve(process.cwd(), 'src/bag-web/index.ts'), //web工具化
            name: 'BagWeb', // 构建依赖包的时候， 对外暴露的名称
            fileName: (format: string) => `web.${format}.js`,
        },
    }
}

export default setWebBuild
