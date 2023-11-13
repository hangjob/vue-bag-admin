import {reactive} from "vue"

export default function useComponent() {
    const commonData = reactive({
        mode: "login",
        login: {
            title: "欢迎您登录",
            des: "你可以直接输入您的账号和密码登录",
            btn: "登录",
            hint:"没有账号? 注册账号"
        },
        register: {
            title: "欢迎您注册",
            des: "你的账户可以是手机号或者邮箱",
            btn: "注册",
            hint:"已有账户? 前往登录"
        }
    })
    return {
        commonData
    }
}
