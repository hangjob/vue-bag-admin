vue-bag-admin使用Vue3+Vite2.6+TypeScript+ant-design-vue构建，提供基础的框架，快速搭建企业级中后台产品，响应式管理后台系统，
使用构建依赖包的形式，开发只需引入依赖即可

[在线体验](https://vite.itnavs.com/)

### 🎉

- 💪 一键配置，快速开发
- 🌍 动态扩展页面和配置定制
- 🚀 跨平台 PC、手机端、平板
- 📦️ 后端路由动态渲染
- 🥳 开源版本支持免费商用

### 安装

```bash
npm i vue-bag-admin -save
```

### 使用

### App.vue

```vue
<template>
    <router-view></router-view>
</template>
```

### main.js
```typescript
import { createApp } from 'vue'
import App from './App.vue'

import install from 'vue-bag-admin'
import 'vue-bag-admin/lib/style.css'
import 'vue-bag-admin/mock' // 进入mock数据

createApp(App).use(install).mount('#app')
```

### 🌐 文档

[在线文档](https://hangjob.github.io/vue-bag-admin/#/)

#### 对接自己业务后端

需要自己的完成对接相关API

```javascript
['/api/app/router', '/api/user/logout', '/api/user/login', '/api/user/userinfo'] 
```

返回数据格式如下：

```typescript
interface resultData {
    code: number, // 1 或者 1000 为成功
    message: string,
    data: any,
}
```


>更多问题咨询，进群回复

![./wx.jpg](./wx.jpg)

