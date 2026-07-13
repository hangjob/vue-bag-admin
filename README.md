# Vue-Bag-Admin

[在线体验](https://hangjob.github.io/vue-bag-admin) | [文档地址](https://hangjob.github.io/vue-bag-admin/docs/)

`Vue-Bag-Admin` 是一款基于最新技术栈（Vue 3、Vite 5、Naive-ui、TailwindCSS、Pinia 和 TypeScript）开发的中后台管理系统前端解决方案。其后端 API 默认对接了 **Strapi 5**（Headless CMS），能够帮助开发者极速搭建起一个全栈的中后台业务系统。

## 核心特性

- ⚡️ **极致速度**：基于 Vite5 构建，提供闪电般的冷启动和热重载体验。
- 🧩 **插件化微内核架构**：核心与业务完全解耦，每个业务模块均可作为独立插件（Plugin）热插拔，高度可复用。
- 🛠️ **Monorepo 管理**：采用 pnpm workspace 进行多包管理，内置核心包、UI包、请求包分离，架构清晰。包命名空间统一使用 `@bag`。
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
│   ├── core              # 核心包 (定义插件接口等)
│   ├── request           # 请求库封装
│   ├── ui                # 公共 UI 组件库
│   └── plugin-*          # 各种业务插件包
├── pnpm-workspace.yaml   # Monorepo 配置
└── package.json
```

## 快速上手

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

## 微信群

如果你想交流使用体验、插件设计或者一起补齐这个项目的能力边界，可以在最后扫这个码进群：

<img src="./wxcode.jpg" alt="Vue-Bag-Admin 微信群二维码" width="320" />
