import {createApp, shallowRef} from 'vue'
import App from './App.vue'
// @ts-ignore
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import install from "@/bag-web/install";
import {$optionsType} from "@/bag-web/install";
import routes from "@www/web/router";

const app = createApp(App)

const $options: $optionsType = {
    router: {routes},
}
app.use(install, $options).mount('#app')
