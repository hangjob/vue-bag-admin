# Api插件

在框架内部使用的是[alova.js](https://alova.js.org/zh-CN/tutorial/getting-started/introduce),作为基础请求工具，alova
提供了基础的，与 axios 相似的基础请求能力，你可以配合 axios、fetch 等任何请求库使用，获得响应缓存、请求共享等开箱即用的特性

```javascript
export class ApisPlugin {
    constructor() {
        this.name = 'ApisPlugin'
    }

    install({ctx}, options = []) {
        ctx.apis = {...ctx.http};
        options.forEach((item) => {
            const api = ctx.apis[item.replace(/\/(\w)/g, (_, c) => (c ? c.toUpperCase() : ""))] = {url: item} // 转成驼峰规则
            api.httpGet = (params, config) => ctx.http.httpGet(api.url, params, config)
            api.httpPost = (params, config) => ctx.http.httpPost(api.url, params, config)
        });
        if (typeof window === 'object') {
            if (!window.$apis) {
                window.$apis = ctx.apis
            }
        }
    }
}

export const useApisPlugin = new ApisPlugin()
```

## 注册插件

```javascript
import {app, framework, plugins} from "vue-bag-admin"

const apis = ['/auth/local/register', '/auth/local', '/menus', 'secretkey']
framework.use(plugins.useApisPlugin, apis)
app.mount('#app')
```

## 使用

#### $global框架内置全局模板属性

```vue

<template>
    <div>
        <!--   $global框架内置全局模板变量     -->
        <n-button @click="handleClick($global)">发送请求</n-button>
    </div>
</template>
<script setup>
const form = {};// 传递参数
const handleClick = ($global) => {
    $global.apis.AuthLocal.httpPost(form).then((res) => {
        console.log(res)
    })
}
</script>
```

#### getCurrentInstance获取全局属性

在vue3的官方文档中描述getCurrentInstance:可以获取挂载在全局的属性和获取上下文

```vue

<template>
    <div>
        <n-button @click="handleClick">发送请求</n-button>
    </div>
</template>
<script setup>
const form = {};// 传递参数
const {appContext: {config: {globalProperties}}} = getCurrentInstance(); // [!code focus]
const handleClick = () => {
    globalProperties.$global.apis.AuthLocal.httpPost(form).then((res) => {
        console.log(res)
    })
}
</script>
```

#### 修改url

在发送的过程需要临时修改url

```vue

<template>
    <div>
        <n-button @click="handleClick($global)">发送请求</n-button>
    </div>
</template>
<script setup>
const form = {};// 传递参数
const handleSubmit = ($global) => {
    $global.apis.AuthLocal.url = '/edit/api/url' // [!code focus]
    // 实际发生出去的就是 /api/edit/api/url // [!code focus]
    $global.apis.AuthLocal.httpPost(form).then((res) => {
        console.log(res)
    })
}
</script>
```

#### 修改baseURL
alova非常灵活，更多修改参数[method官方配置](https://alova.js.org/zh-CN/api/method#methodurl)
```vue

<template>
    <div>
        <n-button @click="handleClick($global)">发送请求</n-button>
    </div>
</template>
<script setup>
const form = {};// 传递参数
const handleSubmit = ($global) => {
    const method = $global.apis.AuthLocal.httpPost(form)
    method.baseURL = '/api2' // 修改baseURL  // [!code focus]
    method.url = '/edit/api/url' // 也能修改url  // [!code focus]
    method.send().then((res) => { // 调用send发送请求
        console.log(res)
    })
}
</script>
```
