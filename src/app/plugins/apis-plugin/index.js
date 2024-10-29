/**
 * 自动生成api插件
 */
export class ApisPlugin {
    constructor() {
        this.name = 'ApisPlugin'
        this.httpConfig = {}
    }


    toCamelCase(str) {
        return str
            .replace(/[-_\/]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
            .replace(/^([a-z])/, (match) => match.toUpperCase());
    }

    install({ctx}, options = []) {
        ctx.apis = {...ctx.http};
        options.forEach((item) => {
            const api = ctx.apis[this.toCamelCase(item)] = {url: item}
            api.httpGet = (params, config) => ctx.http.httpGet(api.url, params, {...config, ...this.httpConfig})
            api.httpPost = (params, config) => ctx.http.httpPost(api.url, params, {...config, ...this.httpConfig})
        });
        if (typeof window === 'object') {
            if (!window.$apis) {
                window.$apis = ctx.apis
            }
        }
    }
}


export const useApisPlugin = new ApisPlugin()
