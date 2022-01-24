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
            <template #sex="{ record }">
                <a-tag color="red" v-if="record.sex === 1">女</a-tag>
                <a-tag color="blue" v-if="record.sex === 2">男</a-tag>
                <a-tag color="cyan" v-if="record.sex === 0">保密</a-tag>
            </template>
            <template #branch="{ record }">
                <a-tag color="cyan" v-if="record.branch">{{ record.branch.name }}</a-tag>
            </template>
            <template #roles="{ record }">
                <template v-if="record.roles">
                    <template v-for="(item,idx) in record.roles">
                        <a-tag color="orange" v-if="idx===0">{{ item.name }}</a-tag>
                        <a-tag color="#87d068" v-if="idx===1" @click="handleRoles({record})">查看全部</a-tag>
                    </template>
                </template>
            </template>
            <template #action="{ record,index }">
                <a-space>
                    <a-button type="primary" size="small" @click="setPasswordEdit({record})">密码</a-button>
                    <a-button type="primary" size="small" @click="setVisibleEdit({record})">编辑</a-button>
                    <!--                    <a-popconfirm-->
                    <!--                        :title="`你确定删除 ${record.username} 嘛？`"-->
                    <!--                        ok-text="确认"-->
                    <!--                        cancel-text="关闭"-->
                    <!--                        placement="topRight"-->
                    <!--                        :disabled="record.id <= 7"-->
                    <!--                        @confirm="handleDelete({record})"-->
                    <!--                    >-->
                    <!--                        <a-button type="primary" :disabled="record.id <= 7" danger size="small">-->
                    <!--                            删除-->
                    <!--                        </a-button>-->
                    <!--                    </a-popconfirm>-->
                    <a-button type="primary" @click="handlePowerPoint" danger size="small">
                        删除
                    </a-button>
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
    <yxs-modal v-model:visible="visiblePas" title="更改密码" width="1000px" @ok="handlePasOk">
        <pas ref="pas" :id="id" :record="recordItem"/>
    </yxs-modal>
    <yxs-modal v-model:visible="visibleRoles" :title="userRoleTile" width="1000px" @ok="visibleRoles=false">
        <a-table rowKey="id" :pagination="false" :columns="rolesColumns" size="middle" :bordered="true"
                 :data-source="rolesData">
        </a-table>
    </yxs-modal>
</template>
<script lang="ts">
import {defineComponent, ref, reactive, toRefs, inject} from 'vue';
import add from './add.vue'
import edit from './edit.vue'
import pas from './pas.vue'
import {apiAll, apiDelete, apiDeletes} from '@/packages/service/member'
import {toTree} from '@/packages/utils/utils'
import {ColumnProps} from 'ant-design-vue/es/table/interface';
import {message} from 'ant-design-vue';
import {findChildrenDepth, findParent, getParentId} from "@/packages/utils/lodash";

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
        customRender: ({index}: { index: number }) => {
            return index + 1
        }
    },
    {
        title: '姓名',
        dataIndex: 'username',
        key: 'username',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'username'}
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: {customRender: 'sex'}
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: {customRender: 'age'}
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'email'}
    },
    {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
        ellipsis: true,
        align: 'center',
        width: 120,
        slots: {customRender: 'phone'}
    },
    {
        title: '角色',
        dataIndex: 'roles',
        key: 'roles',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'roles'}
    },
    {
        title: '部门组织',
        dataIndex: 'branch',
        key: 'branch',
        ellipsis: true,
        align: 'center',
        width: 180,
        slots: {customRender: 'branch'}
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        align: 'center',
        ellipsis: true,
        width: 180,
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        align: 'center',
        ellipsis: true,
        width: 180,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 200,
        slots: {customRender: 'action'},
    }
];
const rolesColumns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        ellipsis: true,
        width: 70,
        customRender: ({index}: { index: number }) => {
            return index + 1
        }
    },
    {
        title: '角色',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'name'}
    },
    {
        title: '标识',
        dataIndex: 'tag',
        key: 'tag',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'tag'}
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'createTime'}
    },
]
export default defineComponent({
    name: 'sys-member',
    components: {
        add, edit, pas
    },
    setup() {
        const data = ref();
        const rolesData = ref();
        const sourceData = ref();
        const userRoleTile = ref();
        const add = ref();
        const edit = ref();
        const pas = ref();
        const recordItem = ref()
        const visibleAdd = ref(false);
        const visibleEdit = ref(false);
        const visiblePas = ref(false)
        const visibleRoles = ref(false);
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
            getCheckboxProps: (record: any) => ({
                disabled: record.id <= 7,
                name: record.name,
            }),
        };

        const getData = () => {
            apiAll({ks: ks.value}).then((res: any) => {
                data.value = toTree(res);
                if (!sourceData.value) {
                    sourceData.value = res
                }
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


        // 搜索
        const handleSearch = () => {
            getData();
        }

        const getPname = ({record}: { record: any }) => {
            const res: any = findChildrenDepth({key: 'id', value: record.pid, node: 'children'}, sourceData.value);
            return res && res.name
        }

        const setPasswordEdit = ({record}: { record: any }) => {
            id.value = record.id
            recordItem.value = record
            visiblePas.value = true
        }

        const handlePasOk = () => {
            pas.value.onSubmit().then(() => {
                visiblePas.value = false;
                getData()
            }).catch((error: any) => {
                console.log(error)
            })
        }

        const handleRoles = ({record}: { record: any }) => {
            rolesData.value = record.roles;
            userRoleTile.value = `${record.username} 当前角色列表`
            visibleRoles.value = true;
        }

        const handlePowerPoint = () => {
            message.warning('演示数据不作为删除');
        }

        return {
            data,
            add,
            edit,
            columns,
            rolesColumns,
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
            getPname,
            pas,
            visiblePas,
            setPasswordEdit,
            handlePasOk,
            recordItem,
            handleRoles,
            rolesData,
            visibleRoles,
            userRoleTile,
            handlePowerPoint
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
