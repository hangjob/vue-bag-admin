import {useMenuToRouter} from "./plug.js"

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
        console.log(`${this.name}安装了`);
        useMenuToRouter(ctx)
    }


    disable() {
        console.log(`${this.name}被禁用了`);
        this._enable = false;
    }

    enable() {
        console.log(`${this.name}启用了`);
        this._enable = true;
    }

    destroy() {
        console.log(`${this.name}要被卸载了`);
    }

    inEnabled() {
        console.log(`${this.name}目前时是${this._enable}`);
        return this._enable
    }
}


export const useRouterPlugin = new RouterPlugin()
