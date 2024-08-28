import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Vue-Bag-Admin",
    description: "旨在让开发者能够以最小的成本完成开发降低重复工作",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '🐻‍首页️', link: '/'},
            {text: '演示', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: '入门指南',
                items: [
                    {text: '介绍', link: '/guide/intro'},
                    {text: '入门指南', link: '/guide/started'},
                    {text: '发布部署', link: '/guide/deploy'}
                ]
            },
            {
                text: '准备工作',
                items: [
                    {text: '安装', link: '/guide/install'},
                    {text: '快速开始', link: '/guide/started'},
                    {text: '源码开发', link: '/guide/deploy'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        // 设置搜索框的样式
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },
    },
})
