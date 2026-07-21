# 权限管理

Vue-Bag-Admin 的权限模型基于 RBAC，覆盖这几块：

- 页面级路由权限
- 菜单级权限过滤
- 按钮和组件级权限控制

## 权限数据流转

前端鉴权主要看 `userStore` 里的两个状态：`roles`（角色列表）和 `permissions`（权限标识列表）。

不管后端怎么写，前端这边通常按这条链路走：

1. 用户登录成功后，前端请求获取当前用户信息（如 `/api/users/me` 接口）。
2. 后端需要在返回信息中，带上该用户的所属角色（如 `['admin']`）以及具体的权限点（如 `['shop.read', 'shop.write']`）。
3. 前端将这些角色和权限点数据格式化后，存储在 Pinia 的 `userStore` 中。

如果你正在使用默认的 Strapi 5 后端，框架已经处理好了这一步的数据适配。

## 页面级权限控制 (路由鉴权)

在路由里配置 `meta.roles` 或 `meta.permissions`，就能限制谁可以访问该页面。

### 按角色拦截

```typescript
{
  path: '/admin/settings',
  component: () => import('./views/Settings.vue'),
  meta: {
    title: '系统设置',
    roles: ['admin', 'super-admin'] // 只有 admin 和 super-admin 角色可访问
  }
}
```

### 按权限标识拦截

如果权限划分比较细，直接用权限标识（Permissions）：

```typescript
{
  path: '/shop/products',
  component: () => import('./views/Products.vue'),
  meta: {
    title: '商品列表',
    permissions: ['shop.product.read', 'shop.product.write'] // 拥有其中任意一个权限即可访问
  }
}
```

### 鉴权逻辑

系统的全局前置路由守卫会拦截路由跳转：

1. 未登录访问非公开页面时，跳转到登录页
2. 已登录但尚未拉取用户信息时，先请求用户资料
3. 角色或权限不满足时，跳转到 `/403`

默认情况下，`roles` 和 `permissions` 数组内部都是“满足任意一个即可”。如果页面需要同时满足多个角色或多个权限，可以配置 `roleMode` 或 `permissionMode`：

```typescript
{
  path: '/finance/audit',
  component: () => import('./views/FinanceAudit.vue'),
  meta: {
    title: '财务审核',
    roles: ['finance', 'manager'],
    roleMode: 'all',
    permissions: ['finance.audit', 'finance.read'],
    permissionMode: 'all'
  }
}
```

更复杂的规则可以交给 `policy` 函数：

```typescript
{
  path: '/team/:id',
  component: () => import('./views/TeamDetail.vue'),
  meta: {
    title: '团队详情',
    policy: ({ roles, permissions }) =>
      roles.includes('admin') || permissions.includes('team.owner')
  }
}
```

## 菜单级权限控制

菜单本身也支持 `roles` 与 `permissions`，侧边栏会按当前用户权限过滤菜单树。

```ts
{
  path: '/finance/flow/daily',
  title: 'shop.finance.daily',
  roles: ['authenticated'],
  permissions: ['finance.read']
}
```

## 按钮/组件级权限控制

实际开发里，最常见的是控制按钮、操作栏、表格操作列这些局部 UI 的显示与隐藏。

### 方式一：直接使用 userStore

可以直接使用 `userStore` 暴露的方法：

```vue
<template>
  <div class="actions">
    <button v-if="userStore.hasPermission(['shop.product.write'])" class="btn-primary">
      新建商品
    </button>

    <button v-if="userStore.hasRole(['admin'])" class="btn-danger">危险操作</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>
```

### 方式二：使用 v-permission 指令

宿主已经全局注册了 `v-permission` 指令，用它控制单个元素最省事。

```vue
<template>
  <button v-permission="'shop.product.publish'">发布商品</button>

  <button v-permission="['shop.product.delete', 'shop.product.write']">删除商品</button>

  <button v-permission="{ roles: ['admin'], permissions: ['system.manage'] }">系统管理</button>
</template>
```

支持三种写法：

- 单个权限字符串
- 权限数组
- 完整权限对象 `{ roles, roleMode, permissions, permissionMode, policy }`

### 方式三：使用 PermissionAccess 组件

想包裹一整块内容时，`PermissionAccess` 更直观。

```vue
<template>
  <PermissionAccess :permissions="['shop.product.publish']">
    <button>发布商品</button>
    <button>导入商品</button>
  </PermissionAccess>
</template>
```

### 方式四：使用 canAccess / useAccess

如果要在组合式函数、渲染函数或复杂逻辑里复用判断，可以使用这两个公共入口。

```ts
import { canAccess, useAccess } from '@/access'

const visible = canAccess({
  roles: ['authenticated'],
  permissions: ['shop.product.publish']
})

const canDelete = useAccess({
  permissions: ['shop.product.delete']
})
```

## 方法说明

- `userStore.hasRole(roles?: string[], mode?: 'any' | 'all')`: 判断当前用户是否拥有指定的角色。默认满足其一即返回 `true`。
- `userStore.hasPermission(perms?: string[], mode?: 'any' | 'all')`: 判断当前用户是否拥有指定的权限。如果用户权限中包含 `*`（超级管理员标志），将始终返回 `true`。
- `canAccess(requirement)`: 权限判断方法，供路由、组件、指令复用。
- `useAccess(requirement)`: 响应式权限判断组合函数。

## 使用建议

- 页面路由：优先配置 `meta.roles` 或 `meta.permissions`
- 菜单节点：和页面保持相同权限口径
- 单个按钮：优先使用 `v-permission`
- 一整块区域：优先使用 `PermissionAccess`
- 复杂组合逻辑：使用 `canAccess()` 或 `useAccess()`
