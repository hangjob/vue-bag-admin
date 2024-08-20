import setupI18n from "@/app/plugins/language-plugin/plug.js";

/**
 * 语言插件
 */
export class LanguagePlugin {
    constructor() {
        this.name = 'LanguagePlugin'
        this._enable = false
    }

    install({ctx}, options) {
        this._enable = true;
        setupI18n(ctx)
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


export const useLanguagePlugin = new LanguagePlugin()
