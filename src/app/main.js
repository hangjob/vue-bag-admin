import install from "@/packages/install.js"

const {app, framework, plugins} = install()

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
// $global?.helpers?.cutColorTheme($global, '#0094FF',{ // 调整主题
//     common:{
//         primaryColor: '#faad14',
//         success: '#52c41a',
//         info: '#722ed1',
//         warning: '#faad14',
//         error: '#f5222d'
//     },
// })
app.mount("#app")


