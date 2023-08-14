import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import { viteMockServe } from "vite-plugin-mock"
export default defineConfig({
    root:path.resolve(__dirname, "src/app"), // 修改root参数为多页面的根目录
    base: "./",
    plugins: [
        vue(),
        Components({
            resolvers: [NaiveUiResolver()]
        }),
        viteMockServe({
            mockPath: "./mock",
            enable: false,
        }),
    ],
    publicDir: "public",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "__ROOT__": path.resolve(__dirname, ""),
        },
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"] // 自动匹配文件后缀名
    },
    build: {
        assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码， 以避免额外的http请求， 设置为 0, 可以完全禁用此项
        sourcemap: false, // 方便调试
        outDir: path.resolve(__dirname, "dist"),
        chunkSizeWarningLimit: 500,   // 大小警告的限制
        rollupOptions: {
            input: {  // 多页面模式-注意root指定的根目录
                main: path.resolve(__dirname, "src/app/index.html"),
                admin: path.resolve(__dirname, "src/app/admin/index.html"),
                web: path.resolve(__dirname, "src/app/web/index.html"),
            },
        },
    },
    server:{
        host: "0.0.0.0",
        port: 8280,
        https: false,
        proxy: {
            "^/api": {
                target: "http://127.0.0.1:8001",
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/api/, "")
            },
        }
    }
})
