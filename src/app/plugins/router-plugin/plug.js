const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true})

/**
 * 获取menu菜单
 * @param ctx
 * @returns {Promise<{routes: *[], menus: *[]}>}
 */
async function getAppMenus(ctx) {
    const $globalStore = ctx.app.config.globalProperties.$globalStore;
    if(ctx.apis.Menus){
        return ctx.apis.Menus.httpGet({'pagination[limit]':'-1'}).then((res) => {
            const menus = ctx.helpers.menusProcessing(ctx, ctx.helpers.buildTree(res.data))
            const routes = ctx.helpers.menusToLocalRoutes(menus,$globalStore.files)
            $globalStore.dispatchMenus(menus)
            $globalStore.dispatchRoutes(routes)
            $globalStore.dispatchSourceMenus(menus)
            ctx.helpers.addRoutes(ctx, routes)
        })
    }else{
        return Promise.resolve()
    }
}


/**
 * 获取应用分类、菜单
 * @param ctx
 */
async function getAppGroups(ctx) {
    const $globalStore = ctx.app.config.globalProperties.$globalStore;
    if(ctx.apis.Classify){
        return ctx.apis.Classify.httpGet().then((res) => {
            const groups = ctx.helpers.menusProcessing(ctx, ctx.helpers.buildTree(res.data))
            const routes = ctx.helpers.menusToLocalRoutes(groups,$globalStore.files)
            $globalStore.dispatchRoutes(routes)
            $globalStore.dispatchAppGroups(groups)
            ctx.helpers.addRoutes(ctx, routes)
        })
    }else{
        return Promise.resolve()
    }
}

const setupMenuRouter = (ctx, options) => {
    ctx.router.beforeEach(async (to, from, next) => {
        try {
            const $globalStore = ctx.app.config.globalProperties.$globalStore;
            $globalStore.dispatchFiles(options?.files || files) // 做一个全局的文件缓存，方便后续使用
            if (!$globalStore.isLoadRoutes) {
                await getAppMenus(ctx)
                await getAppGroups(ctx)
                $globalStore.isLoadRoutes = true
                next({...to, replace: true})
            } else {
                next()
            }
        } catch (err) {
            console.log(err)
            next()
        }
    })
}


export default setupMenuRouter;
