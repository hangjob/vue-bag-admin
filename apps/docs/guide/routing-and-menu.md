# 路由与菜单

很多后台项目会把路由和菜单塞进一个大配置文件。Vue-Bag-Admin 走插件化路线，路由和菜单分散在各个业务插件里，宿主启动时再收集注册。

## 路由配置

路由配置沿用 [Vue Router 4](https://router.vuejs.org/zh/) 的写法，只是在 `meta` 字段里放后台需要的权限、布局、缓存和菜单信息。

### 注册路由

在插件入口文件中，通过 `routes` 导出路由：

```typescript
import type { AdminPlugin } from '@bag/core'

const plugin: AdminPlugin = {
  routes: [
    {
      path: '/report/list',
      name: 'ReportList',
      component: () => import('./views/ReportList.vue'),
      meta: {
        title: 'report.list',
        layout: 'default',
        roles: ['authenticated']
      }
    }
  ]
}

export default plugin
```

### Meta 字段

| 属性名        | 类型                   | 描述                                                                        |
| ------------- | ---------------------- | --------------------------------------------------------------------------- |
| `title`       | `string`               | 页面标题，支持多语言 key。                                                  |
| `layout`      | `'default' \| 'blank'` | 页面布局。`default` 包含侧边栏和顶栏，`blank` 为空白布局（如登录页）。      |
| `public`      | `boolean`              | 设为 `true` 时，无需登录即可访问（如 `/login`, `/404`）。                   |
| `roles`       | `string[]`             | 允许访问该路由的角色列表。                                                  |
| `permissions` | `string[]`             | 允许访问该路由的权限标识列表。                                              |
| `hidden`      | `boolean`              | 设为 `true` 时，路由本身不会出现在菜单中。                                  |
| `activeMenu`  | `string`               | 指定当前页面应高亮的菜单路径，适用于详情页、编辑页、子页。                  |
| `noCache`     | `boolean`              | 是否禁止当前页进入标签页缓存。                                              |
| `cacheKey`    | `string`               | 显式指定 KeepAlive 匹配名。多个路由复用同一个页面组件时，用它来对齐组件名。 |

### activeMenu 什么时候用

后台里经常会遇到这种页面：

- 列表页在左侧菜单中可见
- 详情页、编辑页不在左侧菜单中显示
- 但进入详情页时，左侧仍然要高亮原菜单

这时就应该使用 `meta.activeMenu`：

```ts
{
  path: '/product/edit/:id',
  name: 'ProductEdit',
  component: () => import('./views/ProductEdit.vue'),
  meta: {
    title: 'shop.product.edit',
    layout: 'default',
    hidden: true,
    activeMenu: '/product/list'
  }
}
```

这样进入 `/product/edit/1` 时，左侧依然会高亮 `/product/list`。

### KeepAlive 与 noCache

标签页缓存默认会把路由对应的页面组件放进 `KeepAlive`。

- 列表页、工作台页这类需要保留筛选条件和滚动位置的页面，保持默认即可
- 详情页、编辑页、发货页这类一次性操作页面，建议显式设置 `meta.noCache = true`
- 如果多个路由复用同一个 Vue 组件，需要补 `meta.cacheKey`，它的值应该和组件名一致

例如财务日结和月结都复用了 `Finance.vue`，就可以这样声明：

```ts
{
  path: '/finance/flow/daily',
  name: 'FinanceDaily',
  component: () => import('./views/Finance.vue'),
  meta: {
    title: 'shop.finance.daily',
    layout: 'default',
    cacheKey: 'Finance'
  }
},
{
  path: '/finance/flow/monthly',
  name: 'FinanceMonthly',
  component: () => import('./views/Finance.vue'),
  meta: {
    title: 'shop.finance.monthly',
    layout: 'default',
    cacheKey: 'Finance'
  }
}
```

## 菜单配置

菜单渲染和路由注册分开处理，这样才能支持外链、多级目录，以及不对应具体路由的目录节点。

### 注册菜单

在插件的 `menus` 数组中导出菜单项：

```typescript
const plugin: AdminPlugin = {
  menus: [
    {
      path: '/dashboard', // 对应的路由路径
      title: '控制台', // 菜单显示文本
      icon: 'icon-home', // 菜单图标
      sort: 10 // 排序权重，越小越靠前
    },
    {
      path: '/system',
      title: '系统设置',
      icon: 'icon-setting',
      children: [
        {
          path: '/system/users',
          title: '用户管理'
        },
        {
          path: '/system/roles',
          title: '角色管理'
        }
      ]
    }
  ]
}
```

### 菜单字段

| 属性名        | 类型           | 描述                                 |
| ------------- | -------------- | ------------------------------------ |
| `path`        | `string`       | 菜单唯一标识，通常对应一个路由路径。 |
| `title`       | `string`       | 菜单标题，建议使用 i18n key。        |
| `icon`        | `string`       | 菜单图标标识。                       |
| `sort`        | `number`       | 菜单排序，越小越靠前。               |
| `hidden`      | `boolean`      | 是否隐藏该菜单项。                   |
| `badge`       | `string`       | 菜单徽标，如“新”或数字。             |
| `roles`       | `string[]`     | 菜单角色限制。                       |
| `permissions` | `string[]`     | 菜单权限点限制。                     |
| `children`    | `MenuConfig[]` | 子菜单。                             |

### 菜单渲染机制

系统在 `bootstrapPlugins()` 阶段遍历所有已启用插件，把它们的 `menus` 合并成菜单树，再存到 `menuStore`。

### 动态权限过滤

侧边栏组件会根据当前登录用户的角色与权限过滤菜单树。后端用 Java、Go 还是 Node.js 都没关系，只要返回前端需要的角色和权限点即可。

## 使用约定

- 列表页：正常出现在 `menus` 中
- 详情页：使用 `hidden: true` + `activeMenu`
- 嵌套路由：子路由如不单独出现在菜单中，也建议显式配置 `activeMenu`
- 外部链接：可以只配 `menus`，不一定需要对应实际路由
