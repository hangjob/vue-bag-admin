🎉 Vue3+Vite2.6+TypeScript+ant-design-vue构建，提供基础的框架，快速搭建企业级中后台产品，响应式管理后台系统

### 安装

```bash
npm i vue-bag-admin
```

### 引入mock数据



### 使用

```typescript
import { createApp } from 'vue'
import App from './App.vue'

import install from 'vue-bag-admin'
import 'vue-bag-admin/lib/style.css'

import '../mock'

createApp(App).use(install).mount('#app')
```
