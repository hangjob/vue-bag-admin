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
        console.log(`${this.name}安装了`);
        this._enable = true;
        setupI18n(ctx)
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


export const useLanguagePlugin = new LanguagePlugin()
