# 简介

欢迎使用 **Vue-Bag-Admin**！

## 什么是 Vue-Bag-Admin？

`Vue-Bag-Admin` 是一款基于最新技术栈（Vue 3、Vite 5、Naive-ui、TailwindCSS、Pinia 和 TypeScript）开发的中后台管理系统前端解决方案。其后端 API 默认对接了 **Strapi 5**（Headless CMS），能够帮助开发者极速搭建起一个全栈的中后台业务系统。

## 为什么选择我们？

传统的中后台模板通常把所有的业务页面都堆积在 `src/views` 目录下。随着业务的迭代，项目会变得异常臃肿，难以维护，更难以在多个系统之间复用业务模块。

**Vue-Bag-Admin 的最大亮点在于其微内核与插件化设计：**

- **微内核架构**：应用宿主（Host）极其轻量，只负责应用的初始化、布局加载、登录鉴权。
- **插件化机制（Plugin）**：我们将复杂的业务拆分为一个个独立的 Package（如 `@bag/plugin-sys-setting`）。路由、菜单、状态和页面视图都由插件自己声明并注入到系统中。

配合 **pnpm Workspace** 的 Monorepo 架构，你可以像搭积木一样，将不同的业务模块组合成一个完整的系统。

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

> 💡 **架构解耦提示**：Vue-Bag-Admin 虽然默认提供了 Strapi 5 的后端工程作为参考和快速体验，但它的前端架构**完全独立且不绑定任何后端**。你可以毫无障碍地将后端替换为 Java/Spring Boot、Go、PHP 等任何你擅长或公司要求的服务端技术栈。

## 目录结构说明

```text
vue-bag-admin
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
