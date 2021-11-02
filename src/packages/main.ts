import {createApp} from 'vue'
import App from './App.vue'
import router, {setupRouter} from './router'
import store from './store'
import Antd from 'ant-design-vue';
import '@/packages/style/index.less'
// import 'normalize.css/normalize.css' // 统一样式，并保持浏览器原有的样式
import 'minireset.css/minireset.css' // 统一样式 ，重置所有浏览器所有的样式
import "ant-design-vue/dist/antd.less";
import '@/packages/assets/icon/iconfont/index.less'
import '@/packages/common/resize.ts'
import {setupGlobDirectives} from '@/packages/directive'
import {setVxeTable} from '@/packages/plugin/vxe-table'
import {setupGlobComponents} from '@/packages/components'
import '../../mock'
import * as antIcons from '@ant-design/icons-vue'

const app = createApp(App)
setupRouter(app)
setVxeTable(app)
app.use(store)
app.use(Antd)

Object.keys(antIcons).forEach(key => {
    // @ts-ignore
    app.component(key, antIcons[key])
})

setupGlobDirectives(app)
setupGlobComponents(app)
router.isReady().then(() => {
    app.mount('#app')
})

// @ts-ignore
window.__app__ = app;
