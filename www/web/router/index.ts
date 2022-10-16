const routes = [
    {
        path: '/join', name: 'join',
        component: () => import('@www/web/views/join/Index.vue'),
    },
    {
        path: '/links', name: 'links',
        component: () => import('@www/web/views/links/Index.vue'),
    },
    {
        path: '/source', name: 'source',
        component: () => import('@www/web/views/source/Index.vue'),
    },
    {
        path: '/more', name: 'more',
        component: () => import('@www/web/views/more/layout/Index.vue'),
        redirect: 'about',
        children: [
            {
                path: '/more/about', meta: {title: '关于我们'},
                component: () => import('@www/web/views/more/views/About.vue'),
            },
            {
                path: '/more/agreement', meta: {title: '用户协议'},
                component: () => import('@www/web/views/more/views/Agreement.vue'),
            },
            {
                path: '/more/help', meta: {title: '帮助中心'},
                component: () => import('@www/web/views/more/views/Help.vue'),
            },
            {
                path: '/more/feedback', meta: {title: '意见反馈'},
                component: () => import('@www/web/views/more/views/Feedback.vue'),
            },
            {
                path: '/more/duty', name: 'duty', meta: {title: '免责声明'},
                component: () => import('@www/web/views/more/views/Duty.vue'),
            },
        ]
    }
];

export default routes;
