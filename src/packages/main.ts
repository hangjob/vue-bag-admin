import {createApp} from 'vue'
import App from './App.vue'
import router from '@/packages/router'
import setupInit from '@/packages/base/index'
import mitt from "mitt";

const app = createApp(App)
app.provide("$mitt", mitt());
setupInit(app)
router.isReady().then(() => {
    app.mount('#app')
})
window.__app__ = app;


