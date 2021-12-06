import {post} from '@/packages/http/request'

const apiUserinfo = (params?: object) => {
    return post('/yxs/userinfo', params)
}

const apiNotice = () => {
    return post('/yxs/notice')
}

export {
    apiUserinfo,
    apiNotice
}
