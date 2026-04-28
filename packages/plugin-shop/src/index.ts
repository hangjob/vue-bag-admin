import type { AdminPlugin } from '@bag/core'

const shopPlugin: AdminPlugin = {
  id: 'plugin-shop',
  name: '商城管理插件',
  version: '1.0.0',
  routes: [
    // 商品管理
    {
      path: '/product/list',
      name: 'ProductList',
      component: () => import('./views/ProductList.vue'),
      meta: { title: 'shop.product.list', layout: 'default', roles: ['authenticated'] }
    },
    {
      path: '/product/publish',
      name: 'ProductPublish',
      component: () => import('./views/ProductPublish.vue'),
      meta: { title: 'shop.product.publish', layout: 'default', roles: ['authenticated'] }
    },
    {
      path: '/product/edit/:id',
      name: 'ProductEdit',
      component: () => import('./views/ProductEdit.vue'),
      meta: { title: 'shop.product.edit', layout: 'default', roles: ['authenticated'], hidden: true }
    },
    // 订单管理
    {
      path: '/order/list',
      name: 'OrderList',
      component: () => import('./views/OrderList.vue'),
      meta: { title: 'shop.order.list', layout: 'default', roles: ['authenticated'] }
    },
    {
      path: '/order/detail/:id',
      name: 'OrderDetail',
      component: () => import('./views/OrderDetail.vue'),
      meta: { title: 'shop.order.detail', layout: 'default', roles: ['authenticated'], hidden: true }
    },
    {
      path: '/order/ship/:id',
      name: 'OrderShip',
      component: () => import('./views/OrderShip.vue'),
      meta: { title: 'shop.order.ship', layout: 'default', roles: ['authenticated'], hidden: true }
    },
    {
      path: '/order/returns',
      name: 'OrderReturns',
      component: () => import('./views/OrderReturns.vue'),
      meta: { title: 'shop.order.returns', layout: 'default', roles: ['authenticated'] }
    },
    {
      path: '/order/return/:id',
      name: 'ReturnDetail',
      component: () => import('./views/ReturnDetail.vue'),
      meta: { title: 'shop.order.returnDetail', layout: 'default', roles: ['authenticated'], hidden: true }
    },
    // 用户管理
    {
      path: '/user/list',
      name: 'UserList',
      component: () => import('./views/UserList.vue'),
      meta: { title: 'shop.user.list', layout: 'default', roles: ['authenticated'] }
    },
    {
      path: '/user/profile/:id',
      name: 'UserProfile',
      component: () => import('./views/UserProfile.vue'),
      meta: { title: 'shop.user.profile', layout: 'default', roles: ['authenticated'], hidden: true }
    },
    {
      path: '/user/orders/:id',
      name: 'UserOrders',
      component: () => import('./views/UserOrders.vue'),
      meta: { title: 'shop.user.orders', layout: 'default', roles: ['authenticated'], hidden: true }
    },
    // 优惠营销
    {
      path: '/marketing/index',
      name: 'Marketing',
      component: () => import('./views/Marketing.vue'),
      meta: { title: 'shop.marketing.index', layout: 'default', roles: ['authenticated'] }
    },
    {
      path: '/marketing/create',
      name: 'MarketingCreate',
      component: () => import('./views/MarketingCreate.vue'),
      meta: { title: 'shop.marketing.create', layout: 'default', roles: ['authenticated'], hidden: true }
    },
    // 客服消息
    {
      path: '/service/index',
      name: 'CustomerService',
      component: () => import('./views/CustomerService.vue'),
      meta: { title: 'shop.service.index', layout: 'default', roles: ['authenticated'] }
    },
    // 财务结算
    {
      path: '/finance/flow/daily',
      name: 'FinanceDaily',
      component: () => import('./views/Finance.vue'),
      meta: { title: 'shop.finance.daily', layout: 'default', roles: ['authenticated'] }
    },
    {
      path: '/finance/flow/monthly',
      name: 'FinanceMonthly',
      component: () => import('./views/Finance.vue'),
      meta: { title: 'shop.finance.monthly', layout: 'default', roles: ['authenticated'] }
    },
    {
      path: '/finance/withdraw',
      name: 'FinanceWithdraw',
      component: () => import('./views/FinanceWithdraw.vue'),
      meta: { title: 'shop.finance.withdraw', layout: 'default', roles: ['authenticated'], hidden: true }
    },
    // 店铺设置
    {
      path: '/store/settings',
      name: 'StoreSettings',
      redirect: '/store/settings/base',
      component: () => import('./views/StoreSettings.vue'),
      meta: { title: 'shop.store.settings', layout: 'default', roles: ['authenticated'] },
      children: [
        {
          path: 'base',
          name: 'StoreSettingsBase',
          component: () => import('./views/StoreSettingsBase.vue'),
          meta: { title: 'shop.store.base', hidden: true }
        },
        {
          path: 'trade',
          name: 'StoreSettingsTrade',
          component: () => import('./views/StoreSettingsTrade.vue'),
          meta: { title: 'shop.store.trade', hidden: true }
        },
        {
          path: 'logistics',
          name: 'StoreSettingsLogistics',
          component: () => import('./views/StoreSettingsLogistics.vue'),
          meta: { title: 'shop.store.logistics', hidden: true }
        },
        {
          path: 'service',
          name: 'StoreSettingsService',
          component: () => import('./views/StoreSettingsService.vue'),
          meta: { title: 'shop.store.service', hidden: true }
        }
      ]
    }
  ],
  menus: [
    {
      path: '/product',
      title: 'shop.product.title',
      icon: 'shop',
      sort: 10,
      roles: ['authenticated'],
      children: [
        {
          path: '/product/list',
          title: 'shop.product.list',
          sort: 1,
          roles: ['authenticated']
        },
        {
          path: '/product/publish',
          title: 'shop.product.publish',
          sort: 2,
          roles: ['authenticated']
        }
      ]
    },
    {
      path: '/order',
      title: 'shop.order.title',
      icon: 'order',
      sort: 20,
      roles: ['authenticated'],
      children: [
        {
          path: '/order/list',
          title: 'shop.order.list',
          sort: 1,
          roles: ['authenticated']
        },
        {
          path: '/order/returns',
          title: 'shop.order.returns',
          sort: 2,
          roles: ['authenticated']
        }
      ]
    },
    {
      path: '/user/list',
      title: 'shop.user.list',
      icon: 'user',
      sort: 30,
      roles: ['authenticated']
    },
    {
      path: '/marketing/index',
      title: 'shop.marketing.index',
      icon: 'star',
      sort: 40,
      badge: '新',
      roles: ['authenticated']
    },
    {
      path: '/service/index',
      title: 'shop.service.index',
      icon: 'chat',
      sort: 50,
      roles: ['authenticated']
    },
    {
      path: '/finance',
      title: 'shop.finance.title',
      icon: 'money',
      sort: 60,
      roles: ['authenticated'],
      children: [
        {
          path: '/finance/flow',
          title: 'shop.finance.flow',
          sort: 1,
          roles: ['authenticated'],
          children: [
            {
              path: '/finance/flow/daily',
              title: 'shop.finance.daily',
              sort: 1,
              roles: ['authenticated']
            },
            {
              path: '/finance/flow/monthly',
              title: 'shop.finance.monthly',
              sort: 2,
              roles: ['authenticated']
            }
          ]
        }
      ]
    },
    {
      path: '/store/settings',
      title: 'shop.store.settings',
      icon: 'store',
      sort: 70,
      roles: ['authenticated']
    }
  ],
  locales: {
    'zh-CN': {
      shop: {
        product: {
          title: '商品管理',
          list: '商品列表',
          publish: '发布商品',
          edit: '编辑商品'
        },
        order: {
          title: '订单管理',
          list: '订单列表',
          returns: '退换货管理',
          detail: '订单详情',
          ship: '订单发货',
          returnDetail: '退换货详情'
        },
        user: {
          list: '用户管理',
          profile: '用户资料',
          orders: '用户订单'
        },
        marketing: {
          index: '优惠营销',
          create: '创建活动'
        },
        service: {
          index: '客服消息'
        },
        finance: {
          title: '财务结算',
          flow: '资金流水',
          daily: '日结账单',
          monthly: '月结账单',
          withdraw: '提现申请'
        },
        store: {
          settings: '店铺设置',
          base: '基础信息',
          trade: '交易设置',
          logistics: '物流配送',
          service: '客服配置'
        }
      }
    },
    'en': {
      shop: {
        product: {
          title: 'Products',
          list: 'Product List',
          publish: 'Publish Product',
          edit: 'Edit Product'
        },
        order: {
          title: 'Orders',
          list: 'Order List',
          returns: 'Returns & Exchanges',
          detail: 'Order Detail',
          ship: 'Ship Order',
          returnDetail: 'Return Detail'
        },
        user: {
          list: 'Users',
          profile: 'User Profile',
          orders: 'User Orders'
        },
        marketing: {
          index: 'Marketing',
          create: 'Create Campaign'
        },
        service: {
          index: 'Customer Service'
        },
        finance: {
          title: 'Finance',
          flow: 'Cash Flow',
          daily: 'Daily Bills',
          monthly: 'Monthly Bills',
          withdraw: 'Withdraw'
        },
        store: {
          settings: 'Store Settings',
          base: 'Basic Info',
          trade: 'Trade Settings',
          logistics: 'Logistics',
          service: 'Customer Service'
        }
      }
    }
  }
}

export default shopPlugin
