# @bag/host-vue

`@bag/host-vue` 是这套后台框架里的宿主层。它不承载具体业务，而是把一套后台应用真正跑起来需要的东西收在一起：默认布局、菜单状态、标签页缓存、权限指令、i18n 初始化、插件注册和路由引导。

如果把 `@bag/core` 理解成协议层，那 `@bag/host-vue` 更像是“协议的执行器”。

## 安装

```bash
pnpm add @bag/host-vue @bag/core @bag/request @bag/ui
```

`@bag/host-vue` 依赖宿主项目自行提供 `vue`、`vue-router`、`pinia`、`vue-i18n` 和 `naive-ui`。如果你是通过 `create-vue-bag-admin` 初始化项目，这部分依赖会直接给你带好。

## 它负责什么

- 创建宿主路由，并接管登录态与权限前置校验
- 启动插件，把插件的 routes、menus、locales 和 install 钩子挂进应用
- 提供默认后台壳层 `HostApp`
- 暴露宿主 store，比如 `useUserStore`、`useMenuStore`、`useTabBarStore`
- 提供 `v-permission` 指令和 `PermissionAccess` 组件

## 快速接入

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {
  HostApp,
  PermissionAccess,
  bootstrapPlugins,
  createHostI18n,
  createHostRouter,
  registerPermissionDirective
} from '@bag/host-vue'
```

完整入口可以参考示例应用 [main.ts](file:///d:/wwwsite/pm-web-admin-next/apps/admin/src/main.ts)。

如果你使用默认壳层，记得同时引入样式入口：

```ts
import '@bag/host-vue/style.css'
```

## 当前公开能力

- `HostApp`
- `PermissionAccess`
- `createHostI18n()`
- `createHostRouter({ routes })`
- `bootstrapPlugins({ app, router, i18n, plugins })`
- `registerPermissionDirective(app)`
- `useAppConfigStore()`
- `useMenuStore()`
- `useTabBarStore()`
- `useUserStore()`

## 设计边界

- 这个包自带一套默认后台布局，适合先跑起来，再按项目风格替换。
- 认证逻辑当前仍然是默认实现，后面更适合继续抽成可注入 adapter。
- 现在已经提供可发布的包入口、类型产物和样式入口；后续演进重点会放在宿主适配能力，而不是继续堆叠业务模块。

## 推荐搭配

- `@bag/core`: 插件协议、Schema 协议、字典协议
- `@bag/ui`: Schema 组件层
- `@bag/request`: HTTP / WS 能力
- `vue-bag-admin`: 初始化宿主工程
