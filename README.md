<div align="center">
  <img src="./apps/docs/public/logo.png" width="96" alt="Vue-Bag-Admin Logo" />
  <h1>Vue-Bag-Admin</h1>
  <p><strong>插件化、可拆包、面向业务增长的 Vue3 中后台解决方案</strong></p>
  <p>
    <a href="https://hangjob.github.io/vue-bag-admin">在线体验</a>
    ·
    <a href="https://hangjob.github.io/vue-bag-admin/docs/">文档地址</a>
    ·
    <a href="./apps/docs/guide/getting-started.md">快速开始</a>
    ·
    <a href="./apps/docs/guide/plugin-development.md">插件开发</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Vue-3.5-42b883?style=flat-square" alt="Vue 3.5" />
    <img src="https://img.shields.io/badge/Vite-6-646cff?style=flat-square" alt="Vite 6" />
    <img src="https://img.shields.io/badge/Naive_UI-2.40-18a058?style=flat-square" alt="Naive UI" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/pnpm-workspace-f69220?style=flat-square" alt="pnpm workspace" />
    <img src="https://img.shields.io/badge/license-MIT-111827?style=flat-square" alt="MIT License" />
  </p>
</div>

---

`Vue-Bag-Admin` 不只是一个后台工程模板，也是一套正在拆包发布的插件化后台生态。它把布局、权限、路由、请求、Schema UI 和插件引导收敛到统一主包中，让业务项目可以先轻量启动，再按需接入独立插件。

你可以直接用脚手架创建一个新的后台宿主，也可以在当前 Monorepo 中开发框架、插件、文档站和参考后端。

## 为什么选择

| 能力       | 你会得到什么                                                              |
| ---------- | ------------------------------------------------------------------------- |
| 插件化架构 | 核心框架与业务模块解耦，商城、系统设置等能力可以作为独立插件接入。        |
| 主包优先   | 业务项目默认只安装 `vue-bag-admin`，避免一开始就被完整 Monorepo 绑住。    |
| 权限闭环   | 支持动态路由、菜单权限、按钮级权限，并可与 Strapi5 配合完成全栈权限流转。 |
| 工程化基础 | pnpm workspace 管理多包协作，内置宿主应用、文档站、参考后端和脚手架。     |
| 现代 UI 栈 | Vue3、Vite6、Naive UI、TailwindCSS、Pinia、Vue Router 组成稳定开发底座。  |
| 开箱即用   | 登录、Dashboard、布局、403、404、请求封装等后台基础能力已经准备好。       |

## 适合场景

| 场景                 | 推荐用法                                                         |
| -------------------- | ---------------------------------------------------------------- |
| 快速搭建业务后台     | 使用 `create-vue-bag-admin` 创建最小宿主项目。                   |
| 沉淀公司内部后台基座 | 基于 `vue-bag-admin` 主包扩展业务规范和 UI 约定。                |
| 拆分复用业务模块     | 将业务能力封装为 `@bag/plugin-*` 插件，按需接入不同宿主。        |
| 学习中后台工程实践   | 阅读 Monorepo、宿主、插件、请求、Schema UI 与 Strapi5 后端实现。 |

## 快速开始

### 创建新的后台项目

```bash
npx create-vue-bag-admin my-admin
cd my-admin
pnpm install
pnpm dev
```

脚手架当前使用 `templates/basic` 生成最小宿主模板，默认只安装 `vue-bag-admin`。当项目需要商城、系统设置等官方业务能力时，再按需安装对应的 `@bag/plugin-*` 插件即可。

### 开发当前 Monorepo

```bash
pnpm install
pnpm --filter admin dev
```

如果需要同时运行参考后端，请先准备 MySQL 数据库 `vue_bag_admin`，再启动 Strapi：

```bash
cd apps/strapi
cp .env.example .env
pnpm dev
```

## 环境要求

| 依赖    | 版本                                      |
| ------- | ----------------------------------------- |
| Node.js | `v24.4.1` 或更高版本                      |
| pnpm    | `v9` 或更高版本                           |
| MySQL   | `8.0` 或更高版本，仅 Strapi5 参考后端需要 |

> 仓库中的 `.nvmrc` / `.nvmdrc` 使用完整版本号 `24.4.1`，避免部分版本管理工具无法解析 `24` 简写。

## 项目结构

```text
Vue-Bag-Admin
├── apps
│   ├── admin                 # 前端宿主应用 (Vue3)
│   ├── docs                  # VitePress 官方文档
│   └── strapi                # 参考后端服务 (Strapi 5)
├── packages
│   ├── core                  # 协议层：插件、路由 meta、Schema 等
│   ├── host-vue              # 宿主层：布局、权限、路由、插件引导
│   ├── request               # 请求能力层
│   ├── ui                    # Schema 驱动的 UI 组件层
│   ├── vue-bag-admin         # 面向业务项目的统一主包
│   ├── create-vue-bag-admin  # 初始化脚手架
│   └── plugin-*              # 官方业务插件与示例插件
├── pnpm-workspace.yaml       # Monorepo 配置
└── package.json
```

## 包生态

| 包名                      | 定位     | 说明                                                                |
| ------------------------- | -------- | ------------------------------------------------------------------- |
| `vue-bag-admin`           | 统一主包 | 默认聚合宿主、请求、UI 和协议能力，是业务项目的首选入口。           |
| `@bag/core`               | 协议层   | 定义插件接口、路由 meta、Schema 协议等基础约定。                    |
| `@bag/host-vue`           | 宿主层   | 负责布局、权限、路由注册和插件引导。                                |
| `@bag/request`            | 请求层   | 统一 HTTP / WS 能力，并内置基于 Lodash 的请求防抖 / 节流包装器。    |
| `@bag/ui`                 | 组件层   | 承载 `PmProTable`、`PmProForm`、`PmSchemaForm` 等 Schema 驱动组件。 |
| `@bag/plugin-shop`        | 业务插件 | 官方商城示例插件。                                                  |
| `@bag/plugin-sys-setting` | 业务插件 | 官方系统设置示例插件。                                              |
| `create-vue-bag-admin`    | 脚手架   | 快速创建后台宿主项目。                                              |

## 常用命令

| 命令                          | 说明                         |
| ----------------------------- | ---------------------------- |
| `pnpm install`                | 安装 Monorepo 依赖。         |
| `pnpm --filter admin dev`     | 启动前端宿主应用。           |
| `pnpm --filter @bag/docs dev` | 启动 VitePress 文档站。      |
| `pnpm dev`                    | 启动除 Strapi 外的开发任务。 |
| `pnpm dev:all`                | 启动全部开发任务。           |
| `pnpm build`                  | 构建所有包和应用。           |
| `pnpm check-types`            | 执行类型检查。               |

## 延伸阅读

- [快速开始](./apps/docs/guide/getting-started.md)
- [插件开发指南](./apps/docs/guide/plugin-development.md)
- [宿主层说明](./packages/host-vue/README.md)

## 交流

如果你想交流使用体验、插件设计，或者一起补齐项目的能力边界，可以扫描下方二维码加入微信群：

<div align="center">
  <img src="./wxcode.jpg" alt="Vue-Bag-Admin 微信群二维码" width="320" />
</div>
