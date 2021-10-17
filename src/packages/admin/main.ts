import {createApp} from 'vue'
import App from './App.vue'
import router, {setupRouter} from './router/index'
import store from './store/index'
import Antd from 'ant-design-vue';
// import 'normalize.css/normalize.css' // 统一样式，并保持浏览器原有的样式
import 'minireset.css/minireset.css' // 统一样式 ，重置所有浏览器所有的样式
import 'ant-design-vue/dist/antd.css';
import '@/style/scrollbar.less'
import '@/style/transition.less'

const app = createApp(App)
setupRouter(app)
app.use(store)
app.use(Antd)

router.isReady().then(() => {
    app.mount('#app')
})

// @ts-ignore
window.__app__ = app;
