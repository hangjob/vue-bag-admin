
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {App} from 'vue'

const setupElementPlus = (app:App)=>{
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
}

export default setupElementPlus;
