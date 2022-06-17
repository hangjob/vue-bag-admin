export default [
    {
        path: '/iframe/:name', name: 'iframe-view', meta: { title: 'iframe' },
        component: () => import('@/packages/views/module/iframe/Index.vue'),
    },
    {
        path: '/module/draggable', name: 'module-draggable', meta: { title: '拖拽排序' },
        component: () => import('@/packages/views/module/draggable/Index.vue'),
    },
    {
        path: '/500', name: '500', meta: { title: '错误页面' },
        component: () => import('@/packages/views/error/500.vue'),
    },
    {
        path: '/403', name: '403', meta: { title: '错误页面' },
        component: () => import('@/packages/views/error/403.vue'),
    },
    {
        path: '/module/util', name: 'module-util', meta: { title: '工具库' },
        component: () => import('@/packages/views/module/util/Index.vue'),
    },
    {
        path: '/module/winbox', name: 'module-winbox', meta: { title: 'WinBox弹窗' },
        component: () => import('@/packages/views/module/winbox/Index.vue'),
    },
]
