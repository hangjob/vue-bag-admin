import type { AdminPlugin } from '@bag/core'

const sysSettingPlugin: AdminPlugin = {
  id: 'plugin-sys-setting',
  name: '系统设置插件',
  version: '1.0.0',
  routes: [
    {
      path: '/sys-setting',
      name: 'SysSetting',
      component: () => import('./views/SysSetting.vue'),
      meta: {
        title: 'sysSetting.title',
        layout: 'default',
        roles: ['authenticated']
      }
    },
    {
      path: '/sys-setting/advanced',
      name: 'SysSettingAdvanced',
      component: () => import('./views/SysSettingAdvanced.vue'),
      meta: {
        title: 'sysSetting.advanced',
        layout: 'default',
        roles: ['authenticated']
      }
    }
  ],
  menus: [
    {
      path: '/sys-setting-group',
      title: 'sysSetting.title',
      icon: 'settings',
      sort: 100,
      roles: ['authenticated'],
      children: [
        {
          path: '/sys-setting',
          title: 'sysSetting.base',
          sort: 1,
          roles: ['authenticated']
        },
        {
          path: '/sys-setting/advanced',
          title: 'sysSetting.advanced',
          sort: 10,
          roles: ['authenticated']
        }
      ]
    }
  ],
  locales: {
    'zh-CN': {
      sysSetting: {
        title: '系统设置',
        base: '常规设置',
        advanced: '高级设置',
        welcome: '欢迎来到系统设置模块',
        buttonSave: '保存配置',
        logout: '退出登录'
      }
    },
    en: {
      sysSetting: {
        title: 'System Settings',
        base: 'General Settings',
        advanced: 'Advanced',
        welcome: 'Welcome to System Settings',
        buttonSave: 'Save Config',
        logout: 'Logout'
      }
    }
  },
  install() {
    console.log('[Plugin] SysSetting is installed successfully!')
  }
}

export default sysSettingPlugin
