export default {
    base: '/doc',
    outDir: '../doc',
    title: 'Bag-admin',
    description: '快速开发管理系统，提供基础的框架',
    lastUpdated: '最近更新时间',
    appearance: true, //
    head: [
        [
            'link',
            {
                rel: 'shortcut icon',
                href: 'https://vite.itnavs.com/favicon.ico',
                type: 'image/x-icon',
            },
        ],
    ],
    themeConfig: {
        footer: {
            message: '作者-羊先生',
        },
        siteTitle: 'Bag-admin',
        sidebar: {
            '/admin/':[
                {
                    text: '指南',
                    items: [
                        { text: '介绍', link: '/admin/guide/introduce' },
                        { text: '安装', link: '/admin/guide/install' },
                        { text: '快速开始', link: '/admin/guide/start' },
                    ],
                },
                {
                    text: '基础配置',
                    items: [
                        { text: '默认配置', link: '/admin/config/index' },
                        { text: '路由配置', link: '/admin/config/router' },
                        { text: '网络请求', link: '/admin/config/network' },
                        { text: '状态管理', link: '/admin/config/pinia' },
                        { text: '内置组件', link: '/admin/config/comps' },
                    ],
                },
                {
                    text: '表单组件',
                    items: [
                        { text: 'CURD', link: '/admin/form/curd' },
                        { text: '属性说明', link: '/admin/form/attribute' },
                        { text: '按钮权限', link: '/admin/form/role' },
                    ],
                }
            ]
        },
    },
}
