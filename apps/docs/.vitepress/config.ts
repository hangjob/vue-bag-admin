import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.VITEPRESS_BASE || '/vue-bag-admin/docs/',
  title: "Vue-Bag-Admin",
  description: "基于 Vue3 + Vite5 + Naive-ui + Pinia + Strapi5 的中后台系统框架",
  appearance: 'dark',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: 'API 参考', link: '/api/' },
      { text: '在线预览', link: 'https://hangjob.github.io/vue-bag-admin/' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/guide/introduction' },
          { text: '快速上手', link: '/guide/getting-started' }
        ]
      },
      {
        text: '核心进阶',
        items: [
          { text: '插件化开发', link: '/guide/plugin-development' },
          { text: '路由与菜单', link: '/guide/routing-and-menu' },
          { text: '权限管理', link: '/guide/permissions' },
          { text: '网络请求与拦截', link: '/guide/network-request' }
        ]
      },
      {
        text: '上线部署',
        items: [
          { text: '生产环境部署', link: '/guide/deployment' }
        ]
      },
      {
        text: '参考',
        items: [
          { text: 'API 参考', link: '/api/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/pm-web-admin-next' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Vue-Bag-Admin'
    },

    search: {
      provider: 'local'
    }
  }
})
