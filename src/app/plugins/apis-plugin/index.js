/**
 * 自动生成api插件
 */
export class ApisPlugin {
    constructor() {
        this.name = 'ApisPlugin'
    }

    install({ctx}, options = []) {
        ctx.apis = {...ctx.http};
        options.forEach((item) => {
            const api = ctx.apis[item.replace(/\/(\w)/g, (_, c) => (c ? c.toUpperCase() : ""))] = {url: item}
            api.httpGet = (params, config) => ctx.http.httpGet(api.url, params, config)
            api.httpPost = (params, config) => ctx.http.httpPost(api.url, params, config)
        });
        if (typeof window === 'object'){
            if(!window.$apis){
                window.$apis = ctx.apis
            }
        }
    }
}


export const useApisPlugin = new ApisPlugin()
