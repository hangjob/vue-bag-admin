import serviceBase from '@www/admin/service/serviceBase'

const { apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes } = { ...serviceBase('/web/channel') }


export {
    apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes,
}

