# 网络请求与拦截

在 **Vue-Bag-Admin** 中，所有的网络请求都由独立的 `@bag/request` 包统一管理。这极大地提升了多个插件或模块间的代码复用率。

该请求库基于 `axios` 进行二次封装，提供了开箱即用的 Token 注入和统一的 `401` 鉴权拦截。

## 基础使用

你可以直接在业务插件中引入封装好的 `http` 实例，它与 `axios` 的使用方式完全一致：

```typescript
import { http } from '@bag/request'

// 发起 GET 请求
const fetchUsers = async () => {
  const data = await http.get('/api/users', {
    params: { page: 1 }
  })
  return data
}

// 发起 POST 请求
const createUser = async (payload) => {
  const data = await http.post('/api/users', payload)
  return data
}
```

> **提示**：响应拦截器默认直接返回了 `res.data`，因此在业务代码中你无需再做 `.data` 解构。

## 初始化配置

为了保持前端架构与宿主环境（Host）的解耦，网络请求库**不会硬编码**获取 Token 和错误处理的逻辑。这些逻辑通过 `setupHttp` 方法由宿主应用在初始化时注入。

在 `apps/admin/src/main.ts` 或专门的启动配置文件中：

```typescript
import { setupHttp } from '@bag/request'
import { useUserStore } from '@/stores/user'

export function initRequest() {
  const userStore = useUserStore()

  setupHttp({
    // 注入基础配置 (支持 axios 的所有 CreateAxiosDefaults 配置)
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    timeout: 10000,
    
    // 动态获取当前 Token，每次请求前都会自动调用此方法注入到 Authorization 头部
    getToken: () => {
      return userStore.token
    },
    
    // 全局 401 未授权拦截处理
    onUnauthorized: () => {
      // 可以在这里触发退出登录逻辑，或跳转到登录页
      userStore.logout()
      window.location.href = '/login'
    }
  })
}
```

## 拦截器原理解析

`@bag/request` 核心非常轻量，其内部会自动处理以下流程：

1. **请求拦截**：发起请求时，执行 `getToken()` 获取最新凭证，并自动附加上 `Authorization: Bearer <Token>` 请求头。
2. **响应拦截**：
   - 正常响应提取业务数据 (`res.data`)。
   - 若捕获到 HTTP 状态码为 `401`，则触发你传入的 `onUnauthorized` 钩子回调。
