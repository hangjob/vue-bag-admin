# 完整宿主示例

如果你已经过了“先跑起来”这个阶段，准备把权限、字典、请求、官方插件和设置面板一起接进来，就看这一页。

这里放的是一版接近真实项目的宿主入口示例，代码参考的是外部联调项目 `D:\web_test_loca\loca_test`。

通常最先会接触这 3 个文件：

- `src/main.ts`：初始化宿主、路由、i18n、请求和插件
- `src/routes.ts`：宿主自己的基础路由
- `src/App.vue`：真正挂载 `HostApp`

## `src/main.ts`

先看入口主文件。这个文件负责把宿主启动起来：

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createDiscreteApi } from 'naive-ui'
import App from './App.vue'

// 先引宿主库样式，再引项目自己的样式，避免覆盖顺序出问题。
import 'vue-bag-admin/style.css'
import './style.css'

import {
  PermissionAccess,
  bootstrapPlugins,
  createHostI18n,
  createHostRouter,
  registerPermissionDirective,
  setupHttp,
  useUserStore
} from 'vue-bag-admin'

import { setupBuiltinDictionaries } from './dictionaries'
import { exampleRoutes } from './routes'
import shopPlugin from '@bag/plugin-shop'
import sysSettingPlugin from '@bag/plugin-sys-setting'

const { message } = createDiscreteApi(['message'])

async function setupApp() {
  const app = createApp(App)
  const pinia = createPinia()
  const i18n = createHostI18n()
  // 这里先挂宿主自己的基础路由，插件路由后面交给 bootstrapPlugins()。
  const router = createHostRouter({ routes: exampleRoutes })

  app.use(pinia)
  app.use(i18n)

  // 字典、权限组件和权限指令通常都在入口阶段统一注册。
  setupBuiltinDictionaries()
  app.component('PermissionAccess', PermissionAccess)
  registerPermissionDirective(app)

  const userStore = useUserStore()

  // 统一接管 token、鉴权失败和通用服务端错误。
  setupHttp({
    baseURL: import.meta.env.VITE_API_URL,
    getToken: () => userStore.token,
    onUnauthorized: () => {
      userStore.logout()
      router.replace({ path: '/login', query: { redirect: router.currentRoute.value.fullPath } })
    },
    onForbidden: () => {
      message.warning('当前账号没有访问权限')
      router.replace('/403')
    },
    onServerError: () => {
      message.error('服务异常，请稍后重试')
    }
  })

  // 这里不只是挂插件，也会把插件自己的路由和多语言资源一并接进来。
  await bootstrapPlugins({
    app,
    router,
    i18n,
    plugins: [sysSettingPlugin, shopPlugin]
  })

  await router.isReady()
  app.mount('#app')
}

setupApp()
```

先看这几个点：

- 样式顺序别写反，先引 `vue-bag-admin/style.css`，再引项目自己的 `style.css`
- `createHostRouter()` 先接宿主自己的基础路由，插件路由交给 `bootstrapPlugins()`
- `setupHttp()` 负责把 token、401、403 和服务端异常统一收进来
- `bootstrapPlugins()` 不只是挂插件，它也会顺手把插件路由注册进去

如果你直接照这段 `main.ts` 来写，先准备一个最小 `.env`：

```bash
VITE_API_URL=http://localhost:1337
```

如果你暂时不接后端，也可以先把 `setupHttp()` 这一段注释掉，等接口联调时再接回来。

## `src/routes.ts`

宿主自己的基础路由通常不用很多，常见就是登录页、仪表盘、403、404 这些：

```ts
import type { AdminRouteRecordRaw } from 'vue-bag-admin'

export const exampleRoutes: AdminRouteRecordRaw[] = [
  {
    // 宿主首页通常直接重定向到一个默认工作台页面。
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
      // 推荐统一写 i18n key，后面做多语言切换更省事。
      title: 'menu.dashboard',
      layout: 'default'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('./views/Profile.vue'),
    meta: {
      title: 'sysSetting.profile',
      layout: 'default'
    }
  },
  {
    path: '/403',
    name: 'Forbidden',
    component: () => import('./views/Forbidden.vue'),
    meta: {
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
    path: '/redirect',
    name: 'Redirect',
    component: () => import('./views/Redirect.vue'),
    meta: {
      // Redirect 页面一般只做内部跳转中转，不出现在菜单和标签栏里。
      layout: 'blank',
      public: true,
      hidden: true,
      noCache: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
```

`meta.title` 这里最容易出问题。

- 如果你传的是国际化 key，比如 `menu.dashboard`、`sysSetting.profile`，宿主会按 i18n 处理
- 如果你直接写中文也能显示，但更推荐统一写 key，后面做中英文切换会省很多事

## `src/App.vue`

最后是最外层宿主组件，这里通常很薄：

```vue
<template>
  <HostApp>
    <!-- 宿主公共插槽可以在这里继续挂设置面板、品牌区等扩展内容 -->
    <template #settings>
      <AppSettingsDrawer />
    </template>
  </HostApp>
</template>

<script setup lang="ts">
import { HostApp } from 'vue-bag-admin'
import AppSettingsDrawer from './components/AppSettingsDrawer.vue'
</script>
```

这里有一个使用细节：

- 如果你显式传了 `#settings` 插槽，宿主会优先渲染这个插槽内容
- 这时候就不会再去使用插件里的设置面板实现，比如 `sysSettingPlugin` 提供的那套设置入口
- 如果你没有传 `#settings` 插槽，才会回退到插件里的默认设置面板实现

- `HostApp` 负责布局、菜单、标签页、主题、权限这些宿主能力
- 你自己的设置抽屉、品牌区、业务插槽，可以按需往里面塞

## 建议接入顺序

可以按这个顺序接：

1. 先把 `main.ts` 跑通
2. 再补 `routes.ts` 里的宿主基础页面
3. 然后决定要不要挂官方插件
4. 最后再接自己的业务插件或本地 demo 插件

如果你暂时不想接官方插件，也可以先把这里改成空数组：

```ts
await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: []
})
```

先把宿主空壳跑起来，再一点点加业务。

如果你接下来要处理的是本地 `link:` 联调、外部使用方验证，直接继续看：

- [本地联调](./local-debugging.md)
- [发包流程](./package-publishing.md)
