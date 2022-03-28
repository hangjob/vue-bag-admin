import 'default-passive-events'
import { Component, createApp } from 'vue'
import App from './App.vue'
import install from '@/packages/install'
import '../../mock'

console.log('%c 此页面不需要后端服务，用的是mock数据', 'color:#ffacac;')
const app = createApp(App)
app.use(install).mount('#app')
