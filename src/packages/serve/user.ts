import {post} from '@/packages/http/request.ts'

const apiUserinfo = () => {
    return post('/yxs/userinfo')
}

export {
    apiUserinfo
}