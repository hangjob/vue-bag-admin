import { reactive } from 'vue'
import { post } from '@/packages/http/request'
import { toRaw } from 'vue'
import { message } from 'ant-design-vue'
import { utils } from 'pm-utils'
import { createFormItem } from '@/packages/utils/form'

export default function(options = {}) {
    const pagination: any = 'pagination' in options ? options.pagination : {}
    const tableCurd = reactive({
        pagination: {
            current: 1,
            total: 0,
            pageSize: 10,
            size: 'big',
            showQuickJumper: true,
            ...pagination,
        },
        btns: [
            {
                name: '刷新',
                func: () => tableCurd.refreshTable(),
                loading: () => tableCurd.loading,
                type: 'primary',
                tag: 'refresh',
            },
            {
                name: '新增',
                func: () => tableCurd.create.change(),
                loading: () => tableCurd.loading,
                class: 'bag-button-color-green',
                tag: 'create',
            },
            {
                name: '删除',
                func: () => tableCurd.deletes.submit(),
                loading: () => tableCurd.loading,
                type: 'danger',
                tag: 'del',
            },
        ],
        // 右边的按钮 --属性继承exbtn
        extBtns: [
            {
                name: 'Excel导出',
                ui: 'm',
            },
            {
                name: '表格大小',
                ui: 'm',
            },
            {
                name: '显示表列',
                ui: 'm',
            },
        ],
        search: <Array<any>>[],
        // 表格事件
        tableChange: (pagination, filters, sorter, { currentDataSource }) => {
            tableCurd.pagination.current = pagination.current
            tableCurd.loading = true
            tableCurd.all.handle()
        },
        columns: <Array<any>>[],
        tableData: [], // 表格数据
        loading: false, // loading
        selectedRowKeys: [], // 批量选择
        apiPrefix: '', // 请求前缀，curd
        create: {
            width: '85%',
            visible: false, //  弹窗是否显示
            api: '', // API地址
            formState: '', // 表单数据
            _formState: <any>'',
            refForm: <any>'', // 组件ref
            beforeSubmit: <any>'', // 提交前置函数 ,可以在提交之前处理数据然后在传给后端
            submit() {
                tableCurd.create.api = tableCurd.create.api ? tableCurd.create.api : tableCurd.apiPrefix + '/create'
                tableCurd.create._formState = toRaw(tableCurd.create.refForm.formState)
                if (utils.dataType(tableCurd.create.beforeSubmit) === 'function') {
                    // 在触发之前 传递beforeSubmit函数 加工数据 此处可以进一步加工
                    tableCurd.create._formState = tableCurd.create.beforeSubmit(tableCurd.create._formState)
                }
                tableCurd.create.refForm.aFormRefApi.validate().then(() => {
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
            cancel() {
                tableCurd.create.resetFields()
            },
            resetFields() {
                tableCurd.create.refForm.aFormRefApi.resetFields()
            },
        },
        all: {
            ks: '',
            api: '',
            beforeSuccess: <any>'',
            beforeEach: <any>'',
            _formState: <any>{},
            search: {
                formItem: <any>[],
                formState: <any>{},
                formRules: <any>{},
            },
            handle() {
                tableCurd.all.api = tableCurd.all.api ? tableCurd.all.api : tableCurd.apiPrefix + '/all'
                tableCurd.all._formState = tableCurd.all.search.formState
                if (utils.dataType(tableCurd.all.beforeEach) === 'function') {
                    tableCurd.all._formState = tableCurd.all.beforeEach(tableCurd.all.search.formState, tableCurd.pagination)
                }
                post(tableCurd.all.api, { ...tableCurd.all._formState }).then((res: any) => {
                    if (utils.dataType(tableCurd.all.beforeSuccess) === 'function') {
                        const data = tableCurd.all.beforeSuccess(res)
                        tableCurd.tableData = data || res
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
            width: '85%',
            id: '',
            api: '',
            refForm: <any>'',
            _formState: <any>{},
            beforeSubmit: <any>'',
            submit() {
                tableCurd.edit.api = tableCurd.edit.api ? tableCurd.edit.api : tableCurd.apiPrefix + '/update'
                tableCurd.edit._formState = toRaw(tableCurd.edit.refForm.formState)
                if (utils.dataType(tableCurd.edit.beforeSubmit) === 'function') {
                    // 在触发之前 传递beforeSubmit函数 加工数据 此处可以进一步加工
                    tableCurd.edit._formState = tableCurd.edit.beforeSubmit(tableCurd.edit._formState)
                }
                tableCurd.edit.refForm.aFormRefApi.validate().then(() => {
                    post(tableCurd.edit.api, {
                        id: tableCurd.edit.id,
                        ...tableCurd.edit._formState,
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
            cancel() {
                tableCurd.edit.resetFields()
            },
            resetFields() {
                tableCurd.edit.refForm.aFormRefApi.resetFields()
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
            _formState: <any>{},
            beforeSubmit: <any>'',
            submit(row: any) {
                tableCurd.delete.api = tableCurd.delete.api ? tableCurd.delete.api : tableCurd.apiPrefix + '/delete'
                if (utils.dataType(tableCurd.delete.beforeSubmit) === 'function') {
                    // 在触发之前 传递beforeSubmit函数 加工数据 此处可以进一步加工
                    tableCurd.delete._formState = tableCurd.delete.beforeSubmit(row)
                }
                post(tableCurd.delete.api, { id: row.id, ...tableCurd.delete._formState }, { notify: true }).then(() => {
                    tableCurd.all.handle()
                })
            },
        },
        deletes: {
            api: '',
            _formState: <any>{},
            beforeSubmit: <any>'',
            submit() {
                tableCurd.deletes.api = tableCurd.deletes.api ? tableCurd.deletes.api : tableCurd.apiPrefix + '/deletes'
                const ids = tableCurd.selectedRowKeys.map((item: any) => item.id)
                if (!ids.length) {
                    return message.warning('请至少选择一个')
                }
                if (utils.dataType(tableCurd.deletes.beforeSubmit) === 'function') {
                    // 在触发之前 传递beforeSubmit函数 加工数据 此处可以进一步加工
                    tableCurd.deletes._formState = tableCurd.deletes.beforeSubmit(ids)
                } else {
                    tableCurd.deletes._formState = ids
                }
                post(tableCurd.deletes.api, { ...tableCurd.deletes._formState }, { notify: true }).then(() => {
                    tableCurd.all.handle()
                })
            },
        },
        detail: {
            api: '',
            afterEach: <any>'',
            beforeEach: <any>'',
            _formState: <any>{},
            find(row: any) {
                tableCurd.detail.api = tableCurd.detail.api ? tableCurd.detail.api : tableCurd.apiPrefix + '/find'
                if (utils.dataType(tableCurd.detail.beforeEach) === 'function') {
                    tableCurd.detail._formState = tableCurd.detail.beforeEach(row)
                }
                post(tableCurd.detail.api, { id: row.id, ...tableCurd.detail._formState }).then((res: any) => {
                    let { updateTime, ...profileData } = res
                    Object.keys(tableCurd.edit.refForm.formState).forEach((key: string) => {
                        tableCurd.edit.refForm.formState[key] = profileData[key]
                    })
                    if (utils.dataType(tableCurd.detail.afterEach) === 'function') {
                        tableCurd.detail.afterEach({ res })
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
 * @param tableCurd
 */

const formHock = function({ columns }: { columns: Array<any> }) {
    const { rules, fields, formItem } = createFormItem(columns)
    return { rules, formState: fields, formItem }
}


/**
 * 初始化准备工作
 * @param columns
 * @param tableCurd
 * @param options
 */
const initTableHock = function({
    columns,
    tableCurd,
    options = {},
}: { columns: Array<any>, tableCurd: any, options: any }) {
    tableCurd.columns = columns.filter((item) => item.visible !== false)
    const columnsMerge = columns.concat(tableCurd.search)
    columnsMerge.filter((item) => item.formSearch && Object.keys(item.formSearch).length).map((item: any) => {  // 设置需要表单的搜索的字段
        tableCurd.all.search.formState[item.formSearch.name] = item.formSearch?.props?.defaultValue || ''
        tableCurd.all.search.formItem.push(item.formSearch)
    })
    options = Object.assign({ send: true }, options)
    tableCurd.apiPrefix = options.apiPrefix
    if (options.send) {
        //是否自动挂载执行数据请求
        setTimeout(() => {
            tableCurd.all.handle()
        }, 20)
    }
    tableCurd.sourceData = { columns } // 源数据
    return formHock({ columns })
}


export {
    formHock,
    initTableHock,
}
