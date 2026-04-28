# 权限管理

**Vue-Bag-Admin** 提供了一套基于 **RBAC (基于角色的访问控制)** 的权限管理方案。虽然本项目内置了与 **Strapi 5** 无缝整合的开箱即用体验，但前端的权限流转架构**完全不绑定于任何特定的后端框架**（无论是 Java/Spring Boot、Go、Node.js 等均可适用）。

权限控制主要分为两个维度：**页面级路由权限** 和 **按钮/组件级权限**。

## 权限数据流转

前端的鉴权核心在于 `userStore` 中维护的两个状态：`roles`（角色列表）和 `permissions`（权限标识列表）。

不论你的后端是什么架构，通用的流转过程如下：

1. 用户登录成功后，前端请求获取当前用户信息（如 `/api/users/me` 接口）。
2. 后端需要在返回信息中，带上该用户的所属角色（如 `['admin']`）以及具体的权限点（如 `['shop.read', 'shop.write']`）。
3. 前端将这些角色和权限点数据格式化后，存储在 Pinia 的 `userStore` 中。

*(注：如果你正在使用默认的 Strapi 5 后端，框架已经为你处理好了这一步的数据适配。)*

## 页面级权限控制 (路由鉴权)

通过配置路由的 `meta.roles` 或 `meta.permissions`，可以限制哪些用户能够访问该页面。

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

如果你的权限划分比较细，建议使用权限标识（Permissions）：

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

系统的全局前置路由守卫（`router.beforeEach`）会自动拦截路由跳转。如果用户不具备相应的角色或权限，会被重定向到 `/403` 无权限页面。

## 按钮/组件级权限控制

在实际业务开发中，我们常常需要控制页面内部某个按钮（如“删除”、“编辑”）的显示与隐藏。

你可以直接使用 `userStore` 中提供的方法来进行判断：

```vue
<template>
  <div class="actions">
    <button v-if="userStore.hasPermission(['shop.product.write'])" class="btn-primary">
      新建商品
    </button>
    
    <button v-if="userStore.hasRole(['admin'])" class="btn-danger">
      危险操作
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>
```

### 方法说明

- `userStore.hasRole(roles?: string[])`: 判断当前用户是否拥有指定的角色。传入数组时，满足其一即返回 `true`。
- `userStore.hasPermission(perms?: string[])`: 判断当前用户是否拥有指定的权限。如果用户权限中包含 `*`（超级管理员标志），将始终返回 `true`。
