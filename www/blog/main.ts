import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from "element-plus";
import '@/bag-web/theme/root.css'
import 'minireset.css/minireset.css'
import 'element-plus/theme-chalk/display.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')
