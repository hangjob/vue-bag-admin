# 路由、菜单与多语言

业务插件通常需要同时声明三部分：

- `routes` 决定哪些页面可以访问。
- `menus` 决定侧边栏显示哪些入口。
- `locales` 为页面标题和菜单提供文案。

三者通过路径和国际化 key 协作，但彼此不会自动生成。

## 插件路由

```ts
import type { AdminPlugin, AdminRouteRecordRaw } from 'vue-bag-admin'

const routes: AdminRouteRecordRaw[] = [
  {
    path: '/reports',
    name: 'ReportList',
    component: () => import('../views/ReportList.vue'),
    meta: {
      title: 'report.list',
      layout: 'default',
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
      permissions: ['report.read'],
      activeMenu: '/reports',
      noCache: true
    }
  }
]

const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',
  routes
}
```

插件启用后，`bootstrapPlugins()` 会调用 `router.addRoute()` 注册这些路由。

## 路由 Meta

| 字段             | 说明                                            |
| ---------------- | ----------------------------------------------- |
| `title`          | 页面标题或 i18n key                             |
| `layout`         | 布局名，常用 `default`、`blank`                 |
| `public`         | 是否允许未登录访问                              |
| `roles`          | 允许访问的角色                                  |
| `roleMode`       | 角色匹配方式：`any`、`all`                      |
| `permissions`    | 允许访问的权限点                                |
| `permissionMode` | 权限匹配方式：`any`、`all`                      |
| `policy`         | 自定义权限函数                                  |
| `activeMenu`     | 当前页面高亮的菜单路径                          |
| `noCache`        | 是否跳过页面缓存                                |
| `cacheKey`       | 复用组件时的统一缓存键                          |
| `hidden`         | 路由层隐藏标记；侧边栏是否显示仍由 `menus` 决定 |

详情和编辑页一般不写入菜单，而是设置：

```ts
meta: {
  activeMenu: '/reports', // 返回列表所属菜单
  noCache: true // 离开页面后不保留编辑状态
}
```

## 嵌套路由

```ts
{
  path: '/settings',
  name: 'Settings',
  component: () => import('../views/Settings.vue'),
  redirect: '/settings/base',
  children: [
    {
      path: 'base',
      name: 'SettingsBase',
      component: () => import('../views/SettingsBase.vue')
    },
    {
      path: 'security',
      name: 'SettingsSecurity',
      component: () => import('../views/SettingsSecurity.vue')
    }
  ]
}
```

子路由使用相对路径时，最终地址分别是 `/settings/base` 和 `/settings/security`。

## 插件菜单

```ts
const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',
  menus: [
    {
      path: '/report-group',
      title: 'report.title',
      icon: 'star',
      sort: 50,
      permissions: ['report.read'],
      children: [
        {
          path: '/reports',
          title: 'report.list',
          sort: 1,
          permissions: ['report.read']
        }
      ]
    }
  ]
}
```

菜单字段：

| 字段          | 说明                   |
| ------------- | ---------------------- |
| `path`        | 菜单唯一路径或分组标识 |
| `title`       | 菜单标题或 i18n key    |
| `icon`        | 宿主支持的图标名       |
| `sort`        | 同级排序               |
| `hidden`      | 是否隐藏菜单项         |
| `badge`       | 菜单徽标               |
| `roles`       | 可见角色               |
| `permissions` | 可见权限点             |
| `children`    | 子菜单                 |

菜单的角色数组和权限数组默认采用 `any`。同时配置角色和权限时，两组条件都要通过。

父级 `path` 可以只是分组标识，叶子菜单的 `path` 通常应与实际路由一致。

## 多语言

插件当前支持 `zh-CN` 和 `en`：

```ts
locales: {
  'zh-CN': {
    report: {
      title: '报表管理',
      list: '报表列表',
      detail: '报表详情'
    }
  },
  en: {
    report: {
      title: 'Reports',
      list: 'Report list',
      detail: 'Report detail'
    }
  }
}
```

路由和菜单引用同一个 key：

```ts
meta: {
  title: 'report.list'
}

// 菜单
{
  path: '/reports',
  title: 'report.list'
}
```

`bootstrapPlugins({ i18n })` 会通过 `mergeLocaleMessage()` 合并插件语言包。

如果未向 `bootstrapPlugins()` 传入 `i18n`，插件路由仍会注册，但语言包不会合并。

## 冲突规则

引导阶段会检查：

- 插件 `id` 是否重复。
- 路由 `path` 是否与宿主或其他插件重复。
- 路由 `name` 是否重复。
- 菜单 `path` 是否重复。

推荐给每个插件建立独立命名空间：

```text
路由路径   /reports/*
路由名称   Report*
i18n key   report.*
菜单分组   /report-group
```

## 下一步

继续阅读[权限与配置项](./permissions-and-settings.md)。
