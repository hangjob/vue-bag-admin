import {createApp} from 'vue'
import App from './App.vue'
// @ts-ignore
import install, {$optionsType} from "@/bag-web/install";
import routes from "@www/web/router";
const app = createApp(App)

const $options: $optionsType = {
    router: {routes},
}
app.use(install, $options).mount('#app')
