import {post} from '@/packages/http/request'

const apiUserinfo = () => {
    return post('/yxs/userinfo')
}

const apiNotice = () => {
    return post('/yxs/notice')
}

export {
    apiUserinfo,
    apiNotice
}