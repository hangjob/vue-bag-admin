# 路由布局


在某些情况下，我们需要将路由进行重新布局，例如：

## App

```vue

<template>
    <router-view name="lessen"></router-view>
</template>
<script setup>
</script>
```

> [!TIP]
> `name`用于指定路由模板的名称，`lessen`为框架内置的路由模板值

```js
import install from "vue-bag-admin"
import App from "./App.vue"

const {app, framework, plugins} = install(App)
```

### 附带框架源码

这里是框架的源码，方便开发者理解，这里参数也是同步[官方](https://cn.vuejs.org/api/application)

```javascript
function install(elApp = null, rootProps = {}) {
    const app = createApp(elApp || App, {
        ...rootProps,
    })
}
```

