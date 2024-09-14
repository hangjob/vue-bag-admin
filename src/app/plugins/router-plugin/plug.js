import {isArray, isFunction, isPromise} from "radash";

const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true})

/**
 * 获取menu菜单
 * @param ctx
 * @param options
 * @returns {Promise<{routes: *[], menus: *[]}>}
 */
async function getAppMenus(ctx, options) {
    const $globalStore = ctx.app.config.globalProperties.$globalStore;
    const disposeMenus = (data) => {
        const menus = ctx.helpers.menusProcessing(ctx, ctx.helpers.buildTree(data))
        const routes = ctx.helpers.menusToLocalRoutes(menus, $globalStore.files)
        $globalStore.dispatchMenus(menus)
        $globalStore.dispatchRoutes(routes)
        $globalStore.dispatchSourceMenus(menus)
        ctx.helpers.addRoutes(ctx, routes)
    }
    if (isFunction(options?.handleMenus)) {
        const res = await options.handleMenus({ctx})
        if (isArray(res?.data) || isArray(res)) {
            disposeMenus(res.data || res)
        }
    }
}


/**
 * 获取应用分类、菜单
 * @param ctx
 * @param options
 */
async function getAppGroups(ctx, options) {
    const $globalStore = ctx.app.config.globalProperties.$globalStore;
    const disposeGroups = (data) => {
        const groups = ctx.helpers.menusProcessing(ctx, ctx.helpers.buildTree(data))
        const routes = ctx.helpers.menusToLocalRoutes(groups, $globalStore.files)
        $globalStore.dispatchRoutes(routes)
        $globalStore.dispatchAppGroups(groups)
        ctx.helpers.addRoutes(ctx, routes)
    }
    if (isFunction(options?.handleGroups)) {
        const res = await options.handleGroups({ctx})
        if (isArray(res?.data) || isArray(res)) {
            disposeGroups(res.data || res)
        }
    }
}

/**
 * 在路由拦截中，获取应用分类、菜单
 * @param ctx
 * @param options
 */
const beforeEach = (ctx, options) => {
    const $globalStore = ctx.app.config.globalProperties.$globalStore;
    $globalStore.dispatchFiles({...files, ...(options?.files || {})}) // 做一个全局的文件缓存，方便后续使用
    ctx?.router?.beforeEach?.(async (to, from, next) => {
        if (!$globalStore.isLoadRoutes) {
            await getAppMenus(ctx, options)
            await getAppGroups(ctx, options)
            $globalStore.isLoadRoutes = true
            next({...to, replace: true})
        } else {
            next()
        }
    })
}

export default beforeEach;
