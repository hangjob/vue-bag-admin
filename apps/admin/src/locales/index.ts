import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'zh-CN',
  fallbackLocale: 'en',
  messages: {
    'zh-CN': {
      common: { save: '保存', cancel: '取消', confirm: '确认' },
      menu: { dashboard: '仪表盘' },
      tabbar: {
        reload: '重新加载',
        close: '关闭标签',
        closeOther: '关闭其他',
        closeLeft: '关闭左侧',
        closeRight: '关闭右侧',
        closeAll: '全部关闭'
      },
      sysSetting: {
        profile: '个人中心',
        logout: '退出登录'
      }
    },
    'en': {
      common: { save: 'Save', cancel: 'Cancel', confirm: 'Confirm' },
      menu: { dashboard: 'Dashboard' },
      tabbar: {
        reload: 'Reload',
        close: 'Close Tab',
        closeOther: 'Close Others',
        closeLeft: 'Close Left',
        closeRight: 'Close Right',
        closeAll: 'Close All'
      },
      sysSetting: {
        profile: 'Profile',
        logout: 'Logout'
      }
    }
  }
})

export default i18n
