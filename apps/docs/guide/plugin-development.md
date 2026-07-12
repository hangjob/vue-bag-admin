# 插件化开发

Vue-Bag-Admin 的核心设计是“宿主应用 + 业务插件”。推荐把相对独立、内聚的业务域拆成 `packages/plugin-*` 包，再由宿主统一挂载。

## 插件能提供什么

一个插件通常可以携带以下能力：

- 业务页面组件
- 路由定义
- 菜单定义
- 多语言词条
- 初始化安装钩子
- 插件元信息（启用状态、顺序、依赖）

## AdminPlugin 结构

当前插件接口除了基础的 `id`、`name`、`version` 外，还支持以下元信息：

- `enabled`：是否默认启用，设为 `false` 时不会注册
- `order`：插件排序，值越小越先注册
- `dependsOn`：依赖的插件 `id` 列表
- `routes`：插件提供的路由
- `menus`：插件提供的菜单
- `locales`：插件提供的语言包
- `install`：安装钩子，能拿到 `router` 和当前已启用插件列表

```ts
import type { AdminPlugin } from '@bag/core'

const plugin: AdminPlugin = {
  id: 'plugin-report',
  name: '报表插件',
  version: '1.0.0',
  enabled: true,
  order: 20,
  dependsOn: ['plugin-shop'],
  routes: [],
  menus: [],
  locales: {},
  install(app, context) {
    console.log(context.enabledPluginIds)
  }
}

export default plugin
```

插件上下文中的 `enabledPluginIds` 表示当前已经通过启用过滤、依赖校验和冲突校验的插件列表，适合用来做跨插件联动。

## 路由与菜单协议

插件里的 `routes` 和 `menus` 都有一层框架约定，建议在定义时一次写完整。

### 路由 meta

插件路由使用的是 `AdminRouteRecordRaw`，常用的 `meta` 字段包括：

- `title`：页面标题，通常写 i18n key
- `layout`：布局名，默认后台页一般使用 `default`
- `roles`：角色访问控制
- `permissions`：权限点访问控制
- `public`：是否是公开页面
- `hidden`：是否从菜单和标签页等导航区域隐藏
- `activeMenu`：当前页高亮归属的菜单路径，详情页和编辑页建议显式声明
- `noCache`：是否跳过标签缓存

```ts
{
  path: '/report/detail/:id',
  name: 'ReportDetail',
  component: () => import('./views/ReportDetail.vue'),
  meta: {
    title: 'report.detail',
    layout: 'default',
    roles: ['authenticated'],
    permissions: ['report.read'],
    activeMenu: '/report/list',
    noCache: true,
    hidden: true
  }
}
```

### 菜单配置

插件菜单使用 `MenuConfig`，除了基础的 `path`、`title`、`icon`、`sort` 外，还支持：

- `hidden`：隐藏菜单项，但仍可保留路由能力
- `badge`：菜单徽标，例如 `New`、`HOT` 或数字
- `roles`：角色级菜单可见性
- `permissions`：权限点级菜单可见性
- `children`：子菜单配置

```ts
menus: [
  {
    path: '/report',
    title: 'report.title',
    icon: 'chart',
    sort: 80,
    children: [
      {
        path: '/report/list',
        title: 'report.list',
        permissions: ['report.read']
      }
    ]
  }
]
```

## 创建一个新插件

### 1. 新建目录

```bash
mkdir -p packages/plugin-report/src/views
```

### 2. 配置 package.json

```json
{
  "name": "@bag/plugin-report",
  "version": "1.0.0",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "dependencies": {
    "vue": "^3.5.0",
    "vue-router": "^4.4.0",
    "@bag/core": "workspace:*"
  }
}
```

### 3. 编写页面

```vue
<template>
  <div class="p-6 bg-white rounded shadow-sm">
    <h2 class="text-2xl font-bold mb-4">报表中心</h2>
    <p>这是一个通过插件接入的业务页面。</p>
  </div>
</template>
```

### 4. 导出插件定义

```ts
import type { AdminPlugin } from '@bag/core'

const plugin: AdminPlugin = {
  id: 'plugin-report',
  name: '报表插件',
  version: '1.0.0',
  order: 20,
  routes: [
    {
      path: '/report/list',
      name: 'ReportList',
      component: () => import('./views/ReportList.vue'),
      meta: {
        title: 'report.list',
        layout: 'default',
        roles: ['authenticated'],
        permissions: ['report.read']
      }
    },
    {
      path: '/report/detail/:id',
      name: 'ReportDetail',
      component: () => import('./views/ReportDetail.vue'),
      meta: {
        title: 'report.detail',
        layout: 'default',
        roles: ['authenticated'],
        permissions: ['report.read'],
        activeMenu: '/report/list',
        noCache: true,
        hidden: true
      }
    }
  ],
  menus: [
    {
      path: '/report',
      title: 'report.title',
      icon: 'chart',
      sort: 80,
      roles: ['authenticated'],
      children: [
        {
          path: '/report/list',
          title: 'report.list',
          permissions: ['report.read']
        }
      ]
    }
  ],
  locales: {
    'zh-CN': {
      report: {
        title: '报表管理',
        list: '报表中心',
        detail: '报表详情'
      }
    },
    en: {
      report: {
        title: 'Reports',
        list: 'Reports',
        detail: 'Report Detail'
      }
    }
  }
}

export default plugin
```

## 在宿主中挂载

在 `apps/admin/src/main.ts` 中引入并传给 `bootstrapPlugins()`：

```ts
import reportPlugin from '@bag/plugin-report'

await bootstrapPlugins(app, [sysSettingPlugin, shopPlugin, reportPlugin])
```

## 插件注册规则

宿主在注册插件时会自动执行以下流程：

1. 按 `order` 升序排序
2. 基于 `enabled` 与本地禁用列表过滤插件
3. 校验 `dependsOn` 依赖是否已在启用插件集合中
4. 对启用插件集合执行冲突校验
5. 注册路由、菜单和多语言
6. 执行插件 `install` 钩子

## 冲突检测

当前内置了以下冲突保护，但校验范围是“已启用的插件集合”，不会去和宿主默认路由做交叉比对：

- 重复插件 `id`
- 重复路由 `path`
- 重复路由 `name`
- 重复菜单 `path`

出现冲突时，启动阶段会直接抛出错误，避免静默覆盖。

## 插件启用与禁用

插件是否启用由两层共同决定：

- 插件自身的 `enabled`
- 宿主本地存储中的禁用插件列表

这意味着你可以保留插件代码，但在运行时禁用它，而不需要删除依赖。

当前禁用状态持久化在浏览器本地存储中，默认存储键为 `bag.admin.disabledPlugins`。如果你要做插件管理页，可以直接围绕这个运行时语义去设计启停逻辑。

需要注意的是，插件启停会影响路由、菜单和依赖关系，切换状态后通常需要重新执行一次应用引导流程，或者在刷新后生效。

如果你要在界面层做一个“插件管理中心”，现在可以直接复用 `@bag/core` 暴露的运行时 API：

```ts
import { listRuntimePlugins, setPluginEnabledState } from '@bag/core'

const plugins = listRuntimePlugins()

setPluginEnabledState('plugin-shop', false)
window.location.reload()
```

`listRuntimePlugins()` 会返回当前宿主注册过的插件清单，以及它们的启用状态、依赖信息、路由数量和菜单数量，适合直接渲染管理页。

## install 钩子

`install(app, context)` 适合做以下事情：

- 注册全局组件
- 注册布局
- 注入全局配置
- 根据 `enabledPluginIds` 做跨插件联动

```ts
install(app, context) {
  if (context.enabledPluginIds.includes('plugin-shop')) {
    console.log('商城插件已启用')
  }
}
```
