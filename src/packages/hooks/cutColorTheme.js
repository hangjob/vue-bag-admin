import {generate} from "@ant-design/colors";
import {commonDark} from 'naive-ui'

/**
 * 切换主题
 * @param ctx
 * @param color
 */
function cutColorTheme(ctx, color) {
    const $globalStore = ctx.app.config.globalProperties.$globalStore

    function setThemeOverrides() {
        const _color = color || $globalStore.theme.color
        const colors = generate(_color, {
            theme: 'dark',
            backgroundColor: commonDark.bodyColor
        })
        // 这里可以返回的更多的主题配置色，https://liubing.me/article/vue/naive-ui/naive-ui-custom-theme.html#%E6%80%9D%E8%B7%AF%E5%88%86%E6%9E%90
        $globalStore.dispatchThemeOverrides({
            overrides: {
                common: {
                    primaryColor: colors[5],
                    primaryColorHover: colors[4],
                    primaryColorSuppl: colors[4],
                    primaryColorPressed: colors[6]
                },
            },
            color: _color
        })
    }

    setThemeOverrides()
}

export default cutColorTheme
