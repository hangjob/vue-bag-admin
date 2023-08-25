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
                    username: "admin",
                    roles: ["admin", "common"],
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
                    username: "admin",
                    roles: ["admin", "common"],
                }
            }
        }
    }
] as MockMethod[]
