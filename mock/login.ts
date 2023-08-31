import {MockMethod} from "vite-plugin-mock"
import {Random} from "mockjs"
export default [
    {
        url: "/login",
        method: "post",
        response: () => {
            return {
                code: 1,
                data: {
                    username: "管理员",
                    roles: ["admin", "web"],
                    id: Random.id(),
                    accessToken:Random.id(),
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
                    roles: ["admin", "web"],
                    permission:["sys:permission:admin","sys:permission:web"]
                }
            }
        }
    }
] as MockMethod[]
