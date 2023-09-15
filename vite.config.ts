import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import Components from "unplugin-vue-components/vite"
import {NaiveUiResolver} from "unplugin-vue-components/resolvers"
import {viteMockServe} from "vite-plugin-mock"
import setupConfig from "./config"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"
import viteCompression from "vite-plugin-compression"

export default ({mode}: { mode: any }) => {
    const {build} = setupConfig({mode})
    const plugins = []
    if (mode === "lib") {
        plugins.push(cssInjectedByJsPlugin())
    }else{
        plugins.push(
            viteCompression({
                threshold: 10240
            })
        )
    }
    return defineConfig({
        root: path.resolve(__dirname, "src/app"), // 修改root参数为多页面的根目录
        base: "./",
        plugins: [
            vue(),
            Components({
                resolvers: [NaiveUiResolver()]
            }),
            viteMockServe({
                mockPath: "./mock",
            }),
            ...plugins
        ],
        publicDir: "public",
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                "__ROOT__": path.resolve(__dirname, ""),
            },
            extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"] // 自动匹配文件后缀名
        },
        build,
        server: {
            host: "0.0.0.0",
            port: 8280,
            https: false,
            proxy: {
                "^/api": {
                    target: "https://vite.itnavs.com/",
                    changeOrigin: true,
                },
                "^/bic": {
                    target: "https://api.vipbic.com/",
                    changeOrigin: true,
                    rewrite: (path: any) => path.replace(/^\/bic/, "")
                },
            }
        }
    })
}
