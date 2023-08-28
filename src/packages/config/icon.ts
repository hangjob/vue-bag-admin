import type {App} from "vue"
import {h} from "vue"
import {
    CloseOutline,BookOutline,
    RefreshCircleOutline,
    ChevronBackOutline,
    ChevronForwardOutline,
    Home,
    SettingsOutline,SunnyOutline,FileTrayOutline,
    HomeOutline,CubeOutline,PlanetOutline,LeafOutline,
    FlashOutline,
    SearchOutline,
    NotificationsOutline,
    LanguageOutline,
    ScanOutline,
    HappyOutline,
    MoonOutline,
    CloseCircleOutline,
    SyncCircleOutline,
    CheckboxOutline
} from "@vicons/ionicons5"
import {StepBackwardFilled,CloudSyncOutlined, StepForwardFilled,DribbbleOutlined
    ,TeamOutlined,UserSwitchOutlined, StopOutlined, SmileOutlined, UsergroupAddOutlined,
    MenuOutlined,UserOutlined,BehanceOutlined,MenuUnfoldOutlined
} from "@vicons/antd"
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
    StepBackwardFilled, StepForwardFilled, StopOutlined, SmileOutlined,FlashOutline,MenuUnfoldOutlined,
    SearchOutline,
    NotificationsOutline,
    LanguageOutline,
    ScanOutline,
    HappyOutline,
    MoonOutline,
    CloseCircleOutline,
    SyncCircleOutline,
    CheckboxOutline
}

function renderIcon(iconName: string) {
    return () => h(NIcon, null, {default: () => h(icons[iconName])})
}

const setupIcons = (app: App) => {
    for (const iconsKey in icons) {
        app.component(iconsKey, icons[iconsKey])
    }
}

export default setupIcons
export {
    renderIcon,
    icons
}
