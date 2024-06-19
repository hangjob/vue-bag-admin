import {
    createDiscreteApi, darkTheme,
    lightTheme
} from "naive-ui";

const setupNaive = (ctx) => {
    const themeRef = ref("light");
    const configProviderPropsRef = computed(() => ({
        theme: themeRef.value === "light" ? lightTheme : darkTheme
    }));
    const {message, notification, dialog, loadingBar, modal} = createDiscreteApi(
        ["message", "dialog", "notification", "loadingBar", "modal"],
        {
            configProviderProps: configProviderPropsRef
        }
    );
    ctx.naive = {
        message,
        notification,
        dialog,
        loadingBar,
        modal
    }
}

export default setupNaive;
