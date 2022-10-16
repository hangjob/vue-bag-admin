import serviceBase from '@/packages/service/serviceBase'

const { apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes } = { ...serviceBase('/menu') }

export {
    apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes,
}

