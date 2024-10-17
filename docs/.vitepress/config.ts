import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Vue-Bag-Admin",
    description: "旨在让开发者能够以最小的成本完成开发降低重复工作",
    base: '/doc/',
    lastUpdated: true,
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
                text: '开始使用',
                items: [
                    {text: '安装', link: '/guide/install'},
                    {text: '快速开始', link: '/guide/start'},
                    {
                        text: '插件列表',
                        items: [
                            {text: '路由插件', link: '/plugins/router'},
                            {text: '布局插件', link: '/plugins/layout'},
                            {text: '多语言插件', link: '/plugins/language'},
                            {text: '图标插件', link: '/plugins/icon'},
                            {text: 'API插件', link: '/plugins/api'},
                            {text: '进度条插件', link: '/plugins/progress'},
                        ]
                    },
                    {text: '路由布局', link: '/guide/router'},
                    {text: '全局扩展', link: '/guide/global'},
                    {text: '表单组件', link: '/guide/comp'},
                    {text: '主题设置', link: '/guide/theme'},
                    {text: 'Css原子化', link: '/guide/css'},
                    {text: 'Pinia状态管理', link: '/guide/pinia'},
                ]
            },
            {
                text: '高级用法',
                items: [
                    {text: '插件开发', link: '/plugins/exploit'},
                    {text: '自动导入', link: '/usage/import'},
                    {text: 'Vite插件', link: '/usage/vite'},
                ]
            },
            {
                text: 'Strapi',
                items: [
                    {text: 'API服务', link: '/strapi/install'},
                ]
            },
        ],

        socialLinks: [
            {icon: 'instagram', link: 'https://github.com/vuejs/vitepress'}
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
