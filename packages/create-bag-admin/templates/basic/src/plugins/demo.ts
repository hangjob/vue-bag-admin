import type { AdminPlugin } from '@bag/core'

const demoPlugin: AdminPlugin = {
  id: 'demo-plugin',
  name: 'Demo Plugin',
  version: '0.1.0',
  order: 10,
  routes: [
    {
      path: '/workspace',
      name: 'Workspace',
      component: () => import('../views/Workspace.vue'),
      meta: {
        title: 'demo.workspace',
        layout: 'default',
        roles: ['authenticated']
      }
    }
  ],
  menus: [
    {
      path: '/dashboard',
      title: 'menu.dashboard',
      icon: 'dashboard',
      sort: 10,
      roles: ['authenticated']
    },
    {
      path: '/workspace',
      title: 'demo.workspace',
      icon: 'star',
      sort: 20,
      roles: ['authenticated']
    }
  ],
  locales: {
    'zh-CN': {
      demo: {
        workspace: '插件工作台'
      }
    },
    en: {
      demo: {
        workspace: 'Plugin Workspace'
      }
    }
  }
}

export default demoPlugin
