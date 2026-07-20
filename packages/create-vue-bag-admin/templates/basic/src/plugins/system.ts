import type { AdminPlugin } from 'vue-bag-admin'

const systemPlugin: AdminPlugin = {
  id: 'system-plugin',
  name: 'System Plugin',
  version: '0.1.0',
  order: 30,
  dependsOn: ['workspace-plugin'],
  routes: [
    {
      path: '/system/plugin-center',
      name: 'SystemPluginCenter',
      component: () => import('../views/SystemPluginCenter.vue'),
      meta: {
        title: 'system.pluginCenter',
        layout: 'default',
        roles: ['authenticated']
      }
    },
    {
      path: '/system/feature-flags',
      name: 'SystemFeatureFlags',
      component: () => import('../views/SystemFeatureFlags.vue'),
      meta: {
        title: 'system.featureFlags',
        layout: 'default',
        roles: ['authenticated']
      }
    }
  ],
  menus: [
    {
      path: '/system',
      title: 'system.title',
      icon: 'settings',
      sort: 40,
      roles: ['authenticated'],
      children: [
        {
          path: '/system/plugin-center',
          title: 'system.pluginCenter',
          sort: 1,
          roles: ['authenticated']
        },
        {
          path: '/system/feature-flags',
          title: 'system.featureFlags',
          sort: 2,
          roles: ['authenticated']
        }
      ]
    }
  ],
  locales: {
    'zh-CN': {
      system: {
        title: '系统中心',
        pluginCenter: '插件中心',
        featureFlags: '功能开关'
      }
    },
    en: {
      system: {
        title: 'System',
        pluginCenter: 'Plugin Center',
        featureFlags: 'Feature Flags'
      }
    }
  }
}

export default systemPlugin
