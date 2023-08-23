<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:8 l:5">
            <n-card title="部门列表" header-extra-style="width:65%" header-style="font-size:14px;" :segmented="{content: true,footer: 'soft'}" content-style="padding: 0;">
                <template #header-extra>
                    <n-input
                        v-model:value="formValue.userName" type="text" size="small"
                        placeholder="输入部门列表查询"
                    >
                        <template #suffix>
                            <n-icon :component="FlashOutline" />
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
                            <n-form style="margin-bottom: -24px" label-placement="left" label-align="right" :show-label="true" ref="formRef" inline :label-width="60" :model="formValue">
                                <n-form-item label="用户名" path="user.name">
                                    <n-input v-model:value="formValue.userName" placeholder="输入姓名" />
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
                                <n-button color="#52C41A" @click="compData.handleCreate">新增数据</n-button>
                                <n-button color="#ff4d4f">删除数据</n-button>
                                <n-button color="#1890ff" :loading="compData.loading" @click="compData.handleRefresh">刷新数据</n-button>
                                <n-button strong secondary type="success">数据导出</n-button>
                                <n-button strong secondary type="warning">表格大小</n-button>
                                <n-button strong secondary type="info">表列设置</n-button>
                            </n-space>
                        </n-tab-pane>
                    </n-tabs>
                </n-card>
                <n-card :bordered="false" content-style="padding:0">
                    <n-data-table
                        :columns="columns"
                        :data="compData.tableData"
                        :pagination="pagination"
                        :single-line="false"
                        :loading="compData.loading"
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
import { useMessage } from "naive-ui"
import type { FormInst } from "naive-ui"
import {member} from "@/app/admin/api/app.ts"
import createColumns from "@/app/admin/view/system/member/columns.ts"
import { FlashOutline } from "@vicons/ionicons5"
import { useRouter,useRoute } from "vue-router"

export default defineComponent({
    setup () {
        const router = useRouter()
        const formRef = ref<FormInst | null>(null)
        const message = useMessage()
        const treeData = [
            {label:"品茗科技",key:"1",children:[{label:"数字政务",key:"10"},{label:"Ai事业部",key:"11"},{label:"住建事业部",key:"12"},{label:"胜算事业部",key:"13"}]},
            {label:"丰树科技",key:"2",children:[{label:"塔吊事业部",key:"21"},{label:"人工智能",key:"22"},{label:"大数据研发",key:"23"}]},
            {label:"合作伙伴",key:"3",children:[{label:"阿里巴巴",key:"31"},{label:"新浪科技",key:"32"},{label:"网易云",key:"33"}]}
        ]
        const compData = reactive({
            tableData:[],
            tablePage:1,
            treeData,
            loading:true,
            defaultExpandedKeys:["1", "2"],
            handleDelete() {
                message.success("模拟演示，删除成功")
            },
            handleEdit(row:any) {
                router.push("/system/member/edit/"+row.id)
            },
            handleCreate(){
                router.push("/system/member/add")
            },
            handleRefresh(){
                getTabdata()
            }
        })
        function getTabdata(){
            compData.loading = true
            member().then((res)=>{
                compData.tablePage = 1
                compData.tableData = res.data
                compData.loading = false
            })
        }
        getTabdata()

        return {
            formRef,
            FlashOutline,
            formValue: ref({
                userName: ""
            }),
            compData,
            columns: createColumns(compData),
            pagination: false as const
        }
    }
})
</script>
