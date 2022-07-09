### 环境
[Vite官方文档](https://vitejs.dev/)、[Vite官方中文文档](https://cn.vitejs.dev/)
>Vite 需要 Node.js 版本 >= 12.2.0。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。

### 创建
>安装Vue程序的模板
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

### 安装依赖
```bash
cd my-vue-app
npm install
```

### 安装cnpm
>如果安装过慢、使用cnpm安装
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
cd my-vue-app
cnpm install
```


### 管理端
```js
import { createApp } from 'vue'
import App from './App.vue'
import install from 'vue-bag-admin'
import 'vue-bag-admin/mock/admin'
import 'vue-bag-admin/style.min.css'
createApp(App).use(install).mount('#app')
```

#### 启动项目
```bash
npm run dev
```

### web端
```js
import { createApp } from 'vue'
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

```ts
npm install 
```

##### 启动服务
```
npm run dev
```
