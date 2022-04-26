import type {App} from 'vue'
import mitt from "mitt";
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'
// @ts-ignore
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

interface $optionsType {

}

const install = (app: App, options?: $optionsType) => {
    app.provide('$mitt', mitt())
    app.use(Equal)
    app.use(Vuesax)
    app.mount('#app')
}

export default install
