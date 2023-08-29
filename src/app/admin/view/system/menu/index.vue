<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:24 l:24">
            <n-space :wrap-item="false">
                <n-card :segmented="{content: true,footer:true}" header-style="padding:0" footer-style="padding:10px"
                        content-style="padding:0px;">
                    <template #header>
                        <n-tabs
                            type="line"
                            size="large"
                            :tabs-padding="10"
                            pane-style="padding: 10px;"
                        >
                            <n-tab-pane name="查询数据">
                                <n-form style="margin-bottom: -24px" label-placement="left" label-align="right"
                                        :show-label="true" ref="searchFormRef" inline
                                        :model="compData.searchForm">
                                    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
                                        <n-grid-item span="24 m:12 l:8">
                                            <n-form-item label="菜单名称" path="title">
                                                <n-input v-model:value="compData.searchForm.title"
                                                         placeholder="输入菜单名称"/>
                                            </n-form-item>
                                        </n-grid-item>
                                        <n-grid-item span="24 m:12 l:8">
                                            <n-form-item label="路由" path="path">
                                                <n-input v-model:value="compData.searchForm.path"
                                                         placeholder="输入路由"/>
                                            </n-form-item>
                                        </n-grid-item>
                                        <n-grid-item span="24 m:12 l:8">
                                            <n-form-item>
                                                <n-space>
                                                    <n-button attr-type="button" @click="compHandle.search">搜索
                                                    </n-button>
                                                </n-space>
                                            </n-form-item>
                                        </n-grid-item>
                                    </n-grid>
                                </n-form>
                            </n-tab-pane>
                            <n-tab-pane name="表格操作">
                                <n-space>
                                    <n-button color="#52C41A" @click="compHandle.add()">新增数据</n-button>
                                    <n-button color="#ff4d4f" @click="compHandle.dels()">删除数据</n-button>
                                    <n-button color="#1890ff" :loading="compData.loading"
                                              @click="compHandle.getTableData">
                                        刷新数据
                                    </n-button>
                                    <n-popselect v-model:value="compData.tableSizeValue" :options="compData.tableSize"
                                                 trigger="click">
                                        <n-button strong secondary type="warning">表格大小</n-button>
                                    </n-popselect>
                                    <n-popover trigger="click" placement="bottom">
                                        <template #trigger>
                                            <n-button strong secondary type="info">设置表列</n-button>
                                        </template>
                                        <n-checkbox-group v-model:value="compData.columnsOptionsValue"
                                                          @update:value="compHandle.handleColumnsOptions">
                                            <n-space vertical align="start">
                                                <n-checkbox v-for="item in compData.columnsOptions" :key="item.value"
                                                            :value="item.key"
                                                            :label="item.title" :disabled="item.disabled"></n-checkbox>
                                            </n-space>
                                        </n-checkbox-group>
                                    </n-popover>
                                </n-space>
                            </n-tab-pane>
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
import {menus} from "@/app/admin/api/app.ts"
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
                menus().then((res) => {
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
                router.push("/system/menu/edit/" + row.id)
            },
            add() {
                router.push("/system/menu/add")
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
