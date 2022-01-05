import {post} from '@/packages/http/request'

const prefix = '/user'

/**
 * 登录
 */
const apiLogin = (params?: object) => {
    return post(`${prefix}/login`, params)
}

/**
 * 退出
 */
const apiLogout = () => {
    return post(`${prefix}/logout`)
}


/**
 * 获取用户信息
 */
const apiUserUserinfo = () => {
    return post(`${prefix}/userinfo`)
}


export {
    apiLogin,
    apiLogout,
    apiUserUserinfo
}
