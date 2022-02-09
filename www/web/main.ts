import { createApp } from 'vue'
import App from './App.vue'
import Equal from 'equal-vue'
import '@www/web/style/reset.less'
import 'equal-vue/dist/style.css'
import { setupRouter } from '@www/web/router'
import { setupStore } from '@www//web/store'
import mitt from 'mitt'

const app = createApp(App)
app.provide('$mitt', mitt())

setupRouter(app)
setupStore(app)
app.use(Equal).mount('#app')
