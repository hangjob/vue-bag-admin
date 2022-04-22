### 具体用法

```js
const $options = {
    config: {
        httpNetwork: {
            retry: 3,
            requestTimeout: 3000,
            baseURL: '/api',
            resetPath: '/login',
        },
    },
}
app.use(install, $options).mount('#app')
```

### 参数

#### headers

?>类型：Object

?>请求头，默认{'content-type': 'application/json;charset=UTF-8'}

#### messageDuration

?>类型 Number

?>触发消息框的消失时间，默认2.5秒，注意单位是秒，消息框显示取决于业务调用传递参数

```js
post('/app/router', params, { notify: true }) // 开启消息框提示
```

#### requestTimeout

?>类型 Number

?>发送请求的超时时间，默认超时时间6000毫秒

#### successCode

?>类型：Array

?>默认[1, 1000]，为接口成功的业务code嘛，其他一律为catch所捕获

#### retry

?>类型：Number

?> 重连次数，默认为2次，开启重连取决于实际业务调用传递的参数

```js
post('/app/router', params, { relink: true }) // 开启重连
```

#### retryDelay

?>类型：Number

?>重连间隔时间,默认3000毫秒

#### baseURL

?>类型：String

?>请求路径前缀，默认是/api

#### whiteList

?>类型：Array

?> 那些路由是不要用户是否具有合法的请求，默认['/login', '/403', '/404', '/500', '/502', '/test']

#### resetPath

?>类型： String

?> 设置网络链接异常跳转的路由地址，默认/login
