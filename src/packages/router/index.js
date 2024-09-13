import useGlobalStore from "@/packages/pinia/global.js";
import {findParents} from "@/packages/helpers"
import lscache from "lscache"
import {replaceOrAppend} from "radash";


// 处理面包屑导航
function updataBreadcrumbMenus(ctx, app, to) {
    const breadcrumbMenus = findParents(app.menus, to.meta.id)
    if (breadcrumbMenus) {
        app.breadcrumb = breadcrumbMenus.reverse()
    } else {
        const breadcrumbRoutes = findParents(ctx?.router?.getRoutes?.(), to.meta.id, (item) => item.meta.id)
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
    app.dispatchTabs({path: to.path, ...to.meta, query: to.query})
}

// 更新持久化存储
function updataPersistenceTabs(app, to) {
    if (to && Object.keys(to.meta).length && app.configs.isDataPersistence) {
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

// 更新菜单
function updataMenus(app, to) {
    const item = app.appGroups.find((t) => t.id === app.currentRouter.meta.topId)
    item ? app.dispatchMenus(item.children) : app.dispatchMenus(app.sourceMenus)
}


function afterEach(ctx, options) {
    ctx?.router?.afterEach?.((to, from) => {
        const globalStore = useGlobalStore()
        globalStore.currentRouter = to;
        updataTabs(globalStore, to)
        updataBreadcrumbMenus(ctx, globalStore, to)
        updataPersistenceTabs(globalStore, to)
        updataSubMenu(globalStore, to)
        updataMenus(globalStore, to)
    })
}


export {
    afterEach,
}
