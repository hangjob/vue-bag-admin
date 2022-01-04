import {post} from '@/packages/http/request'

const prefix = '/user'

const apiUserinfo = (params?: object) => {
    return post('/yxs/userinfo', params)
}

const apiNotice = () => {
    return post('/yxs/notice')
}

/**
 * 登录
 */
const apiLogin = (params?: object) => {
    return post(`${prefix}/login`, params)
}


/**
 * 退出
 * @param params
 */
const apiLogout = () => {
    return post(`${prefix}/logout`)
}

export {
    apiUserinfo,
    apiNotice,
    apiLogin,
    apiLogout
}
