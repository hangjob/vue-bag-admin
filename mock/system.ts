import { MockMethod } from "vite-plugin-mock"
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
                        "email": "1234567@qq.com",
                        "describe": "我并不希望生活可以过得顺利，但是我希望碰到困难的时候，自己是个合格的对手",
                        "job": "开发",
                        "birthday": "19950717",
                        "company": "阿里巴巴",
                        "address": "浙江·杭州",
                    },
                    {
                        "id": 2,
                        "username": "superadmin",
                        "age": 26,
                        "email": "1234567@qq.com",
                        "phone": "15815815891",
                        "describe": "我并不希望生活可以过得顺利，但是我希望碰到困难的时候，自己是个合格的对手",
                        "job": "开发",
                        "birthday": "19950717",
                        "company": "阿里巴巴",
                        "address": "浙江·杭州",
                    },
                    {
                        "id": 3,
                        "username": "superadmin",
                        "age": 26,
                        "email": "1234567@qq.com",
                        "phone": "15815815891",
                        "describe": "我并不希望生活可以过得顺利，但是我希望碰到困难的时候，自己是个合格的对手",
                        "job": "开发",
                        "birthday": "19950717",
                        "company": "阿里巴巴",
                        "address": "浙江·杭州",
                    },
                ]
            }
        }
    },
] as MockMethod[]
