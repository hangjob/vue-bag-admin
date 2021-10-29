import {createApp} from 'vue'
import App from './App.vue'
import router, {setupRouter} from './router/index'
import store from './store/index'
import Antd from 'ant-design-vue';
import '@/packages/admin/style/index.less'
// import 'normalize.css/normalize.css' // 统一样式，并保持浏览器原有的样式
import 'minireset.css/minireset.css' // 统一样式 ，重置所有浏览器所有的样式
import "ant-design-vue/dist/antd.less";
import '@/style/scrollbar.less'
import '@/style/transition.less'
import '@/style/bootcss.media.less'
import '@/style/ant-design.extend.button.less'
import '@/style/yxs-admin.media.less'
import '@/packages/admin/common/resize'
import {setupGlobDirectives} from '@/packages/admin/directive'
import {setupGlobComponents} from '@/components'
import '../../../mock'
import * as antIcons from '@ant-design/icons-vue'

const app = createApp(App)
setupRouter(app)
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
