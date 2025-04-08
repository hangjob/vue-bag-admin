import install from "@/packages/install.js"
import logo from "@/packages/assets/logo.png"
import "animate.css";

const files = import.meta.glob(`@/app/views/*/**/*.vue`, {eager: true})
const {app, framework, plugins, helpers, pina, middleware} = install()

import * as icons from '@vicons/ionicons5'
import {BehanceOutlined, ReadOutlined} from "@vicons/antd"
import {iv, key} from "@/app/config/index.js";
import {browserPatch} from "@/packages/helpers/index.js";
import locaMenus from "@/app/router/menus.js"

const apis = ['/auth/local/register', '/auth/local', '/secretkey', '/bag-menus', '/classify', '/clearCaches', '/upload', '/md5Check'];
framework.use(plugins.useNaivePlugin)
plugins.useApisPlugin.httpConfig = {
    headers: {
        'sing': helpers.encrypt(JSON.stringify({name: 'bag', random: helpers.nanoid()}), iv, key)
    },
}
framework.use(plugins.useApisPlugin, apis)
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
    base:'/admin/',
    handleMenus: ({ctx}) => {
        return ctx.apis.BagMenus.httpGet({'pagination[pageSize]': '100'}).then((res) => {
            res.data.forEach((item) => {
                const _id = item.id;
                item.id = item.documentId;
                item.documentId = _id;
            })
            res.data.sort((a, b) => parseInt(b.sort) - parseInt(a.sort)) // 根据sort字段排序
            return [...res.data, ...locaMenus]
        })
    },
})
pina.state.value.global.webSite.title = 'Vue Bag Admin'
pina.state.value.global.webSite.footerText = 'Copyright©2024 Vue Bag Admin'
pina.state.value.global.webSite.logo = logo

middleware.eventEmitter.on('API:REQUEST', ({json, text, response}) => {
    if (text) {
        window.$naive.message.warning(text || response.statusText)
    } else {
        if (!json?.error?.details) {
            window.$naive.message.warning(json?.error?.message || response.statusText)
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
helpers.browserPatch()
app.mount("#app")


