# 快速上手

## 环境

[Vite官方文档](https://vitejs.dev/)、[Vite官方中文文档](https://cn.vitejs.dev/)

Vite3.0 需要 Node.js 版本 >= 14.2.0。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。

如果访问速度慢、切换镜像源
::: tip 腾讯云

```bash
npm config set registry http://mirrors.cloud.tencent.com/npm/ 
```

华为云

```bash
npm config set registry https://mirrors.huaweicloud.com/repository/npm/ 
```

淘宝

```bash
npm config set registry https://registry.npmmirror.com
```

:::

## Vite创建项目

安装Vue程序的模板，下一代前端开发与构建工具

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

## Vue CLI创建项目

[Vue CLI官方文档](https://cli.vuejs.org/zh/)，Vue.js 开发的标准工具

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

### 安装Bag-admin

```bash
npm i vue-bag-admin --save
```

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

### main.js

```js
import { createApp } from 'vue'
import App from './App.vue'
import install from 'vue-bag-admin'
import 'vue-bag-admin/lib/style.min.css'

createApp(App).use(install).mount('#app')
```

### 配置服务代理

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

```bash
npm run dev
```
打开浏览访问：`http://localhost:8290`

## 后台服务

::: tip 如果没有后端，可以程序的提供的Egg.js程序
:::

[点击下载Eggjs程序](https://github.com/hangjob/vue-bag-admin/egg.zip)

### 安装依赖

下载完程序进入到程目录当中

```bash
npm install 
```

打开egg/config/config.default.js， 配置自己的数据库

```ts
module.exports = appInfo => {
    const config = {}
    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root', // 数据库用户名
        password: '123456', // 数据库密码
        database: 'bag',
        define: { // model的全局配置
            timestamps: true, // 添加create,update,delete时间戳
            paranoid: false, // 添加软删除
            freezeTableName: true, // 防止修改表名为复数
            underscored: false, // 防止驼峰式字段被默认转为下划线
        },
    }
    // 如果没有redis测可以不用配置
    config.redis = {
        clients: {
            bag: {
                port: 6379,
                host: '127.0.0.1',
                password: 'oqpm38mfny8',
                db: 0,
            },
        },
    }
    return config
}
```

##### 启动服务

```
npm run dev
```
