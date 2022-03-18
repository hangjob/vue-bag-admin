import { ref, toRaw } from 'vue'
import { message } from 'ant-design-vue'
import { post } from '@/packages/http/request'

const curd = {
    tableData: [], // 表格数据
    loading: false, // loading
    selectedRowKeys: [], // 批量选择
    create: {
        visible: false, // 创建弹窗
        submit(dom: any) {
            dom.value.onSubmit().then(() => {
                curd.create.visible = false
                curd.get.data()
            }).catch((error: any) => {
                console.log(error)
            })
        },
        change() {
            curd.create.visible = true
        },
    },
    get: {
        ks: '',
        api: '',
        data() {
            post(curd.get.api, { ks: curd.get.ks }).then((res: any) => {
                curd.tableData = res
                curd.loading = false
            })
        },
    },
    edit: {
        visible: false,
        id: '',
        api: '',
        submit(formState: any) {
            post(curd.edit.api, toRaw(formState), { notify: true }).then(() => {
                curd.edit.visible = false
                curd.get.data()
            })
        },
        change({ record }: { record: any }) {
            curd.edit.visible = true
            curd.edit.id = record.id
        },
    },
    delete: {
        id: '',
        api: '',
        handle({ record, mode = false }: { record?: any, mode?: boolean }) {
            if (mode) {
                const ids = curd.selectedRowKeys.map((item: any) => item.id)
                if (!ids.length) {
                    return message.warning('请至少选择一个')
                }
                post(curd.delete.api, { ids }, { notify: true }).then(() => {
                    curd.get.data()
                })
            } else {
                post(curd.delete.api, { id: record.id }, { notify: true }).then(() => {
                    curd.get.data()
                })
            }
        },
    },
    selection: {
        onChange: (selectedRowKeys: (string | number)[], selectedRows: any) => {
            curd.selectedRowKeys = selectedRows
        },
    },
    refreshLoad() {
        curd.loading = true
        curd.get.data()
    },
    handleSearch() {
        curd.get.data()
    },
}

const TableCurd = function(data: object) {
    return Object.assign(curd, data)
}

export default TableCurd
