# 网络请求与拦截

在 Vue-Bag-Admin 中，所有网络请求都由 `@bag/request` 包统一管理。它基于 `axios` 二次封装，负责：

- Token 注入
- HTTP 状态码拦截
- 业务错误转异常
- 宿主自定义错误处理策略

## 基础使用

你可以在业务插件中直接使用 `http` 实例：

```typescript
import { http } from '@bag/request'

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

默认情况下，响应拦截器会直接返回 `response.data`，因此业务层无需再手动解构 `.data`。

## 初始化配置

为了和宿主解耦，请求层不会硬编码 Token 获取与错误处理逻辑，而是通过 `setupHttp()` 在启动阶段注入。

```ts
import { setupHttp } from '@bag/request'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

setupHttp({
  baseURL: import.meta.env.VITE_API_URL,
  getToken: () => userStore.token,
  onUnauthorized: () => {
    userStore.logout()
    window.location.href = '/login'
  },
  onForbidden: () => {
    console.warn('当前账号没有访问权限')
  },
  onServerError: () => {
    console.error('服务异常，请稍后重试')
  },
  resolveError: (payload) => {
    const data = payload as
      | { success?: boolean; code?: string | number; message?: string }
      | undefined
    if (data?.success === false) {
      return {
        code: data.code,
        message: data.message || 'Request failed'
      }
    }
    return null
  }
})
```

## SetupHttpConfig 支持什么

`setupHttp()` 同时支持两类配置：

- `axios` 原生配置：如 `baseURL`、`timeout`、`headers`
- 宿主注入能力：如 `getToken`、错误钩子、业务错误识别函数

## 错误处理模型

### 1. HTTP 状态码错误

当接口返回 `401`、`403`、`5xx` 时，请求层会分别触发：

- `onUnauthorized`
- `onForbidden`
- `onServerError`

### 2. 业务错误

很多后端会返回 HTTP 200，但实际业务失败，例如：

```json
{
  "success": false,
  "code": "PRODUCT_NOT_FOUND",
  "message": "商品不存在"
}
```

这时可以通过 `resolveError()` 将其识别为业务错误，并统一转成异常抛出。

### 3. HttpError

请求层会统一抛出 `HttpError`，其中包含：

- `message`
- `code`
- `status`
- `payload`
- `response`

业务层可以在 `catch` 中统一处理：

```ts
import { HttpError, http } from '@bag/request'

try {
  await http.get('/api/products/1')
} catch (error) {
  if (error instanceof HttpError) {
    console.error(error.status, error.code, error.message)
  }
}
```

## 拦截器流程

1. **请求拦截**：发起请求时，执行 `getToken()` 获取最新凭证，并自动附加上 `Authorization: Bearer <Token>` 请求头。
2. **响应拦截**：
   - 默认提取响应数据。
   - 若 `resolveError()` 识别出业务错误，则转成 `HttpError` 抛出。
   - 若捕获到 `401` / `403` / `5xx`，则触发对应钩子。

## 推荐实践

- 插件页面里只写业务请求，不要重复处理 Token
- 宿主应用统一注入 `setupHttp()`
- 用 `resolveError()` 适配你的后端业务错误格式
- 页面层 `catch` 时优先判断 `HttpError`
