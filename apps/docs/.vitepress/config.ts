import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.VITEPRESS_BASE || '/vue-bag-admin/docs/',
  title: 'Vue-Bag-Admin',
  description: '基于 Vue3 + Vite6 + Naive UI + Pinia + Strapi5 的中后台系统框架',
  appearance: 'dark',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '在线预览', link: 'https://hangjob.github.io/vue-bag-admin/' }
    ],

    sidebar: {
      '/guide/package': [
        {
          text: '开始',
          items: [
            { text: '简介', link: '/guide/introduction' },
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '本地联调', link: '/guide/local-debugging' },
            { text: '发包流程', link: '/guide/package-publishing' },
            { text: '生产环境部署', link: '/guide/deployment' }
          ]
        },
        {
          text: '宿主开发',
          items: [
            { text: '主包入口', link: '/guide/package-ecosystem' },
            { text: '宿主层', link: '/guide/introduction' },
            { text: '完整宿主示例', link: '/guide/complete-host-app' },
            { text: '路由与菜单', link: '/guide/routing-and-menu' },
            { text: '权限管理', link: '/guide/permissions' },
            { text: '主题与布局 Token', link: '/guide/theme-tokens' },
            { text: '网络请求', link: '/guide/network-request' },
            { text: '字典系统', link: '/guide/dictionary-system' }
          ]
        },
        {
          text: 'UI 与表单',
          items: [
            { text: 'UI 组件', link: '/guide/package-ui' },
            { text: 'PmProTable', link: '/guide/pro-table' },
            { text: 'PmProForm', link: '/guide/pro-form' }
          ]
        },
        {
          text: '插件开发',
          items: [
            { text: '插件化开发', link: '/guide/plugin-development' },
            { text: '商品插件', link: '/guide/package-plugin-shop' },
            { text: '系统设置插件', link: '/guide/package-plugin-sys-setting' }
          ]
        },
        {
          text: '包与工具',
          items: [
            { text: '包生态总览', link: '/guide/package-ecosystem' },
            { text: 'Core 协议层', link: '/guide/package-core' },
            { text: 'Request 请求层', link: '/guide/package-request' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '简介', link: '/guide/introduction' },
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '本地联调', link: '/guide/local-debugging' },
            { text: '发包流程', link: '/guide/package-publishing' },
            { text: '生产环境部署', link: '/guide/deployment' }
          ]
        },
        {
          text: '宿主开发',
          items: [
            { text: '主包入口', link: '/guide/package-ecosystem' },
            { text: '宿主层', link: '/guide/introduction' },
            { text: '完整宿主示例', link: '/guide/complete-host-app' },
            { text: '路由与菜单', link: '/guide/routing-and-menu' },
            { text: '权限管理', link: '/guide/permissions' },
            { text: '主题与布局 Token', link: '/guide/theme-tokens' },
            { text: '网络请求', link: '/guide/network-request' },
            { text: '字典系统', link: '/guide/dictionary-system' }
          ]
        },
        {
          text: 'UI 与表单',
          items: [
            { text: 'UI 组件', link: '/guide/package-ui' },
            { text: 'PmProTable', link: '/guide/pro-table' },
            { text: 'PmProForm', link: '/guide/pro-form' }
          ]
        },
        {
          text: '插件开发',
          items: [
            { text: '插件化开发', link: '/guide/plugin-development' },
            { text: '商品插件', link: '/guide/package-plugin-shop' },
            { text: '系统设置插件', link: '/guide/package-plugin-sys-setting' }
          ]
        },
        {
          text: '包与工具',
          items: [
            { text: '包生态总览', link: '/guide/package-ecosystem' },
            { text: 'Core 协议层', link: '/guide/package-core' },
            { text: 'Request 请求层', link: '/guide/package-request' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/hangjob/vue-bag-admin/tree/next' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Vue-Bag-Admin'
    },

    search: {
      provider: 'local'
    }
  }
})
