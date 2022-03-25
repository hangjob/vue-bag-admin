//useCounter.js
import { ref, reactive } from 'vue'
import { post } from '@/packages/http/request'
import { toRaw } from 'vue'
import { message } from 'ant-design-vue'

export default function() {
    const tableCurd = reactive({
        tableData: [], // 表格数据
        loading: false, // loading
        selectedRowKeys: [], // 批量选择
        apiPrefix: '',
        create: {
            visible: false,
            formState: '',
            api: '',
            ref: '',
            submit(form: any) {
                tableCurd.create.api = tableCurd.create.api ? tableCurd.create.api : tableCurd.apiPrefix + '/create'
                form.formRef.validate().then(() => {
                    post(tableCurd.create.api, toRaw(form.formState)).then(() => {
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
            handle(callback?: Function) {
                tableCurd.all.api = tableCurd.all.api ? tableCurd.all.api : tableCurd.apiPrefix + '/all'
                post(tableCurd.all.api, { ks: tableCurd.all.ks }).then((res: any) => {
                    if(callback){
                        callback(res)
                    }else{
                        tableCurd.tableData = res
                    }
                }).finally(() => {
                    tableCurd.loading = false
                })
            },
        },
        update: {
            visible: false,
            id: '',
            api: '',
            submit(form: any) {
                tableCurd.update.api = tableCurd.update.api ? tableCurd.update.api : tableCurd.apiPrefix + '/update'
                form.formEdit.formRef.validate().then(() => {
                    post(tableCurd.update.api, {
                        id: tableCurd.update.id,
                        ...toRaw(form.formState),
                    }, { notify: true }).then(() => {
                        tableCurd.update.visible = false
                        tableCurd.all.handle()
                    })
                })
            },
            change(record: any, form: any) {
                tableCurd.update.visible = true
                tableCurd.update.id = record.id
                tableCurd.detail.find(record, form)
            },
        },
        delete: {
            api: '',
            id: '',
            submit(record: any) {
                tableCurd.delete.api = tableCurd.delete.api ? tableCurd.delete.api : tableCurd.apiPrefix + '/delete'
                post(tableCurd.delete.api, { id: record.id }, { notify: true }).then(() => {
                    tableCurd.all.handle()
                })
            },
        },
        deletes: {
            api: '',
            submit(record: any) {
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
            find(record: any, form: any) {
                tableCurd.detail.api = tableCurd.detail.api ? tableCurd.detail.api : tableCurd.apiPrefix + '/find'
                post(tableCurd.detail.api, { id: record.id }).then((res: any) => {
                    let { createTime, updateTime, ...profileData } = res
                    Object.keys(form.formState).forEach((key: string) => {
                        form.formState[key] = profileData[key]
                    })
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
