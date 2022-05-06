import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import '@www/blog/style/index.less'
import '@/bag-web/theme/root.css'
import 'minireset.css/minireset.css'
import 'element-plus/theme-chalk/display.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'element-plus/dist/index.css'
import 'material-icons/iconfont/material-icons.css';
// @ts-ignore
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
createApp(App).use(Vuesax).use(ElementPlus).mount('#app')
