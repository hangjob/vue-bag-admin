import {MockMethod} from "vite-plugin-mock"
import {Random} from "mockjs"
function creataDataItem(data = {}) {
    const item = {
        "id": "", "title": "首页", "icon": "", "shows": true, "path": "", "order": 1,
        "pid": "", "file": "", "isIframe": "", "url": "", "keepAlive": false, "tabHidden": false,
        "tabFix": false, "httpFile": "","permission":[]
    }
    for (const itemKey in item) {
        if (data[itemKey] || data[itemKey] === false) {
            item[itemKey] = data[itemKey]
        }
    }
    return item
}
export default [
    {
        url: "/login",
        method: "post",
        response: () => {
            return {
                code: 1,
                data: {
                    username: "管理员",
                    id: Random.id(),
                    accessToken:Random.id(),
                    expiresTime: Random.now(),
                }
            }
        }
    },
    {
        url: "/register",
        method: "post",
        response: () => {
            return {
                code: 1,
                data: {
                    id: Random.id(),
                    expiresTime: Random.now(),
                }
            }
        }
    },
    {
        url: "/userInfo",
        method: "post",
        response: () => {
            return {
                code: 1,
                data: {
                    username: "管理员",
                    permission:["sys:permission:admin","sys:permission:web"]
                }
            }
        }
    },
    {
        url: "/menus",
        method: "post",
        response: () => {
            return {
                code: 1,
                data: [
                    creataDataItem({
                        id: 100,
                        "title": "首页",
                        "path": "/home",
                        "file": "/view/home/index.vue",
                        "icon": "HomeOutline",
                        "keepAlive": true,
                        "tabFix": true,
                        "order":100
                    }),
                    creataDataItem({id: 300, "title": "组件", "icon": "CubeOutline"}),
                    creataDataItem({id: 200, "title": "系统设置", "icon": "SettingsOutline"}),
                    creataDataItem({id: 5100, "title": "数据图表", "icon": "FileTrayOutline"}),
                    creataDataItem({
                        id: 5101,
                        "title": "PPChart",
                        "pid": "5100",
                        "path": "/baigdata/ppchart",
                        "file": "",
                        "icon": "",
                        "isIframe":true,
                        "url":"https://ppchart.com/",
                    }),
                    creataDataItem({
                        id: 5102,
                        "title": "可视化社区",
                        "pid": "5100",
                        "path": "/baigdata/makeapie",
                        "file": "",
                        "icon": "",
                        "isIframe":true,
                        "url":"https://www.makeapie.cn/echarts",
                    }),
                    creataDataItem({
                        id: 5103,
                        "title": "MadeAPie",
                        "pid": "5100",
                        "path": "/baigdata/madeapie",
                        "file": "",
                        "icon": "",
                        "isIframe":true,
                        "url":"https://madeapie.com/",
                    }),
                    creataDataItem({
                        id: 201,
                        "title": "用户管理",
                        "pid": 200,
                        "path": "/system/member",
                        "file": "/view/system/member/index.vue",
                        "icon": "TeamOutlined",
                    }),
                    creataDataItem({
                        id: 1000,
                        "title": "添加用户",
                        "pid": 201,
                        "path": "/system/member/add",
                        "file": "/view/system/member/add.vue",
                        "icon": "",
                        "shows": false
                    }),
                    creataDataItem({
                        id: 1001,
                        "title": "编辑用户",
                        "pid": 201,
                        "path": "/system/member/edit/:id",
                        "file": "/view/system/member/edit.vue",
                        "icon": "",
                        "shows": false
                    }),
                    creataDataItem({
                        id: 202,
                        "title": "角色管理",
                        "pid": 200,
                        "path": "/system/role",
                        "file": "/view/system/role/index.vue",
                        "icon": "UserSwitchOutlined"
                    }),
                    creataDataItem({
                        id: 1003,
                        "title": "添加角色",
                        "pid": 202,
                        "path": "/system/role/add",
                        "file": "/view/system/role/add.vue",
                        "icon": "",
                        "shows": false
                    }),
                    creataDataItem({
                        id: 1004,
                        "title": "编辑角色",
                        "pid": 202,
                        "path": "/system/role/edit/:id",
                        "file": "/view/system/role/edit.vue",
                        "icon": "",
                        "shows": false
                    }),
                    creataDataItem({
                        id: 203,
                        "title": "组织管理",
                        "pid": 200,
                        "path": "/system/branch",
                        "file": "/view/system/branch/index.vue",
                        "icon": "UserOutlined"
                    }),
                    creataDataItem({
                        id: 1005,
                        "title": "添加组织",
                        "pid": 203,
                        "path": "/system/branch/add",
                        "file": "/view/system/branch/add.vue",
                        "icon": "",
                        "shows": false,
                        "keepAlive": true
                    }),
                    creataDataItem({
                        id: 1006,
                        "title": "编辑组织",
                        "pid": 203,
                        "path": "/system/branch/edit/:id",
                        "file": "/view/system/branch/edit.vue",
                        "icon": "",
                        "shows": false,
                        "keepAlive": true
                    }),
                    creataDataItem({
                        id: 204,
                        "title": "菜单管理",
                        "pid": 200,
                        "path": "/system/menu",
                        "file": "/view/system/menu/index.vue",
                        "icon": "MenuOutlined"
                    }),
                    creataDataItem({
                        id: 1007,
                        "title": "添加菜单",
                        "pid": 204,
                        "path": "/system/menu/add",
                        "file": "/view/system/menu/add.vue",
                        "icon": "",
                        "shows": false
                    }),
                    creataDataItem({
                        id: 1008,
                        "title": "编辑菜单",
                        "pid": 204,
                        "path": "/system/menu/edit/:id",
                        "file": "/view/system/menu/edit.vue",
                        "icon": "",
                        "shows": false
                    }),
                    creataDataItem({
                        id: 205,
                        "title": "字典管理",
                        "pid": 200,
                        "path": "/system/dictionary",
                        "file": "/view/system/dictionary/index.vue",
                        "icon": "BookOutline"
                    }),
                    creataDataItem({
                        id: 1009,
                        "title": "添加字典",
                        "pid": 205,
                        "path": "/system/dictionary/add",
                        "file": "/view/system/dictionary/add.vue",
                        "icon": "",
                        "shows": false
                    }),
                    creataDataItem({
                        id: 1010,
                        "title": "编辑字典",
                        "pid": 205,
                        "path": "/system/dictionary/edit/:id",
                        "file": "/view/system/dictionary/edit.vue",
                        "icon": "",
                        "shows": false
                    }),
                    creataDataItem({
                        id: 206,
                        "title": "系统日志",
                        "pid": 200,
                        "path": "/system/log",
                        "file": "/view/system/log/index.vue",
                        "icon": "CloudSyncOutlined"
                    }),
                    // creataDataItem({
                    //     id: 207,
                    //     "title": "用户中心",
                    //     "pid": 200,
                    //     "path": "/system/user/center",
                    //     "file": "/view/system/user/center/index.vue",
                    //     "icon": "PlanetOutline"
                    // }),
                    creataDataItem({
                        id: 301,
                        "title": "清新图标",
                        "pid": 300,
                        "path": "/module/icon",
                        "file": "/view/module/icon/index.vue",
                        "icon": "SunnyOutline"
                    }),
                    creataDataItem({
                        id: 302,
                        "title": "添加水印",
                        "pid": 300,
                        "path": "/module/watermark",
                        "file": "/view/module/watermark/index.vue",
                        "icon": "LeafOutline"
                    }),
                    creataDataItem({
                        id: 303,
                        "title": "字符拼音",
                        "pid": 300,
                        "path": "/module/pinyin",
                        "file": "/view/module/pinyin/index.vue",
                        "icon": "BehanceOutlined"
                    }),
                    creataDataItem({
                        id: 304,
                        "title": "敏感词汇",
                        "pid": 300,
                        "path": "/module/mint",
                        "file": "/view/module/mint/index.vue",
                        "icon": "HeartDislikeCircleOutline"
                    }),
                    creataDataItem({
                        id: 306,
                        "title": "渐变文字",
                        "pid": 300,
                        "path": "/module/gradient",
                        "file": "/view/module/gradient/index.vue",
                        "icon": "ColorPaletteOutline"
                    }),
                    // creataDataItem({
                    //     id: 307,
                    //     "title": "图像裁剪",
                    //     "pid": 300,
                    //     "path": "/module/cropping",
                    //     "file": "/view/module/cropping/index.vue",
                    //     "icon": "ImageOutline"
                    // }),
                    creataDataItem({
                        id: 308,
                        "title": "卡片描述",
                        "pid": 300,
                        "path": "/module/des",
                        "file": "/view/module/des/index.vue",
                        "icon": "WalletOutline"
                    }),
                    creataDataItem({
                        id: 309,
                        "title": "日历",
                        "pid": 300,
                        "path": "/module/calendar",
                        "file": "/view/module/calendar/index.vue",
                        "icon": "ReadOutlined"
                    }),
                    creataDataItem({
                        id: 380,
                        "title": "时间线",
                        "pid": 300,
                        "path": "/module/timeline",
                        "file": "/view/module/timeline/index.vue",
                        "icon": "HourglassOutline"
                    }),
                    creataDataItem({
                        id: 381,
                        "title": "通知",
                        "pid": 300,
                        "path": "/module/notice",
                        "file": "/view/module/notice/index.vue",
                        "icon": "NotificationsOutline"
                    }),
                    creataDataItem({
                        id: 382,
                        "title": "二维码",
                        "pid": 300,
                        "path": "/module/qrcode",
                        "file": "/view/module/qrcode/index.vue",
                        "icon": "QrCodeSharp"
                    }),
                    creataDataItem({
                        id: 383,
                        "title": "文件上传",
                        "pid": 300,
                        "path": "/module/upload",
                        "file": "/view/module/upload/index.vue",
                        "icon": "CloudUploadOutline"
                    }),
                    creataDataItem({id: 310, "title": "表格", "pid": 310, "icon": "SettingsOutline"}),
                    creataDataItem({
                        id: 311,
                        "title": "通用表格",
                        "pid": 310,
                        "path": "/module/table/general",
                        "file": "/view/module/icon/index.vue",
                        "icon": "SettingsOutline"
                    }),
                    creataDataItem({
                        id: 601,
                        "title": "网页内嵌",
                        "pid": "",
                        "path": "/iframe/guide",
                        "isIframe":true,
                        "url":"https://cn.vitejs.dev/guide/",
                        "file": "/view/iframe/index.vue",
                        "icon": "LayersOutline"
                    }),
                    creataDataItem({
                        id: 602,
                        "title": "瀑布流",
                        "pid": "",
                        "path": "/module/waterfall",
                        "file": "/view/module/waterfall/index.vue",
                        "icon": "TvOutline"
                    }),
                    creataDataItem({
                        id: 700,
                        "title": "编辑器",
                        "pid": "",
                        "path": "",
                        "file": "",
                        "icon": "CreateOutline"
                    }),
                    creataDataItem({
                        id: 701,
                        "title": "Markdown",
                        "pid": "700",
                        "path": "/editor/md",
                        "file": "/view/editor/md.vue",
                        "icon": "MediumOutlined"
                    }),
                    creataDataItem({
                        id: 702,
                        "title": "富文本",
                        "pid": "700",
                        "path": "/editor/rich",
                        "file": "/view/editor/rich.vue",
                        "icon": "LaptopOutline"
                    }),
                    creataDataItem({
                        id: 800,
                        "title": "异常页面",
                        "pid": "",
                        "path": "",
                        "file": "",
                        "icon": "AlertOutlined"
                    }),
                    creataDataItem({
                        id: 801,
                        "title": "403",
                        "pid": "800",
                        "path": "/error/403",
                        "file": "/view/error/403.vue",
                        "icon": ""
                    }),
                    creataDataItem({
                        id: 802,
                        "title": "404",
                        "pid": "800",
                        "path": "/error/404",
                        "file": "/view/error/404.vue",
                        "icon": ""
                    }),
                    creataDataItem({
                        id: 804,
                        "title": "418",
                        "pid": "800",
                        "path": "/error/418",
                        "file": "/view/error/418.vue",
                        "icon": ""
                    }),
                    creataDataItem({
                        id: 803,
                        "title": "500",
                        "pid": "800",
                        "path": "/error/500",
                        "file": "/view/error/500.vue",
                        "icon": ""
                    }),
                    creataDataItem({
                        id: 900,
                        "title": "结果页面",
                        "pid": "",
                        "path": "/result",
                        "file": "/view/result/index.vue",
                        "icon": "HappyOutline"
                    }),
                    creataDataItem({
                        id: 901,
                        "title": "模板打印",
                        "pid": "",
                        "path": "/iframe/hiprint",
                        "isIframe":true,
                        "url":"https://ccsimple.gitee.io/vue-plugin-hiprint/",
                        "file": "/view/iframe/index.vue",
                        "icon": "LogoIonic"
                    }),
                    creataDataItem({
                        id: 3000,
                        "title": "权限测试",
                        "pid": "",
                        "path": "",
                        "file": "",
                        "icon": "InstagramOutlined"
                    }),
                    creataDataItem({
                        id: 3001,
                        "title": "页面权限",
                        "pid": "3000",
                        "path": "/permission/page",
                        "file": "/view/permission/page.vue",
                        "icon": ""
                    }),
                    creataDataItem({
                        id: 3002,
                        "title": "按钮权限",
                        "pid": "3000",
                        "path": "/permission/button",
                        "file": "/view/permission/button.vue",
                        "icon": "",
                        "permission":["sys:permission:admin","sys:permission:web"]
                    }),
                    creataDataItem({
                        id: 8000,
                        "title": "高亮关键词",
                        "pid": "",
                        "path": "/high",
                        "file": "/view/high/index.vue",
                        "icon": "ReadOutlined",
                        "url":"",
                    }),
                    creataDataItem({
                        id: 5000,
                        "title": "动画",
                        "pid": "",
                        "path": "/animation",
                        "file": "/view/animation/index.vue",
                        "icon": "LogoPinterest",
                    }),
                    creataDataItem({
                        id: 6000,
                        "title": "表单设计器",
                        "pid": "",
                        "path": "",
                        "file": "",
                        "icon": "RestaurantOutline",
                    }),
                    creataDataItem({
                        id: 6001,
                        "title": "FormMaking",
                        "pid": "6000",
                        "path": "/formDesigner/making",
                        "file": "",
                        "icon": "",
                        "isIframe":true,
                        "url":"https://form.making.link/sample/#/zh-CN/",
                    }),
                    creataDataItem({
                        id: 6002,
                        "title": "FormGenerator",
                        "pid": "6000",
                        "path": "/formDesigner/generator",
                        "file": "",
                        "icon": "",
                        "isIframe":true,
                        "url":"https://demo.gin-vue-admin.com/form-generator/",
                    }),
                    creataDataItem({
                        id: 6003,
                        "title": "Starfish",
                        "pid": "6000",
                        "path": "/formDesigner/starfish",
                        "file": "",
                        "icon": "",
                        "isIframe":true,
                        "url":"https://haixin-fang.github.io/starfish-vue3-lowcode/playground/index.html",
                    }),
                    creataDataItem({
                        id: 7001,
                        "title": "浏览器指纹",
                        "pid": "",
                        "path": "/fingerprintjs",
                        "file": "/view/fingerprintjs/index.vue",
                        "icon": "LogoChrome",
                        "url":"",
                    }),
                    creataDataItem({
                        id: 7002,
                        "title": "窗口通信",
                        "pid": "",
                        "path": "/wicket",
                        "file": "/view/wicket/index.vue",
                        "icon": "PlanetOutline",
                        "url":"",
                    }),
                ]
            }
        }
    }
] as MockMethod[]
