# 插件化开发

这是 Vue-Bag-Admin 的核心设计模式，我们推荐你将相对独立、内聚的业务模块封装成一个插件（Plugin）。

## 什么是插件（Plugin）？

在 Vue-Bag-Admin 中，一个插件是一个存在于 `packages/plugin-*` 目录下的独立 npm 包。它可以自带：

- Vue 视图组件 (`.vue` 文件)
- Vue Router 路由配置
- 左侧侧边栏菜单项 (Menus)
- 多语言词条 (i18n Locales)
- 初始化 Hook (Install 函数)

## 创建一个新插件

### 1. 新建包目录

在 `packages/` 下新建一个文件夹 `plugin-shop`：

```bash
mkdir -p packages/plugin-shop/src/views
```

### 2. 配置 package.json

在 `packages/plugin-shop/package.json` 中定义包名（注意：统一使用 `@bag` scope）：

```json
{
  "name": "@bag/plugin-shop",
  "version": "1.0.0",
  "main": "src/index.ts",
  "dependencies": {
    "vue": "^3.5.0",
    "vue-router": "^4.4.0",
    "@bag/core": "workspace:*"
  }
}
```

### 3. 编写业务页面

创建 `packages/plugin-shop/src/views/ShopList.vue`：

```vue
<template>
  <div class="p-6 bg-white rounded shadow-sm">
    <h2 class="text-2xl font-bold mb-4">商品列表</h2>
    <p>这是一个通过插件动态加载的页面！</p>
  </div>
</template>
```

### 4. 导出插件定义

创建 `packages/plugin-shop/src/index.ts`，按照 `@bag/core` 中的 `AdminPlugin` 接口导出：

```typescript
import type { AdminPlugin } from '@bag/core'

const plugin: AdminPlugin = {
  // 定义该插件的专属路由
  routes: [
    {
      path: '/shop',
      name: 'ShopList',
      component: () => import('./views/ShopList.vue'),
      meta: {
        title: '商品管理',
        layout: 'default',
        permissions: ['shop.read'] // 权限控制
      }
    }
  ],
  
  // 定义注入到左侧导航的菜单
  menus: [
    {
      path: '/shop',
      title: '商品管理',
      icon: 'shop-icon'
    }
  ],
  
  // 如果需要，也可以导出多语言
  locales: {
    'zh-CN': {
      'shop.title': '商品管理'
    },
    'en': {
      'shop.title': 'Shop Management'
    }
  }
}

export default plugin
```

## 在宿主应用中挂载

完成插件编写后，我们需要在宿主（`apps/admin`）中安装它。

### 1. 安装依赖
在 `apps/admin/package.json` 中添加对该插件的依赖：

```json
"dependencies": {
  "@bag/plugin-shop": "workspace:*"
}
```

执行 `pnpm install`。

### 2. 挂载插件

打开 `apps/admin/src/main.ts`，引入并挂载：

```typescript
import { createApp } from 'vue'
import { bootstrapPlugins } from '@bag/core'

// 1. 引入插件
import sysSettingPlugin from '@bag/plugin-sys-setting'
import shopPlugin from '@bag/plugin-shop'

async function setupApp() {
  const app = createApp(App)
  
  // ...其它初始化代码

  // 2. 挂载插件
  await bootstrapPlugins(app, [
    sysSettingPlugin,
    shopPlugin
  ])

  app.mount('#app')
}

setupApp()
```

至此，重启你的服务，你就会在侧边栏看到新的“商品管理”菜单，并且能够正常访问 `/shop` 页面了！这种开发模式可以极大程度保证模块之间的隔离，降低代码耦合度。
