# 内置请求

[Axios](https://www.axios-http.cn/docs/intro)是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(
即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用
XMLHttpRequests。


## 设置前缀
```javascript
// main.js
import App, {install, router,axios} from "vue-bag-admin"
axios.defaults.baseURL = '/api'
```

## 拦截请求实列

> axios是先寻找全局的defaults配置，然后在找实列化的配置，在找请求配置，依次按顺序执行进行合并，后面的会覆盖前面的

```typescript
import {axios} from "vue-bag-admin"

// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (err: AxiosError) => {
    return Promise.reject(err)
})

// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
    return response
}, async (err: AxiosError) => {
    return Promise.reject(err)
})
```

## 请求封装

```typescript
const post = (url: string, params?: any, config?: AxiosRequestConfig) => http.post(url, params, config)

const get = (url: string, params?: any, config?: AxiosRequestConfig) => http.get(url, {params, ...config})
```

## 失败重连

框架已内置该插件无需安装
[axios-retry](http://axios-js.com/zh-cn/docs/axios-retry.html)

