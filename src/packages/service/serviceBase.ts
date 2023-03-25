import { post } from '@/packages/http/request'
import { getApiInstanceUrl } from '@/packages/utils/api'

const serviceBase = (prefix: string) => {
    return {
        // 查询所有
        apiAll: (params?: object, config?: object) => {
            return post(getApiInstanceUrl(`${prefix}/all`), params, config)
        },
        // 单个查询
        apiFind: (params?: object, config?: object) => {
            return post(getApiInstanceUrl(`${prefix}/find`), params, config)
        },
        // 添加
        apiCreate: (params?: object, config?: object) => {
            return post(getApiInstanceUrl(`${prefix}/create`), params, config)
        },
        // 编辑
        apiUpdate: (params?: object, config?: object) => {
            return post(getApiInstanceUrl(`${prefix}/update`), params, config)
        },
        // 删除
        apiDelete: (params?: object, config?: object) => {
            return post(getApiInstanceUrl(`${prefix}/delete`), params, config)
        },
        // 删除 多条
        apiDeletes: (params?: object, config?: object) => {
            return post(getApiInstanceUrl(`${prefix}/deletes`), params, config)
        },
    }
}

export default serviceBase


