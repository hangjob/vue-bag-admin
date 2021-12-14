import type {App} from 'vue';
import Antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.less";
import * as antIcons from '@ant-design/icons-vue'

const setupAndDesignVue = (app: App) => {
    app.use(Antd)
    Object.keys(antIcons).forEach(key => {
        // @ts-ignore
        app.component(key, antIcons[key])
    })
}

export {
    setupAndDesignVue
}

export default Antd;
