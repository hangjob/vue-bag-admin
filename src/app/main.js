import {createWebHashHistory} from "vue-router"
import {app, framework, plugins} from "@/packages/install.js"


framework.use(plugins.useApisPlugin, ['/auth/local/register', '/auth/local', '/secretkey', '/menus', '/classify'])
framework.use(plugins.useIconPlugin)
framework.use(plugins.useLayoutPlugin)
framework.use(plugins.useLanguagePlugin)
framework.use(plugins.useRouterPlugin, {
    history: createWebHashHistory()
})
framework.use(plugins.useProgressPlugin)

app.mount("#app")


