import {createRouter, createWebHistory} from "vue-router"
import {defaultBuiltRouter} from "@/packages/router/routes.js";
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
        ctx.router = router || createRouter({
            history: createWebHistory(),
            routes: defaultBuiltRouter,
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

