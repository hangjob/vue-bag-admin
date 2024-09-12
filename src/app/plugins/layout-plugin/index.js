import LayoutHeaderExtra from "./components/LayoutHeaderExtra.vue"
import LayoutHeaderCum from "./components/LayoutHeaderSubtitle.vue"

export default class LayoutPlugin {
    constructor() {
        this.name = 'LayoutPlugin'
        this._enable = false
    }

    install({ctx}, options) {
        if(!ctx.app.component('LayoutHeaderExtra')){
            ctx.app.component('LayoutHeaderExtra', LayoutHeaderExtra)
        }
        if(!ctx.app.component('LayoutHeaderCum')){
            ctx.app.component('LayoutHeaderCum', LayoutHeaderCum)
        }
        this._enable = true;
    }

    disable() {
        this._enable = false;
    }

    enable() {
        this._enable = true;
    }

    destroy() {
    }

    inEnabled() {
        return this._enable
    }
}

export const useLayoutPlugin = new LayoutPlugin()
