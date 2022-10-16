import serviceBase from '@/packages/service/serviceBase'

const { apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes } = { ...serviceBase('/role') }

export {
    apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes,
}
