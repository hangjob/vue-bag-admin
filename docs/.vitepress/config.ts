import {defineConfig, DefaultTheme} from "vitepress"

const ogDescription = "快速开发后中后台系统，提供基础的框架，你可以将它应用在任何需要中后台的应用"
const ogTitle = "Bag-admin"
const ogUrl = "https://vite.itnavs.com/"

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || ""

export default defineConfig({
    title: `Bag-admin`,
    base: '/doc/',
    description: "快速开发后中后台系统，提供基础的框架，你可以将它应用在任何需要中后台的应用",
    head: [
        ["link", {rel: "icon", type: "image/ico", href: "/assets/favicon.ico"}],
        ["meta", {property: "og:type", content: "website"}],
        ["meta", {property: "og:title", content: ogTitle}],
        ["meta", {property: "og:url", content: ogUrl}],
        ["meta", {property: "og:description", content: ogDescription}],
        ["meta", {name: "twitter:card", content: "summary_large_image"}],
        ["meta", {name: "twitter:site", content: "@vite_js"}],
        ["meta", {name: "theme-color", content: "#00e6ff"}],
    ],
    locales: {
        root: {label: "简体中文"},
        zh: {label: "English", link: ""},
    },
    themeConfig: {
        logo: "/logo.svg",
        editLink: {
            pattern: "https://github.com/hangjob/vue-bag-admin/issues",
            text: "提交问题",
        },
        socialLinks: [
            {icon: "github", link: "https://github.com/hangjob/vue-bag-admin"},
        ],
        algolia: {
            appId: "7H67QR5P0A",
            apiKey: "deaab78bcdfe96b599497d25acc6460e",
            indexName: "vitejs",
            searchParameters: {
                facetFilters: ["tags:en"],
            },
        },
        // carbonAds: {
        //     code: "CEBIEK3N",
        //     placement: "vitejsdev",
        // },
        nav: [
            {text: "指引", link: "/guide/duce.html", activeMatch: "/guide/"},
            // {text: "配置", link: "/config/menu.html", activeMatch: "/config/"},
            // {text: "Plugins", link: "/plugins/", activeMatch: "/plugins/"},
        ],

        sidebar: {
            "/guide/": [
                {
                    text: "指引",
                    items: [
                        {
                            text: "介绍",
                            link: "/guide/duce",
                        },
                        {
                            text: "安装",
                            link: "/guide/install",
                        },
                        {
                            text: "快速开始",
                            link: "/guide/start",
                        },
                        {
                            text: "源码开发",
                            link: "/guide/source",
                        },
                    ],
                },
                {
                    text: "说明",
                    items: [
                        {
                            text: "基础配置",
                            link: "/guide/conf",
                        },
                        {
                            text: "网络请求",
                            link: "/guide/axios",
                        },
                        {
                            text: "视图更改",
                            link: "/guide/view",
                        },
                        {
                            text: "接口说明",
                            link: "/guide/menu",
                        },
                        {
                            text: "图标使用",
                            link: "/guide/icon",
                        },
                        {
                            text: "框架页面",
                            link: "/guide/page",
                        },
                    ],
                },
                {
                    text: "插件",
                    items: [
                        {
                            text: "Naïve UI",
                            link: "/guide/pugins/ui",
                        },
                        {
                            text: "Vue-Router",
                            link: "/guide/pugins/router",
                        },
                        {
                            text: "Pinia",
                            link: "/guide/pugins/pinia",
                        },
                    ],
                },
            ],
        },
    },
})
