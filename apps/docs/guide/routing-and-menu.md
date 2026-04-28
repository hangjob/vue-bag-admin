# 路由与菜单

在传统的中后台系统中，路由和菜单通常是在一个庞大的配置文件中集中维护的。而在 **Vue-Bag-Admin** 的微内核架构下，路由和菜单被分散到了各个**业务插件（Plugin）**中，由核心模块自动收集并注册。

## 路由配置

路由配置完全遵循 [Vue Router 4](https://router.vuejs.org/zh/) 的标准标准，同时我们扩展了 `meta` 属性以支持后台框架的特殊能力。

### 注册路由

在你的插件入口文件（如 `src/index.ts`）中，通过 `routes` 数组导出路由：

```typescript
import type { AdminPlugin } from '@bag/core'

const plugin: AdminPlugin = {
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: {
        title: 'menu.dashboard', // 支持 i18n 键值
        layout: 'default',       // 指定布局
        public: false            // 是否为公开路由
      }
    }
  ]
}

export default plugin
```

### Meta 配置项详解

| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| `title` | `string` | 页面标题，支持多语言 key（如 `menu.dashboard`）。 |
| `layout` | `'default' \| 'blank'` | 页面布局。`default` 包含侧边栏和顶栏，`blank` 为空白布局（如登录页）。 |
| `public` | `boolean` | 设为 `true` 时，无需登录即可访问（如 `/login`, `/404`）。 |
| `roles` | `string[]` | 允许访问该路由的角色列表。见 [权限管理](./permissions.md)。 |
| `permissions` | `string[]` | 允许访问该路由的权限标识列表。 |

## 菜单配置

菜单的渲染独立于路由，这样设计是为了支持外链、多级菜单以及不对应具体路由的目录节点。

### 注册菜单

在插件的 `menus` 数组中导出菜单项：

```typescript
const plugin: AdminPlugin = {
  menus: [
    {
      path: '/dashboard', // 对应的路由路径
      title: '控制台',      // 菜单显示文本
      icon: 'icon-home',  // 菜单图标
      order: 10,          // 排序权重，越小越靠前
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

### 菜单渲染机制

系统核心在初始化时（`bootstrapPlugins`），会遍历所有安装的插件，将它们的 `menus` 数组合并成一个全局的菜单树，并存储在 Pinia 的 `menuStore` 中。

### 动态权限过滤

得益于 Vue-Bag-Admin 的解耦设计，无论是后端采用 Java、Go 还是 Node.js (如自带的 Strapi)，前端对于菜单的渲染只依赖于一个原则：

> 侧边栏组件会自动订阅 `menuStore`，并基于当前登录用户 `userStore` 中的角色与权限，对全局菜单树进行**动态过滤**，确保用户只能看到自己有权访问的菜单节点。
