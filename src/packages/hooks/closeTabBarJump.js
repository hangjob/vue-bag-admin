/**
 * 关闭router
 * @param ctx
 * @param route
 */
function closeTabBarJump(ctx, route) {
    const {tabs, currentRouter} = ctx.app.config.globalProperties.$globalStore
    let idx = tabs.findIndex(item => item.id === route.id)
    tabs.length > 1 && tabs.splice(idx, 1)
    if (currentRouter.path === route.path) {
        const tab = idx ? tabs[--idx] : tabs[idx];
        tab && ctx.router.push(tab.path)
    }
}


export default closeTabBarJump;
