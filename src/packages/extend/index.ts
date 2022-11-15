import type { App } from 'vue'
import setupPermission from './permission'
import { setupGlobDirectives } from '@/common/extend/directive'

export function setupGlobExtend(app: App) {
    setupPermission(app)
    setupGlobDirectives(app)
}
