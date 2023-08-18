import type {App} from "vue"
import { h} from "vue"
import {Home,SettingsOutline} from "@vicons/ionicons5"
import {UsergroupAddOutlined} from "@vicons/antd"
import {NIcon} from "naive-ui"

const icons = {Home,SettingsOutline,UsergroupAddOutlined}

function renderIcon (iconName:string) {
    return () => h(NIcon, null, { default: () => h(icons[iconName]) })
}

const setupIcons = (app:App)=>{
    app.component("Home", Home)
}

export default setupIcons
export {
    renderIcon
}
