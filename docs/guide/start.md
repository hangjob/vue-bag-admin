# 快速开始

```javascript
import {app} from "vue-bag-admin"

app.mount('#app')
```

```bash
npm run dev
```

### 加载路由

```bash
pnpm install vue-router -S
```

```javascript
import {createWebHashHistory} from "vue-router"
import {app, framework, plugins} from "vue-bag-admin"

framework.use(plugins.useRouterPlugin, { // 路由插件
    files,
    history: createWebHashHistory()
})
app.mount('#app')
```
