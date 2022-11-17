import type {App} from 'vue'
import {setupAndDesignVue} from '@/packages/plugin/ant-design-vue'
import '@/packages/style/index'

import {setupRouter} from '@/packages/router'

import {setupGlobExtend} from '@/packages/extend'
import {setupGlobComponents} from '@/packages/components'
import {setupIcons} from '@/packages/assets/icon/iconfont'
import setupPinia from '@/packages/pinia'

const setupInit = (app: App) => {
    setupPinia(app)
    setupRouter(app)
    setupAndDesignVue(app)
    setupGlobExtend(app)
    setupGlobComponents(app)
    setupIcons(app)
}

export default setupInit
