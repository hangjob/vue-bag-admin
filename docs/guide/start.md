# 快速开始

在构建整个框架的过程中，均使用插件开发，可以看[框架介绍](/guide/intro)架构图

```javascript
import install from "vue-bag-admin"
const {app} = install()

app.mount('#app')
```

```bash
npm run dev
```

## 加载路由插件

```bash
pnpm install vue-router -S
```

```javascript
import {createWebHashHistory} from "vue-router"
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

framework.use(plugins.useRouterPlugin)
app.mount('#app')
```

## 进阶参数

#### routes

```javascript
import {createWebHashHistory} from "vue-router"
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/app/views/home/index.vue'),

            }]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/app/views/about/index.vue'),

    },
]
framework.use(plugins.useRouterPlugin, {
    routes // 添加路由 会自动覆盖框架默认路由
})
app.mount('#app')
```

#### files

```javascript
import {createWebHashHistory} from "vue-router"
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true}) // 获取所有文件路由地址，配合接口插件一起使用，动态路由
framework.use(plugins.useRouterPlugin, {
    files,
})
framework.use(plugins.useApisPlugin, ['/menus'])
app.mount('#app')
```

#### router

```javascript
import {createRouter, createWebHashHistory} from "vue-router"
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true}) // 获取所有文件路由地址，配合接口插件一起使用，动态路由

// 传递创建的实例
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/app/views/home/index.vue'),

            }]
    },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/app/views/about/index.vue'),
        }],
})

framework.use(plugins.useRouterPlugin, {
    files,
    router
})

framework.use(plugins.useApisPlugin, ['/menus'])
app.mount('#app')
```
