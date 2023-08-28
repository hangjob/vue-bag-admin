import {MockMethod} from "vite-plugin-mock"

function creataDataItem(data = {}) {
    const item = {
        "id": "", "title": "首页", "icon": "", "shows": true, "path": "", "order": 1,
        "pid": "", "file": "", "isIframe": "", "url": "", "keepAlive": false, "tabHidden": false,
        "tabFix": false, "httpFile": ""
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
                        "tabFix": true
                    }),
                    creataDataItem({id: 200, "title": "系统设置", "icon": "SettingsOutline"}),
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
                        "file": "/view/system/role/index.vue",
                        "icon": "CloudSyncOutlined"
                    }),
                    creataDataItem({
                        id: 207,
                        "title": "用户中心",
                        "pid": 200,
                        "path": "/system/user/center",
                        "file": "/view/system/user/center/index.vue",
                        "icon": "PlanetOutline"
                    }),
                    creataDataItem({id: 300, "title": "组件", "icon": "CubeOutline"}),
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
                        "title": "水印",
                        "pid": 300,
                        "path": "/module/watermark",
                        "file": "/view/module/icon/index.vue",
                        "icon": "LeafOutline"
                    }),
                    creataDataItem({
                        id: 303,
                        "title": "字符拼音",
                        "pid": 300,
                        "path": "/module/pinyin",
                        "file": "/view/module/icon/index.vue",
                        "icon": "BehanceOutlined"
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
                    creataDataItem({id: 320, "title": "卡片", "pid": 300, "icon": "FileTrayOutline"}),
                    creataDataItem({
                        id: 321,
                        "title": "普通卡片",
                        "pid": 320,
                        "path": "/module/card/ordinary",
                        "file": "/view/module/table/ordinary/index.vue"
                    }),
                    creataDataItem({
                        id: 322,
                        "title": "普通卡片",
                        "pid": 320,
                        "path": "/module/card/general",
                        "file": "/view/module/table/ordinary/index.vue"
                    }),
                ]
            }
        }
    }
] as MockMethod[]
