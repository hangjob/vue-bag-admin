import { cloneDeep, merge } from 'lodash'
import { post } from '@/packages/http/request'
import { reactive } from 'vue'
import { utils, string } from 'pm-utils'

// 初始化curd
const initCurd = () => {
    const curdTable = reactive({
        apiPrefix: '', // 请求前缀，curd
        // a-table 组件的 $attrs ，继承所有属性和事件
        $tableAttrs: <any>{
            bordered: true,
            pagination: false,
            loading: false,
        },
        // a-modal 继承所有属性和事件 新增
        $cModalAttrs: <any>{
            title: '新增',
            visible: true,
            width: '85%',
            maskClosable: false,
            cancel() {
                curdTable.$cModalAttrs.visible = false
            },
            ok(el) {
                el.validate().then(() => {
                    curdTable.$cModalAttrs.visible = false
                }).catch(err => {
                    console.log(err)
                })
            },
        },
        // a-modal 继承所有属性和事件 编辑
        $eModalAttrs: {},
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
            beforeEach: <any>null,
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
        edit: {},
        delete: {},
        deletes: {},
        detail: {},
        refreshTable: {},
        searchTable: {},
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
    curdTable.create.formItem = createFormItem({ columns })
    curdTable.create.createFormState()
    return {
        columns,
        curdTable,
    }
}

// 新增
const createFormItem = ({ columns }: { columns: Array<any> }) => {
    return columns.filter(item => (item.curd || item.curdCreate)).map((item: any) => {
        if ((Object.keys(item.curd).length !== 0)) {
            item.formItem = item.curd
        }
        if ((Object.keys(item.curdCreate).length !== 0)) {
            item.formItem = item.curdCreate
        }
        if (!Reflect.has(item.formItem, '$colAttrs')) {
            item.formItem.$colAttrs = {}
        }
        if (!Reflect.has(item.formItem, '$formItemAttrs')) {
            item.formItem.$formItemAttrs = {}
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
    createFormItem,
}



