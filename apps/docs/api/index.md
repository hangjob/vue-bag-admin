# API 参考

本节列出了 Vue-Bag-Admin 提供的核心接口、类型定义以及通用工具库。

## `@bag/core`

核心包，提供了系统运行所需的基础契约和引导方法。

### `AdminPlugin`

定义一个业务插件的 TypeScript 接口。

```typescript
interface AdminPlugin {
  /**
   * 插件自带的 Vue 路由列表
   */
  routes?: RouteRecordRaw[]
  
  /**
   * 注入到全局侧边栏的菜单项
   */
  menus?: MenuConfig[]
  
  /**
   * i18n 多语言词条
   */
  locales?: Record<'zh-CN' | 'en' | string, any>
  
  /**
   * 插件安装时的生命周期钩子
   * @param app Vue App 实例
   * @param options 包含 router 等全局对象的上下文
   */
  install?: (app: App, options: PluginContext) => void | Promise<void>
}
```

### `bootstrapPlugins(app, plugins)`

系统初始化函数。

- **参数**:
  - `app`: `App` - Vue 根实例。
  - `plugins`: `AdminPlugin[]` - 插件数组。
- **功能**:
  1. 将插件的路由注入到全局 Router 中。
  2. 收集所有插件的菜单，保存至 Store。
  3. 合并各个插件的多语言词条。
  4. 依次执行插件的 `install` 方法。

---

## `@bag/request`

基于 Axios 封装的高级请求库，提供了统一的拦截、Token 注入、无感刷新及错误处理机制。

### `setupHttp(config)`

在系统启动时配置全局请求实例。

```typescript
import { setupHttp } from '@bag/request'

setupHttp({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000, // 直接透传 Axios 的所有配置，如 headers、withCredentials 等
  headers: {
    'X-Custom-Header': 'foobar'
  },
  getToken: () => userStore.token, // 动态获取 Token
  onUnauthorized: () => {
    // 401 时的回调逻辑，例如退出登录并跳转
  }
})
```

### `http`

导出的全局 Axios 实例，直接使用即可。内置了泛型支持。

```typescript
import { http } from '@bag/request'

// GET 请求
const data = await http.get<any, ResponseType>('/api/users')

// POST 请求
const result = await http.post<any, ResponseType>('/api/articles', { title: 'Hello' })
```

### 扩展业务拦截器

底层 `@bag/request` 仅封装了基础的 `Token` 注入和 `401` 无权限跳转逻辑。
在实际的业务开发中（例如 `apps/admin/src/main.ts` 中），我们强烈建议你**直接使用导出的 `http` 实例，以 Axios 最原生的方式**挂载你自己的业务拦截器（如全局 Loading、状态码判定等）。

这样做不仅零学习成本，还能保持底层包的纯粹性：

```typescript
import { setupHttp, http } from '@bag/request'

// 1. 初始化基础配置
setupHttp({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  getToken: () => userStore.token,
  onUnauthorized: () => {
    // 处理 Token 失效
  }
})

// 2. 追加业务级：请求拦截器
http.interceptors.request.use((config) => {
  // 比如：追加一个客户端标识
  config.headers['X-Client'] = 'Admin-Web'
  // 比如：开启全局 Loading
  return config
})

// 3. 追加业务级：响应拦截器
http.interceptors.response.use(
  (response) => {
    // 比如：关闭全局 Loading
    
    // 拦截业务逻辑状态码 (假设后端规范总是返回 { code, data, message })
    const resData = response.data
    if (resData.code && resData.code !== 200) {
      console.error(resData.message)
      return Promise.reject(new Error(resData.message))
    }
    return response
  },
  (error) => {
    // 统一处理除了 401 外的其他报错
    if (error.response?.status === 500) {
      console.error('服务器内部错误')
    } else if (error.code === 'ECONNABORTED') {
      console.error('请求超时，请稍后重试')
    }
    return Promise.reject(error)
  }
)
```
