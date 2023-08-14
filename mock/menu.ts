import {MockMethod} from "vite-plugin-mock"

export default [
    {
        url: "/menus",
        method: "post",
        response: () => {
            return {
                code: 1,
                data: [
                    {
                        "id": 1,
                        "title": "首页",
                        "icon": "HomeOutlined",
                        "shows": true,
                        "path": "/about",
                        "order": 100,
                        "pid": 0,
                        "file": "/view/about/Index.vue",
                        "is_iframe": "",
                        "keepAlive": false,
                        "tabHidden": false,
                        "tabFix": true,
                        "httpFile": ""
                    }
                ]
            }
        }
    }
] as MockMethod[]
