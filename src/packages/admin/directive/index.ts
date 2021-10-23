import type { App } from 'vue';
import setupPermission from './permission'

export function setupGlobDirectives(app: App) {
    setupPermission(app);
}