<template>
    <bag-form-table>
        <div class="table-action">
            <div class="table-action-btn">
                <a-space :size="20">
                    <a-button type="primary" size="middle" :loading="tableCurd.loading" @click="tableCurd.refreshTable">
                        刷新
                    </a-button>
                    <a-button class="bag-button-color-green" size="middle" @click="tableCurd.create.visible = true">新增
                    </a-button>
                    <a-button type="primary" danger size="middle" @click="tableCurd.deletes.submit">删除</a-button>
                </a-space>
            </div>
            <div class="table-action-search hidden-xs">
                <a-input-search
                    v-model:value="tableCurd.all.ks"
                    placeholder="输入关键词搜索"
                    enter-button
                    @search="tableCurd.searchTable"
                />
            </div>
        </div>
        <a-table rowKey="id" :scroll="{ x: 1500 }" :columns="columns" size="middle" :bordered="true"
                 :data-source="tableCurd.tableData" :row-selection="tableCurd.selection"
        >
            <template #sex="{ record }">
                <a-tag color="red" v-if="record.sex === 1">女</a-tag>
                <a-tag color="blue" v-if="record.sex === 2">男</a-tag>
                <a-tag color="cyan" v-if="record.sex === 0">保密</a-tag>
            </template>
            <template #branch="{ record }">
                <a-tag color="cyan" v-if="record.branch">{{ record.branch.name }}</a-tag>
            </template>
            <template #rolesDetail="{ record }">
                <template v-if="record.rolesDetail">
                    <template v-for="(item,idx) in record.rolesDetail">
                        <a-tag color="orange" v-if="idx===0">{{ item.name }}</a-tag>
                        <a-tag color="#87d068" v-if="idx===1" @click="rolesData.handle({record})">查看全部</a-tag>
                    </template>
                </template>
            </template>
            <template #action="{ record }">
                <a-space>
                    <a-button type="primary" size="small" @click="pasData.handle({record})">密码</a-button>
                    <a-button type="primary" size="small" @click="tableCurd.edit.change(record)">编辑</a-button>
                    <a-popconfirm
                        :title="`你确定删除 ${record.username} 嘛？`"
                        ok-text="确认"
                        cancel-text="关闭"
                        placement="topRight"
                    >
<!--                        @confirm="tableCurd.delete.submit(record)"-->
                        <a-button type="primary" danger size="small">删除</a-button>
                    </a-popconfirm>
                </a-space>
            </template>
        </a-table>
    </bag-form-table>
    <bag-modal v-model:visible="tableCurd.create.visible" title="新增" width="85%" @ok="tableCurd.create.submit">
        <Create ref="formCreate" :treeData="tableCurd.tableData"/>
    </bag-modal>
    <bag-modal v-model:visible="tableCurd.edit.visible" title="编辑" width="85%" @ok="tableCurd.edit.submit">
        <Edit ref="formEdit" :treeData="tableCurd.tableData" :id="tableCurd.edit.id"/>
    </bag-modal>
    <bag-modal v-model:visible="rolesData.visible" :title="rolesData.title" width="85%" @ok="visibleRoles=false">
        <a-table rowKey="id" :pagination="false" :columns="rolesColumns" size="middle" :bordered="true"
                 :data-source="rolesData.data"
        >
        </a-table>
    </bag-modal>
    <bag-modal v-model:visible="pasData.visible" title="更改密码" width="85%" @ok="pasData.submit">
        <Pas ref="formPas" :id="pasData.id" :record="pasData.recordItem"/>
    </bag-modal>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import Create from './Create.vue'
import Edit from './Edit.vue'
import Pas from './Pas.vue'
import columns, {rolesColumns} from './columns'
import tableHock from '@/packages/hook/table'
import {toTree} from '@/packages/utils/utils'

export default defineComponent({
    name: 'articleIndex',
    components: {
        Create, Edit, Pas
    },

    setup() {
        const {tableCurd} = tableHock()
        const formCreate = ref();
        const formEdit = ref();
        const formPas = ref();
        tableCurd.apiPrefix = '/member'
        tableCurd.create.refForm = formCreate;
        tableCurd.edit.refForm = formEdit;


        const getTableData = () => {
            tableCurd.all.handle((res: any) => {
                tableCurd.tableData = toTree(res)
            })
        }

        getTableData()

        const rolesData = reactive({
            data: [],
            title: '',
            visible: false,
            handle: ({record}: { record: any }) => {
                rolesData.data = record.rolesDetail;
                rolesData.title = `${record.username} 当前角色列表`
                rolesData.visible = true
            }
        })

        const pasData = reactive({
            id: '',
            recordItem: '',
            visible: false,
            handle: ({record}: { record: any }) => {
                pasData.id = record.id;
                pasData.recordItem = record;
                pasData.visible = true
            },
            submit: () => {
                formPas.value.onSubmit().then(() => {
                    getTableData()
                    pasData.visible = false;
                }).catch((error: any) => {
                    console.log(error)
                })
            }
        })


        return {
            columns,
            tableCurd,
            rolesData,
            rolesColumns,
            formCreate,
            formEdit,
            pasData,
            formPas
        }
    },
})
</script>
<style lang="less" scoped>
.table-action {
    padding: 15px;
    display: flex;
    justify-content: space-between;
}
</style>
