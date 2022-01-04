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

export {
    apiUserinfo,
    apiNotice,
    apiLogin
}
