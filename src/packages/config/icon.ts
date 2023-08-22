import type {App} from "vue"
import {h} from "vue"
import {
    CloseOutline,BookOutline,
    RefreshCircleOutline,
    ChevronBackOutline,
    ChevronForwardOutline,
    Home,
    SettingsOutline,SunnyOutline,FileTrayOutline,
    HomeOutline,CubeOutline,PlanetOutline,LeafOutline
} from "@vicons/ionicons5"
import {StepBackwardFilled,CloudSyncOutlined, StepForwardFilled,DribbbleOutlined
    ,TeamOutlined,UserSwitchOutlined, StopOutlined, SmileOutlined, UsergroupAddOutlined,MenuOutlined,UserOutlined,BehanceOutlined} from "@vicons/antd"
import {NIcon} from "naive-ui"

const icons = {
    Home,UserSwitchOutlined,BookOutline,CloudSyncOutlined,DribbbleOutlined,CubeOutline,PlanetOutline,SunnyOutline,
    SettingsOutline,LeafOutline,FileTrayOutline,
    UsergroupAddOutlined,BehanceOutlined,
    CloseOutline,
    RefreshCircleOutline,
    ChevronBackOutline,
    ChevronForwardOutline,HomeOutline,
    MenuOutlined,TeamOutlined,
    UserOutlined,
    StepBackwardFilled, StepForwardFilled, StopOutlined, SmileOutlined
}

function renderIcon(iconName: string) {
    return () => h(NIcon, null, {default: () => h(icons[iconName])})
}

const setupIcons = (app: App) => {
    app.component("Home", Home)
}

export default setupIcons
export {
    renderIcon
}
