# 登录与权限

Vue-Bag-Admin 的权限链路分为四层：

1. `AuthProvider` 负责登录和获取用户资料。
2. `userStore` 保存 token、角色和权限点。
3. 路由守卫保护页面，菜单根据同一份数据过滤。
4. 指令、组件和组合函数控制页面内的按钮或区域。

后端实现可以不同，但最终需要向前端提供统一的角色和权限数据。

## 启用路由鉴权

`createHostRouter()` 支持三种写法。

关闭鉴权：

```ts
createHostRouter({
  routes: appRoutes,
  auth: false // 关闭登录和页面权限守卫
})
```

使用默认路径：

```ts
createHostRouter({
  routes: appRoutes,
  auth: true // 启用默认鉴权规则
})
```

默认约定是：

```text
首页          /dashboard
登录          /login
个人中心      /profile
无权限        /403
未找到        /404
```

自定义路径和异常处理：

```ts
const router = createHostRouter({
  routes: appRoutes,
  auth: {
    enabled: true, // 启用路由鉴权
    homePath: '/workspace', // 登录后的默认首页
    loginPath: '/sign-in', // 未登录时跳转的登录页
    profilePath: '/account', // 个人中心地址
    forbiddenPath: '/403', // 权限不足时跳转的页面
    onProfileError() {
      return 'logout' // 用户资料加载失败时清空登录态
    }
  }
})
```

启用鉴权时，必须存在对应登录路由，并将它标记为 `meta.public: true`。

## 接入认证服务

认证服务实现 `AuthProvider`：

```ts
import { http, setAuthProvider, type AuthProvider } from 'vue-bag-admin'

interface LoginResponse {
  token: string
}

interface ProfileResponse {
  id: number
  username: string
  roles: string[]
  permissions: string[]
}

const authProvider: AuthProvider = {
  async login(payload) {
    const result = await http.post<any, LoginResponse>('/api/login', payload)

    return {
      token: result.token
    }
  },

  async fetchProfile() {
    const result = await http.get<any, ProfileResponse>('/api/me')

    return {
      username: result.username,
      user: result,
      roles: result.roles,
      permissions: result.permissions
    }
  },

  async logout() {
    await http.post('/api/logout')
  }
}

setAuthProvider(authProvider) // 将认证实现交给宿主运行时
```

如果后端使用仓库提供的 Strapi 参考接口，可以直接使用：

```ts
import { createStrapiAuthProvider, setAuthProvider } from 'vue-bag-admin'

setAuthProvider(createStrapiAuthProvider()) // 使用框架内置的 Strapi 5 认证适配器
```

默认 Strapi 适配器使用 `/api/auth/local` 登录，并通过 `/api/users/me` 获取用户资料。

## 配置请求 Token

`setupHttp()` 会在每次请求前读取最新 token：

```ts
import { getHostNavigationConfig, setupHttp, useUserStore } from 'vue-bag-admin'

const userStore = useUserStore()
const navigation = getHostNavigationConfig() // 获取登录页和 403 等导航地址

setupHttp({
  baseURL: import.meta.env.VITE_API_URL, // 后端接口基础地址
  getToken: () => userStore.token, // 每次请求前读取最新 token
  onUnauthorized: () => {
    userStore.logout()
    router.replace({
      path: navigation.loginPath,
      query: {
        redirect: router.currentRoute.value.fullPath // 记录登录后需要返回的页面
      }
    })
  },
  onForbidden: () => {
    router.replace(navigation.forbiddenPath) // 收到 403 后进入无权限页面
  }
})
```

用户登录成功后，`userStore` 会把 token 写入 `localStorage`，默认键名是 `bag.auth.token`。

## 登录页面

登录页只需要调用 `userStore.login()`：

```ts
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from 'vue-bag-admin'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const submitLogin = async () => {
  await userStore.login({
    username: username.value,
    password: password.value
  })

  const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/dashboard'

  await router.replace(redirect)
}
```

路由守卫会在用户带 token 进入受保护页面时自动加载资料。如果资料加载失败，默认清空登录态并返回登录页。

## 页面权限

路由通过角色或权限点限制访问：

```ts
{
  path: '/finance/audit',
  component: () => import('./views/FinanceAudit.vue'),
  meta: {
    title: '财务审核',
    roles: ['finance', 'manager'], // 需要检查的角色
    roleMode: 'all', // 必须同时拥有 finance 和 manager
    permissions: ['finance.read', 'finance.audit'], // 需要检查的权限点
    permissionMode: 'all' // 必须同时拥有两个权限点
  }
}
```

同一个数组默认是 `any`，配置 `all` 后才要求全部满足。

当 `roles` 和 `permissions` 同时存在时，两组条件都必须通过。`policy` 也是附加条件：

```ts
meta: {
  permissions: ['team.read'], // 先通过基础权限检查
  policy: ({ roles, user }) =>
    roles.includes('admin') || user?.teamId === 'team-1' // 管理员或指定团队成员可访问
}
```

## 注册页面内权限能力

在 `main.ts` 中注册全局组件和指令：

```ts
import { PermissionAccess, registerPermissionDirective } from 'vue-bag-admin'

app.component('PermissionAccess', PermissionAccess) // 全局注册权限区域组件
registerPermissionDirective(app) // 全局注册 v-permission 指令
```

### 控制单个元素

```vue
<button v-permission="'product.create'">
  新建商品
</button>

<button
  v-permission="{
    roles: ['admin'],
    permissions: ['product.delete']
  }"
>
  删除商品
</button>
```

### 控制一块内容

```vue
<PermissionAccess :permissions="['report.export']">
  <ExportButton />
  <ExportHistory />
</PermissionAccess>
```

### 在逻辑中判断

```ts
import { canAccess, useAccess } from 'vue-bag-admin'

const canEdit = useAccess({
  permissions: ['product.edit']
})

const canManageSystem = canAccess({
  roles: ['admin'],
  permissions: ['system.manage']
})
```

`useAccess()` 返回响应式的 `ComputedRef<boolean>`；`canAccess()` 返回当前时刻的布尔值。

## 权限设计建议

- 页面安全依赖路由守卫，不能只隐藏菜单或按钮。
- 菜单与对应路由使用同一组角色和权限条件。
- 角色适合描述身份，权限点适合描述具体动作。
- 权限点建议采用 `业务域.资源.动作`，例如 `shop.product.create`。
- 超级管理员可以返回 `*` 权限，框架会视为拥有所有权限点。
- 前端权限用于交互和路由保护，后端仍必须再次校验接口权限。

## 下一步

继续阅读 [请求与组件](../request-and-components.md)，在页面中接入接口、请求状态、表格和表单。
