import * as http from "@/packages/http/request.js"


/**
 * 页面视图插件
 */
export class ApisPlugin {
    constructor() {
        this.name = 'ApisPlugin'
        this._enable = false
    }

    install({ctx}, options = []) {
        console.log(`${this.name}安装了`);
        ctx.apis = {http};
        options.forEach((item) => {
            const api = ctx.apis[item.replace(/\/(\w)/g, (_, c) => (c ? c.toUpperCase() : ""))] = {url: item}
            api.httpGet = (data, options) => http.httpGet(api.url, data, options)
            api.httpPost = (data, options) => http.httpPost(api.url, data, options)
        });
        if (typeof window === 'object'){
            if(!window.$apis){
                window.$apis = ctx.apis
            }
        }
        this._enable = true;
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


export const useApisPlugin = new ApisPlugin()
