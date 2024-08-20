import  useProgress from "./plug.js"
export default class ProgressPlugin {
    constructor() {
        this.name = 'ProgressPlugin'
        this._enable = false
    }

    install({ctx}, options) {
        this._enable = true;
        useProgress(ctx)
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

export const useProgressPlugin = new ProgressPlugin()
