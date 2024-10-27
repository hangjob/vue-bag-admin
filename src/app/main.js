import install from "@/packages/install.js"
import logo from "@/packages/assets/logo.png"
import "animate.css";

const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true})
const {app, framework, plugins, helpers, pina, middleware} = install()

import * as icons from '@vicons/ionicons5'
import {BehanceOutlined, ReadOutlined} from "@vicons/antd"

framework.use(plugins.useNaivePlugin)
framework.use(plugins.useApisPlugin, ['/auth/local/register', '/auth/local', '/secretkey', '/bag-menus', '/classify', '/clearCaches', '/upload', '/md5Check'])
framework.use(plugins.useIconPlugin, {
    icons: {
        BehanceOutlined,
        ReadOutlined,
        ...icons
    }
})
framework.use(plugins.useLayoutPlugin)
framework.use(plugins.useLanguagePlugin)
framework.use(plugins.useRouterPlugin, {
    // history: createWebHashHistory(),
    files,
    handleMenus: ({ctx}) => {
        return ctx.apis.BagMenus.httpGet({'pagination[limit]': '-1'})
    },
})
pina.state.value.global.webSite.title = 'Vue Bag Admin'
pina.state.value.global.webSite.logo = logo

middleware.eventEmitter.on('API:REQUEST', ({json, text, response}) => {
    if (text) {
        window.$naive.message.warning(text || response.statusText)
    } else {
        if (!json?.error?.details) {
            window.$naive.message.warning(json?.error?.message)
        } else {
            if (Reflect.ownKeys(json?.error?.details).length === 0) {
                window.$naive.message.warning(json?.error?.message)
            } else {
                json?.error?.details?.forEach((item) => {
                    window.$naive.message.warning(item)
                })
            }
        }
    }
})

middleware.eventEmitter.on('ROUTER:BEFORE', (to, from, next) => {
    next()
})

middleware.eventEmitter.on('APP:LOGOUT', () => {
    $global.helpers.lscache.set('token', null)
    $global.router.push('/login')
})
app.mount("#app")


