import type {App} from 'vue'
import {setupAndDesignVue} from '@/packages/plugin/ant-design-vue'
import '@/packages/style/index'

import '@/packages/common/resize'
import {setupRouter} from '@/packages/router'
// import {setupStore} from '@/packages/store'

import {setupGlobDirectives} from '@/packages/extend/directive'
import {setupGlobComponents} from '@/packages/components'
import {setupDraggable} from '@/packages/plugin/draggable'
import {setupIcons} from '@/packages/assets/icon/iconfont'
import setupPinia from '@/packages/pinia'

const setupInit = (app: App) => {
    // setupStore(app)
    setupPinia(app)
    setupRouter(app)
    setupAndDesignVue(app)
    setupGlobDirectives(app)
    setupGlobComponents(app)
    setupDraggable(app)
    setupIcons(app)
}

export default setupInit
