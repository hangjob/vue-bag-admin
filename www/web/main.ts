import { createApp } from 'vue'
import App from './App.vue'
import Equal from 'equal-vue'
import '@www/web/style/index.less'
import 'equal-vue/dist/style.css'
import '@www/web/theme/root.css'
import 'element-plus/theme-chalk/display.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { setupRouter } from '@www/web/router'
import { setupStore } from '@www/web/store'
import { setupGlobComponents } from '@www/web/components'
import mitt from 'mitt'

const app = createApp(App)
app.provide('$mitt', mitt())
app.use(ElementPlus)
setupRouter(app)
setupStore(app)
setupGlobComponents(app)
app.use(Equal).mount('#app')
