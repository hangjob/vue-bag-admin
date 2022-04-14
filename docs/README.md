🎉 Vue3+Vite2.6+TypeScript+ant-design-vue构建，提供基础的框架，快速搭建企业级中后台产品，响应式管理后台系统

### 安装

```bash
npm i vue-vite-admin-ts
```

### 引入mock数据



### 使用

```typescript
import { createApp } from 'vue'
import App from './App.vue'

import install from 'vue-vite-admin-ts'
import 'vue-vite-admin-ts/lib/style.css'

import '../mock'

createApp(App).use(install).mount('#app')
```
