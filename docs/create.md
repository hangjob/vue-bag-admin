### 环境

[Vite官方文档](https://vitejs.dev/)、[Vite官方中文文档](https://cn.vitejs.dev/)
> Vite 需要 Node.js 版本 >= 12.2.0。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。

### 1、Vite创建项目

> 安装Vue程序的模板，下一代前端开发与构建工具

```bash
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue
```

### 2、Vue CLI创建项目

> [Vue CLI官方文档](https://cli.vuejs.org/zh/)，Vue.js 开发的标准工具

```bash
npm install -g @vue/cli 
然后就可以使用vue命名
vue create my-vue-app
```

### 安装依赖

```bash
cd my-vue-app
npm install
```

##### 安装cnpm

?> 如果安装过慢、使用cnpm安装

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
cd my-vue-app
cnpm install
```

### 配置服务代理

> vite安装的项目, 打开vite.config.js

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

> vue-cli安装的项目，打开vue.config.js

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

### 管理端

> App.vue

```vue

<template>
    <router-view></router-view>
</template>
<script>

</script>
<style>

</style>
```

> main.js

```js
import {createApp} from 'vue'
import App from './App.vue'
import install from 'vue-bag-admin'
import 'vue-bag-admin/mock/admin'
import 'vue-bag-admin/lib/style.min.css'

createApp(App).use(install).mount('#app')
```

#### 启动项目

```bash
npm run dev
```

### web端

> App.vue

```vue

<template>
    <router-view></router-view>
</template>
<script>

</script>
<style>

</style>
```

> main.js

```js
import {createApp} from 'vue'
import App from './App.vue'
import install from 'vue-bag-admin/lib-web/index.es.js'
import 'vue-bag-admin/mock/index'
import 'vue-bag-admin/lib-web/style.min.css'

createApp(App).use(install).mount('#app')
```

#### 启动项目

```bash
npm run dev
```

### 后台服务

> [点击下载Eggjs程序](https://github.com/hangjob/vue-bag-admin/egg.zip)

##### 安装依赖

```bash
npm install 
```

> 打开egg/config/config.default.js， 配置自己的数据库

```ts
module.exports = appInfo => {
    const config = {}
    config.sequelize = {
        dialect: 'mysql',
        host: 'x.xx.xx.xx',
        port: 3306,
        username: 'xxxxxxx', // 数据库用户名
        password: 'xxxxxxx', // 数据库密码
        database: 'xxxxxxx',
        define: { // model的全局配置
            timestamps: true, // 添加create,update,delete时间戳
            paranoid: false, // 添加软删除
            freezeTableName: true, // 防止修改表名为复数
            underscored: false, // 防止驼峰式字段被默认转为下划线
        },
    }
    return config
}
```

##### 启动服务

```
npm run dev
```
