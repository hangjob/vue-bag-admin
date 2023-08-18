import {RouteRecordRaw} from "vue-router"

const routerMap: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "main",
        component: () => import("@/packages/layout/index.vue"),
        redirect: "home",
        children: [],
    },
    {
        path: "/login", name: "login", meta: {title: "登录", isAuth: false},
        component: () => import("@/packages/view/login/index.vue"),
    },
    {
        path: "/:pathMatch(.*)*", meta: {title: "出错了", isAuth: false},
        component: () => import("@/packages/view/error/404.vue"),
    },
]

export default routerMap
