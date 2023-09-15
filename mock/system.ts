import {MockMethod} from "vite-plugin-mock"
import {Random} from "mockjs"

export default [
    {
        url: "/member",
        method: "post",
        response: () => {
            return {
                code: 1,
                data: [
                    {
                        "id": 1,
                        "username": "羊先生",
                        "age": 26,
                        "email": "88888888@qq.com",
                        "describe": "我并不希望生活可以过得顺利，但是我希望碰到困难的时候，自己是个合格的对手",
                        "job": ["前端菜鸟-羊先生"],
                        "birthday": "2023-08-03 15:05:26",
                        "company": "阿里巴巴",
                        "address": "浙江·杭州",
                        "disabled": false,
                        "sex": 1
                    },
                    {
                        "id": 2,
                        "username": "羊先生",
                        "age": 30,
                        "email": "139928757@qq.com",
                        "phone": "123456789",
                        "describe": "我并不希望生活可以过得顺利，但是我希望碰到困难的时候，自己是个合格的对手",
                        "job": ["前端菜鸟-羊先生", "全栈开发"],
                        "birthday": "2023-08-03 15:05:26",
                        "company": "阿里巴巴",
                        "address": "浙江·杭州",
                        "disabled": true,
                        "sex": 2
                    },
                    {
                        "id": 3,
                        "username": "羊先生",
                        "age": 28,
                        "email": "89388999@qq.com",
                        "phone": "123456789",
                        "describe": "我并不希望生活可以过得顺利，但是我希望碰到困难的时候，自己是个合格的对手",
                        "job": ["前端菜鸟-羊先生"],
                        "birthday": "2023-08-03 15:05:26",
                        "company": "阿里巴巴",
                        "address": "浙江·杭州",
                        "disabled": false,
                        "sex": 1
                    },
                    {
                        "id": 4,
                        "username": "羊先生",
                        "age": 28,
                        "email": "89388999@qq.com",
                        "phone": "123456789",
                        "describe": "我并不希望生活可以过得顺利，但是我希望碰到困难的时候，自己是个合格的对手",
                        "job": ["前端菜鸟-羊先生"],
                        "birthday": "2023-08-03 15:05:26",
                        "company": "阿里巴巴",
                        "address": "浙江·杭州",
                        "disabled": false,
                        "sex": 2
                    },
                ]
            }
        }
    },
    {
        url: "/role",
        method: "post",
        response: () => {
            return {
                code: 1,
                data: [
                    {
                        "createTime": "2022/06/26 17:33:05",
                        "updateTime": "2022/08/21 18:58:11",
                        "id": 1,
                        "name": "普通用户",
                        "tag": "web",
                        "describe": "普通用户,普通权限",
                    },
                    {
                        "createTime": "2022/06/26 17:33:05",
                        "updateTime": "2022/08/21 18:58:11",
                        "id": 2,
                        "name": "系统管理人员",
                        "tag": "admin",
                        "describe": "系统管理人员",
                    },
                    {
                        "createTime": "2022/06/26 17:33:05",
                        "updateTime": "2022/08/21 18:58:11",
                        "id": 3,
                        "name": "测试人员",
                        "tag": "test",
                        "describe": "测试工作人员",
                    },
                ]
            }
        }
    },
    {
        url: "/branch",
        method: "post",
        response: () => {
            return {
                code: 1,
                data: [
                    {
                        "createTime": "2022/01/04 15:23:27",
                        "updateTime": "2022/05/09 16:48:54",
                        "id": "1",
                        "name": "阿里巴巴",
                        "order": "",
                        "pid": ""
                    },
                    {
                        "createTime": "2022/01/04 15:23:27",
                        "updateTime": "2022/05/09 16:48:54",
                        "id": "10",
                        "name": "网易科技",
                        "order": "",
                        "pid": "1"
                    },
                    {
                        "createTime": "2022/01/04 15:23:27",
                        "updateTime": "2022/05/09 16:48:54",
                        "id": "11",
                        "name": "丰树科技",
                        "order": "",
                        "pid": "1"
                    },
                    {
                        "createTime": "2022/01/04 15:23:27",
                        "updateTime": "2022/05/09 16:48:54",
                        "id": "2",
                        "name": "阿里巴巴",
                        "order": "",
                        "pid": ""
                    },
                    {
                        "createTime": "2022/01/04 15:23:27",
                        "updateTime": "2022/05/09 16:48:54",
                        "id": "20",
                        "name": "淘宝科技",
                        "order": "",
                        "pid": "2"
                    },
                    {
                        "createTime": "2022/01/04 15:23:27",
                        "updateTime": "2022/05/09 16:48:54",
                        "id": "21",
                        "name": "天猫科技",
                        "order": "",
                        "pid": "2"
                    },
                    {
                        "createTime": "2022/01/04 15:23:27",
                        "updateTime": "2022/05/09 16:48:54",
                        "id": "22",
                        "name": "滴滴科技",
                        "order": "",
                        "pid": "2"
                    },
                    {
                        "createTime": "2022/01/04 15:23:27",
                        "updateTime": "2022/05/09 16:48:54",
                        "id": "3",
                        "name": "腾讯科技",
                        "order": "",
                        "pid": ""
                    },
                ]
            }
        }
    },
    {
        url: "/dictionary",
        method: "post",
        response: () => {
            const data:any = []
            for (let i = 0; i < 8; i++) {
                data.push({
                    "createTime": Random.datetime(),
                    "updateTime": Random.datetime(),
                    "id": String(i + 1),
                    "name": Random.ctitle(5),
                    "key": Random.word(5),
                    "pid": String(i + 1),
                    "disabled": false,
                    "shows": true
                })
            }
            return {
                code: 1,
                data
            }
        }
    },
] as MockMethod[]
