import {RuleObject} from 'ant-design-vue/es/form/interface';

// 验证字母开头，/ 数字和字母 组合
const validatPath = async (rule: RuleObject, value: string) => {
    if (value !== '' && value !== null && value !== undefined) {
        let reg = /^([\/]([a-zA-Z]+))*[0-9a-zA-Z]+$/.test(value);
        if (reg) {
            return Promise.resolve();
        } else {
            return Promise.reject("请输入正确的路由，字母开头，/，数字,字母组合")
        }
    } else {
        return Promise.reject('输入路由地址');
    }
};


// 以http,https开头,且需符合URL规范
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


// 验证字母开头，/ 数字和字母 组合
const filePathRouter = async (rule: RuleObject, value: string) => {
    if (value !== '' && value !== null && value !== undefined) {
        let reg = /^([\/]([a-zA-Z]+))*[0-9a-zA-Z]+$/.test(value);
        if (reg) {
            return Promise.resolve();
        } else {
            return Promise.reject("请输入正确的路由，字母开头，/，数字,字母组合")
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