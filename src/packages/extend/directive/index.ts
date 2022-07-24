import type {App} from 'vue';
import setupPermission from './permission'
import {setupGlobDirectives as _setupGlobDirectives} from '@/common/extend/directive/index'

export function setupGlobDirectives(app: App) {
    setupPermission(app);
    _setupGlobDirectives(app)
}
