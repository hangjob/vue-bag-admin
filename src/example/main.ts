import { createApp } from 'vue'
import App from './App.vue'
import '__ROOT__/mock'
import install from '@/packages/install'

const app = createApp(App)
app.use(install).mount('#app')

