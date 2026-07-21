# 简介

欢迎使用 **Vue-Bag-Admin**！

## 什么是 Vue-Bag-Admin？

`Vue-Bag-Admin` 是一套面向 Vue 3 的插件化后台框架生态。你既可以把它当成一个 Monorepo 工程来开发，也可以把它拆开，按 npm 包的方式去消费统一主包和业务插件。

## 它想解决什么？

很多中后台项目一开始都很轻，页面多了以后，`src/views` 会慢慢堆成一个大目录。模块之间互相引用，复制到另一个系统时又要改一圈，维护起来很累。

Vue-Bag-Admin 做的事很直接，把后台壳层和业务模块拆开。

- **宿主层（Host）**：只负责应用初始化、布局加载、权限前置、插件引导和公共壳层。
- **插件层（Plugin）**：把商城、系统设置、报表、内容等业务域拆成独立包，路由、菜单、页面和多语言都由插件自己声明。
- **协议层（Core）**：把插件接口、路由 meta、Schema 协议收在一处，避免每个模块都说自己的方言。

所以你既能在仓库里用 `pnpm workspace` 联调，也能在外部项目里只装 `vue-bag-admin`。需要哪块业务，再追加对应的 `@bag/plugin-*`。

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

这几个包可以先这样看：

- `@bag/core`：协议层，定义插件接口、路由 meta、菜单与 Schema 协议
- `@bag/request`：请求层，封装 HTTP / WS 常用接入
- `@bag/ui`：组件层，承载 `PmProTable`、`PmProForm`、`PmSchemaForm`
- `@bag/host-vue`：宿主层，负责布局、权限、路由和插件引导
- `vue-bag-admin`：给业务项目用的主包，默认带上宿主层、协议层、请求层和 UI 层
- `@bag/plugin-*`：业务插件层，例如 `@bag/plugin-shop`、`@bag/plugin-sys-setting`
- `create-vue-bag-admin`：脚手架入口，用来快速生成宿主项目

第一次看这套项目，可以先按这个版本记：

- `core` 定规则
- `ui` 提供积木
- `host-vue` 把宿主跑起来
- `plugin-*` 往宿主里装业务
- `vue-bag-admin` 给业务项目提供默认主入口
- `create-vue-bag-admin` 负责生成起步工程

想按 npm 分包往下看，可以接着读：

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
│   ├── vue-bag-admin      # 面向业务项目的统一主包
│   ├── create-vue-bag-admin # 初始化脚手架
│   └── plugin-*          # 业务插件层
├── pnpm-workspace.yaml   # Monorepo 配置
└── package.json
```
