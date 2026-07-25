import { defineConfig } from 'vitepress'
import frameworkPackage from '../../../packages/vue-bag-admin/package.json'

const frameworkVersion = frameworkPackage.version

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
      { text: '在线预览', link: 'https://hangjob.github.io/vue-bag-admin/' },
      {
        text: '社区',
        items: [
          { text: '微信群', link: '/#community' },
          { text: '知航驿站', link: 'https://www.itnavs.com/' },
          { text: '合作机会', link: 'https://yh.itnavs.com/contact' }
        ]
      },
      {
        text: `v${frameworkVersion}`,
        link: 'https://www.npmjs.com/package/vue-bag-admin'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '项目介绍', link: '/guide/introduction' },
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '创建项目', link: '/guide/create-project' }
          ]
        },
        {
          text: '核心开发',
          items: [
            { text: '初始化宿主', link: '/guide/host/bootstrap' },
            { text: '路由与菜单', link: '/guide/host/routing-and-menu' },
            { text: '登录与权限', link: '/guide/host/auth-and-permissions' },
            { text: '请求与组件', link: '/guide/request-and-components' }
          ]
        },
        {
          text: '官方插件',
          items: [
            { text: '插件总览', link: '/guide/official-plugins/' },
            { text: '安装与启停', link: '/guide/official-plugins/install-and-toggle' },
            { text: '商城插件', link: '/guide/official-plugins/shop' },
            { text: '系统设置插件', link: '/guide/official-plugins/sys-setting' }
          ]
        },
        {
          text: '插件开发',
          items: [
            { text: '创建插件', link: '/guide/plugins/create-plugin' },
            { text: 'AdminPlugin 配置', link: '/guide/plugins/admin-plugin' },
            {
              text: '路由、菜单与多语言',
              link: '/guide/plugins/routes-menus-locales'
            },
            {
              text: '权限与配置项',
              link: '/guide/plugins/permissions-and-settings'
            },
            {
              text: '生命周期与依赖',
              link: '/guide/plugins/lifecycle-and-dependencies'
            },
            { text: '调试与发布', link: '/guide/plugins/debug-and-publish' }
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
