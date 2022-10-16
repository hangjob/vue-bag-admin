import serviceBase from '@/packages/service/serviceBase'

const { apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes } = { ...serviceBase('/web/article') }


export {
    apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes,
}

