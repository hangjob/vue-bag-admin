import { cloneDeep, merge } from 'lodash'
import { post } from '@/packages/http/request'
import { reactive } from 'vue'
import { utils, string } from 'pm-utils'
import { message } from 'ant-design-vue'

// 由于 Ant-Design-Vue 框架不支持 v-bind 绑定 v-model 属性 ，需要抽离该属性
function compatibleCompValue(el) {
    const comps = [
        {
            el: ['a-input', 'a-cascader', 'a-date-picker', 'a-range-picker', 'a-input-number', 'a-mentions', 'a-rate', 'a-select', 'a-slider', 'a-tree-select'],
            type: '1',
        },
        { el: ['a-checkbox', 'a-radio', 'a-switch', 'a-time-picker'], type: '2' },
        { el: ['a-upload'], type: '3' },
        { el: ['a-transfer'], type: '4' },
    ]
    const data = comps.find((item: any) => item.el.find((todo) => todo === el))
    return data ? data.type : '0'
}

function filter$elAttrs($elAttrs) {
    const { value, checked, fileList, ...$attrs } = $elAttrs
    return { $attrs }
}

// 初始化curd
const initCurd = () => {
    const curdTable = reactive({
        apiPrefix: '', // 请求前缀，curd
        // a-table 组件的 $attrs ，继承所有属性和事件
        selectedRowKeys: <any>[], // 批量选择
        $tableAttrs: <any>{
            bordered: true,
            pagination: false,
            loading: false,
            rowKey: 'id',
            scroll: { x: '1200px' },
            rowSelection: {
                onChange: (selectedRowKeys: string[], selectedRows: any[]) => {
                    curdTable.selectedRowKeys = selectedRows
                },
            },
        },
        // a-modal 继承所有属性和事件 新增
        $cModalAttrs: <any>{
            title: '新增',
            visible: false,
            width: '85%',
            maskClosable: false,
            cancel() {
                curdTable.$cModalAttrs.visible = false
            },
            ok(el) {
                el.validate().then(() => {
                    console.log(curdTable.create)
                    curdTable.create.submit()
                }).catch(err => {
                    console.log(err)
                })
            },
        },
        // a-modal 继承所有属性和事件 编辑
        $eModalAttrs: {
            title: '编辑',
            visible: false,
            width: '85%',
            maskClosable: false,
            cancel() {
                curdTable.$eModalAttrs.visible = false
            },
            ok(el) {
                el.validate().then(() => {
                    curdTable.edit.submit()
                }).catch(err => {
                    console.log(err)
                })
            },
        },
        search: {
            formItem: [],
            formState: {},
            createFormState() {
                this.formItem.forEach((item) => {
                    this.formState[item.$formItemAttrs.name] = item.$elAttrs.value
                })
            },
            resetFields(el) {
                el.resetFields()
                curdTable.$pageAttrs.current = 1
                curdTable.all.getData()
            },
        },
        // a-pagination 组件的 $attrs ，继承所有属性和事件
        $pageAttrs: {
            current: 1,
            defaultPageSize: 10,
            total: 0,
            showQuickJumper: true,
            showSizeChanger: true,
            change: (page) => {
                curdTable.$pageAttrs.current = page
                curdTable.all.getData()
            },
            showSizeChange(current, size) {
                curdTable.$pageAttrs.defaultPageSize = size
            },
        },
        all: {
            api: '',
            beforeRequest: <any>null,// 请求成功之前
            afterRequest: <any>null,// 请求成功之后
            getData() {
                curdTable.all.api = curdTable.all.api ? curdTable.all.api : curdTable.apiPrefix + '/all'
                const { current, defaultPageSize } = curdTable.$pageAttrs
                let formState = cloneDeep(curdTable.search.formState)
                formState['currentPage'] = current
                formState['pageSize'] = defaultPageSize
                if (utils.dataType(curdTable.all.beforeRequest) === 'function') {
                    formState = curdTable.all.beforeRequest({
                        formState, page: { current, defaultPageSize },
                    })
                }
                if (Reflect.has(curdTable.$tableAttrs, 'loading')) {
                    curdTable.$tableAttrs.loading = true
                }
                post(curdTable.all.api, formState).then((res: any) => {
                    if (utils.dataType(curdTable.all.afterRequest) === 'function') {
                        const { dataSource, total } = curdTable.all.afterRequest(res)
                        curdTable.$tableAttrs.dataSource = dataSource
                        curdTable.$pageAttrs.total = total
                    } else {
                        const { rows: dataSource, total } = res
                        if (utils.dataType(res) === 'array') {
                            // 考虑到用前端分页的
                            curdTable.$tableAttrs.dataSource = res
                            curdTable.$pageAttrs.total = res.length
                        } else {
                            curdTable.$tableAttrs.dataSource = dataSource
                            curdTable.$pageAttrs.total = total
                        }
                    }
                }).finally(() => {
                    if (Reflect.has(curdTable.$tableAttrs, 'loading')) {
                        curdTable.$tableAttrs.loading = false
                    }
                })
            },
        },
        // 新增 表单
        create: {
            api: '',
            formItem: [],
            formState: {},
            beforeRequest: <any>null,// 请求成功之前
            afterRequest: <any>null,// 请求成功之后
            createFormState() {
                this.formItem.forEach((item) => {
                    const t = curdTable.utils.compatibleCompValue(item.el)
                    if (t === '1') {
                        this.formState[item.$formItemAttrs.name] = item.$elAttrs.value
                    }
                    if (t === '2') {
                        this.formState[item.$formItemAttrs.name] = item.$elAttrs.checked
                    }
                    if (t === '3') {
                        this.formState[item.$formItemAttrs.name] = item.$elAttrs.fileList
                    }
                    if (t === '0') {
                        this.formState[item.$formItemAttrs.name] = item.$elAttrs.value ? item.$elAttrs.value : ''
                    }
                })
            },
            resetFields(el) {
                el.resetFields()
            },
            submit() {
                curdTable.create.api = curdTable.create.api ? curdTable.create.api : curdTable.apiPrefix + '/create'
                let formState = cloneDeep(curdTable.create.formState)
                if (utils.dataType(curdTable.create.beforeRequest) === 'function') {
                    formState = curdTable.create.beforeRequest(curdTable.create.formState)
                }
                post(curdTable.create.api, formState, { notifyError: true }).then(() => {
                    curdTable.$cModalAttrs.visible = false
                    curdTable.all.getData()
                })
            },
        },
        edit: {
            api: '',
            row: {
                record: <any>{},
            },
            formItem: [],
            formState: {},
            beforeRequest: <any>null,// 请求成功之前
            afterRequest: <any>null,// 请求成功之后
            createFormState() {
                this.formItem.forEach((item) => {
                    const t = curdTable.utils.compatibleCompValue(item.el)
                    if (t === '1') {
                        this.formState[item.$formItemAttrs.name] = item.$elAttrs.value
                    }
                    if (t === '2') {
                        this.formState[item.$formItemAttrs.name] = item.$elAttrs.checked
                    }
                    if (t === '3') {
                        this.formState[item.$formItemAttrs.name] = item.$elAttrs.fileList
                    }
                    if (t === '0') {
                        this.formState[item.$formItemAttrs.name] = item.$elAttrs.value ? item.$elAttrs.value : ''
                    }
                })
            },
            resetFields(el) {
                el.resetFields()
            },
            submit() {
                this.api = this.api ? this.api : curdTable.apiPrefix + '/create'
                let formState = cloneDeep(this.formState)
                if (utils.dataType(this.beforeRequest) === 'function') {
                    formState = this.beforeRequest(formState)
                }
                post(this.api, formState, { notifyError: true }).then(() => {
                    curdTable.$eModalAttrs.visible = false
                    curdTable.all.getData()
                })
            },
            change({ record }) {
                curdTable.edit.row.record = record || {}
                curdTable.detail.getData()
                curdTable.$eModalAttrs.visible = true
            },
        },
        delete: {
            api: '',
            row: {
                record: <any>{},
            },
            beforeRequest: <any>null,// 请求成功之前
            afterRequest: <any>null,// 请求成功之后
            submit({ record }) {
                curdTable.delete.api = curdTable.delete.api ? curdTable.delete.api : curdTable.apiPrefix + '/delete'
                curdTable.delete.row.record = record || {}
                let formState = { id: curdTable.delete.row.record.id }
                if (utils.dataType(curdTable.delete.beforeRequest) === 'function') {
                    formState = curdTable.delete.beforeRequest(formState)
                }
                post(curdTable.delete.api, formState, { notify: true }).then(() => {
                    curdTable.all.getData()
                })
            },
        },
        deletes: {
            api: '',
            beforeRequest: <any>null,// 请求成功之前
            afterRequest: <any>null,// 请求成功之后
            submit() {
                curdTable.deletes.api = curdTable.deletes.api ? curdTable.deletes.api : curdTable.apiPrefix + '/deletes'
                const ids = curdTable.selectedRowKeys.map((item: any) => item.id)
                if (!ids.length) {
                    return message.warning('请至少选择一个')
                }
                let formState = { ids }
                if (utils.dataType(curdTable.deletes.beforeRequest) === 'function') {
                    formState = curdTable.deletes.beforeRequest(ids)
                }
                post(curdTable.deletes.api, formState, { notify: true }).then(() => {
                    curdTable.all.getData()
                })
            },
        },
        detail: {
            api: '',
            beforeRequest: <any>null,// 请求成功之前
            afterRequest: <any>null,// 请求成功之后
            getData() {
                curdTable.detail.api = curdTable.detail.api ? curdTable.detail.api : curdTable.apiPrefix + '/find'
                let formState = { id: curdTable.edit.row.record.id }
                if (utils.dataType(curdTable.detail.beforeRequest) === 'function') {
                    formState = curdTable.detail.beforeRequest(curdTable.edit.row.record)
                }
                post(curdTable.detail.api, {
                    ...formState,
                }, { notifyError: true }).then((res) => {
                    if (utils.dataType(curdTable.detail.afterRequest) === 'function') {
                        curdTable.edit.formState = curdTable.detail.afterRequest(res)
                    } else {
                        Object.keys(curdTable.edit.formState).forEach((key: string) => {
                            curdTable.edit.formState[key] = res[key]
                        })
                    }
                })
            },
        },
        refreshTable() {
            curdTable.$tableAttrs.loading = true
            curdTable.all.getData()
        },
        utils: {
            compatibleCompValue,
            filter$elAttrs,
        },
    })
    return curdTable
}

/**
 * 初始化工作
 * @param columns
 * @param curdTable
 * @param options
 */
const createTableHock = ({
    columns = <any>[],
    curdTable = <any>{},
    options = <any>{},
}) => {
    const tableAttrs = {
        columns: columns.filter((item) => item.visible !== false),
    }
    const search = { formItem: <Array<any>>[] }
    columns.forEach((item: any) => {
        if (utils.dataType(item.curdSearch) === 'object') {
            search.formItem.push(item.curdSearch)
        }
    })
    curdTable.search.formItem = curdTable.search.formItem.concat(search.formItem)
    curdTable.search.createFormState()
    curdTable.$tableAttrs = merge(curdTable.$tableAttrs, tableAttrs)
    options = merge({ send: true }, options)
    if (options.send) {
        //是否自动挂载执行数据请求
        setTimeout(() => {
            curdTable.all.getData()
        }, 20)
    }
    curdTable.create.formItem = generateFormItem({ columns, type: 'create' })
    curdTable.create.createFormState()
    curdTable.edit.formItem = generateFormItem({ columns, type: 'edit' })
    curdTable.edit.createFormState()
    return {
        columns,
        curdTable,
    }
}

// 生成表单
const generateFormItem = ({ columns, type }: { columns: Array<any>, type: string }) => {
    return columns.filter(item => (item.curd || item.curdCreate)).map((item: any) => {
        if (item.curd && (Object.keys(item.curd).length !== 0)) {
            item.formItem = item.curd
        }
        if (type === 'create' && item.curdCreate && (Object.keys(item.curdCreate).length !== 0)) {
            item.formItem = item.curdCreate
        }
        if (type === 'edit' && item.curdEdit && (Object.keys(item.curdEdit).length !== 0)) {
            item.formItem = item.curdEdit
        }
        if (!Reflect.has(item.formItem, '$colAttrs')) {
            item.formItem.$colAttrs = {}
        }
        if (!Reflect.has(item.formItem, '$elAttrs')) {
            item.formItem.$elAttrs = {}
        }
        if (!Reflect.has(item.formItem, '$formItemAttrs')) {
            item.formItem.$formItemAttrs = {}
        }
        if (!Reflect.has(item.formItem, 'slot')) {
            item.formItem.slot = {}
        }
        item.formItem.$colAttrs.autoLink = 'autoLink' in item.formItem.$colAttrs ? item.formItem.$colAttrs.autoLink : true
        item.formItem.$colAttrs.xs = item.formItem.$colAttrs?.xs || 24
        item.formItem.$colAttrs.sm = item.formItem.$colAttrs?.sm || 24
        item.formItem.$colAttrs.md = item.formItem.$colAttrs?.md || 24
        item.formItem.$colAttrs.lg = item.formItem.$colAttrs?.lg || 12
        item.formItem.$colAttrs.xl = item.formItem.$colAttrs?.xl || 12

        item.formItem.$formItemAttrs.labelCol = 'labelCol' in item.formItem.$formItemAttrs ? item.formItem.$formItemAttrs.labelCol : {
            span: 4,
            offset: 0,
        }
        item.formItem.$formItemAttrs.wrapperCol = 'wrapperCol' in item.formItem.$formItemAttrs ? item.formItem.$formItemAttrs.wrapperCol : {
            span: 18,
            offset: 0,
        }
        item._key = string.randomId({ size: 21 })
        return item.formItem
    })
}

export default initCurd
export {
    createTableHock,
    generateFormItem,
}



