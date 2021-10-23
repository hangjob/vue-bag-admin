import {post} from '@/packages/admin/http/request'

const apiUserinfo = () => {
    return post('/yxs/userinfo')
}

export {
    apiUserinfo
}