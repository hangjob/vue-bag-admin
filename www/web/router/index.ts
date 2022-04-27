const routes = [
    {
        children: [
            {
                path: '/home', name: 'home', meta: {title: '首页'},
                component: () => import('@www/web/views/home/Index.vue'),
            },
            {
                path: '/article/:id', name: 'article', meta: {title: '详情'},
                component: () => import('@www/web/views/article/Index.vue'),
            },
        ],
    },
    {
        path: '/login', name: 'login', meta: {title: '登录'},
        component: () => import('@www/web/views/login/Index.vue'),
    },
];

export default routes;
