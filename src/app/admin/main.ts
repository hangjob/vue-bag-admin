import {createApp, shallowRef} from "vue"
// @ts-ignore
import App, { install,router } from "@/packages/install.vue"
// import App from "./App.vue"
// import install from "@/packages/install.ts"
// import router from "@/app/admin/router"
import headerUserSet from "@/app/admin/components/headerUserSet.vue"

import {setupProdMockServer} from "__ROOT__/mock/mockProdServer.ts"

if (process.env.NODE_ENV === "production") {
    setupProdMockServer()
}

createApp(App).use(install, {
    menus: [
        // {
        //     "id": 9000,
        //     "title": "首页",
        //     "icon": "Home",
        //     "path": "/home",
        //     "pid": 0,
        //     "file": "/view/home/index.vue",
        // }
    ],
    getViews: () => {
        return import.meta.glob("@/app/admin/view/**/*.vue", {eager: true})
    },
    website: {},
    components: {
        headerUserSet: null
    },
}).use(router).mount("#app")
