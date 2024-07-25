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
                const meta = item?.meta || {};
                for (const itemKey in meta) {
                    item[itemKey] = meta[itemKey]
                }
            })
            app.breadcrumb = breadcrumbRoutes.reverse();
        }
    }
}

// 更新tabbar
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


// 更新子菜单
function updataSubMenu(app, to) {
    const data = app.menus.find((item) => item.id === to.meta.topId)
    app.subMenus = (data && data.children) || []
}

router.afterEach((to, from) => {
    const app = useGlobalStore()
    app.currentRouter = to;
    updataTabs(app, to)
    updataBreadcrumbMenus(app, to)
    updataPersistenceTabs(app, to)
    updataSubMenu(app, to)
})

export default router;
