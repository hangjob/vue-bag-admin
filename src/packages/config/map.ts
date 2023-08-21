import {renderIcon} from "@/packages/config/icon.ts"

const themeOptions = [
    {label: "苍翠", value: "#519a73"},
    {label: "杏红", value: "#ff8c31"},
    {label: "蔚蓝", value: "#70f3ff"},
    {label: "桃红", value: "#f47983"},
    {label: "柳绿", value: "#afdd22"},
    {label: "湖蓝", value: "#30dff3"}
]

const tabsMore = [
    {label: "重新加载", key: "1", icon: renderIcon("RefreshCircleOutline"),},
    {label: "关闭当前页面", key: "2", icon: renderIcon("CloseOutline"),},
    {type: "divider", key: "d1"},
    {label: "关闭左侧页面", key: "3", zt: "l", icon: renderIcon("StepBackwardFilled"),},
    {label: "关闭右侧页面", key: "4", zt: "r", icon: renderIcon("StepForwardFilled"),},
    {label: "关闭全部页面", key: "5", zt: "c", icon: renderIcon("StopOutlined")}
]


const themeTabsStyle = [
    {label: "经典卡片", key: "1", value: "sutra"},
    {label: "圆滑灵动", key: "2", value: "tact"}
]

const animations = [
    {label: "禁用动画", key: "100", value: "disabled", out: "disabled", prefix: ""},
    {
        label: "backInDown",
        key: "1",
        value: "animate__backInDown",
        out: "animate__backOutDown",
        prefix: "animate__animated"
    },
    {
        label: "backInLeft",
        key: "2",
        value: "animate__backInLeft",
        out: "animate__backOutLeft",
        prefix: "animate__animated"
    },
    {
        label: "backInRight",
        key: "3",
        value: "animate__backInRight",
        out: "animate__backOutRight",
        prefix: "animate__animated"
    },
    {label: "backInUp", key: "4", value: "animate__backInUp", out: "animate__backOutUp", prefix: "animate__animated"},
    {
        label: "lightSpeedInRight",
        key: "5",
        value: "animate__lightSpeedInRight",
        out: "animate__lightSpeedOutRight",
        prefix: "animate__animated"
    },
    {
        label: "slideInLeft",
        key: "6",
        value: "animate__slideInLeft",
        out: "animate__slideOutLeft",
        prefix: "animate__animated"
    },
    {
        label: "fadeInLeft",
        key: "7",
        value: "animate__fadeInLeft",
        out: "animate__fadeOutLeft",
        prefix: "animate__animated"
    }
]

export {
    themeOptions,
    tabsMore,
    themeTabsStyle,
    animations
}
