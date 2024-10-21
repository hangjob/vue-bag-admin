# 中间件

为了解决在网络请求，处理响应，路由等过程中，需要对请求进行预处理，比如验证用户登录状态，权限，日志记录等，可以使用中间件。
以及处理路由拦截，错误处理等。

### 网络

如果使用本框架的提供的网络服务，可以使用中间件来处理网络请求，响应，路由等

```javascript
import install from "vue-bag-admin"

const {middleware} = install()
// 这里监听API:REQUEST事件，如果请求返回的状态码不是200，则弹出错误提示
middleware.eventEmitter.on('API:REQUEST', ({json, text, response}) => {
    if (text) {
        window.$naive.message.warning(text || response.statusText) // 请求不通
    } else {
        window.$naive.message.warning(json?.error?.message) // 接口响应错误 
    }
})
// 这里监听API:SUCCESS事件，如果请求返回的状态码是200，则弹出成功提示
middleware.eventEmitter.on('API:SUCCESS', ({json, response}) => {
    console.log('请求成功')
})
```

## 路由

路由中间件可以监听路由的跳转，跳转前，跳转后等事件。

```javascript
// 路由跳转前
import install from "vue-bag-admin"
const {middleware} = install()
middleware.eventEmitter.on('ROUTER:BEFORE', (to, from, next) => {
    next() // 需要调用next()方法，否则路由不会跳转
})
```

```javascript
// 路由跳转后
import install from "vue-bag-admin"
const {middleware} = install()
middleware.eventEmitter.on('ROUTER:AFTER', (to, from) => {
    console.log(to)
})
```
