import {createRouter, createWebHistory} from "vue-router"
import {defaultBuiltRouter} from "@/packages/router/routes.js"
import useGlobalStore from "@/packages/pinia/global.js";
import {findParents} from "@/packages/helpers"
import lscache from "lscache"
import {replaceOrAppend} from "radash";

const router = createRouter({
    history: createWebHistory(),
    routes: defaultBuiltRouter
})


// 处理面包屑导航
function updataBreadcrumbMenus(app, to) {
    const breadcrumbMenus = findParents(app.menus, to.meta.id)
    if (breadcrumbMenus) {
        app.breadcrumb = breadcrumbMenus.reverse()
    } else {
        const breadcrumbRoutes = findParents(router.getRoutes(), to.meta.id, (item) => item.meta.id)
        if (breadcrumbRoutes) {
            breadcrumbRoutes.forEach((item) => {
                item.title = item?.meta?.title
                item.id = item?.meta?.id
            })
            app.breadcrumb = breadcrumbRoutes.reverse();
        }
    }
}

// 更新tab
function updataTabs(app, to) {
    app.dispatchTabs({path: to.path, ...to.meta})
}

// 更新持久化存储
function updataPersistenceTabs(app, to) {
    if (to && app.configs.isDataPersistence) {
        const data = {...to.meta, path: to.path};
        const tabs = replaceOrAppend(lscache.get('tabs') || [], data, f => f.id === data.id)
        app.tabs = tabs
        lscache.set('tabs', tabs)
    }
}

// 处理
router.afterEach((to, from) => {
    const app = useGlobalStore()
    app.currentRouter = to;
    updataTabs(app, to)
    updataBreadcrumbMenus(app, to)
    updataPersistenceTabs(app, to)
})

export default router;
