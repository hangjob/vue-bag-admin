import type { App } from 'vue'
import { setupAndDesignVue } from '@/packages/plugin/ant-design-vue'
import '@/packages/style/index'

import '@/packages/extend/browser/canvas'

import '@/packages/common/resize.ts'
import { setupRouter } from '@/packages/router'
import { setupStore } from '@/packages/store'

import { setupGlobDirectives } from '@/packages/extend/directive'
import { setVxeTable } from '@/packages/plugin/vxe-table'
import { setupGlobComponents } from '@/packages/components'
import { setupDraggable } from '@/packages/plugin/draggable'
import { setupIcons } from '@/packages/assets/icon/iconfont'

const setupInit = (app: App) => {
    setupRouter(app)
    setupStore(app)
    setVxeTable(app)
    setupAndDesignVue(app)
    setupGlobDirectives(app)
    setupGlobComponents(app)
    setupDraggable(app)
    setupIcons(app)
}

export default setupInit
