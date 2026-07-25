# 插件开发

插件用来封装一个相对独立的业务域，例如内容、报表、订单或系统设置。一个插件可以同时提供页面、路由、菜单、多语言和初始化逻辑。

建议先开发本地插件。只有需要跨项目复用时，再把它迁移成独立 npm 包。

## 创建页面

先创建 `src/views/ReportList.vue`：

```vue
<template>
  <section class="rounded-xl bg-white p-6">
    <h1 class="text-xl font-semibold">报表中心</h1>
    <p class="mt-2 text-slate-500">这是由本地插件提供的页面。</p>
  </section>
</template>
```

再创建 `src/views/ReportDetail.vue`：

```vue
<template>
  <section class="rounded-xl bg-white p-6">
    <h1 class="text-xl font-semibold">报表详情</h1>
  </section>
</template>
```

## 定义插件

创建 `src/plugins/report.ts`：

```ts
import type { AdminPlugin } from 'vue-bag-admin'

const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',
  order: 20,

  routes: [
    {
      path: '/reports',
      name: 'ReportList',
      component: () => import('../views/ReportList.vue'),
      meta: {
        title: 'report.list',
        layout: 'default',
        roles: ['authenticated'],
        permissions: ['report.read']
      }
    },
    {
      path: '/reports/:id',
      name: 'ReportDetail',
      component: () => import('../views/ReportDetail.vue'),
      meta: {
        title: 'report.detail',
        layout: 'default',
        roles: ['authenticated'],
        permissions: ['report.read'],
        activeMenu: '/reports',
        noCache: true
      }
    }
  ],

  menus: [
    {
      path: '/reports',
      title: 'report.list',
      icon: 'star',
      sort: 50,
      roles: ['authenticated'],
      permissions: ['report.read']
    }
  ],

  locales: {
    'zh-CN': {
      report: {
        list: '报表中心',
        detail: '报表详情'
      }
    },
    en: {
      report: {
        list: 'Reports',
        detail: 'Report detail'
      }
    }
  },

  permissions: [
    {
      code: 'report.read',
      title: '查看报表',
      group: '报表'
    },
    {
      code: 'report.export',
      title: '导出报表',
      group: '报表'
    }
  ]
}

export default reportPlugin
```

插件最少需要：

```ts
{
  id: string
  name: string
  version: string
}
```

其余字段按需提供。

## 挂载插件

在 `src/main.ts` 中导入：

```ts
import reportPlugin from './plugins/report'

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [reportPlugin]
})
```

重新启动后，报表菜单和页面会一起注册。

如果菜单没有出现，依次检查：

1. 插件是否传给 `bootstrapPlugins()`。
2. 当前用户是否满足菜单上的角色和权限。
3. `menus[].path` 是否与列表路由一致。
4. `locales` 中是否存在对应标题 key。

## 插件元信息

常用字段：

| 字段            | 作用                    |
| --------------- | ----------------------- |
| `enabled`       | 是否默认启用            |
| `order`         | 注册顺序，值越小越靠前  |
| `dependsOn`     | 依赖的插件 ID           |
| `routes`        | 插件路由                |
| `menus`         | 插件菜单                |
| `locales`       | 中文和英文语言包        |
| `permissions`   | 插件声明的权限点        |
| `settings`      | 插件配置项描述          |
| `contributes`   | 向宿主扩展点提供内容    |
| `compatibility` | 宿主或 Vue 版本兼容声明 |
| `install`       | 插件安装钩子            |
| `dispose`       | 插件清理钩子            |

## 插件依赖

插件可以声明依赖：

```ts
const auditPlugin: AdminPlugin = {
  id: 'audit-plugin',
  name: '审计插件',
  version: '1.0.0',
  dependsOn: ['report-plugin']
}
```

如果依赖插件未启用，应用会在启动阶段抛出错误。不要依赖数组书写顺序，使用 `order` 控制注册顺序，使用 `dependsOn` 表达真实依赖。

## 安装钩子

需要注册全局组件或读取其他已启用插件时，可以使用 `install`：

```ts
const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',

  install(app, context) {
    console.log('enabled plugins:', context.enabledPluginIds)
  }
}
```

普通业务请求和页面状态不应该放进 `install`。它更适合应用级初始化。

## 冲突检查

运行时会拒绝这些冲突：

- 重复的插件 `id`。
- 重复的路由 `path`。
- 重复的路由 `name`。
- 重复的菜单 `path`。
- 未启用的依赖插件。

冲突会在应用引导阶段直接报错，不会静默覆盖。

## 什么时候拆成 npm 包

满足下面任意条件时，可以考虑独立发布：

- 同一个插件需要被多个后台项目使用。
- 插件有独立版本和发布节奏。
- 插件需要由不同团队维护。
- 希望宿主按需安装业务能力。

单项目内部的普通业务模块保留在 `src/plugins` 更轻量，不必为了“插件化”强行发包。

## 下一步

继续阅读 [AdminPlugin 配置](./admin-plugin.md)，了解每个插件字段的运行行为和当前边界。
