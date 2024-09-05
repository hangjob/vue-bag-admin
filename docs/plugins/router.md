# 路由插件

`useRouterPlugin`为框架提供默认路由插件源码

```javascript
import {createRouter, createWebHistory} from "vue-router"
import {defaultBuiltRouter} from "@/packages/router/routes.js";

export class RouterPlugin {
    constructor() {
        this.name = 'RouterPlugin'
    }

    install({ctx}, options = {}) {
        const {router, ...args} = options;
        ctx.router = router || createRouter({  // 如果有router，则使用router，否则使用默认的router
            history: createWebHistory(options.base || '/'), // 默认使用History模式
            routes: ctx.helpers.deepMergeArrays(defaultBuiltRouter, options.routes || []), // 合并默认路由与用户配置路由
            ...args // 其他参数可以覆盖默认配置
        });
        ctx.app.use(ctx.router)
    }
}

export const useRouterPlugin = new RouterPlugin()

```

## 使用Hash模式

用法根正常使用[Vue-Router](https://router.vuejs.org/zh/guide/)一致

```javascript
import {createRouter, createWebHashHistory} from "vue-router"
import {app, framework, plugins} from "vue-bag-admin"

const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true})
framework.use(plugins.useRouterPlugin, {
    files,
    history: createWebHashHistory(),
    routes: [] // 自定义路由
})
app.mount('#app')
```

## 传递Router对象

```javascript
import {app, framework, plugins} from "vue-bag-admin"
import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/app/views/home/index.vue'),

            }, {
                path: '/about',
                name: 'about',
                component: () => import('@/app/views/about/index.vue'),
            }]
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/app/views/home/index.vue'),

    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true})
framework.use(plugins.useRouterPlugin, {
    files,
    router
})
app.mount('#app')
```

## File对象

> 通过传递`files`对象，框架就能寻找到外部文件，根据文件规则生成相对应的路由，一般作用于配合菜单使用

```javascript
import {app, framework, plugins} from "vue-bag-admin"

const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true})
framework.use(plugins.useRouterPlugin, {
    files,
})
app.mount('#app')
```

## Menus

框架支持默认接口菜单，也可以通过传递`menus`参数，框架会自动生成路由，当同时配置接口菜单和`menus`参数，数据会进行合并

```javascript
import {app, framework, plugins} from "vue-bag-admin"

framework.use(plugins.useRouterPlugin, {
    files,
    menus: [
        {
            id: 1,
            title: '首页',
            localesKey: 'home',
            file: '/src/app/views/home/index.vue',
            path: '/home',
            name: 'home',
            icon: 'BookOutline',
            hasClose: false,
            sort: 100
        },
        {
            id: 2,
            title: '用户管理',
            localesKey: 'userManagement',
            file: '/src/app/views/user/index.vue',
            path: '/user',
            name: 'user',
            icon: 'BookOutline',
            hasClose: true
        },
    ]
})
app.mount('#app')
```

```javascript
插件源码
ctx.apis.Menus.httpGet // [!code focus]
```
