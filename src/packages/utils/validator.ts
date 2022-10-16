import { RuleObject } from 'ant-design-vue/es/form/interface'

/**
 * 验证路由地址,必填项
 * @param rule
 * @param value
 */
const validatPath = async (rule: RuleObject, value: string) => {
    if (value !== '' && value !== null && value !== undefined) {
        let reg = /^([\/]([a-zA-Z]+))*[0-9a-zA-Z]+$/.test(value)
        if (reg) {
            return Promise.resolve()
        } else {
            return Promise.reject('请输入正确的路由，字母开头，/，数字,字母组合')
        }
    } else {
        return Promise.reject('输入路由地址')
    }
}


/**
 * 验证路由地址,选填项
 * @param rule
 * @param value
 */
const filePathRouter = async (rule: RuleObject, value: string) => {
    if (value !== '' && value !== null && value !== undefined) {
        let reg = /^([\/]([a-zA-Z]+))*[0-9a-zA-Z]+$/.test(value) // 开头，数字和字母 组合
        if (reg) {
            return Promise.resolve()
        } else {
            return Promise.reject('请输入正确的路由，字母开头，/，数字,字母组合')
        }
    } else {
        return Promise.resolve()
    }
}


/**
 * 以http,https开头,且需符合URL规范
 * @param rule
 * @param value
 */
const validatHttpFilePath = async (rule: RuleObject, value: string) => {
    if (value !== '' && value !== null && value !== undefined) {
        let reg = /(http|https):\/\/([\w.]+\/?)\S*/.test(value)
        if (reg) {
            return Promise.resolve()
        } else {
            return Promise.reject('地址必须以http或者https开头，符合URL规范')
        }
    } else {
        return Promise.resolve()
    }
}

/**
 * 验证手机号
 * @param rule
 * @param value
 */
const validatPhone = async (rule: RuleObject, value: string) => {
    if (value !== '' && value !== null && value !== undefined) {
        let reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(value)
        if (reg) {
            return Promise.resolve()
        } else {
            return Promise.reject('请填写正确的手机号')
        }
    } else {
        return Promise.reject('填写手机号')
    }
}


export {
    validatPath,
    validatHttpFilePath,
    filePathRouter,
    validatPhone,
}
