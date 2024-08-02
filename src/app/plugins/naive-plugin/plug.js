import {
    createDiscreteApi, darkTheme,
    lightTheme
} from "naive-ui";

const setupNaive = (ctx) => {
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
    window.naive = ctx.naive = {
        message,
        notification,
        dialog,
        loadingBar,
        modal
    }
}

export default setupNaive;
