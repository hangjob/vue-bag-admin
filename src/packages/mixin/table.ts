// @ts-nocheck
import { post } from '@/packages/http/request'
import { toRaw } from 'vue'
import { message } from 'ant-design-vue'

const tableCurd = {
    data() {
        return {
            tableCurd: {
                tableData: [], // 表格数据
                loading: false, // loading
                selectedRowKeys: [], // 批量选择
                apiPrefix: '',
                create: {
                    dom: '',
                    visible: false,
                    formState: '',
                    api: '',
                },
                all: {
                    ks: '',
                    api: '',
                },
                update: {
                    visible: false,
                    id: '',
                    api: '',
                },
                delete: {
                    api: '',
                    id: '',
                },
                deletes: {
                    api: '',
                },
                detail: {
                    api: '',
                },
                selection: {},
            },
        }
    },
    created() {
        this.tableCurd.selection = {
            onChange: (selectedRowKeys: (string | number)[], selectedRows: any) => {
                this.tableCurd.selectedRowKeys = selectedRows
            },
        }
    },
    methods: {
        createHandle() {
            this.tableCurd.create.api = this.tableCurd.create.api ? this.tableCurd.create.api : this.tableCurd.apiPrefix + '/create'
            this.$refs.formCreate.$refs.formRef.validate().then(() => {
                post(this.tableCurd.create.api, toRaw(this.$refs.formCreate.formState), { notify: true }).then(() => {
                    this.tableCurd.create.visible = false
                    this.allHandle()
                })
            }).catch((err: any) => {
                console.log(err)
            })
        },
        createChange() {
            this.tableCurd.create.visible = true
        },
        allHandle() {
            this.tableCurd.all.api = this.tableCurd.all.api ? this.tableCurd.all.api : this.tableCurd.apiPrefix + '/all'
            post(this.tableCurd.all.api, { ks: this.tableCurd.all.ks }).then((res: any) => {
                if (this.tableDataParent) {
                    this.tableDataParent(res)
                } else {
                    this.tableCurd.tableData = res
                }
            }).finally(() => {
                this.tableCurd.loading = false
            })
        },
        updateHandle() {
            this.tableCurd.update.api = this.tableCurd.update.api ? this.tableCurd.update.api : this.tableCurd.apiPrefix + '/update'
            this.$refs.formEdit.$refs.formRef.validate().then(() => {
                post(this.tableCurd.update.api, {
                    id: this.tableCurd.update.id,
                    ...toRaw(this.$refs.formEdit.formState),
                }, { notify: true }).then(() => {
                    this.tableCurd.update.visible = false
                    this.allHandle()
                })
            })
        },
        updateVisible({ record }: { record: any }) {
            this.tableCurd.update.visible = true
            this.tableCurd.update.id = record.id
            this.detailFind({ record })
        },
        deleteHandle({ record }: { record: any }) {
            this.tableCurd.delete.api = this.tableCurd.delete.api ? this.tableCurd.delete.api : this.tableCurd.apiPrefix + '/delete'
            post(this.tableCurd.delete.api, { id: record.id }, { notify: true }).then(() => {
                this.allHandle()
            })
        },
        deletesHandle() {
            this.tableCurd.deletes.api = this.tableCurd.deletes.api ? this.tableCurd.deletes.api : this.tableCurd.apiPrefix + '/deletes'
            const ids = this.tableCurd.selectedRowKeys.map((item: any) => item.id)
            if (!ids.length) {
                return message.warning('请至少选择一个')
            }
            post(this.tableCurd.deletes.api, { ids }, { notify: true }).then(() => {
                this.allHandle()
            })
        },
        detailFind({ record }: { record: any }) {
            this.tableCurd.detail.api = this.tableCurd.detail.api ? this.tableCurd.detail.api : this.tableCurd.apiPrefix + '/find'
            post(this.tableCurd.detail.api, { id: record.id }).then((res: any) => {
                let { createTime, updateTime, ...profileData } = res
                Object.keys(this.$refs.formEdit.formState).forEach((key: string) => {
                    this.$refs.formEdit.formState[key] = profileData[key]
                })
            })
        },
        refreshTableCurdLoad() {
            this.tableCurd.loading = true
            this.allHandle()
        },
        handleTableCurdSearch() {
            this.allHandle()
        },
    },
}

export default tableCurd
