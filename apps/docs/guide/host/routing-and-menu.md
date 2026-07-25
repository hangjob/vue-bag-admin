# 路由与菜单

在 Vue-Bag-Admin 中，路由和菜单是两份配置：

- 路由决定一个地址能否访问、渲染哪个页面、使用什么布局。
- 菜单决定侧边栏显示什么、如何分组和排序。

两者通常使用相同的 `path` 建立关联，但不会自动互相生成。

## 宿主路由和插件路由

宿主路由通过 `createHostRouter()` 注册：

```ts
const router = createHostRouter({
  routes: appRoutes,
  auth: true
})
```

它们适合放登录页、Dashboard、403、404 等应用级页面。

业务路由通常由插件提供：

```ts
const contentPlugin: AdminPlugin = {
  id: 'content-plugin',
  name: '内容插件',
  version: '1.0.0',
  routes: [
    {
      path: '/content/posts',
      name: 'ContentPosts',
      component: () => import('../views/ContentPosts.vue'),
      meta: {
        title: 'content.posts',
        layout: 'default',
        roles: ['authenticated']
      }
    }
  ]
}
```

`bootstrapPlugins()` 会在应用挂载前把这些路由加入 Router。

## 路由 Meta

后台行为通过 `meta` 描述：

| 字段             | 作用                                |
| ---------------- | ----------------------------------- |
| `title`          | 页面标题，可以使用 i18n key         |
| `layout`         | 布局名称，常用 `default` 或 `blank` |
| `public`         | 是否允许未登录访问                  |
| `roles`          | 允许访问的角色                      |
| `roleMode`       | 角色匹配模式：`any` 或 `all`        |
| `permissions`    | 允许访问的权限点                    |
| `permissionMode` | 权限匹配模式：`any` 或 `all`        |
| `policy`         | 自定义权限判断函数                  |
| `activeMenu`     | 当前页面应该高亮的菜单路径          |
| `noCache`        | 是否跳过页面缓存                    |
| `cacheKey`       | 多个路由复用组件时使用的缓存键      |

登录页一般使用空白布局并公开访问：

```ts
{
  path: '/login',
  name: 'Login',
  component: () => import('./views/Login.vue'),
  meta: {
    layout: 'blank',
    public: true
  }
}
```

详情页一般不配置菜单，而是通过 `activeMenu` 让列表菜单保持高亮：

```ts
{
  path: '/content/posts/:id',
  name: 'ContentPostDetail',
  component: () => import('./views/ContentPostDetail.vue'),
  meta: {
    title: 'content.detail',
    layout: 'default',
    activeMenu: '/content/posts',
    noCache: true
  }
}
```

## 菜单配置

插件通过 `menus` 提供侧边栏结构：

```ts
import type { AdminPlugin } from 'vue-bag-admin'

const contentPlugin: AdminPlugin = {
  id: 'content-plugin',
  name: '内容插件',
  version: '1.0.0',
  menus: [
    {
      path: '/content',
      title: 'content.title',
      icon: 'order',
      sort: 30,
      roles: ['authenticated'],
      children: [
        {
          path: '/content/posts',
          title: 'content.posts',
          sort: 1,
          roles: ['authenticated']
        }
      ]
    }
  ]
}
```

菜单字段：

| 字段          | 作用                                     |
| ------------- | ---------------------------------------- |
| `path`        | 菜单标识或目标地址，同一菜单树中必须唯一 |
| `title`       | 菜单文本或 i18n key                      |
| `icon`        | 宿主支持的图标名称                       |
| `sort`        | 同级排序，值越小越靠前                   |
| `badge`       | 徽标文字，例如 `新`、`HOT`               |
| `hidden`      | 是否隐藏菜单节点                         |
| `roles`       | 菜单可见角色                             |
| `permissions` | 菜单可见权限点                           |
| `children`    | 子菜单                                   |

父级菜单可以只是分组，不一定对应真实页面。最终叶子菜单的 `path` 通常应该与路由路径一致。

## 一个完整示例

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
  ],
  menus: [
    {
      path: '/reports',
      title: 'report.list',
      icon: 'star',
      sort: 50,
      permissions: ['report.read']
    }
  ]
}

export default reportPlugin
```

路由与菜单最好使用相同的权限条件。只隐藏菜单不能阻止用户直接输入 URL，真正的页面保护仍由路由守卫负责。

## 常见约定

- 登录、403 等页面使用 `layout: 'blank'` 或不出现在菜单中。
- 列表页同时配置路由和菜单。
- 详情、编辑页只配置路由，并设置 `activeMenu`。
- 404 通配路由放在宿主路由数组最后。
- 路由 `name`、路由 `path`、菜单 `path` 和插件 `id` 都保持唯一。
- 业务页面尽量放到插件中，宿主只保留应用级页面。

## 下一步

继续阅读 [登录与权限](./auth-and-permissions.md)，为路由和菜单接入真实用户状态。
