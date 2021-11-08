import {post} from '@/packages/http/request'

const apiAddMenu = (params?:object) => {
    return post('/addMenu', params);
}

export {
    apiAddMenu
}