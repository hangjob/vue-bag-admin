# @bag/request

`@bag/request` 处理的是最容易在后台项目里反复写的那层东西：请求初始化、token 注入、统一报错，还有 WebSocket 连接。

它不是想把 `axios` 或 `fetch` 再包一层大而全的新框架，而是把几件高频小事先收口。这样宿主和插件拿到手就是同一套请求习惯。

## 安装

```bash
pnpm add @bag/request
```

包内已经内置 `axios` 和 `@vueuse/core` 依赖，宿主项目可以直接使用。

## 这里有什么

- 默认的 `http` 实例
- `setupHttp()`，用来统一 token、错误处理、业务异常识别和 `axios` 缓存策略
- `fetchHttp` 和 `setupFetch()`，给原生 `fetch` 一套同风格接入方式
- `http` 和 `fetch` 的 PWA 模式，支持离线缓存、断网入队和联网后重放
- `createFetchClient()`，按需创建独立的 `fetch` 客户端
- `useRequest()`，把 `loading`、`data`、`error` 和 `run()` 这层执行状态收口
- `debounceRequest()` 和 `throttleRequest()`，给高频请求场景做调用频率控制
- `HttpError`，把 HTTP 状态和业务载荷收进同一个错误对象里
- `setupWs()` 和 `createWsClient()`，给 WebSocket 做统一初始化

## HTTP 怎么接

```ts
import { HttpError, http, setupHttp } from '@bag/request'

setupHttp({
  baseURL: '/api',
  timeout: 15000,
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
  onBusinessError: (error) => {
    console.error('business error:', error.message)
  },
  resolveError: (payload) => {
    const data = payload as { code?: number; message?: string }
    if (data?.code && data.code !== 0) {
      return {
        code: data.code,
        message: data.message ?? '业务请求失败'
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
    console.error(error.status, error.code, error.payload)
  }
}
```

默认会顺手帮你做几件事：

- 请求时自动注入 `Authorization: Bearer <token>`
- 响应默认返回 `response.data`
- 支持把“HTTP 200 但业务失败”的情况统一转成 `HttpError`
- 给 `401`、`403`、`5xx` 这些常见状态留了集中处理钩子
- 开启 `pwa.cache` 后，`http` 的读请求也支持缓存优先读取

## Fetch 怎么接

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
        message: data.message ?? '业务请求失败'
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
    console.error(error.status, error.code, error.payload)
  }
}
```

`fetchHttp` 默认也会做这些事：

- 自动注入 `Authorization: Bearer <token>`
- 默认按响应头自动解析 `json` / `text`
- 支持 `params`、`post`、`put`、`patch`、`delete`
- 同样支持把业务失败统一转成 `HttpError`

## 防抖和节流怎么接

这两个能力底层基于 Lodash 的 `debounce` / `throttle`，只是额外帮你把返回值统一成了可 `await` 的 `Promise`，并补了 `cancel()`、`flush()`、`pending()` 这几个更适合请求场景的方法。

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

### 常用控制方法

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

- 搜索框联想、远程下拉筛选这类“输入很频繁，但只想发最后一次”的请求
- 自动保存、滚动加载、按钮防连点这类“要限速，但又不想完全丢掉后续操作”的请求
- 包装 `http`、`fetchHttp`，或者你自己封装过的 API 函数都可以

可用能力：

- 默认 `debounceRequest()` 是尾触发，`throttleRequest()` 是首尾都触发
- 支持透传 `leading`、`trailing`、`maxWait`
- 两者都返回 `Promise`，方便继续 `await`
- 都带 `cancel()`、`flush()`、`pending()` 三个辅助方法
- 这里只控制“什么时候调用函数”，不会中断已经发出去的网络请求

## 请求状态怎么接

如果页面里总是在手写 `loading`、`data`、`error`，可以用 `useRequest()` 把这层执行状态收起来。

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
import { useRequest } from '@bag/request'

const request = useRequest((keyword: string) => Promise.resolve(keyword), {
  defaultData: ''
})

await request.run('bag')
await request.refresh()
request.cancel('dialog closed')
request.reset()
```

- `loading`：当前这个请求控制器是否还有活跃任务
- `data`：最近一次有效成功结果
- `error`：最近一次有效失败结果
- `run(...args)`：执行请求并返回 `Promise`
- `refresh()`：用上一次 `run()` 的参数重新执行
- `cancel()`：让当前活跃请求失效，并立即退出当前控制器的 loading 统计
- `reset()`：清空当前控制器状态，并把 `data` 恢复到 `defaultData`

### 并发策略

`useRequest()` 现在支持三种执行策略：

- `latest`：默认值。新请求开始时，旧请求立即失效，适合搜索、筛选、切页
- `parallel`：允许多个请求并发执行，谁最后回来谁覆盖 `data`
- `block`：请求执行中再次调用 `run()` 会直接抛错，适合按钮防重复提交

## PWA 模式怎么接

```ts
import {
  http,
  fetchHttp,
  getOfflineQueueSize,
  replayOfflineQueue,
  setupFetch,
  setupHttp
} from '@bag/request'

setupHttp({
  baseURL: '/api',
  getToken: () => localStorage.getItem('token'),
  onUnauthorized: () => {
    console.log('redirect to login')
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

const article = await http.get('/articles/1', {
  pwa: {
    strategy: 'cache-first'
  }
})

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
      strategy: 'cache-first',
      ttl: 5 * 60 * 1000
    },
    queue: {
      enabled: true,
      autoReplay: true
    }
  }
})

try {
  await fetchHttp.post('/orders', {
    skuId: 'sku_1',
    quantity: 2
  })
} catch (error) {
  console.log('offline queue size:', getOfflineQueueSize(), error)
}

await replayOfflineQueue()
```

PWA 模式这层现在会做这些事：

- 开启 PWA 缓存后，`http` 和 `fetchHttp` 的读请求默认都按“缓存优先读取”处理
- `GET` / `HEAD` 请求支持 `network-first`、`cache-first`、`stale-while-revalidate`、`cache-only`
- 断网时优先回退本地缓存，适合列表、详情、配置拉取这类读请求
- `fetchHttp` 的 `POST` / `PUT` / `PATCH` / `DELETE` 可在断网时入队，网络恢复后重放
- 提供 `getNetworkStatus()`、`subscribeNetworkStatus()`、`replayOfflineQueue()`、`clearOfflineQueue()`
- 队列默认使用 `localStorage` 持久化，所以刷新页面后仍可保留

## WebSocket 怎么接

```ts
import { createWsClient, setupWs } from '@bag/request'

setupWs({
  getToken: () => localStorage.getItem('token'),
  baseURL: 'ws://localhost:8080'
})

const ws = createWsClient('/notice')

ws.open()
```

当前这层 WS 封装比较轻，默认会做这些事：

- 自动把 token 拼到查询参数里
- 自动重连 3 次，每次间隔 1 秒
- 带心跳包，默认发 `ping`

## 对外导出

- `http`
- `setupHttp()`
- `fetchHttp`
- `setupFetch()`
- `createFetchClient()`
- `useRequest()`
- `replayOfflineQueue()`
- `getOfflineQueueSize()`
- `clearOfflineQueue()`
- `getNetworkStatus()`
- `subscribeNetworkStatus()`
- `debounceRequest()`
- `throttleRequest()`
- `HttpError`
- `setupWs()`
- `createWsClient()`

## 边界

- 这个包只管请求接入层，不替你拆业务 API 模块。
- `http` 默认返回的是提取后的业务数据，不是完整的 `AxiosResponse`。
- `fetchHttp` 默认返回的是解析后的响应体，不是原始 `Response`。
- `debounceRequest()` 和 `throttleRequest()` 只负责限制调用频率，不会替你取消已发出的请求。
- `useRequest()` 负责页面执行状态收口，不会替你拆业务 API 模块，也不会直接中断已发出的网络请求。
- PWA 模式属于请求层增强，不负责 `manifest`、Service Worker 注册和安装提示 UI。
- WebSocket 这部分是轻量封装，更适合消息通知、控制台推送这类常见场景。
- 如果你们后端的鉴权方式或错误码格式比较特别，建议在宿主层通过 `setupHttp()` 或 `setupFetch()` 一次性适配掉。

## 一般怎么配

- `@bag/host-vue`：宿主启动时先把请求层配好
- `@bag/plugin-*`：业务插件里直接复用统一的 `http`、`fetchHttp` 和 WS 客户端
