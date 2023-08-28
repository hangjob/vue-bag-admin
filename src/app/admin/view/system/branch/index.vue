<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:24 l:24">
            <n-space :wrap-item="false">
                <n-card :segmented="{content: true,footer:true}" footer-style="padding:10px"
                        content-style="padding:0px;">
                    <template #header>
                        <n-space>
                            <n-button color="#52C41A" @click="compHandle.add()">新增数据</n-button>
                            <n-button color="#ff4d4f" @click="compHandle.dels()">删除数据</n-button>
                            <n-button color="#1890ff" :loading="compData.loading" @click="compHandle.getTableData">
                                刷新数据
                            </n-button>
                        </n-space>
                    </template>
                    <n-data-table
                        :bordered="false"
                        :bottom-bordered="false"
                        :columns="compData.columns"
                        :data="compData.tableData"
                        :pagination="compData.pagination"
                        :single-line="false"
                        :loading="compData.loading"
                        :size="compData.tableSizeValue"
                        :row-key="compData.rowKey"
                        @update:checked-row-keys="compHandle.check"
                    />
                    <template #footer>
                        <n-pagination
                            v-model:page="compData.tablePage"
                            :page-count="1"
                            size="large"
                            show-quick-jumper
                            show-size-picker
                            style="justify-content: flex-end;flex: 1"
                        />
                    </template>
                </n-card>
            </n-space>
        </n-grid-item>
    </n-grid>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue"
import {useMessage} from "naive-ui"
import type {FormInst} from "naive-ui"
import {branch} from "@/app/admin/api/app.ts"
import {createColumns, treeData, tableSize} from "./data.ts"
import {useRouter} from "vue-router"
import {toTree} from "@/packages/utils/utils.ts"

export default defineComponent({
    setup() {
        const router = useRouter()
        const searchFormRef = ref<FormInst | null>(null)
        const message = useMessage()
        const compData = reactive({
            tableData: [],
            tablePage: 1,
            tableSizeValue: "medium",
            tableSize,
            loading: true,
            treeData,
            columns: [],
            sourceColumns: [],
            columnsOptions: [],
            columnsOptionsValue: [],
            searchForm: {userName: ""},
            pagination: false,
            rowKey: (row: any) => row.id,
            checkedRowKeys: []
        })
        const compHandle = reactive({
            getTableData() {
                compData.loading = true
                branch().then((res) => {
                    compData.tableData = toTree({arr: res.data})
                }).finally(() => {
                    compData.loading = false
                })
            },
            del(row) {
                message.success(`模拟演示，删除成功，${row.id}`)
            },
            dels() {
                if (compData.checkedRowKeys.length) {
                    message.success(`模拟演示，删除成功，${compData.checkedRowKeys.join(",")}`)
                } else {
                    message.warning("请选择要删除的项")
                }
            },
            edit(row: any) {
                router.push("/system/branch/edit/" + row.id)
            },
            add() {
                router.push("/system/branch/add")
            },
            check(rowKeys: any) {
                compData.checkedRowKeys = rowKeys
            },
            tableSize() {

            },
            handleColumnsOptions(value: (string | number)[]) {
                compData.columns = compData.sourceColumns.filter((item) => value.indexOf(item.key) !== -1)
            },
            search() {
                message.success("模拟演示搜索")
            }
        })
        compData.sourceColumns = createColumns({compHandle})
        compData.columns = compData.sourceColumns
        compData.columnsOptionsValue = compData.sourceColumns.map((item) => item.key)
        compData.columnsOptions = compData.sourceColumns.filter((item) => item.type !== "selection").map((item) => {
            if (item.key === "actions") {
                item.disabled = true
            }
            return item
        })
        compHandle.getTableData()
        return {
            searchFormRef,
            compData,
            compHandle,
        }
    }
})
</script>
