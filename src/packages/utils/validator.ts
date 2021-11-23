import {RuleObject} from 'ant-design-vue/es/form/interface';
import {reg2} from './regular'

/**
 * 验证路由地址,必填项
 * @param rule
 * @param value
 */
const validatPath = async (rule: RuleObject, value: string) => {
    if (value !== '' && value !== null && value !== undefined) {
        let reg = reg2.test(value);
        if (reg) {
            return Promise.resolve();
        } else {
            return Promise.reject("请输入正确的路由，字母开头，/，数字,字母组合")
        }
    } else {
        return Promise.reject('输入路由地址');
    }
};


/**
 * 验证路由地址,选填项
 * @param rule
 * @param value
 */
const filePathRouter = async (rule: RuleObject, value: string) => {
    if (value !== '' && value !== null && value !== undefined) {
        let reg = reg2.test(value);
        if (reg) {
            return Promise.resolve();
        } else {
            return Promise.reject("请输入正确的路由，字母开头，/，数字,字母组合")
        }
    } else {
        return Promise.resolve();
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
            return Promise.resolve();
        } else {
            return Promise.reject("地址必须以http或者https开头，符合URL规范")
        }
    } else {
        return Promise.resolve();
    }
}


export {
    validatPath,
    validatHttpFilePath,
    filePathRouter
}