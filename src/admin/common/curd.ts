import { toRaw } from 'vue'
import { message } from 'ant-design-vue'
import { post } from '@/packages/http/request'
import { merge } from 'lodash'

const curd = {
    tableData: [], // 表格数据
    loading: false, // loading
    selectedRowKeys: [], // 批量选择
    apiPrefix: '',
    create: {
        dom: '',
        visible: false,
        formState: '',
        api: '',
        handle() {
            console.log(this)
            this.api = this.api ? this.api : curd.apiPrefix + '/create'
            post(this.api, toRaw(this.formState), { notify: true }).then(() => {
                this.visible = false
                curd.all.handle()
            })
        },
        change() {
            this.visible = true
        },
    },
    all: {
        ks: '',
        api: '',
        tableData: [],
        handle() {
            this.api = this.api ? this.api : curd.apiPrefix + '/all'
            console.log(this)
            post(this.api, { ks: this.ks }).then((res: any) => {
                this.tableData = res
                curd.tableData = this.tableData
                curd.loading = false
            })
        },
    },
    update: {
        visible: false,
        id: '',
        api: '',
        formState: '',
        handle({ record }: { record: any }) {
            this.api = this.api ? this.api : curd.apiPrefix + '/update'
            post(this.api, toRaw(this.formState), { notify: true }).then(() => {
                this.visible = false
                curd.all.handle()
            })
        },
        change({ record }: { record: any }) {
            this.visible = true
            this.id = record.id
        },
    },
    delete: {
        api: '',
        handle({ record }: { record: any }) {
            this.api = this.api ? this.api : curd.apiPrefix + '/delete'
            post(this.api, { id: record.id }, { notify: true }).then(() => {
                curd.all.handle()
            })
        },
    },
    deletes: {
        api: '',
        handle() {
            this.api = this.api ? this.api : curd.apiPrefix + '/deletes'
            const ids = curd.selectedRowKeys.map((item: any) => item.id)
            if (!ids.length) {
                return message.warning('请至少选择一个')
            }
            post(this.api, { ids }, { notify: true }).then(() => {
                curd.all.handle()
            })
        },
    },
    selection: {
        onChange(selectedRowKeys: (string | number)[], selectedRows: any) {
            curd.selectedRowKeys = selectedRows
        },
    },
    refreshLoad() {
        this.loading = true
        this.all.handle()
    },
    handleSearch() {
        this.all.handle()
    },
}


const TableCurd = function(data?: object) {
    return merge(curd, data)
}


const TableCurd1 = function() {

}

TableCurd1.prototype.curd = function(data?: object) {
    let obj = merge(curd, data)
    return obj
}
export default TableCurd
export {
    TableCurd1,
}

