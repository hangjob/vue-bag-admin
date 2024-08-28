import {createDiscreteApi, darkTheme, lightTheme} from "naive-ui";

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
        const themeRef = ref("light");
        const configProviderPropsRef = computed(() => ({
            theme: themeRef.value === "light" ? lightTheme : darkTheme
        }));
        // 解决脱离setup也能用
        const {message, notification, dialog, loadingBar, modal} = createDiscreteApi(
            ["message", "dialog", "notification", "loadingBar", "modal"],
            {
                configProviderProps: configProviderPropsRef
            }
        );
        window.$naive = ctx.naive = {
            message,
            notification,
            dialog,
            loadingBar,
            modal
        }
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
