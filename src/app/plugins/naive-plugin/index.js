import setupNaive from "@/app/plugins/naive-plugin/plug.js";

/**
 * naive-ui 扩展
 */
export class NaivePlugin {
    constructor() {
        this.name = 'NaivePlugin'
        this._enable = false
    }

    install({ctx}, options) {
        this._enable = true;
        setupNaive(ctx)
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


export const useNaivePlugin = new NaivePlugin()
