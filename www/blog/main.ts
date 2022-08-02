import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'
import ElementPlus from 'element-plus'
import '@www/blog/style/index.less'
import '@/bag-web/style/root.css'
import 'minireset.css/minireset.css'
import 'element-plus/theme-chalk/display.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'element-plus/dist/index.css'
import 'material-icons/iconfont/material-icons.css';
import setupPrimevue from '@www/blog/plugin/primevue'
// @ts-ignore
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'

import {setupGlobDirectives} from "@/common/extend/directive";
// @ts-ignore
createApp(App).use(setupGlobDirectives).use(Vuesax).use(setupPrimevue).use(ElementPlus).mount('#app')
