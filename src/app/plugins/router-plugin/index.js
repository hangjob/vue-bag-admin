import {createRouter, createWebHistory} from "vue-router"
import {defaultBuiltRouter, defaultErrorRouter} from "@/packages/router/routes.js";
import {afterEach} from "@/packages/router/index.js"
import beforeEach from "./plug.js"


/**
 * 页面视图路由插件
 */
export class RouterPlugin {
    constructor() {
        this.name = 'RouterPlugin'
        this._enable = false
    }

    install({ctx}, options = {}) {
        const {router, ...args} = options;
        const routes = [...defaultBuiltRouter]
        options.routes ? routes.push(...options.routes) : null;
        options.errorRoute ? routes.push(options.errorRoute) : routes.push(defaultErrorRouter); // 这个要放在最后
        ctx.router = router || createRouter({
            history: createWebHistory(options.base || '/'),
            routes: routes, // 合并默认路由与用户配置路由
            ...args
        });
        ctx.app.use(ctx.router)
        afterEach(ctx, args)
        beforeEach(ctx, args)
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

