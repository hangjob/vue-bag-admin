/**
 * 策略模式
 * 设计有利于扩展，编写通用正则，如需要通过addRule去添加扩展
 */
const Regular = {
    rules: {
        email(str: any) {
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
        },
        phone(str: any) {
            /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(str)
        },
    },
    addRule: function(type: string, fn: Function) {
        // @ts-ignore
        this.rules[type] = fn
    },
    check: function(type: string, str: any) {
        // @ts-ignore
        return this.rules[type] ? this.rules[type](str) : false
    },
}

export default Regular
