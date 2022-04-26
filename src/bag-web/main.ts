import { createApp } from 'vue'
import App from './App.vue'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'
// @ts-ignore
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import mitt from 'mitt'
const app = createApp(App)
app.provide('$mitt', mitt())
app.use(Equal).use(Vuesax).mount('#app')
