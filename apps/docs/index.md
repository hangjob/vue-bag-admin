---
layout: home

hero:
  name: 'Vue-Bag-Admin'
  text: '插件化中后台框架'
  tagline: '基于 Vue3 + Vite6 + Naive UI + Tailwind CSS + Pinia + Strapi5 的宿主式后台框架'
  image:
    src: /logo.png
    alt: Vue-Bag-Admin Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 了解架构
      link: /guide/introduction
    - theme: alt
      text: 在线预览
      link: https://hangjob.github.io/vue-bag-admin/

features:
  - title: 🧩 宿主与插件分层
    details: '`vue-bag-admin` 跑宿主，`@bag/plugin-*` 放业务。先装主包，缺哪块业务再补插件。'
  - title: 📦 Monorepo 管理
    details: '仓库使用 pnpm workspace 组织 `core`、`request`、`ui`、`host-vue`、插件包和脚手架，便于联调和独立发包。'
  - title: 🛡️ 权限与路由
    details: '宿主内置动态路由、菜单、标签页和按钮级权限控制，可以直接接常见后台页面。'
  - title: 🎛️ UI 与请求能力
    details: '内置 `PmProTable`、`PmProForm`、字典组件，以及 HTTP / fetch / WebSocket 接入。'
  - title: 🚀 脚手架起步
    details: '可以通过 `create-vue-bag-admin` 直接生成宿主项目，再按需挂官方插件或业务插件。'
  - title: 🔧 本地联调
    details: '可以直接跑 `apps/admin`，也可以在外部项目里用 `link:` 验证主包和插件包。'
---
