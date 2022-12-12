import { merge } from 'lodash'
import { post } from '@/packages/http/request'
import { reactive } from 'vue'


// 初始化curd
const initCurd = (options = {}) => {
    const curdTable = reactive({
        apiPrefix: '', // 请求前缀，curd
        $tableAttrs: <any>{}, // a-table 组件的 $attrs ，继承所有属性和事件
        all: {
            api: '',
            search: {

            },
            getData() {
                curdTable.all.api = curdTable.all.api ? curdTable.all.api : curdTable.apiPrefix + '/all'
                post(curdTable.all.api).then((res: any) => {
                    curdTable.$tableAttrs.dataSource = res
                }).finally(() => {
                    curdTable.$tableAttrs.loading = false
                })
            },
        },
        create: {},
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
    curdTable.$tableAttrs = merge(curdTable.$tableAttrs, tableAttrs)
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

export default initCurd
export {
    createTableHock,
}



