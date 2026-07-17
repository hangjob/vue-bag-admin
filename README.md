# Vue-Bag-Admin

[在线体验](https://hangjob.github.io/vue-bag-admin) | [文档地址](https://hangjob.github.io/vue-bag-admin/docs/)

`Vue-Bag-Admin` 现在不只是一个后台工程仓库，也是一套正在拆包发布的插件化后台生态。你可以直接在 Monorepo 里开发，也可以通过 npm 包和脚手架去起一个新的宿主项目。

## 核心特性

- ⚡️ **极致速度**：基于 Vite5 构建，提供闪电般的冷启动和热重载体验。
- 🧩 **插件化微内核架构**：核心与业务解耦，业务模块可以作为独立插件接入宿主。
- 📦 **可拆包生态**：`@bag/core`、`@bag/ui`、`@bag/request`、`@bag/host-vue`、`@bag/plugin-*` 和 `create-bag-admin` 已拆成清晰分层。
- 🛠️ **Monorepo 管理**：采用 pnpm workspace 进行多包协作，仓库内置示例宿主、文档站和参考后端。
- 🔒 **完善的权限体系**：基于角色的动态路由与按钮级别权限控制，配合 Strapi5 轻松实现全栈权限流转。
- 🎨 **Naive UI 与 TailwindCSS**：深度集成 Naive UI 组件库与 TailwindCSS，组件丰富且样式开发高效灵活。
- 📦 **开箱即用**：提供完整的登录、Dashboard、403、404 等基础能力，助你专注于业务逻辑。

## 目录结构

```text
Vue-Bag-Admin
├── apps
│   ├── admin             # 前端宿主应用 (Vue3)
│   ├── docs              # VitePress 官方文档
│   └── strapi            # 后端服务 (Strapi 5)
├── packages
│   ├── core              # 协议层：插件、路由 meta、Schema 等
│   ├── host-vue          # 宿主层：布局、权限、插件引导
│   ├── request           # 请求能力层
│   ├── ui                # Schema 驱动 UI 组件层
│   ├── create-bag-admin  # 初始化脚手架
│   └── plugin-*          # 官方业务插件与示例插件
├── pnpm-workspace.yaml   # Monorepo 配置
└── package.json
```

## 两种开始方式

### 1. 直接用 npm 起项目

如果你的目标是创建一个新的后台宿主项目，推荐直接从脚手架开始：

```bash
npx create-bag-admin my-admin
cd my-admin
pnpm install
pnpm dev
```

脚手架目前提供：

- `basic`：最小宿主模板
- `with-demo-plugins`：带多插件演示的教学模板

### 2. 在当前仓库里开发

如果你想参与这套框架本身的开发，再按下面的方式跑 Monorepo。

## 仓库开发

### 环境准备

- **Node.js**: `v24` 或更高版本。
- **pnpm**: `v9` 或更高版本。
- **MySQL**: `8.0` 以上版本（用于 Strapi5 后端）。

### 1. 安装依赖

```bash
pnpm install
```

### 2. 后端服务初始化 (Strapi)

进入 `apps/strapi` 目录，配置数据库并启动：

```bash
cd apps/strapi
cp .env.example .env
pnpm dev
```

> 默认使用 MySQL 数据库 `vue_bag_admin`（需要提前创建）。

### 3. 前端服务启动

回到根目录或在 `apps/admin` 目录中：

```bash
cd apps/admin
cp .env.example .env

# 在根目录运行前端 dev 命令
pnpm --filter admin dev
```

### 4. 查阅文档

本地启动 VitePress 文档服务：

```bash
pnpm --filter @bag/docs dev
```

或者访问 `apps/docs` 下的内容了解详细架构和插件开发指南。

## 包生态说明

- `@bag/core`：协议层，定义插件接口、路由 meta、Schema 协议
- `@bag/request`：请求能力层，统一 HTTP / WS 相关能力，并内置基于 Lodash 的请求防抖 / 节流包装器
- `@bag/ui`：后台组件层，承载 `PmProTable`、`PmProForm`、`PmSchemaForm`
- `@bag/host-vue`：Vue 宿主层，负责布局、权限、路由与插件引导
- `@bag/plugin-shop`：官方商城示例插件
- `@bag/plugin-sys-setting`：官方系统设置示例插件
- `create-bag-admin`：宿主初始化脚手架

更细的说明可以继续看这些文档：

- `apps/docs/guide/getting-started.md`
- `apps/docs/guide/plugin-development.md`
- `packages/host-vue/README.md`

## 微信群

如果你想交流使用体验、插件设计或者一起补齐这个项目的能力边界，可以在最后扫这个码进群：

<img src="./wxcode.jpg" alt="Vue-Bag-Admin 微信群二维码" width="320" />
