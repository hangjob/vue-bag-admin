### 路由配置

> 如果路由重复则覆盖

```ts
const routes = [
    {
        path: '/join', name: 'join',
        component: () => import('@www/web/views/join/Index.vue'),
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
        ]
    }
];

app.use(install, {routes}).mount('#app')
```
