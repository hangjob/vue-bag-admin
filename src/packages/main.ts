import {createApp} from 'vue'
import App from './App.vue'
import router from '@/packages/router'
import setupInit from '@/packages/base/index'

const app = createApp(App)
setupInit(app)
router.isReady().then(() => {
    app.mount('#app')
})

// @ts-ignore
window.__app__ = app;
