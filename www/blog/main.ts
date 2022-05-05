import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'

createApp(App).use(Vuesax).mount('#app')
