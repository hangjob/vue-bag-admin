<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:24 l:24">
            <n-space :wrap-item="false">
                <n-card :segmented="{content: true,footer:true}" header-style="padding:0px 0px;border:none"
                        footer-style="padding:10px"
                        content-style="padding:0px 0px;border:none">
                    <template #header-extra>
                        <n-button color="#52C41A" @click="compHandle.add()">新增数据</n-button>
                    </template>
                    <template #header>
                        <n-tabs @update:value="compHandle.tabUpdate" type="line" v-model:value="compData.tabValue"
                                :tabs-padding="20" tab-style="padding:15px 0px">
                            <n-tab :name="item.label" v-for="(item,idx) in compData.tabsOptions" :key="idx">
                                {{ item.label }}
                            </n-tab>
                        </n-tabs>
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
                        :default-expanded-row-keys="[200]"
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
import {dictionary} from "@/app/admin/api/app.ts"
import {createColumns, treeData, tableSize, tabsOptions} from "./data.ts"
import {useRouter} from "vue-router"

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
            checkedRowKeys: [],
            tabValue: tabsOptions[0].label,
            tabsOptions
        })
        const compHandle = reactive({
            getTableData() {
                compData.loading = true
                dictionary().then((res) => {
                    compData.tableData = res.data
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
                router.push("/system/dictionary/edit/" + row.id)
            },
            add() {
                router.push("/system/dictionary/add")
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
            },
            tabUpdate(value: string | number) {
                message.success(value)
                compHandle.getTableData()
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
