<template>
    <yxs-form-table>
        <div class="table-action">
            <div class="table-action-btn">
                <a-space :size="20">
                    <a-button type="primary" size="middle">刷新</a-button>
                    <a-button class="yxs-button-color-green" size="middle" @click="visible = true,activeKey = '1'">新增</a-button>
                    <a-button type="primary" danger size="middle">删除</a-button>
                </a-space>
            </div>
            <div class="table-action-search hidden-xs">
                <a-input-search
                    v-model:value="value"
                    placeholder="输入关键词搜索"
                    enter-button
                />
            </div>
        </div>
        <a-table rowKey="id" :columns="columns" size="middle" :bordered="true" :data-source="data"
                 :row-selection="rowSelection">
            <template #icon="{ record }">
                <component :is="record.icon"></component>
            </template>
            <template #action="{ record }">
                <a-space>
                    <a-button type="primary" size="small">编辑</a-button>
                    <a-button type="primary" danger size="small">删除</a-button>
                </a-space>
            </template>
        </a-table>
    </yxs-form-table>
    <yxs-modal v-model:visible="visible" title="新增" width="1000px" isCustomStyles>
        <div class="form">
            <a-tabs type="card" v-model:activeKey="activeKey">
                <a-tab-pane key="1" tab="目录">
                    <add/>
                </a-tab-pane>
                <a-tab-pane key="2" tab="节点">
                    <edit/>
                </a-tab-pane>
            </a-tabs>
        </div>
    </yxs-modal>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import add from './menu/add.vue'
import edit from './menu/edit.vue'

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '图标',
        dataIndex: 'icon',
        key: 'icon',
        width: 80,
        align: 'center',
        slots: {customRender: 'icon'},
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '节点路由',
        dataIndex: 'router',
        key: 'router',
    },
    {
        title: '文件路径',
        dataIndex: 'filePath',
        key: 'filePath',
    },
    {
        title: 'iframe',
        dataIndex: 'iframePath',
        key: 'iframePath',
    },
    {
        title: '外链',
        dataIndex: 'viewPath',
        key: 'viewPath',
    },
    {
        title: '权限',
        dataIndex: 'limits',
        key: 'limits',
    },
    {
        title: '路由缓存',
        dataIndex: 'keepAlive',
        key: 'keepAlive',
    },
    {
        title: 'Tab切换',
        dataIndex: 'tabHidden',
        key: 'tabHidden',
    },
    {
        title: '固定菜单',
        dataIndex: 'false',
        key: 'false',
    },
    {
        title: '是否显示',
        dataIndex: 'isShow',
        key: 'isShow',
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        width: '100',
        key: 'updateTime',
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        slots: {customRender: 'action'},
    }
];

interface DataItem {
    key: number;
    name: string;
    age: number;
    updateTime: string;
    children?: DataItem[];
}

let data = [
    {
        id: 1,
        name: '系统管理',
        icon: 'DiffOutlined',
        updateTime: '2021-10-27 19:55:30',
        router: '',
        viewPath: '',
        keepAlive: '',
        limits: ['admin', 'edit'],
        filePath: '',
        type: '',
        children: [
            {
                name: '菜单列表',
                id: 2,
                icon: 'DiffOutlined',
                updateTime: '2021-10-27 19:55:30',
                router: '',
                viewPath: '',
                keepAlive: '',
                limits: ['admin', 'edit'],
                filePath: '',
                type: '',
            },
        ],
    },
    {
        id: 3,
        name: '组件库',
        icon: 'DiffOutlined',
        updateTime: '2021-10-27 19:55:30',
        router: '',
        viewPath: '',
        keepAlive: '',
        limits: ['admin', 'edit'],
        filePath: '',
        type: '',
        children: [
            {
                name: 'Markdown编辑器',
                id: 4,
                icon: 'DiffOutlined',
                updateTime: '2021-10-27 19:55:30',
                router: '',
                viewPath: '',
                keepAlive: '',
                limits: ['admin', 'edit'],
                filePath: '',
                type: '',
            },
            {
                name: '解析Exel',
                id: 5,
                icon: 'DiffOutlined',
                updateTime: '2021-10-27 19:55:30',
                router: '',
                viewPath: '',
                keepAlive: '',
                limits: ['admin', 'edit'],
                filePath: '',
                type: '',
            },
            {
                name: '文件操作',
                id: 6,
                icon: 'DiffOutlined',
                updateTime: '2021-10-27 19:55:30',
                router: '',
                viewPath: '',
                keepAlive: '',
                limits: ['admin', 'edit'],
                filePath: '',
                type: '',
                children: [
                    {
                        name: '图片上传',
                        id: 7,
                        icon: 'DiffOutlined',
                        updateTime: '2021-10-27 19:55:30',
                        router: '',
                        viewPath: '',
                        keepAlive: '',
                        limits: ['admin', 'edit'],
                        filePath: '',
                        type: '',
                    },
                    {
                        name: '文件上传',
                        id: 8,
                        icon: 'DiffOutlined',
                        updateTime: '2021-10-27 19:55:30',
                        router: '',
                        viewPath: '',
                        keepAlive: '',
                        limits: ['admin', 'edit'],
                        filePath: '',
                        type: '',
                    }
                ]
            },
        ],
    },
];
data = data.concat(data, data, data, data, data, data, data)
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
    components: {
        add, edit
    },
    setup() {
        const value = ref('')
        const visible = ref(false);
        const activeKey = ref('1');
        return {
            data,
            columns,
            rowSelection,
            value,
            visible,
            activeKey
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

.form {
    .ant-tabs {
        padding: 10px 0;
    }

    /deep/ .ant-tabs-nav {
        padding-left: 20px;
    }
}
</style>

