import type { AdminRouteRecordRaw } from 'vue-bag-admin'

export const exampleRoutes: AdminRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login.vue'),
    meta: {
      layout: 'blank',
      public: true
    }
  },
  {
    path: '/403',
    name: 'Forbidden',
    component: () => import('./views/Forbidden.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./views/Dashboard.vue'),
    meta: {
      title: 'menu.dashboard',
      layout: 'default'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('./views/Profile.vue'),
    meta: {
      title: '个人中心',
      layout: 'default'
    }
  },
  {
    path: '/redirect',
    name: 'Redirect',
    component: () => import('./views/Redirect.vue'),
    meta: {
      layout: 'blank',
      public: true,
      hidden: true,
      noCache: true
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
    meta: {
      layout: 'default',
      public: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
