🎉vue-bag-admin使用Vue3+Vite2.6+TypeScript+ant-design-vue构建，提供基础的框架，快速搭建企业级中后台产品，响应式管理后台系统

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
