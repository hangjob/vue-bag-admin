import { RouteRecordRaw } from "vue-router"

const routerMap: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "main",
        component: () => import("@/packages/layout/index.vue"),
        redirect: {name: "home"},
        children: [
            {
                path: "/home", name: "home", meta: { title: "首页" },
                component: () => import("@/packages/view/home/index.vue"),
            }
        ],
    },
    {
        path: "/login", name: "login", meta: { title: "登录" },
        component: () => import("@/packages/view/login/index.vue"),
    },
    {
        path: "/test", name: "test", meta: { title: "测试" },
        component: () => import("@/packages/view/test/index.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/packages/view/error/404.vue"),
    },
]

export default routerMap
