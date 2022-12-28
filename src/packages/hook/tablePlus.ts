import { cloneDeep, merge } from 'lodash'
import { post } from '@/packages/http/request'
import { reactive, createVNode } from 'vue'
import { utils, string } from 'pm-utils'
import { message, Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { extendBtns } from './extend'

// 由于 Ant-Design-Vue 框架不支持 v-bind 绑定 v-model 属性 ，需要抽离该属性
function compatibleCompValue(el) {
    const comps = [
        {
            el: ['a-input', 'a-cascader', 'a-textarea', 'a-date-picker', 'a-range-picker', 'a-input-number', 'a-mentions', 'a-rate', 'a-select', 'a-slider', 'a-tree-select'],
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
        $tableAttrs: <any>{
            bordered: true,
            pagination: false,
            loading: false,
            rowKey: 'id',
            size: 'middle',
            scroll: { x: '1200px' },
            rowSelection: {
                onChange: (selectedRowKeys: string[], selectedRows: any[]) => {
                    curdTable.deletes.selectedRowKeys = selectedRows
                },
            },
        },
        // 页面按钮
        btns: <any>[],
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
            isPage: false, // 是否开启分页
            isEmpty: true, // 是否过滤我空 null  undefined 的属性
            getData() {
                curdTable.all.api = curdTable.all.api ? curdTable.all.api : curdTable.apiPrefix + '/all'
                const { current, defaultPageSize } = curdTable.$pageAttrs
                let params = cloneDeep(curdTable.search.formState)
                if (curdTable.all.isPage) {
                    params['currentPage'] = current
                    params['pageSize'] = defaultPageSize
                }
                if (utils.dataType(curdTable.all.beforeRequest) === 'function') {
                    const { formState } = curdTable.all.beforeRequest({
                        formState: curdTable.search.formState,
                        page: { current, defaultPageSize },
                    })
                    params = formState
                }
                if (Reflect.has(curdTable.$tableAttrs, 'loading')) {
                    curdTable.$tableAttrs.loading = true
                }
                if (curdTable.all.isEmpty) {
                    params = curdTable.utils.removeEmpty(params)
                }
                post(curdTable.all.api, params).then((res: any) => {
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
            formItem: <any>[],
            formState: {},
            beforeRequest: <any>null,// 请求成功之前
            afterRequest: <any>null,// 请求成功之后
            isEmpty: false,
            createFormState() {
                curdTable.create.formItem.forEach((item) => {
                    const t = curdTable.utils.compatibleCompValue(item.el)
                    if (t === '1') {
                        curdTable.create.formState[item.$formItemAttrs.name] = item.$elAttrs.value
                    }
                    if (t === '2') {
                        curdTable.create.formState[item.$formItemAttrs.name] = item.$elAttrs.checked
                    }
                    if (t === '3') {
                        curdTable.create.formState[item.$formItemAttrs.name] = item.$elAttrs.fileList
                    }
                    if (t === '0') {
                        curdTable.create.formState[item.$formItemAttrs.name] = item.$elAttrs.value ? item.$elAttrs.value : ''
                    }
                })
            },
            resetFields(el) {
                el.resetFields()
            },
            submit() {
                curdTable.create.api = curdTable.create.api ? curdTable.create.api : curdTable.apiPrefix + '/create'
                let params = cloneDeep(curdTable.create.formState)
                if (utils.dataType(curdTable.create.beforeRequest) === 'function') {
                    const { formState } = curdTable.create.beforeRequest({ formState: curdTable.create.formState })
                    params = formState
                }
                if (curdTable.create.isEmpty) {
                    params = curdTable.utils.removeEmpty(params)
                }
                post(curdTable.create.api, params, { notifyError: true }).then(() => {
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
            formItem: <any>[],
            formState: {},
            beforeRequest: <any>null,// 请求成功之前
            afterRequest: <any>null,// 请求成功之后
            isEmpty: false,
            createFormState() {
                curdTable.edit.formItem.forEach((item) => {
                    const t = curdTable.utils.compatibleCompValue(item.el)
                    if (t === '1') {
                        curdTable.edit.formState[item.$formItemAttrs.name] = item.$elAttrs.value
                    }
                    if (t === '2') {
                        curdTable.edit.formState[item.$formItemAttrs.name] = item.$elAttrs.checked
                    }
                    if (t === '3') {
                        curdTable.edit.formState[item.$formItemAttrs.name] = item.$elAttrs.fileList
                    }
                    if (t === '0') {
                        curdTable.edit.formState[item.$formItemAttrs.name] = item.$elAttrs.value ? item.$elAttrs.value : ''
                    }
                })
            },
            resetFields(el) {
                el.resetFields()
            },
            submit() {
                curdTable.edit.api = curdTable.edit.api ? curdTable.edit.api : curdTable.apiPrefix + '/update'
                let params = cloneDeep({ ...curdTable.edit.formState, id: curdTable.edit.row.record.id })
                if (utils.dataType(this.beforeRequest) === 'function') {
                    params = curdTable.edit.beforeRequest({
                        formState: curdTable.edit.formState,
                        record: curdTable.edit.row.record,
                    })
                }
                if (curdTable.edit.isEmpty) {
                    params = curdTable.utils.removeEmpty(params)
                }
                post(curdTable.edit.api, params, { notifyError: true }).then(() => {
                    curdTable.$eModalAttrs.visible = false
                    curdTable.all.getData()
                })
            },
            change({ record }) {
                curdTable.edit.row.record = record || {}
                if (curdTable.detail.isRequest) {
                    curdTable.detail.getData()
                } else {
                    if (utils.dataType(curdTable.detail.afterRequest) === 'function') {
                        const { formState } = curdTable.detail.afterRequest(record)
                        curdTable.edit.formState = formState
                    } else {
                        Object.keys(curdTable.edit.formState).forEach((key: string) => {
                            curdTable.edit.formState[key] = record[key]
                        })
                    }
                }
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
            isEmpty: false,
            submit({ record }) {
                curdTable.delete.api = curdTable.delete.api ? curdTable.delete.api : curdTable.apiPrefix + '/delete'
                curdTable.delete.row.record = record || {}
                let params = { id: curdTable.delete.row.record.id }
                if (utils.dataType(curdTable.delete.beforeRequest) === 'function') {
                    const { formState } = curdTable.delete.beforeRequest({ record })
                    params = formState
                }
                if (curdTable.delete.isEmpty) {
                    params = curdTable.utils.removeEmpty(params)
                }
                return post(curdTable.delete.api, params, { notify: true }).then((res) => {
                    curdTable.all.getData()
                    return Promise.resolve(res)
                }).catch((err) => {
                    return Promise.reject(err)
                })
            },
        },
        deletes: {
            api: '',
            beforeRequest: <any>null,// 请求成功之前
            afterRequest: <any>null,// 请求成功之后
            isEmpty: false,
            selectedRowKeys: <any>[], // 批量选择
            submit() {
                curdTable.deletes.api = curdTable.deletes.api ? curdTable.deletes.api : curdTable.apiPrefix + '/deletes'
                const ids = curdTable.deletes.selectedRowKeys.map((item: any) => item.id)
                if (!ids.length) {
                    return message.warning('请至少选择一个')
                }
                let params = { ids }
                if (utils.dataType(curdTable.deletes.beforeRequest) === 'function') {
                    params = curdTable.deletes.beforeRequest(ids)
                }
                if (curdTable.deletes.isEmpty) {
                    params = curdTable.utils.removeEmpty(params)
                }
                post(curdTable.deletes.api, params, { notify: true }).then(() => {
                    curdTable.all.getData()
                })
            },
        },
        detail: {
            api: '',
            beforeRequest: <any>null,// 请求成功之前
            afterRequest: <any>null,// 请求成功之后
            isRequest: true,
            isEmpty: false,
            getData() {
                curdTable.detail.api = curdTable.detail.api ? curdTable.detail.api : curdTable.apiPrefix + '/find'
                let params = { id: curdTable.edit.row.record.id }
                if (utils.dataType(curdTable.detail.beforeRequest) === 'function') {
                    params = curdTable.detail.beforeRequest(curdTable.edit.row.record)
                }
                if (curdTable.detail.isEmpty) {
                    params = curdTable.utils.removeEmpty(params)
                }
                post(curdTable.detail.api, params, { notifyError: true }).then((res) => {
                    if (utils.dataType(curdTable.detail.afterRequest) === 'function') {
                        const { formState } = curdTable.detail.afterRequest(res)
                        curdTable.edit.formState = formState
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
            // 过滤属性
            filter$elAttrs,
            // 删除 null undefined 属性
            removeEmpty(params) {
                return Object.entries(params)
                    .filter(([_, v]) => v !== null && v !== undefined)
                    .reduce((a, [k, v]) =>
                            ({ ...a, [k]: v === Object(v) ? curdTable.utils.removeEmpty(v) : v })
                        , {})
            },
        },
    })
    // 头部按钮
    // location 1 是表头左边 2 表头右边  3表格按钮
    curdTable.btns = [
        {
            name: '刷新',
            type: 'primary',
            loading: curdTable.$tableAttrs.loading,
            click: curdTable.refreshTable,
            tag: 'refresh',
            effect: 1,
            role: true,
        },
        {
            name: '新增',
            type: 'primary',
            class: 'bag-button-color-green',
            loading: curdTable.$tableAttrs.loading,
            click: () => curdTable.$cModalAttrs.visible = true,
            tag: 'create',
            effect: 1,
            role: true,
        },
        {
            name: '删除',
            type: 'primary',
            danger: true,
            click: curdTable.deletes.submit,
            tag: 'del',
            effect: 1,
            role: true,
        },
        {
            name: '数据导出',
            type: 'primary',
            tag: 'export',
            effect: 2,
            role: true,
        },
        {
            name: '表格大小',
            type: 'primary',
            effect: 2,
            tag: 'size',
            class: 'bag-button-color-green',
            role: true,
        },
        {
            name: '编辑',
            type: 'primary',
            click: ({ record }) => curdTable.edit.change({ record }),
            tag: 'edit',
            effect: 3,
            role: true,
        },
        {
            name: '删除',
            type: 'primary',
            danger: true,
            click: ({ record }) => {
                Modal.confirm({
                    title: '提示',
                    icon: createVNode(ExclamationCircleOutlined),
                    content: '是否删除？',
                    okText: '确认',
                    cancelText: '取消',
                    onOk() {
                        curdTable.delete.submit({ record }).then((res) => {
                            console.log(1111, res)
                        })
                    },
                    onCancel() {
                    },
                })
            },
            tag: 'del',
            effect: 3,
            role: true,
        },
    ]
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

    const search = generateSearchFormItem({ columns })
    curdTable.search.formItem = curdTable.search.formItem.concat(search.formItem)
    curdTable.search.createFormState()

    curdTable.$tableAttrs = merge(curdTable.$tableAttrs, tableAttrs)

    curdTable.create.formItem = generateFormItem({ columns, type: 'create' })
    curdTable.create.createFormState()
    curdTable.edit.formItem = generateFormItem({ columns, type: 'edit' })
    curdTable.edit.createFormState()
    extendBtns({ curdTable })

    options = merge({ send: true }, options)
    if (options.send) {
        //是否自动挂载执行数据请求
        setTimeout(() => {
            curdTable.all.getData()
        }, 20)
    }

    return {
        columns,
        curdTable,
    }
}

// 生成搜索表单的formItem
const generateSearchFormItem = ({ columns }: { columns: Array<any> }) => {
    const search = { formItem: <Array<any>>[] }
    columns.forEach((item: any) => {
        if (utils.dataType(item.curdSearch) === 'object') {
            if (!Reflect.has(item.curdSearch, 'slot')) {
                item.curdSearch.slot = {}
            }
            search.formItem.push(item.curdSearch)
        }
    })
    return search
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
        item.formItem.$colAttrs.xl = item.formItem.$colAttrs?.xl || 8
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
}



