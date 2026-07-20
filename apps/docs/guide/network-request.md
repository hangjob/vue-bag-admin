# 网络请求与拦截

在 Vue-Bag-Admin 中，网络请求统一由 `@bag/request` 管理。它同时支持 `axios` 和原生 `fetch`，主要处理这些事情：

- Token 注入
- HTTP 状态码拦截
- 业务错误转异常
- 宿主自定义错误处理策略
- 面向 PWA 场景的离线缓存与离线写入队列
- 页面层的 `loading` / `data` / `error` 执行状态管理
- 基于 Lodash 的防抖 / 节流请求控制

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

如果你更想直接使用原生 `fetch`，也可以使用 `fetchHttp`：

```ts
import { fetchHttp } from '@bag/request'

const fetchUsers = async () => {
  const data = await fetchHttp.get('/api/users', {
    params: { page: 1 }
  })
  return data
}
```

## 初始化配置

为了和宿主解耦，请求层不会硬编码 Token 获取和错误处理逻辑，而是通过 `setupHttp()` 在启动阶段注入。

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

如果项目更偏向原生 API，也可以直接用 `setupFetch()`：

```ts
import { setupFetch } from '@bag/request'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

setupFetch({
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

`setupHttp()` 主要支持这几类配置：

- `axios` 原生配置：如 `baseURL`、`timeout`、`headers`
- 宿主注入能力：如 `getToken`、错误钩子、业务错误识别函数
- PWA 缓存能力：如缓存命名空间、缓存策略、缓存时长

`setupFetch()` 也有对应的一组能力：

- 原生 `fetch` 配置：如 `baseURL`、`headers`、`credentials`
- 宿主注入能力：如 `getToken`、错误钩子、业务错误识别函数
- PWA 增强能力：如离线缓存策略、断网入队、联网后自动重放

## PWA 模式

如果你的管理端希望在弱网、断网，或者被安装为桌面应用后还能保持基本可用，可以直接在 `setupHttp()` 或 `setupFetch()` 里开启 `pwa` 配置。

`axios` 版本适合继续沿用 `http` 的项目：

```ts
import { http, setupHttp } from '@bag/request'

setupHttp({
  baseURL: import.meta.env.VITE_API_URL,
  getToken: () => localStorage.getItem('token'),
  onUnauthorized: () => {
    window.location.href = '/login'
  },
  pwa: {
    enabled: true,
    cache: {
      enabled: true,
      strategy: 'cache-first',
      ttl: 5 * 60 * 1000
    }
  }
})

const dashboardData = await http.get('/dashboard', {
  pwa: {
    strategy: 'cache-first'
  }
})
```

`fetch` 版本则适合希望同时拿到离线队列能力的场景：

```ts
import {
  clearOfflineQueue,
  fetchHttp,
  getNetworkStatus,
  replayOfflineQueue,
  setupFetch,
  subscribeNetworkStatus
} from '@bag/request'

setupFetch({
  baseURL: import.meta.env.VITE_API_URL,
  getToken: () => localStorage.getItem('token'),
  onUnauthorized: () => {
    window.location.href = '/login'
  },
  pwa: {
    enabled: true,
    cache: {
      enabled: true,
      strategy: 'cache-first',
      ttl: 5 * 60 * 1000
    },
    queue: {
      enabled: true,
      autoReplay: true
    }
  }
})

const stopListening = subscribeNetworkStatus((status) => {
  console.log('network status:', status)
})

const dashboardData = await fetchHttp.get('/dashboard', {
  pwa: {
    strategy: 'stale-while-revalidate'
  }
})

try {
  await fetchHttp.post('/orders', {
    title: '离线创建订单'
  })
} catch (error) {
  if (getNetworkStatus() === 'offline') {
    console.log('request has been queued')
  }
}

await replayOfflineQueue()
clearOfflineQueue()
stopListening()
```

当前这层 PWA 模式主要覆盖三件事：

- `http` 和 `fetchHttp` 的 `GET` / `HEAD` 请求默认支持缓存优先读取
- `fetchHttp` 的写请求在断网时可进入离线队列
- `fetchHttp` 的离线队列可在网络恢复后自动或手动重放

## 高频请求控制

如果页面里有搜索联想、自动保存、按钮防连点这类高频交互，可以直接使用 `@bag/request` 提供的 `debounceRequest()` 和 `throttleRequest()`。

这层底层基于 Lodash 的 `debounce` / `throttle`，但对请求场景补了三点：

- 返回值保持为 `Promise`，可以继续 `await`
- 提供 `cancel()`、`flush()`、`pending()` 便于页面控制
- 直接包裹 `http`、`fetchHttp` 或你自己的 API 函数都可以

### 搜索联想

```ts
import { debounceRequest, http } from '@bag/request'

const fetchUsers = debounceRequest(
  (keyword: string) =>
    http.get('/api/users', {
      params: {
        keyword
      }
    }),
  300
)

const users = await fetchUsers('bag admin')
```

### 自动保存

```ts
import { fetchHttp, throttleRequest } from '@bag/request'

const saveDraft = throttleRequest(
  (payload: { title: string; content: string }) => fetchHttp.post('/api/drafts', payload),
  1000,
  {
    leading: false,
    trailing: true
  }
)

await saveDraft({
  title: '草稿标题',
  content: '草稿内容'
})
```

### 重复提交保护

```ts
import { throttleRequest, http } from '@bag/request'

const submitOrder = throttleRequest(
  (orderId: string) =>
    http.post('/api/orders/submit', {
      orderId
    }),
  1500,
  {
    leading: true,
    trailing: false
  }
)

await submitOrder('order_1001')
```

### 控制方法

```ts
import { debounceRequest, http } from '@bag/request'

const fetchUsers = debounceRequest(
  (keyword: string) =>
    http.get('/api/users', {
      params: {
        keyword
      }
    }),
  300,
  {
    maxWait: 1000
  }
)

fetchUsers('a')
fetchUsers('ab')
fetchUsers('abc')

if (fetchUsers.pending()) {
  await fetchUsers.flush()
}

fetchUsers.cancel('component unmount')
```

默认行为：

- `debounceRequest()` 默认尾触发
- `throttleRequest()` 默认首尾都触发
- 两者都支持 `leading`、`trailing`、`maxWait`
- 它们只限制调用频率，不会取消已经发出的真实请求

## 页面请求状态

如果页面里总是在手写 `loading`、`data`、`error`、`run`，可以直接用 `useRequest()` 把执行状态收起来。

```ts
import { http, useRequest } from '@bag/request'

interface UserProfile {
  id: string
  nickname: string
}

const userRequest = useRequest((userId: string) => http.get<UserProfile>(`/api/users/${userId}`), {
  strategy: 'latest'
})

await userRequest.run('user_1')

console.log(userRequest.loading.value)
console.log(userRequest.data.value)
console.log(userRequest.error.value)
```

### 常用方法

```ts
import { fetchHttp, useRequest } from '@bag/request'

const articleRequest = useRequest(
  (articleId: string) => fetchHttp.get(`/api/articles/${articleId}`),
  {
    defaultData: null
  }
)

await articleRequest.run('article_1')
await articleRequest.refresh()
articleRequest.cancel('dialog closed')
articleRequest.reset()
```

- `loading`：当前这个请求控制器是否还有活跃任务
- `data`：最近一次有效成功结果
- `error`：最近一次有效失败结果
- `run(...args)`：执行请求并返回 `Promise`
- `refresh()`：用上一次参数重新执行
- `cancel()`：让当前活跃请求失效，并立即退出当前控制器的 loading 统计
- `reset()`：清空当前控制器状态，并把 `data` 恢复到 `defaultData`

### 并发策略

`useRequest()` 现在支持三种执行策略：

- `latest`：默认值。新请求开始时，旧请求立即失效，适合搜索、筛选、切页
- `parallel`：允许多个请求并发执行，谁最后回来谁覆盖 `data`
- `block`：执行中再次调用 `run()` 会直接抛错，适合按钮防重复提交

支持的缓存策略有：

- `network-first`
- `cache-first`
- `stale-while-revalidate`
- `cache-only`
- `network-only`

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

1. **请求阶段**：发起请求时，执行 `getToken()` 获取最新凭证，并自动附加上 `Authorization: Bearer <Token>` 请求头。
2. **响应拦截**：
   - 默认提取响应数据。
   - 若 `resolveError()` 识别出业务错误，则转成 `HttpError` 抛出。
   - 若捕获到 `401` / `403` / `5xx`，则触发对应钩子。

## 推荐实践

- 插件页面里只写业务请求，不要重复处理 Token
- 宿主应用统一注入 `setupHttp()` 或 `setupFetch()`
- 用 `resolveError()` 适配你的后端业务错误格式
- 页面层优先用 `useRequest()` 收口执行状态，避免重复维护 `loading`、`data`、`error`
- PWA 模式更适合列表、详情、配置查询这类可缓存读请求
- 如果项目主线仍是 `axios`，可以先只启用 `setupHttp({ pwa: { cache } })`
- 离线队列更适合 JSON / 字符串请求体，不建议直接拿来排队文件上传
- 页面层 `catch` 时优先判断 `HttpError`
