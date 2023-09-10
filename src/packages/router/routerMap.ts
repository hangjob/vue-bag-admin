import {RouteRecordRaw} from "vue-router"
import error from "@/packages/view/error/404.vue"
import login from "@/packages/view/login/index.vue"
import sku from "@/app/admin/view/sku/index.vue"
const routerMap: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "main",
        component: () => import("@/packages/layout/index.vue"),
        redirect: "home",
        children: [

        ],
    },
    {
        path: "/login", name: "login", meta: {title: "登录"},
        component: login,
    },
    {
        path: "/sku", name: "sku", meta: {title: "登录"},
        component: sku,
    },
    {
        path: "/:pathMatch(.*)*", meta: {title: "出错了"},
        component: error,
    },
]

export default routerMap
