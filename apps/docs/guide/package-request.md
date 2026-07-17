# @bag/request

`@bag/request` 是请求层，主要把后台项目里最常见的 HTTP 和 WebSocket 接入方式收一下口。

它不是为了替代 `axios` 或 `fetch`。更像是在常用请求方案上补一层顺手的默认约定，把 token 注入、统一异常对象、业务错误识别、WS 初始化这些高频动作先配好。

## 这里有什么

- 默认导出的 `http` 实例
- `setupHttp()`：统一配置鉴权、错误处理与 `axios` 缓存策略
- `fetchHttp` / `setupFetch()`：给原生 `fetch` 一套同风格能力
- `http` / `fetch` 的 PWA 模式：离线缓存、断网入队、恢复后重放
- `createFetchClient()`：按需创建独立的 `fetch` 客户端
- `useRequest()`：把 `loading`、`data`、`error` 和 `run()` 这层执行状态收起来
- `debounceRequest()` / `throttleRequest()`：基于 Lodash 的高频请求控制
- `HttpError`：统一承载 HTTP 状态和业务载荷
- `setupWs()`：设置 WS token 与基础地址
- `createWsClient()`：创建轻量 WS 客户端

## HTTP 示例

```ts
import { HttpError, http, setupHttp } from '@bag/request'

setupHttp({
  baseURL: '/api',
  getToken: () => localStorage.getItem('token'),
  pwa: {
    enabled: true,
    cache: {
      enabled: true,
      strategy: 'cache-first'
    }
  },
  onUnauthorized: () => {
    console.log('redirect to login')
  },
  resolveError: (payload) => {
    const data = payload as { code?: number; message?: string }
    if (data?.code && data.code !== 0) {
      return {
        code: data.code,
        message: data.message ?? '业务失败'
      }
    }
    return null
  }
})

try {
  const data = await http.get('/users/me')
  console.log(data)
} catch (error) {
  if (error instanceof HttpError) {
    console.error(error.status, error.code)
  }
}
```

现在 `http` 这条线也支持 PWA 缓存配置，适合继续沿用 `axios` 的项目。

## WebSocket 示例

```ts
import { createWsClient, setupWs } from '@bag/request'

setupWs({
  getToken: () => localStorage.getItem('token'),
  baseURL: 'ws://localhost:8080'
})

const ws = createWsClient('/notice')
ws.open()
```

## Fetch 示例

```ts
import { HttpError, fetchHttp, setupFetch } from '@bag/request'

setupFetch({
  baseURL: '/api',
  getToken: () => localStorage.getItem('token'),
  onUnauthorized: () => {
    console.log('redirect to login')
  },
  resolveError: (payload) => {
    const data = payload as { code?: number; message?: string }
    if (data?.code && data.code !== 0) {
      return {
        code: data.code,
        message: data.message ?? '业务失败'
      }
    }
    return null
  }
})

try {
  const data = await fetchHttp.get('/users/me')
  console.log(data)
} catch (error) {
  if (error instanceof HttpError) {
    console.error(error.status, error.code)
  }
}
```

## 防抖和节流示例

这两个能力底层基于 Lodash 的 `debounce` / `throttle`，但对外统一成了更适合请求场景的包装器：返回值仍然可以直接 `await`，同时带 `cancel()`、`flush()`、`pending()`。

### 搜索联想

```ts
import { debounceRequest, http } from '@bag/request'

const queryUsers = debounceRequest(
  (keyword: string) =>
    http.get('/users/search', {
      params: {
        keyword
      }
    }),
  300
)

const users = await queryUsers('bag admin')
```

### 自动保存

```ts
import { fetchHttp, throttleRequest } from '@bag/request'

const saveDraft = throttleRequest(
  (payload: { title: string; content: string }) => fetchHttp.post('/drafts', payload),
  1000,
  {
    leading: false,
    trailing: true
  }
)

await saveDraft({
  title: '新草稿',
  content: '节流保存'
})
```

### 按钮防连点

```ts
import { throttleRequest, http } from '@bag/request'

const submitOrder = throttleRequest(
  (orderId: string) =>
    http.post('/orders/submit', {
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

const queryUsers = debounceRequest(
  (keyword: string) =>
    http.get('/users/search', {
      params: {
        keyword
      }
    }),
  300,
  {
    maxWait: 1000
  }
)

queryUsers('bag')
queryUsers('bag a')
queryUsers('bag admin')

if (queryUsers.pending()) {
  await queryUsers.flush()
}

queryUsers.cancel('page leave')
```

适合这些场景：

- 搜索联想、远程筛选这类只关心最后一次输入的读请求
- 自动保存、滚动加载这类要限速但不想完全丢掉后续动作的请求
- 按钮防连点、重复提交保护这类需要短时间内限制重复触发的提交动作

## 页面执行状态示例

如果你只是想在页面里拿到 `loading`、`data`、`error` 和 `run()`，可以直接用 `useRequest()`，不用再自己手写一层状态管理。

```ts
import { http, useRequest } from '@bag/request'

interface UserProfile {
  id: string
  nickname: string
}

const userRequest = useRequest((userId: string) => http.get<UserProfile>(`/users/${userId}`), {
  strategy: 'latest'
})

await userRequest.run('user_1')

console.log(userRequest.loading.value)
console.log(userRequest.data.value)
console.log(userRequest.error.value)
```

### 对外方法

```ts
import { fetchHttp, useRequest } from '@bag/request'

const articleRequest = useRequest((articleId: string) => fetchHttp.get(`/articles/${articleId}`), {
  defaultData: null
})

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

## PWA 模式示例

```ts
import { fetchHttp, replayOfflineQueue, setupFetch } from '@bag/request'

setupFetch({
  baseURL: '/api',
  getToken: () => localStorage.getItem('token'),
  onUnauthorized: () => {
    console.log('redirect to login')
  },
  pwa: {
    enabled: true,
    cache: {
      enabled: true,
      strategy: 'cache-first'
    },
    queue: {
      enabled: true,
      autoReplay: true
    }
  }
})

const dashboard = await fetchHttp.get('/dashboard', {
  pwa: {
    strategy: 'stale-while-revalidate',
    ttl: 60_000
  }
})

await replayOfflineQueue()
```

## 谁会经常用到

- 宿主项目：统一初始化请求层
- 业务插件：直接复用 `http` 和 WS 客户端
- 多端团队：把“错误码怎么识别、401 怎么收口”放到同一个地方

## 边界

- 它只负责接入层，不替你组织具体业务 API 模块
- 它默认返回提取后的数据，不是完整 `AxiosResponse`
- `fetchHttp` 默认返回解析后的响应体，不是原始 `Response`
- `debounceRequest()` 和 `throttleRequest()` 只控制调用频率，不会中断已经发出的请求
- `useRequest()` 负责页面执行状态，不会替你拆业务 API，也不会直接中断已发出的网络请求
- 开启 PWA 缓存后，`http` 和 `fetchHttp` 的读请求都会优先读取本地缓存
- PWA 模式只增强请求层，不负责 manifest、Service Worker 注册与安装提示
- 如果后端响应结构有差异，建议统一通过 `setupHttp()` 或 `setupFetch()` 适配

## 继续阅读

- [网络请求与拦截](./network-request.md)
