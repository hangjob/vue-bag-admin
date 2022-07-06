### 网络配置

```ts
const httpNetwork = {
    // 请求头
    headers: {
        'content-type': 'application/json;charset=UTF-8',
    },
    //消息框消失时间
    messageDuration: 2.5,
    //最长请求时间
    requestTimeout: 20000,
    //操作正常code码
    successCode: [1, 1000],
    // 重连间隔时间
    retryDelay: 3000,
    // 最大重试次数
    retry: 2,
    // 默认请求前缀url
    baseURL: '/api',
    // 白名单
    whiteList: ['/login', '/403', '/404', '/500', '/502', '/test'],
    // 重置路由
    resetPath: '/login',
}
```
