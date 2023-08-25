<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:8 l:5">
            <n-card title="部门列表" header-extra-style="width:65%" header-style="font-size:14px;"
                    :segmented="{content: true,footer: 'soft'}" content-style="padding: 0;">
                <template #header-extra>
                    <n-input
                        v-model:value="compData.searchForm.userName" type="text" size="small"
                        placeholder="输入部门列表查询"
                    >
                        <template #suffix>
                            <n-icon :component="FlashOutline"/>
                        </template>
                    </n-input>
                </template>
                <n-tree
                    block-line
                    :data="compData.treeData"
                    :default-expanded-keys="compData.defaultExpandedKeys"
                    selectable
                />
            </n-card>
        </n-grid-item>
        <n-grid-item span="24 m:16 l:19">
            <n-space :wrap-item="false">
                <n-card content-style="padding: 0;">
                    <n-tabs
                        type="line"
                        size="large"
                        :tabs-padding="10"
                        pane-style="padding: 10px;"
                    >
                        <n-tab-pane name="查询数据">
                            <n-form style="margin-bottom: -24px" label-placement="left" label-align="right"
                                    :show-label="true" ref="formRef" inline :label-width="60"
                                    :model="compData.searchForm">
                                <n-form-item label="用户名" path="user.name">
                                    <n-input v-model:value="compData.searchForm.userName" placeholder="输入姓名"/>
                                </n-form-item>
                                <n-form-item>
                                    <n-space>
                                        <n-button attr-type="button">搜索</n-button>
                                        <n-button strong secondary type="success">重置</n-button>
                                    </n-space>
                                </n-form-item>
                            </n-form>
                        </n-tab-pane>
                        <n-tab-pane name="更多操作">
                            <n-space>
                                <n-button color="#52C41A" @click="compHandle.add()">新增数据</n-button>
                                <n-button color="#ff4d4f">删除数据</n-button>
                                <n-button color="#1890ff" :loading="compData.loading" @click="compHandle.refresh">
                                    刷新数据
                                </n-button>
                                <n-button strong secondary type="success">数据导出</n-button>
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
                                            <n-checkbox v-for="item in compData.columnsOptions" :value="item.key"
                                                        :label="item.title" :disabled="item.disabled"></n-checkbox>
                                        </n-space>
                                    </n-checkbox-group>
                                </n-popover>
                            </n-space>
                        </n-tab-pane>
                    </n-tabs>
                </n-card>
                <n-card :bordered="false" content-style="padding:0">
                    <n-data-table
                        :columns="compData.columns"
                        :data="compData.tableData"
                        :pagination="compData.pagination"
                        :single-line="false"
                        :loading="compData.loading"
                        :size="compData.tableSizeValue"
                    />
                </n-card>
                <n-card :bordered="false" content-style="padding: 10px;">
                    <n-pagination
                        v-model:page="compData.tablePage"
                        :page-count="1"
                        size="large"
                        show-quick-jumper
                        show-size-picker
                        style="justify-content: flex-end;flex: 1"
                    />
                </n-card>
            </n-space>
        </n-grid-item>
    </n-grid>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue"
import {useMessage} from "naive-ui"
import type {FormInst} from "naive-ui"
import {member} from "@/app/admin/api/app.ts"
import {createColumns, treeData, tableSize} from "@/app/admin/view/system/member/data.ts"
import {FlashOutline} from "@vicons/ionicons5"
import {useRouter} from "vue-router"

export default defineComponent({
    setup() {
        const router = useRouter()
        const formRef = ref<FormInst | null>(null)
        const message = useMessage()
        let columns = []
        const compData = reactive({
            tableData: [],
            tablePage: 1,
            tableSizeValue: "medium",
            tableSize,
            loading: true,
            treeData,
            defaultExpandedKeys: ["1", "2"],
            columns: [],
            sourceColumns:[],
            columnsOptions: [],
            columnsOptionsValue: [],
            searchForm: {userName: ""},
            pagination: false
        })
        const compHandle = reactive({
            getTableData() {
                compData.loading = true
                member().then((res) => {
                    compData.tableData = res.data
                }).finally(() => {
                    compData.loading = false
                })
            },
            del() {
                message.success("模拟演示，删除成功")
            },
            edit(row: any) {
                router.push("/system/member/edit/" + row.id)
            },
            add() {
                router.push("/system/member/add")
            },
            refresh() {
                compData.tablePage = 1
                this.getTabdata()
            },
            tableSize() {

            },
            handleColumnsOptions(value: (string | number)[]) {
                compData.columns = compData.sourceColumns.filter((item) => value.indexOf(item.key) !== -1)
            }
        })
        compData.sourceColumns = createColumns({compHandle})
        compData.columns = compData.sourceColumns
        compData.columnsOptionsValue = compData.sourceColumns.map((item) => item.key)
        compData.columnsOptions = compData.sourceColumns.map((item) => {
            if (item.key === "actions") {
                item.disabled = true
            }
            return item
        })
        compHandle.getTableData()
        return {
            formRef,
            FlashOutline,
            compData,
            compHandle,
        }
    }
})
</script>
