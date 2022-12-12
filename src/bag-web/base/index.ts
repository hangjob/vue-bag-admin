import Equal from 'equal-vue'
import 'ant-design-vue/dist/antd.min.css'
import 'equal-vue/dist/style.css'
import 'element-plus/theme-chalk/display.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import setupGlobal from '@/common/global'
import { setupStore } from '@/bag-web/pinia'
import { setupGlobComponents } from '@/bag-web/components'
import { setupRouter } from '@/bag-web/router'
import { setupGlobDirectives } from '@/common/extend/directive'
import { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const setupInit = (app: App) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.use(Equal)
    app.use(ElementPlus)
    app.use(setupGlobal)
    app.use(setupStore)
    app.use(setupGlobComponents)
    app.use(setupRouter)
    app.use(setupGlobDirectives)
}


export default setupInit
