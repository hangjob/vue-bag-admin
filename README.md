🎉vue-bag-admin使用Vue3+Vite2.6+TypeScript+ant-design-vue构建，提供基础的框架，快速搭建企业级中后台产品，响应式管理后台系统

### 安装

```bash
npm i vue-bag-admin -save
```

### 使用

#### App.vue

```vue
<template>
    <router-view></router-view>
</template>
```

#### main.js
```typescript
import { createApp } from 'vue'
import App from './App.vue'

import install from 'vue-bag-admin'
import 'vue-bag-admin/lib/style.css'
import install from 'vue-bag-admin/mock' // 进入mock数据

createApp(App).use(install).mount('#app')
```


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

