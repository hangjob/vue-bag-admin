<template>
    <yxs-table>
        <div class="table-action">
            <div class="table-action-btn">
                <a-space :size="20">
                    <a-button type="primary" size="middle">新增</a-button>
                    <a-button type="primary" size="middle">删除</a-button>
                    <a-button type="primary" danger size="middle">刷新</a-button>
                </a-space>
            </div>
            <div class="table-action-search">
                <a-input-search
                        v-model:value="value"
                        placeholder="输入关键词搜索"
                        enter-button
                />
            </div>
        </div>
        <a-table :columns="columns"  size="middle" :bordered="true" :data-source="data" :row-selection="rowSelection">
            <template #action="{ record }">
                <a-space>
                    <a-button size="middle">编辑</a-button>
                    <a-button danger size="middle">删除</a-button>
                </a-space>
            </template>
        </a-table>
    </yxs-table>
</template>
<script lang="ts">
    import {defineComponent,ref} from 'vue';

    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '图标',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '类型',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '节点路由',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '文件路径',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '路由缓存',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '权限',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '更新时间',
            dataIndex: 'address',
            width: '100',
            key: 'address',
        },
        {
            title: '操作',
            key: 'action',
            align:'center',
            slots: {customRender: 'action'},
        }
    ];

    interface DataItem {
        key: number;
        name: string;
        age: number;
        address: string;
        children?: DataItem[];
    }

    let data: DataItem[] = [
        {
            key: 1,
            name: '系统管理',
            age: 60,
            address: '2021-10-27 19:55:30',
            children: [
                {
                    key: 11,
                    name: '菜单列表',
                    age: 42,
                    address: '2021-10-27 19:55:30',
                },
                {
                    key: 12,
                    name: 'John Brown jr.',
                    age: 30,
                    address: 'New York No. 3 Lake Park',
                    children: [
                        {
                            key: 121,
                            name: 'Jimmy Brown',
                            age: 16,
                            address: 'New York No. 3 Lake Park',
                        },
                    ],
                },
                {
                    key: 13,
                    name: 'Jim Green sr.',
                    age: 72,
                    address: 'London No. 1 Lake Park',
                    children: [
                        {
                            key: 131,
                            name: 'Jim Green',
                            age: 42,
                            address: 'London No. 2 Lake Park',
                            children: [
                                {
                                    key: 1311,
                                    name: 'Jim Green jr.',
                                    age: 25,
                                    address: 'London No. 3 Lake Park',
                                },
                                {
                                    key: 1312,
                                    name: 'Jimmy Green sr.',
                                    age: 18,
                                    address: 'London No. 4 Lake Park',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            key: 2,
            name: 'Joe Black',
            age: 32,
            address: '2021-10-27 19:55:30',
        },
    ];
    data = data.concat(data,data,data,data,data,data,data)
    const rowSelection = {
        onChange: (selectedRowKeys: (string | number)[], selectedRows: DataItem[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record: DataItem, selected: boolean, selectedRows: DataItem[]) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected: boolean, selectedRows: DataItem[], changeRows: DataItem[]) => {
            console.log(selected, selectedRows, changeRows);
        },
    };

    export default defineComponent({
        setup() {
            const value = ref('')
            return {
                data,
                columns,
                rowSelection,
                value
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

