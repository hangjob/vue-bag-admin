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
        <a-table rowKey="id" :scroll="{ x: 1200 }" :columns="columns" size="middle" :bordered="true" :data-source="data"
                 :row-selection="rowSelection" @expand="expand"
        >
            <template #image="{ record }">
                <a-image
                    v-if="record.image"
                    height="95%"
                    :width="100"
                    :src="tableFormatterImage(record)"
                />
            </template>
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
                </a-space>
            </template>
        </a-table>
    </yxs-form-table>
    <yxs-modal v-model:visible="visibleAdd" title="新增" width="85%" @ok="handleAddOk">
        <Create ref="create" :treeData="data" />
    </yxs-modal>
    <yxs-modal v-model:visible="visibleEdit" title="编辑" width="85%" @ok="handleEditOk">
        <Edit ref="edit" :treeData="data" :id="id" />
    </yxs-modal>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, inject } from 'vue'
import Create from './Create.vue'
import Edit from './Edit.vue'
import { apiAll, apiDelete, apiDeletes } from '@/admin/service/channel'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import { message } from 'ant-design-vue'
import { toTree } from '@/packages/utils/utils'
import { tableFormatterBooleConvertText, tableFormatterImage } from '@/packages/common/utils'

type Key = ColumnProps['key'];

const formatter = (item: any) => {
    return item.text === true ? '是' : '否'
}
const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        ellipsis: true,
        width: 70,
        customRender: ({ index }: { index: number }) => {
            return index + 1
        },
    },
    {
        title: '栏目名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true,
    },
    {
        title: '父级ID',
        dataIndex: 'pid',
        key: 'pid',
        ellipsis: true,
        align: 'center',
    },
    {
        title: '图片',
        dataIndex: 'image',
        key: 'image',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'image' },
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        ellipsis: true,
        align: 'center',

        customRender: (item: any) => {
            return tableFormatterBooleConvertText(item)
        },
    },
    {
        title: '允许投稿',
        dataIndex: 'is_contribute',
        key: 'is_contribute',
        ellipsis: true,
        align: 'center',
        customRender: (item: any) => {
            return tableFormatterBooleConvertText(item)
        },
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
        ellipsis: true,
        align: 'center',
        width: 80,
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
            loading.value = true
            apiAll({ ks: ks.value }).then((res: any) => {
                data.value = toTree(res)
            }).finally(() => {
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
            getData()
        }


        // 搜索
        const handleSearch = () => {
            getData()
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
            tableFormatterImage,
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
