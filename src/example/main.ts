import 'default-passive-events'
import { createApp } from 'vue'
import App from './App.vue'
//@ts-ignore
import install from '../../lib/index.es.js'
// import install from '../packages/install'
import '../../mock'
import '../../lib/style.css'
const app = createApp(App)
app.use(install).mount('#app')
