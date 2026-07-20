# 快速上手

这套项目常见的用法有两种：

- 你想直接起一个自己的后台项目，用 npm 包和脚手架开始。
- 你想参与这个仓库本身的开发，在 Monorepo 里联调 `apps/admin`、`packages/*` 和 `apps/strapi`。

入口不一样，后面的文档也不一样。先分清自己要走哪条路。

## 先准备环境

- **Node.js**: `v24` 或更高版本
- **pnpm**: `v9` 或更高版本
- **MySQL**: `8.0` 或更高版本

MySQL 只在你需要体验仓库内置的 `Strapi` 后端时才是必需项。如果你只是通过 npm 起一个新的宿主项目，可以先不接这套后端。

## 路线一：从 npm 开始

如果你的目标是新建一个后台宿主项目，直接从脚手架入口开始：

```bash
npx create-vue-bag-admin my-admin
cd my-admin
pnpm install
pnpm dev
```

当前脚手架提供两种模板：

- `basic`：最小宿主模板，只带一个本地 demo 插件，适合直接开工
- `with-demo-plugins`：教学型模板，预装多插件示例，适合先看一遍插件协作方式

如果你想显式指定模板，可以这样写：

```bash
npx create-vue-bag-admin my-admin --template with-demo-plugins
```

生成后的项目默认只会装一个主包：

- `vue-bag-admin`：统一提供宿主层、请求能力、Schema 驱动组件和插件协议

如果你选择的是 `with-demo-plugins` 模板，脚手架会额外装上两个官方示例插件包：

- `@bag/plugin-shop`
- `@bag/plugin-sys-setting`

这样拆的原因很简单：宿主运行时收口在 `vue-bag-admin`，业务能力继续按插件包独立发。

如果你只是接项目，不用先把整个 Monorepo 看完。

## 精简开发

如果你现在只想先把宿主跑起来，不打算一上来就把插件、权限、示例页面全接上，就先按这个精简版本走。

先把范围缩小，只保留最小闭环：

- 先只保留 `vue-bag-admin`
- 先不接官方插件
- 先只保留宿主自己的基础路由
- 先把登录页、首页和 404 跑通

第一次接入时，这样更直接。链路短，问题也更容易定位。先把壳子启动成功，再继续补插件和业务页面。

入口文件先写到这个程度就够了：

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'vue-bag-admin/style.css'
import './style.css'

import { createHostI18n, createHostRouter, bootstrapPlugins } from 'vue-bag-admin'
import { exampleRoutes } from './routes'

async function setupApp() {
  const app = createApp(App)
  const pinia = createPinia()
  const i18n = createHostI18n()
  const router = createHostRouter({ routes: exampleRoutes })

  app.use(pinia)
  app.use(i18n)

  await bootstrapPlugins({
    app,
    router,
    i18n,
    plugins: []
  })

  await router.isReady()
  app.mount('#app')
}

setupApp()
```

下面是最小版 `src/routes.ts`。精简开发阶段，先保留这几页就够了：

```ts
import type { AdminRouteRecordRaw } from 'vue-bag-admin'

export const exampleRoutes: AdminRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login.vue'),
    meta: {
      layout: 'blank',
      public: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./views/Dashboard.vue'),
    meta: {
      title: 'menu.dashboard',
      layout: 'default'
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
    meta: {
      layout: 'default',
      public: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
```

这个版本只保留宿主启动必需的链路：

- `createHostRouter()` 只接你自己的基础页面
- `bootstrapPlugins()` 先传空数组，表示暂时不加载任何插件
- 样式仍然保持先引 `vue-bag-admin/style.css`，再引项目自己的样式

最小版 `App.vue` 也可以先这样写：

```vue
<template>
  <HostApp></HostApp>
</template>

<script setup lang="ts">
import { HostApp } from 'vue-bag-admin'
</script>
```

这个组件先只负责把宿主壳层挂起来，后面要加设置面板、品牌区或者别的插槽内容，再往里补就行。

如果你现在只是验证宿主能不能正常工作，先准备这 3 个页面：

1. `/login`
2. `/dashboard`
3. `/404`

这套骨架稳定之后，再继续往里补：

1. 接 `setupHttp()` 统一处理 token 和异常
2. 接权限指令和权限组件
3. 接官方插件或你自己的业务插件
4. 再补字典、多语言和设置面板

等你开始接权限、字典、多语言或插件时，就可以直接看下一页的完整宿主示例。

## 下一步怎么走

如果你已经准备从“最小可运行”切到“标准宿主接入”，下一步直接看：

- [完整宿主示例](./complete-host-app.md)

这一页把标准宿主项目里最常见的 3 个文件放在一起：

- `src/main.ts`
- `src/routes.ts`
- `src/App.vue`

里面也会带上这些常见内容：

- `setupHttp()` 怎么接
- 官方插件怎么挂
- `.env` 至少要配什么
- `#settings` 插槽和 `sysSettingPlugin` 的优先级

如果你要参与当前仓库本身的开发，或者要做 `apps/admin`、`apps/strapi`、`packages/*` 的本地联调，就直接去看：

- [本地联调](./local-debugging.md)

## 什么时候选哪条路

- 你要做自己的项目：优先用 `create-vue-bag-admin`
- 你要把宿主能力接完整：看 [完整宿主示例](./complete-host-app.md)
- 你要研究框架实现：看 [本地联调](./local-debugging.md)
- 你要开发或调试 `@bag/plugin-*`：看 [本地联调](./local-debugging.md)

## 接下来读什么

- [完整宿主示例](./complete-host-app.md)
- [插件化开发](./plugin-development.md)
- [路由与菜单](./routing-and-menu.md)
- [权限管理](./permissions.md)
- [本地联调](./local-debugging.md)
- [发包流程](./package-publishing.md)
