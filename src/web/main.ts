import {createApp} from 'vue'
import App from './App.vue'
import bootstrap from '@/packages/bootstrap'

const app = createApp(App)
bootstrap(app).then(() => {

})
