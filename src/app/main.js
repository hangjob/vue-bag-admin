import install from "@/packages/install.js"
import logo from "@/packages/assets/logo.png"
const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true})
const {app, framework, plugins, helpers, pina} = install()

framework.use(plugins.useNaivePlugin)
framework.use(plugins.useApisPlugin, ['/auth/local/register', '/auth/local', '/secretkey', '/menus', '/classify', '/clearCaches', '/upload', '/md5Check'])
framework.use(plugins.useIconPlugin)
framework.use(plugins.useLayoutPlugin)
framework.use(plugins.useLanguagePlugin)
framework.use(plugins.useRouterPlugin, {
    // history: createWebHashHistory(),
    files,
    handleMenus: ({ctx}) => {
        return ctx.apis.Menus.httpGet({'pagination[limit]': '-1'})
    },
})
// pina.state.value.global.webSite.title = 'Vue Bag Admin'
pina.state.value.global.webSite.title = '品茗科技'
pina.state.value.global.webSite.logo = logo
app.mount("#app")


