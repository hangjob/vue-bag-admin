import type { AdminPlugin } from 'vue-bag-admin'

const workspacePlugin: AdminPlugin = {
  id: 'workspace-plugin',
  name: 'Workspace Plugin',
  version: '0.1.0',
  order: 10,
  routes: [
    {
      path: '/workspace/overview',
      name: 'WorkspaceOverview',
      component: () => import('../views/WorkspaceOverview.vue'),
      meta: {
        title: 'workspace.overview',
        layout: 'default',
        roles: ['authenticated']
      }
    },
    {
      path: '/workspace/insights/daily',
      name: 'WorkspaceInsightsDaily',
      component: () => import('../views/WorkspaceInsights.vue'),
      meta: {
        title: 'workspace.insights.daily',
        layout: 'default',
        roles: ['authenticated'],
        cacheKey: 'WorkspaceInsights'
      }
    },
    {
      path: '/workspace/insights/monthly',
      name: 'WorkspaceInsightsMonthly',
      component: () => import('../views/WorkspaceInsights.vue'),
      meta: {
        title: 'workspace.insights.monthly',
        layout: 'default',
        roles: ['authenticated'],
        cacheKey: 'WorkspaceInsights'
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
      title: 'workspace.title',
      icon: 'star',
      sort: 20,
      roles: ['authenticated'],
      children: [
        {
          path: '/workspace/overview',
          title: 'workspace.overview',
          sort: 1,
          roles: ['authenticated']
        },
        {
          path: '/workspace/insights',
          title: 'workspace.insights.title',
          sort: 2,
          roles: ['authenticated'],
          children: [
            {
              path: '/workspace/insights/daily',
              title: 'workspace.insights.daily',
              sort: 1,
              roles: ['authenticated']
            },
            {
              path: '/workspace/insights/monthly',
              title: 'workspace.insights.monthly',
              sort: 2,
              roles: ['authenticated']
            }
          ]
        }
      ]
    }
  ],
  locales: {
    'zh-CN': {
      workspace: {
        title: '工作台',
        overview: '团队总览',
        insights: {
          title: '业务洞察',
          daily: '日度分析',
          monthly: '月度分析'
        }
      }
    },
    en: {
      workspace: {
        title: 'Workspace',
        overview: 'Overview',
        insights: {
          title: 'Insights',
          daily: 'Daily',
          monthly: 'Monthly'
        }
      }
    }
  }
}

export default workspacePlugin
