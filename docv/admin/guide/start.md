# 快速开始

### App.vue

```vue

<template>
    <router-view></router-view>
</template>
<script>

</script>
<style>

</style>
```

::: details 应用语言包写法

```html

<template>
    <a-config-provider :locale="locale">
        <router-view></router-view>
    </a-config-provider>
</template>

<script>
    import zhCN from 'ant-design-vue/es/locale/zh_CN'
    import dayjs from 'dayjs'
    import 'dayjs/locale/zh-cn'

    dayjs.locale('zh-cn')
    export default {
        data() {
            return {
                locale: zhCN,
            }
        },
    }
</script>
```

:::

### main.js

```js
import {createApp} from 'vue'
import App from './App.vue'
import install from 'vue-bag-admin'
import 'vue-bag-admin/mock'
import 'vue-bag-admin/lib/style.min.css'

createApp(App).use(install).mount('#app')
```

```bash
npm run dev
```

打开浏览访问：`http://localhost:8290`

### vite.config.js

vite安装的项目, 打开vite.config.js

```ts
defineConfig({
    server: {
        host: '0.0.0.0',
        port: 8290,
        https: false,
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:8001', // 请看服务配置
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/api/, '')
            },
        }
    }
})
```

### vue.config.js

vue-cli安装的项目，打开vue.config.js

```ts
module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8290,
        https: false,
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:8001', // 请看服务配置
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}
```

## 后台服务
如没有后台，程序提供后台服务【[Egg.js](https://github.com/hangjob/vue-bag-admin/tree/master/egg)】，程序会自动完成
```bash
npm i
npm run dev
```

