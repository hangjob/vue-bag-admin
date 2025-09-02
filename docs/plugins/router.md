# 安装

```bash
pnpm add vue-router -S
```

## 路由插件

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
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

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
import install from "vue-bag-admin"
const {app, framework, plugins} = install()
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
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true})
framework.use(plugins.useRouterPlugin, {
    files,
})
app.mount('#app')
```

## handleMenus

获取菜单数据，可以通过接口获取菜单数据，也可以通过传递一个数组来获取菜单数据

该函数类型可以是一个函数返回一个Promise，也可以是一个数组

```javascript
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

framework.use(plugins.useRouterPlugin, {
    files,
    handleMenus: ({ctx}) => {
        // 使用了API插件获取数据
        return ctx.apis.Menus.httpGet({'pagination[limit]': '-1'}) // 从接口获取菜单数据
    }
})

framework.use(plugins.useRouterPlugin, {
    files,
    handleMenus: [
        {
            id: 1,
            title: '首页',
            localesKey: 'home',
            file: '/src/app/views/home/index.vue',
            path: '/home',
            name: 'home',
            icon: 'BookOutline',
            hasClose: false,
            sort: 100,
            hasMenu: false,
            hasRouter: false,
            overlayRouting: false,
            children: []
        },
        {
            id: 2,
            title: '用户管理',
            localesKey: 'userManagement',
            file: '/src/app/views/user/index.vue',
            path: '/user',
            name: 'user',
            icon: 'BookOutline',
            hasClose: true,
            hasMenu: false,
            hasRouter: false,
            overlayRouting: false,
            children: []
        },
    ],
})
app.mount('#app')
```

## handleGroups

框架应用分类获取菜单数据，可以通过接口获取菜单数据，也可以通过传递一个数组来获取菜单数据

```javascript
framework.use(plugins.useRouterPlugin, {
    files,
    handleGroups: ({ctx}) => {
        // 使用方式同上
    }
})
```

## 示例说明

```javascript
// main.js
import install from "vue-bag-admin"
const files = import.meta.glob("@/app/web/views/**/*.vue", {eager: true})
const {app, framework, plugins} = install()
framework.use(plugins.useRouterPlugin,{
    files,
    handleMenus:()=>[
        {
            id: 1,
            title: "登录",
            localesKey: "home",
            file: "/src/app/web/views/login/index.vue", // 覆盖登录页面
            path: "/login",
            name: "login",
            icon: "BookOutline",
            hasClose: false,
            sort: 100,
            hasMenu: true,
            overlayRouting: true,
            root: "/",
            hasTab: true,

        },
        {
            id: 2,
            title: "登录",
            localesKey: "home",
            file: "/src/app/web/views/home/index.vue", // 覆盖登录页面
            path: "/home",
            name: "home",
            icon: "BookOutline",
            hasClose: false,
            sort: 100,
            hasMenu: true,
            overlayRouting: true,
            root: "/",
            hasTab: true,
        },
    ]
})
app.mount("#app")
```

## 插件参数说明

| 属性           |      类型       |              说明               |
|--------------|:-------------:|:-----------------------------:|
| files        |    Object     |    通过`import.meta.glob`获取     |
| errorRoute   |    Object     |            错误路由的面             |
| handleMenus  | Array/Promise |  返回菜单数组，或者一个Promise(适用于网络接口)  |
| handleGroups | Array/Promise | 返回菜单分组，或者返回一个Promise(适用于网络接口) |
| base         |    String     |       vue-router参数保持一致        |
| ...          |      ...      |     更多属性跟vue-router参数保持一致     |

## 菜单属性说明

| 属性             |   类型    |      说明       |
|----------------|:-------:|:-------------:|
| id             | number  |     菜单id      |
| title          | string  |     菜单名称      |
| localesKey     | string  |  菜单名称的国际化key  |
| file           | string  |   菜单对应的文件路径   |
| path           | string  |    菜单对应的路径    |
| name           | string  |   菜单对应的路由名称   |
| icon           | string  |    菜单对应的图标    |
| hasClose       | boolean |    是否有关闭按钮    |
| sort           | number  |     菜单排序      |
| hasMenu        | boolean |     是否有菜单     |
| hasRouter      | boolean |     是否有路由     |
| hasTab         | boolean |    是否有tab     |
| root           | string  | 路由布局，默认layout |
| keepAlive      | boolean |    是否缓存路由     |
| overlayRouting | boolean |    是否覆盖路由     |
| children       |  array  |     子菜单数据     |
| extra          | stirng  |      角标       |

