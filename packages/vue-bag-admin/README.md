# vue-bag-admin

`vue-bag-admin` 是面向业务项目的统一运行时入口包。你可以只安装这一个主包，然后从同一个入口拿到宿主层、请求层、UI 组件层和插件协议层的常用能力。

## 安装

```bash
pnpm add vue-bag-admin vue vue-router pinia vue-i18n naive-ui
```

如果你需要官方插件，再额外安装对应插件包：

```bash
pnpm add @bag/plugin-shop @bag/plugin-sys-setting
```

## 用法

先引入样式，再在入口里完成宿主初始化：

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'vue-bag-admin/style.css'
import './style.css'

import { bootstrapPlugins, createHostI18n, createHostRouter, setupHttp } from 'vue-bag-admin'
import { exampleRoutes } from './routes'

async function setupApp() {
  const app = createApp(App)
  const pinia = createPinia()
  const i18n = createHostI18n()
  const router = createHostRouter({
    routes: exampleRoutes
  })

  app.use(pinia)
  app.use(i18n)
  app.use(router)

  // 如果项目已经接后端，可以在入口里统一注入请求配置。
  setupHttp({
    baseURL: import.meta.env.VITE_API_URL
  })

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

最小版 `App.vue` 可以只挂宿主容器：

```vue
<template>
  <HostApp />
</template>

<script setup lang="ts">
import { HostApp } from 'vue-bag-admin'
</script>
```

宿主自己的基础路由先保留登录页、首页和 404 即可：

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
      public: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
```

接入时通常按这个顺序来：

1. 引入 `vue-bag-admin/style.css`
2. 用 `createHostI18n()` 和 `createHostRouter()` 初始化宿主
3. 如果要接后端，在入口里调用 `setupHttp()`
4. 用 `bootstrapPlugins()` 注册插件和插件路由
5. 在 `App.vue` 中挂载 `HostApp`

除了宿主能力，你也可以直接从主包拿请求层和 UI 组件：

```ts
import { http, PmProTable, PmProForm, PmSchemaForm } from 'vue-bag-admin'
```

## 当前聚合范围

- `@bag/core`
- `@bag/request`
- `@bag/ui`
- `@bag/host-vue`

## 配套官方插件

- `@bag/plugin-shop`
- `@bag/plugin-sys-setting`

## 脚手架

如果你想直接生成一个宿主项目，请使用：

```bash
npx create-vue-bag-admin my-admin
```
