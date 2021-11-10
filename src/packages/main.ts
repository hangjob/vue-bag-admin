import {createApp} from 'vue'
import App from './App.vue'
import router from '@/packages/router'
import setupInit from '@/packages/base/index'
import jquery from "jquery";

const app = createApp(App)
setupInit(app)
router.isReady().then(() => {
    app.mount('#app')
    window.$ = jquery;
    window.__app__ = app;
})


