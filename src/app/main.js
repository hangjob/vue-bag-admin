import {app, pina, router, framework} from "@/packages/install.js"
import {useViewPlugin} from "@/app/plugins/view-plugin/index.js";
import {useNaivePlugin} from "@/app/plugins/naive-plugin/index.js";
import {useRouterPlugin} from "@/app/plugins/router-plugin/index.js";
import {useLayoutPlugin} from "@/app/plugins/layout-plugin/index.js";
import {useIconPlugin} from "@/app/plugins/icon-plugin/index.js";
import {useLanguagePlugin} from "@/app/plugins/language-plugin/index.js";
import {useProgressPlugin} from "@/app/plugins/progress-plugin/index.js";


app.use(pina)
framework.setGlobal()
app.use(router)
framework.use(useNaivePlugin)
framework.use(useIconPlugin)
framework.use(useLayoutPlugin)
framework.use(useRouterPlugin)
framework.use(useLanguagePlugin)
// framework.use(useProgressPlugin)
app.mount("#app")


