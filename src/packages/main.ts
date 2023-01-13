import { createApp } from 'vue'
import App from './App.vue'
import install from '@/packages/install'

const app = createApp(App)

app.use(install, {
    router: {},
    config: {
        webSite: {
            title: '品茗信息',
            subhead: '品茗1',
        },
    },
    apis: {
        '/user/userinfo': '/xxx/xx?type=1',
    },
}).mount('#app')
window.__app__ = app
