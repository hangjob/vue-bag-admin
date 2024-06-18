import {app, pina, router, framework} from "@/packages/install.js"
import {useViewPlugin} from "@/app/plugins/view-plugin/index.js";
import {useRouterPlugin} from "@/app/plugins/router-plugin/index.js";
import {useLayoutPlugin} from "@/app/plugins/layout-plugin/index.js";
import {useIconPlugin} from "@/app/plugins/icon-plugin/index.js";
app.use(pina)
framework.setGlobal()
app.use(router)
framework.use(useIconPlugin)
framework.use(useLayoutPlugin)
framework.use(useRouterPlugin, {a: 2})
app.mount("#app")


