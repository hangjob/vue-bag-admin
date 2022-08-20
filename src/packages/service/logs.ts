import serviceBase from '@/packages/service/serviceBase'

const { apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes } = { ...serviceBase('/logs') }

export {
    apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes,
}
