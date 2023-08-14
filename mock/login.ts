import { MockMethod } from "vite-plugin-mock"
export default [
    {
        url: "/login",
        method: "post",
        response: () => {
            return {
                code: 1,
                data: {
                    username: "admin",
                    roles: ["admin","common"],
                    accessToken: "ooflnBycHzbaJycsM+obDQAkkQdaJKp",
                    expiresTime: "2023/9/30 00:00:00"
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
                    roles: ["admin","common"],
                    accessToken: "ooflnBycHzbaJycsM+obDQAkkQdaJKp",
                    expiresTime: "2023/9/30 00:00:00"
                }
            }
        }
    }
] as MockMethod[]
