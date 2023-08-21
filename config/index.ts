// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from "path"

console.log(process.cwd())
export default function setupConfig({mode}: { mode: any }) {
    const build: any = {
        minify: false
    }
    if (mode === "lib") {
        build.emptyOutDir = true
        build.sourcemap = false
        build.outDir = path.resolve(process.cwd(), "lib")
        build.lib = {
            entry: path.resolve(process.cwd(), "src/packages/install.ts"),
            name: "BagAdmin", // 构建依赖包的时候， 对外暴露的名称
            fileName: (format: string) => `index.${format}.js`,
        }
        build.output = {
            nlineDynamicImports: true,
            globals: {
                vue: "Vue"
            }
        }
    }

    if (mode === "production") {
        build.assetsInlineLimit = 4096 // 小于此阈值的导入或引用资源将内联为 base64 编码， 以避免额外的http请求， 设置为 0, 可以完全禁用此项
        build.sourcemap = false  // 方便调试
        build.outDir = path.resolve(process.cwd(), "dist")
        build.chunkSizeWarningLimit = 500  // 大小警告的限制
        build.rollupOptions = {
            input: {  // 多页面模式-注意root指定的根目录
                main: path.resolve(process.cwd(), "src/app/index.html"),
                admin: path.resolve(process.cwd(), "src/app/admin/index.html"),
                web: path.resolve(process.cwd(), "src/app/web/index.html"),
            }
        }
    }
    return {
        build
    }
}
