import { createApp } from 'vue'
import App from './App.vue'
import install from './install'
const app = createApp(App)

app.use(install).mount('#app')
