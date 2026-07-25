# 初始化宿主

宿主初始化的目标，是把 Vue 应用、状态管理、国际化、路由和插件运行时连接起来。

这一页先使用最小配置启动宿主。登录、权限和请求会在后续章节逐步加入。

## 最小入口

`src/main.ts`：

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { bootstrapPlugins, createHostI18n, createHostRouter } from 'vue-bag-admin'
import App from './App.vue'
import { appRoutes } from './routes'

import 'vue-bag-admin/style.css'
import './style.css'

async function setupApp() {
  const app = createApp(App)
  const pinia = createPinia()
  const i18n = createHostI18n()
  const router = createHostRouter({
    routes: appRoutes,
    auth: false
  })

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

`src/App.vue`：

```vue
<template>
  <HostApp />
</template>

<script setup lang="ts">
import { HostApp } from 'vue-bag-admin'
</script>
```

`src/routes.ts`：

```ts
import type { AdminRouteRecordRaw } from 'vue-bag-admin'

export const appRoutes: AdminRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./views/Dashboard.vue'),
    meta: {
      title: 'Dashboard',
      layout: 'default',
      public: true
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

现在访问 `/dashboard`，就能看到带默认布局的宿主页面。

## 初始化顺序

入口代码看起来不多，但顺序很重要。

### 1. 创建基础实例

```ts
const app = createApp(App)
const pinia = createPinia()
const i18n = createHostI18n()
const router = createHostRouter({ routes: appRoutes, auth: false })
```

- `createHostI18n()` 提供宿主内置词条和插件语言包合并能力。
- `createHostRouter()` 创建路由，并根据 `auth` 决定是否启用登录与权限守卫。
- `auth: false` 只适合无登录系统或宿主接入初期。

### 2. 先安装 Pinia 和 i18n

```ts
app.use(pinia)
app.use(i18n)
```

后面的插件引导、用户状态和菜单状态会读取 Pinia，因此不要把它放到 `bootstrapPlugins()` 后面。

### 3. 引导插件

```ts
await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: []
})
```

`bootstrapPlugins()` 会：

1. 初始化宿主 UI。
2. 过滤并排序插件。
3. 检查插件、路由和菜单冲突。
4. 注册插件路由。
5. 合并插件菜单和语言包。
6. 执行插件 `install`。
7. 把 Router 安装到 Vue 应用。

因此，不需要再单独调用 `app.use(router)`。

### 4. 等待路由后再挂载

```ts
await router.isReady()
app.mount('#app')
```

插件路由是异步引导阶段注册的。等待 Router 准备完成，可以避免首屏路由尚未注册就开始渲染。

## 样式顺序

框架样式必须先于项目样式：

```ts
import 'vue-bag-admin/style.css'
import './style.css'
```

这样项目可以覆盖框架变量和局部样式。顺序写反时，常见表现是主题色、自定义布局或 Tailwind 样式没有生效。

## 加载本地插件

准备好业务插件后，只需要把它传入 `plugins`：

```ts
import workspacePlugin from './plugins/workspace'

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [workspacePlugin]
})
```

插件数组的书写顺序不是最终注册顺序。运行时会优先根据每个插件的 `order` 排序。

## 从最小宿主升级

一个真实后台通常还需要：

- `setAuthProvider()`：接入真实登录系统。
- `registerPermissionDirective()`：注册 `v-permission`。
- `setupHttp()`：注入接口地址、token 和错误处理。
- `bootstrapPlugins({ plugins })`：加载业务插件。

不要一次把所有能力都塞进入口。建议先确保宿主与路由正常，再依次接认证、插件和请求。

## 下一步

继续阅读 [路由与菜单](./routing-and-menu.md)，先建立“页面能访问”和“页面出现在导航中”之间的关系。
