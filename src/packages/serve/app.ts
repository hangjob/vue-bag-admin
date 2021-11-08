import {post} from '@/packages/http/request'

const apiAddMenu = (params) => {
    return post('/addMenu', params);
}

export {
    apiAddMenu
}