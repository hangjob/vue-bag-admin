import * as http from "@/packages/http/request.js"


/**
 * 自动生成api插件
 */
export class ApisPlugin {
    constructor() {
        this.name = 'ApisPlugin'
    }

    install({ctx}, options = []) {
        ctx.apis = {http};
        options.forEach((item) => {
            const api = ctx.apis[item.replace(/\/(\w)/g, (_, c) => (c ? c.toUpperCase() : ""))] = {url: item}
            api.httpGet = (params, options) => http.httpGet(api.url, params, options)
            api.httpPost = (params, options) => http.httpPost(api.url, params, options)
        });
        if (typeof window === 'object'){
            if(!window.$apis){
                window.$apis = ctx.apis
            }
        }
    }
}


export const useApisPlugin = new ApisPlugin()
