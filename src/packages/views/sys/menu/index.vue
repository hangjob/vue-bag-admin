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
                 :row-selection="rowSelection" @expand="expand">
            <template #icon="{ record }">
                <component :is="record.icon"></component>
            </template>
            <template #type="{ record }">
                <a-tag color="#2db7f5" v-if="record.children">目录</a-tag>
                <a-tag color="#87d068" v-else>菜单</a-tag>
            </template>
            <template #action="{ record ,index}">
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
    <yxs-modal v-model:visible="visibleAdd" title="新增" width="1000px" @ok="handleAddOk">
        <add ref="add" :treeData="data"/>
    </yxs-modal>
    <yxs-modal v-model:visible="visibleEdit" title="编辑" width="1000px" @ok="handleEditOk">
        <edit ref="edit" :treeData="data" :id="id"/>
    </yxs-modal>
</template>
<script lang="ts">
import {defineComponent, ref, reactive, toRefs, inject, onMounted} from 'vue';
import add from './add.vue'
import edit from './edit.vue'
import {apiAll, apiDelete, apiDeletes} from '@/packages/service/menu'
import {toTree} from '@/packages/utils/utils'
import {ColumnProps} from 'ant-design-vue/es/table/interface';
import {message} from "ant-design-vue";


type Key = ColumnProps['key'];

const formatter = (item: any) => {
    return item.text === true ? '是' : '否'
}
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true
    },
    {
        title: '图标',
        dataIndex: 'icon',
        key: 'icon',
        width: 80,
        align: 'center',
        ellipsis: true,
        slots: {customRender: 'icon'},
    },
    {
        title: '节点类型',
        dataIndex: 'type',
        key: 'type',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: {customRender: 'type'}
    },
    {
        title: '路由地址',
        dataIndex: 'path',
        key: 'path',
        ellipsis: true,
        align: 'center',
    },
    {
        title: '文件路径',
        dataIndex: 'filePath',
        key: 'filePath',
        ellipsis: true,
        align: 'center',
    },
    {
        title: 'iframe',
        dataIndex: 'iframePath',
        key: 'iframePath',
        ellipsis: true,
        align: 'center',
    },
    {
        title: '外链',
        dataIndex: 'httpViewPath',
        key: 'httpViewPath',
        ellipsis: true,
        align: 'center',
    },
    {
        title: '路由缓存',
        dataIndex: 'keepAlive',
        key: 'keepAlive',
        align: 'center',
        ellipsis: true,
        width: 90,
        customRender: (item: any) => {
            return formatter(item)
        }
    },
    {
        title: '是否隐藏Tab切换',
        dataIndex: 'tabHidden',
        key: 'tabHidden',
        align: 'center',
        ellipsis: true,
        width: 150,
        customRender: (item: any) => {
            return formatter(item)
        }
    },
    {
        title: '固定菜单',
        dataIndex: 'tabFix',
        key: 'tabFix',
        align: 'center',
        ellipsis: true,
        width: 90,
        customRender: (item: any) => {
            return formatter(item)
        }
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        align: 'center',
        width: 90,
        customRender: (item: any) => {
            return formatter(item)
        }
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        align: 'center',
        ellipsis: true,
        width: 200
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 150,
        slots: {customRender: 'action'},
    }
];

export default defineComponent({
    name: 'sys-menu',
    components: {
        add, edit
    },
    setup() {
        const data = ref();
        const add = ref();
        const edit = ref();
        const visibleAdd = ref(false);
        const visibleEdit = ref(false);
        const id = ref('');
        const loading = ref(false);
        const ks = ref('');

        const state = reactive<{
            selectedRowKeys: Key[];
            loading: boolean;
        }>({
            selectedRowKeys: [],
            loading: false,
        });

        const handleAddOk = () => {
            add.value.onSubmit().then(() => {
                visibleAdd.value = false;
                getData()
            }).catch((error: any) => {
                console.log(error)
            })
        }

        const handleEditOk = () => {
            edit.value.onSubmit().then(() => {
                visibleEdit.value = false;
                getData()
            }).catch((error: any) => {
                console.log(error)
            })
        }

        const setVisibleEdit = ({record}: { record: any }) => {
            visibleEdit.value = true;
            id.value = record.id;
        }

        const rowSelection = {
            onChange: (selectedRowKeys: (string | number)[], selectedRows: any) => {
                state.selectedRowKeys = selectedRows;
            },
            onSelect: (record: any, selected: boolean, selectedRows: any) => {
            },
            onSelectAll: (selected: boolean, selectedRows: any, changeRows: any) => {
            },
        };

        const getData = () => {
            apiAll({ks: ks.value}).then((res: any) => {
                data.value = toTree(res);
                loading.value = false;
            })
        }
        getData()

        const expand = (expanded: boolean, record: any) => {

        }

        // 单个删除
        const handleDelete = ({record}: { record: any }) => {
            apiDelete({id: record.id}, {notify: true}).then(() => {
                getData()
            })
        }

        // 多个删除
        const handleDeletes = () => {
            const ids = state.selectedRowKeys.map((item: any) => item.id);
            if (!ids.length) return message.warning('请至少选择一个');
            apiDeletes({ids}, {notify: true}).then(() => {
                getData()
            })
        }

        const refreshLoad = () => {
            loading.value = true;
            getData();
        }


        // 搜素
        const handleSearch = () => {
            getData();
        }


        return {
            data,
            add,
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
            ks
        };
    },
});
</script>
<style lang="less" scoped>
.table-action {
    padding: 15px;
    display: flex;
    justify-content: space-between;
}
</style>
