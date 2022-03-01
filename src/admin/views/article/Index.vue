<template>
    <yxs-form-table>
        <div class="table-action">
            <div class="table-action-btn">
                <a-space :size="20">
                    <a-button type="primary" size="middle" :loading="loading" @click="refreshLoad">刷新</a-button>
                    <a-button class="yxs-button-color-green" size="middle" @click="visibleAdd = true">新增
                    </a-button>
                    <a-button type="primary" danger size="middle" @click="handleDeletes">删除</a-button>
                </a-space>
            </div>
            <div class="table-action-search hidden-xs">
                <a-input-search
                    v-model:value="ks"
                    placeholder="输入关键词搜索"
                    enter-button
                    @search="handleSearch"
                />
            </div>
        </div>
        <a-table rowKey="id" :scroll="{ x: 1500 }" :columns="columns" size="middle" :bordered="true" :data-source="data"
                 :row-selection="rowSelection" @expand="expand"
        >
            <template #action="{ record }">
                <a-space>
                    <a-button type="primary" size="small" @click="setVisibleEdit({record})">编辑</a-button>
                    <a-popconfirm
                        :title="`你确定删除 ${record.name} 嘛？`"
                        ok-text="确认"
                        cancel-text="关闭"
                        placement="topRight"
                        @confirm="handleDelete({record})"
                    >
                        <a-button type="primary" danger size="small">删除</a-button>
                    </a-popconfirm>
                    <a-button type="primary" @click="handlePowerPoint" danger size="small">
                        删除
                    </a-button>
                </a-space>
            </template>
        </a-table>
    </yxs-form-table>
    <yxs-modal v-model:visible="visibleAdd" title="新增" width="1000px" @ok="handleAddOk">
        <Create ref="create" :treeData="data" />
    </yxs-modal>
    <yxs-modal v-model:visible="visibleEdit" title="编辑" width="1000px" @ok="handleEditOk">
        <Edit ref="edit" :treeData="data" :id="id" />
    </yxs-modal>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, inject } from 'vue'
import Create from './Create.vue'
import Edit from './Edit.vue'
import { apiAll, apiDelete, apiDeletes } from '@/packages/service/role'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import { message } from 'ant-design-vue'

type Key = ColumnProps['key'];

const formatter = (item: any) => {
    return item.text === true ? '是' : '否'
}
const columns = [
    {
        title: '角色名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true,
    },
    {
        title: '标识符',
        dataIndex: 'tag',
        key: 'tag',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'tag' },
    },
    {
        title: '描述',
        dataIndex: 'describe',
        key: 'describe',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'describe' },
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: { customRender: 'order' },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 200,
        slots: { customRender: 'action' },
    },
]

export default defineComponent({
    name: 'sys-role',
    components: {
        Create, Edit,
    },
    setup() {
        const data = ref()
        const sourceData = ref()
        const create = ref()
        const edit = ref()
        const visibleAdd = ref(false)
        const visibleEdit = ref(false)
        const id = ref('')
        const loading = ref(false)
        const ks = ref('')

        const state = reactive<{
            selectedRowKeys: Key[];
            loading: boolean;
        }>({
            selectedRowKeys: [],
            loading: false,
        })


        const handleAddOk = () => {
            create.value.onSubmit().then(() => {
                visibleAdd.value = false
                getData()
            }).catch((error: any) => {
                console.log(error)
            })
        }

        const handleEditOk = () => {
            edit.value.onSubmit().then(() => {
                visibleEdit.value = false
                getData()
            }).catch((error: any) => {
                console.log(error)
            })
        }

        const setVisibleEdit = ({ record }: { record: any }) => {
            visibleEdit.value = true
            id.value = record.id
        }

        const rowSelection = {
            onChange: (selectedRowKeys: (string | number)[], selectedRows: any) => {
                state.selectedRowKeys = selectedRows
            },
            onSelect: (record: any, selected: boolean, selectedRows: any) => {
            },
            onSelectAll: (selected: boolean, selectedRows: any, changeRows: any) => {
            },
        }

        const getData = () => {
            apiAll({ ks: ks.value }).then((res: any) => {
                data.value = res
                loading.value = false
            })
        }
        getData()

        const expand = (expanded: boolean, record: any) => {

        }

        // 单个删除
        const handleDelete = ({ record }: { record: any }) => {
            apiDelete({ id: record.id }, { notify: true }).then(() => {
                getData()
            })
        }

        // 多个删除
        const handleDeletes = () => {
            const ids = state.selectedRowKeys.map((item: any) => item.id)
            if (!ids.length) {
                return message.warning('请至少选择一个')
            }
            apiDeletes({ ids }, { notify: true }).then(() => {
                getData()
            })
        }

        const refreshLoad = () => {
            loading.value = true
            getData()
        }


        // 搜索
        const handleSearch = () => {
            getData()
        }

        const handlePowerPoint = () => {
            message.warning('演示数据不作为删除')
        }


        return {
            data,
            create,
            edit,
            columns,
            id,
            rowSelection,
            ...toRefs(state),
            visibleAdd,
            visibleEdit,
            handleAddOk,
            handleEditOk,
            expand,
            handleDelete,
            handleDeletes,
            setVisibleEdit,
            refreshLoad,
            loading,
            handleSearch,
            ks,
            handlePowerPoint,
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
