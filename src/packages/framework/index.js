import useGlobalStore from "@/packages/pinia/global.js";
import {useCloseTabBarJump, useCutColorTheme} from "@/packages/hooks/index.js";

class Framework {
    constructor(ctx) {
        this.installedPlugins = new Map();
        this.ctx = ctx;
    }

    use(plugin, options) {
        if (!this.installedPlugins.has(plugin.name)) {
            this.installedPlugins.set(plugin.name, plugin);
            plugin.install(this, options);
        }
        return this;
    }

    // 获取指定插件
    getPlugin(pluginName) {
        return this.installedPlugins.get(pluginName);
    }

    // 获取多个插件
    getPlugins(pluginNames) {
        return pluginNames.map((pluginName) => this.getPlugin(pluginName))
    }

    // 获取该插件状态
    enablePlugin(plugins) {
        if (!Array.isArray(plugins)) {
            plugins = [plugins];
        }
        const aboutToChangePlugins = this.getPlugins(plugins);
        aboutToChangePlugins?.forEach((plugin) => plugin?.enable?.());
        return this;
    }

    // 禁用插件
    disablePlugin(plugins) {
        if (!Array.isArray(plugins)) {
            plugins = [plugins];
        }
        const aboutToChangePlugins = this.getPlugins(plugins);
        aboutToChangePlugins?.forEach((plugin) => plugin?.disable?.());
        return this;
    }

    // 销毁插件
    destroyPlugins(plugins) {
        if (!Array.isArray(plugins)) {
            plugins = [plugins];
        }
        const aboutToChangePlugins = this.getPlugins(plugins);
        aboutToChangePlugins?.forEach((plugin) => plugin?.destroy());
        return this;
    }

    setGlobal() {
        this.ctx.app.config.globalProperties.$global = this.ctx;
        this.ctx.app.config.globalProperties.$globalStore = useGlobalStore()
        this.ctx.app.config.globalProperties.$globalHook = {
            useCloseTabBarJump: useCloseTabBarJump(this.ctx),
            useCutColorTheme: useCutColorTheme(this.ctx)
        }
    }
}


export default Framework;
