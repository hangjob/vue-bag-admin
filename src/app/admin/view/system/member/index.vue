<template>
    <div>
        <n-grid item-responsive responsive="screen">
            <n-grid-item style="margin-top: 16px" span="24 s:12 m:12">
                <n-space>
                    <n-button color="#1890ff">刷新数据</n-button>
                    <n-button color="#52C41A">新增数据</n-button>
                    <n-button color="#ff4d4f">删除数据</n-button>
                </n-space>
            </n-grid-item>
            <n-grid-item  span="24 s:12 m:12" style="justify-content: flex-end;display: grid;margin-top: 24px">
                <n-form :show-label="false" ref="formRef" inline :label-width="80" :model="formValue">
                    <n-form-item label="姓名" path="user.name">
                        <n-input v-model:value="formValue.userName" placeholder="输入姓名" />
                    </n-form-item>
                    <n-form-item>
                        <n-space>
                            <n-button attr-type="button">搜索</n-button>
                            <n-button strong secondary type="success">数据导出</n-button>
                            <n-button strong secondary type="warning">表格大小</n-button>
                        </n-space>
                    </n-form-item>
                </n-form>
            </n-grid-item>
        </n-grid>
        <n-data-table
            :columns="columns"
            :data="compData.tableData"
            :pagination="pagination"
            :single-line="false"
        />
        <n-pagination
            v-model:page="compData.tablePage"
            :page-count="100"
            size="large"
            show-quick-jumper
            show-size-picker
            style="justify-content: flex-end;margin-top: 10px"
        />
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue"
import { useMessage } from "naive-ui"
import type { FormInst } from "naive-ui"
import {member} from "@/app/admin/api/app.ts"
import createColumns from "@/app/admin/view/system/member/columns.ts"

export default defineComponent({
    setup () {
        const message = useMessage()
        const formRef = ref<FormInst | null>(null)
        const compData = reactive({
            tableData:[],
            tablePage:1,
        })
        member().then((res)=>{
            compData.tableData = res.data
        })
        return {
            formRef,
            formValue: ref({
                userName: ""
            }),
            compData,
            columns: createColumns({
                play (row:any) {
                    message.info(`Play ${row.title}`)
                }
            }),
            pagination: false as const
        }
    }
})
</script>
