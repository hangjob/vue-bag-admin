import setupMenuRouter from "./plug.js"

/**
 * 页面视图插件
 */
export class RouterPlugin {
    constructor() {
        this.name = 'RouterPlugin'
        this._enable = false
    }

    install({ctx}, options) {
        ctx.loadRouter = true
        setupMenuRouter(ctx,options)
    }


    // 禁用插件
    disable() {

        this._enable = false;
    }

    // 启用插件
    enable() {

        this._enable = true;
    }

    // 卸载插件
    destroy() {

    }

    // 插件状态
    inEnabled() {
        return this._enable
    }
}


export const useRouterPlugin = new RouterPlugin()
