import {createWebHashHistory} from "vue-router"
import install from "@/packages/install.js"

const {app, framework, plugins} = install()
const {} = install()

framework.use(plugins.useNaivePlugin)
framework.use(plugins.useApisPlugin, ['/auth/local/register', '/auth/local', '/secretkey', '/menus', '/classify', '/clearCaches', '/upload', '/md5Check'])
framework.use(plugins.useIconPlugin)
framework.use(plugins.useLayoutPlugin)
framework.use(plugins.useLanguagePlugin)
framework.use(plugins.useRouterPlugin, {
    // history: createWebHashHistory(),
    handleMenus: ({ctx}) => {
        return ctx.apis.Menus.httpGet({'pagination[limit]': '-1'})
    }
})
// framework.use(plugins.useProgressPlugin)
app.mount("#app")


