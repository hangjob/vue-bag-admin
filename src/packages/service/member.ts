import { post } from '@/packages/http/request'

const prefix = '/member'


import serviceBase from '@/packages/service/serviceBase'


const { apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes } = { ...serviceBase(prefix) }


export {
    apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes,
}


// 更新密码
export const apiUpdatePas = (params?: object, config?: object) => {
    return post(`${prefix}/updatePas`, params, config)
}


// 查看密码
export const apiGetPas = (params?: object, config?: object) => {
    return post(`${prefix}/getPas`, params, config)
}
