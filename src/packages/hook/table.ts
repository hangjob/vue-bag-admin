import { reactive } from 'vue'
import { post } from '@/packages/http/request'
import { toRaw } from 'vue'
import { message } from 'ant-design-vue'
import isFunction from '@/bag-utils/regular/isFunction'
import { createFormItem } from '@/packages/utils/form'

export default function() {
    const tableCurd = reactive({
        columns: <Array<any>>[],
        tableData: [], // 表格数据
        loading: false, // loading
        selectedRowKeys: [], // 批量选择
        apiPrefix: '', // 请求前缀，curd
        create: {
            visible: false, //  弹窗是否显示
            api: '', // API地址
            formState: '', // 表单数据
            _formState: <any>'',
            refForm: <any>'', // 组件ref
            beforeSubmit: <any>'', // 提交前置函数 ,可以在提交之前处理数据然后在传给后端
            submit() {
                tableCurd.create.api = tableCurd.create.api ? tableCurd.create.api : tableCurd.apiPrefix + '/create'
                tableCurd.create._formState = toRaw(tableCurd.create.refForm.formState)
                if (isFunction(tableCurd.create.beforeSubmit)) {
                    // 在触发之前 传递beforeSubmit函数 加工数据 此处可以进一步加工
                    tableCurd.create._formState = tableCurd.create.beforeSubmit(tableCurd.create._formState)
                }
                tableCurd.create.refForm.formRef.validate().then(() => {
                    post(tableCurd.create.api, tableCurd.create._formState, { notifyError: true }).then(() => {
                        tableCurd.create.visible = false
                        tableCurd.all.handle()
                    })
                }).catch((err: any) => {
                    console.log(err)
                })
            },
            change() {
                tableCurd.create.visible = true
            },
        },
        all: {
            ks: '',
            api: '',
            beforeSuccess: <any>'',
            search: {
                formItem: <any>[],
                formState: <any>{},
                formRules: <any>{},
            },
            handle() {
                tableCurd.all.api = tableCurd.all.api ? tableCurd.all.api : tableCurd.apiPrefix + '/all'
                post(tableCurd.all.api, { ...tableCurd.all.search.formState }).then((res: any) => {
                    if (isFunction(tableCurd.all.beforeSuccess)) {
                        tableCurd.all.beforeSuccess(res)
                    } else {
                        tableCurd.tableData = res
                    }
                }).finally(() => {
                    tableCurd.loading = false
                })
            },
        },
        edit: {
            visible: false,
            id: '',
            api: '',
            refForm: <any>'',
            submit() {
                tableCurd.edit.api = tableCurd.edit.api ? tableCurd.edit.api : tableCurd.apiPrefix + '/update'
                tableCurd.edit.refForm.formRef.validate().then(() => {
                    post(tableCurd.edit.api, {
                        id: tableCurd.edit.id,
                        ...toRaw(tableCurd.edit.refForm.formState),
                    }, { notify: true }).then(() => {
                        tableCurd.edit.visible = false
                        tableCurd.all.handle()
                    })
                })
            },
            change(row: any) {
                tableCurd.edit.id = row.id
                tableCurd.detail.find(row)
                tableCurd.edit.visible = true
            },
            // 直接提交
            directSubmit({ data }: { data: any }) {
                tableCurd.edit.api = tableCurd.edit.api ? tableCurd.edit.api : tableCurd.apiPrefix + '/update'
                return post(tableCurd.edit.api, {
                    id: tableCurd.edit.id,
                    ...toRaw(data),
                }, { notify: true }).then(() => {
                    tableCurd.all.handle()
                    return Promise.resolve()
                })
            },
        },
        delete: {
            api: '',
            id: '',
            submit(row: any) {
                tableCurd.delete.api = tableCurd.delete.api ? tableCurd.delete.api : tableCurd.apiPrefix + '/delete'
                post(tableCurd.delete.api, { id: row.id }, { notify: true }).then(() => {
                    tableCurd.all.handle()
                })
            },
        },
        deletes: {
            api: '',
            submit() {
                tableCurd.deletes.api = tableCurd.deletes.api ? tableCurd.deletes.api : tableCurd.apiPrefix + '/deletes'
                const ids = tableCurd.selectedRowKeys.map((item: any) => item.id)
                if (!ids.length) {
                    return message.warning('请至少选择一个')
                }
                post(tableCurd.deletes.api, { ids }, { notify: true }).then(() => {
                    tableCurd.all.handle()
                })
            },
        },
        detail: {
            api: '',
            afterCallback: <any>'',
            find(row: any) {
                tableCurd.detail.api = tableCurd.detail.api ? tableCurd.detail.api : tableCurd.apiPrefix + '/find'
                post(tableCurd.detail.api, { id: row.id }).then((res: any) => {
                    let { updateTime, ...profileData } = res
                    Object.keys(tableCurd.edit.refForm.formState).forEach((key: string) => {
                        tableCurd.edit.refForm.formState[key] = profileData[key]
                    })
                    if (isFunction(tableCurd.detail.afterCallback)) {
                        tableCurd.detail.afterCallback({ res })
                    }
                })
            },
        },
        selection: {
            onChange: (selectedRowKeys: (string | number)[], selectedRows: any) => {
                tableCurd.selectedRowKeys = selectedRows
            },
        },
        refreshTable() {
            tableCurd.loading = true
            tableCurd.all.handle()
        },
        searchTable() {
            tableCurd.all.handle()
        },
    })
    return {
        tableCurd,
    }
}

/**
 * 生成form表单数据
 * @param columns
 */
const formHock = function({ columns }: { columns: Array<any> }) {
    const { rules, fields, formItem } = createFormItem(columns)
    return { rules, formState: fields, formItem }
}

export {
    formHock,
}
