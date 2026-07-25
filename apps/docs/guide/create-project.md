# 创建项目

`create-vue-bag-admin` 用来生成一个独立的 Vue 3 宿主项目。生成结果可以直接作为业务仓库使用，不依赖当前 Monorepo。

## 基本用法

```bash
pnpm dlx create-vue-bag-admin <项目目录>
```

例如：

```bash
pnpm dlx create-vue-bag-admin operations-admin
cd operations-admin
pnpm install
pnpm dev
```

脚手架当前使用内置的 `basic` 模板。

## 命令参数

```text
create-vue-bag-admin <project-name> [options]

--bag-version <version>  指定 vue-bag-admin 版本，默认 latest
--force                  允许写入非空目录
-h, --help               查看帮助
```

需要固定框架版本时：

```bash
pnpm dlx create-vue-bag-admin operations-admin --bag-version 6.0.0
```

`--force` 会允许脚手架向非空目录写入文件，可能覆盖同名模板文件。只有确认目标目录内容可以被替换时才使用。

## 目录说明

生成后的主要结构如下：

```text
operations-admin/
├── src/
│   ├── main.ts
│   ├── routes.ts
│   ├── App.vue
│   ├── style.css
│   ├── plugins/
│   │   ├── workspace.ts
│   │   ├── content.ts
│   │   └── system.ts
│   └── views/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig*.json
```

### `src/main.ts`

应用入口，负责创建 Vue、Pinia、i18n 和 Router，并注入认证、请求配置和插件列表。

### `src/routes.ts`

只放宿主必须拥有的基础路由，例如登录页、Dashboard、403、404 和重定向页。具体业务路由建议放在插件中。

### `src/plugins`

脚手架自带三个本地插件，用来演示不同场景：

| 插件           | 演示内容                            |
| -------------- | ----------------------------------- |
| `workspace.ts` | 多级菜单、同组件多路由和 `cacheKey` |
| `content.ts`   | 列表、创建、详情页和 `activeMenu`   |
| `system.ts`    | 插件排序和 `dependsOn` 依赖         |

本地插件和 npm 插件遵循相同的 `AdminPlugin` 协议。业务稳定后，可以把其中一个目录迁移为独立包。

### `src/App.vue`

默认只挂载宿主根组件：

```vue
<template>
  <HostApp />
</template>

<script setup lang="ts">
import { HostApp } from 'vue-bag-admin'
</script>
```

## 创建后先做什么

建议按下面顺序改造模板。

### 1. 保留一个示例插件

先不要同时重写所有内容。选择最接近业务的插件作为参考，删除另外两个，再确认项目仍能启动。

例如只保留 `workspacePlugin`：

```ts
await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [workspacePlugin]
})
```

### 2. 替换演示认证

模板中的 `admin / 123456` 是前端演示逻辑，不应直接用于生产环境。

接入真实后端时，需要：

1. 删除 `demoAuthProvider`。
2. 实现自己的 `AuthProvider`，或使用 `createStrapiAuthProvider()`。
3. 通过 `setAuthProvider()` 注入。
4. 配置 `VITE_API_URL`。

### 3. 配置接口地址

在项目根目录创建 `.env.development`：

```bash
VITE_API_URL=http://localhost:1337
```

生产环境可以使用 `.env.production` 配置对应地址。

### 4. 替换品牌和示例页面

修改项目名称、Logo、主题色和 Dashboard，然后再开始添加业务插件。这样可以先确认宿主能力稳定，再进入业务开发。

## 不使用脚手架

已有 Vite + Vue 3 项目也可以手动安装：

```bash
pnpm add vue-bag-admin naive-ui pinia vue-i18n vue-router
```

但你需要自己准备入口文件、基础路由、登录页、403 和 404 页面。第一次接入时更推荐从脚手架开始，再把现有业务逐步迁入。

## 下一步

继续阅读 [初始化宿主](./host/bootstrap.md)，了解 `main.ts` 中各个初始化步骤为什么要按当前顺序执行。
