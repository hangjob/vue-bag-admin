import {createApp} from 'vue'
import App from './App.vue'
import install from '@/packages/install'

const app = createApp(App)
install(app).then(() => {

})
