import {http} from "@/packages/install.js";
import {md5} from 'js-md5';


const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true})

/**
 * 添加路由，需要扩展路由路由布局，在此处理
 * @param ctx
 * @param routes
 */
function useAddRouter(ctx, routes = []) {
    if (ctx.radash.isArray(routes)) {
        ctx.helpers.depthForEach(routes, (item) => {
            if (!ctx.router.hasRoute(item.name)) {
                const {component, name, path, ...meta} = item
                // 注意这里，如果不过扩展meta属性，其他属性添加不进去，被addRoute过滤了
                ctx.router.addRoute(item.root ? item.root : 'layout', {
                    component, name, path, meta,
                })
            }
        })
    }
}

/**
 * 获取本地路由根节点根据路径打印标记
 * @returns {*[]}
 */
function loadLocalRoutes() {
    const localRoutes = []
    for (const key in files) {
        const module = files[key]
        localRoutes.push({component: module.default, md5: md5(key), file: key})
    }
    return localRoutes
}

/**
 * 根据返回的菜单跟本地路由根路由形成节点关系
 * @param userMenus
 * @returns {*[]}
 */
function mapMenusToRoutes(userMenus) {
    const localRoutes = loadLocalRoutes()
    const routes = []
    const loop = function (list) {
        for (const item of list) {
            const routeInfo = localRoutes.find((route) => route.md5 === item.md5)
            if (routeInfo) {
                let {children, ...newItem} = {...item, ...routeInfo}
                routes.push(newItem)
            }
            item.children && loop(item.children)
        }
    }
    loop(userMenus)
    return routes
}


function commonMenuItem(ctx, data) {
    const t = ctx.i18n?.global?.t
    if (ctx.radash.isArray(data)) {
        ctx.helpers.depthForEach(data, (item) => {
            const topIds = ctx.helpers.findParents(data, item.id) // 获取当前的菜单的父级ID
            item.md5 = item.file ? md5(item.file) : null // 对每一个数据打印标记
            item.icon = ctx.helpers.getIcons(ctx, item.icon) // 转换传递过来的icon为render函数
            item.title = ctx.helpers?.formatTitle(ctx, item, true);
            if (ctx.radash.isArray(topIds)) {
                const topId = topIds[topIds.length - 1]
                item.topId = topId.id !== item.id ? topId.id : null // 给每个菜单添加一个自己的顶级应用分类的Id
            }
        })
    }
    return data || []
}

/**
 * 获取menu菜单
 * @param ctx
 * @returns {Promise<{routes: *[], menus: *[]}>}
 */
async function getAppMenus(ctx) {
    const {dispatchRoutes, dispatchMenus, dispatchSourceMenus} = ctx.app.config.globalProperties.$globalStore;
    return http.httpPost('/getMenus').then((res) => {
        const menus = commonMenuItem(ctx, res.data)
        const routes = mapMenusToRoutes(menus)
        dispatchMenus(menus)
        dispatchRoutes(routes)
        dispatchSourceMenus(menus)
        useAddRouter(ctx, routes)
    })
}

/**
 * 获取应用分类、菜单
 * @param ctx
 */
async function getAppGroups(ctx) {
    const {dispatchAppGroups, dispatchRoutes} = ctx.app.config.globalProperties.$globalStore;
    return http.httpPost('/getClassify').then((res) => {
        const groups = commonMenuItem(ctx, res.data)
        const routes = mapMenusToRoutes(groups)
        dispatchRoutes(routes)
        dispatchAppGroups(groups)
        useAddRouter(ctx, routes)
    })
}

const setupMenuRouter = (ctx) => {
    ctx.router.beforeEach(async (to, from, next) => {
        try {

            const {isLoadRoutes, dispatchFiles, dispatchIsRoutes} = ctx.app.config.globalProperties.$globalStore;
            if (!isLoadRoutes) {
                dispatchFiles(files)
                await getAppMenus(ctx)
                await getAppGroups(ctx)
                dispatchIsRoutes()
                next({...to, replace: true})
            } else {
                next()
            }
        } catch (err) {
            next()
            console.error(err)
        }
    })
}


export default setupMenuRouter;
