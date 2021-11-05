import {post} from '@/packages/http/request'

const apiUserinfo = () => {
    return post('/yxs/userinfo')
}

export {
    apiUserinfo
}