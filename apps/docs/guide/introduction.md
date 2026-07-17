# 简介

欢迎使用 **Vue-Bag-Admin**！

## 什么是 Vue-Bag-Admin？

`Vue-Bag-Admin` 是一套面向 Vue 3 的插件化后台框架生态。你既可以把它当成一个 Monorepo 工程来开发，也可以把它拆开，按 npm 包的方式去消费宿主层、协议层、UI 层和业务插件。

## 为什么选择我们？

传统的中后台模板通常把所有的业务页面都堆积在 `src/views` 目录下。随着业务的迭代，项目会变得异常臃肿，难以维护，更难以在多个系统之间复用业务模块。

**Vue-Bag-Admin 的核心想法是把“后台壳层”和“业务模块”拆开：**

- **宿主层（Host）**：只负责应用初始化、布局加载、权限前置、插件引导和公共壳层。
- **插件层（Plugin）**：把商城、系统设置、报表、内容等业务域拆成独立包，路由、菜单、页面和多语言都由插件自己声明。
- **协议层（Core）**：把插件接口、路由 meta、Schema 协议统一收口，避免每个模块都说自己的方言。

这意味着你既能在仓库里按 `pnpm workspace` 的方式联调，也能在外部项目里按 `@bag/*` 的方式自由组合。

## 技术栈

### 前端

- **框架**：Vue 3.5+ (Composition API + `<script setup>`)
- **构建工具**：Vite 5
- **语言**：TypeScript
- **路由**：Vue Router 4
- **状态管理**：Pinia
- **组件库**：Naive UI
- **样式**：TailwindCSS
- **请求**：Axios (封装在 `@bag/request` 中)

### 后端

- **框架**：Strapi 5 (Node.js)
- **数据库**：MySQL 8+

> 提醒一下：仓库虽然自带了 Strapi 5 作为参考后端，但前端宿主和插件机制并不绑定 Strapi。你完全可以换成 Java、Go、PHP，或者任何你自己的服务端实现。

## 包生态怎么分层

现在这套体系里，几个核心包大致分成下面几层：

- `@bag/core`：协议层，定义插件接口、路由 meta、菜单与 Schema 协议
- `@bag/request`：请求能力层，统一 HTTP / WS 相关封装
- `@bag/ui`：组件层，承载 `PmProTable`、`PmProForm`、`PmSchemaForm`
- `@bag/host-vue`：宿主层，负责布局、权限、路由和插件引导
- `@bag/plugin-*`：业务插件层，例如 `@bag/plugin-shop`、`@bag/plugin-sys-setting`
- `create-bag-admin`：脚手架入口，用来快速生成宿主项目

如果你第一次接触这套项目，最实用的理解方式是：

- `core` 定规则
- `ui` 提供积木
- `host-vue` 把宿主跑起来
- `plugin-*` 往宿主里装业务
- `create-bag-admin` 负责生成起步工程

如果你想按 npm 分包逐个理解，可以继续看：

- [包生态总览](./package-ecosystem.md)
- [@bag/core](./package-core.md)
- [@bag/request](./package-request.md)
- [@bag/ui](./package-ui.md)
- [@bag/plugin-shop](./package-plugin-shop.md)
- [@bag/plugin-sys-setting](./package-plugin-sys-setting.md)

## 目录结构说明

```text
vue-bag-admin
├── apps
│   ├── admin             # 前端宿主应用 (Vue3)
│   ├── docs              # VitePress 官方文档
│   └── strapi            # 后端服务 (Strapi 5)
├── packages
│   ├── core              # 协议层
│   ├── request           # 请求能力层
│   ├── ui                # 组件层
│   ├── host-vue          # 宿主层
│   ├── create-bag-admin  # 初始化脚手架
│   └── plugin-*          # 业务插件层
├── pnpm-workspace.yaml   # Monorepo 配置
└── package.json
```
