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
            <template #icon="{ record }">
                <component :is="record.icon"></component>
            </template>
            <template #type="{ record }">
                <a-tag color="#2db7f5" v-if="record.children">目录</a-tag>
                <a-tag color="#87d068" v-else>菜单</a-tag>
            </template>
            <template #action="{ record }">
                <a-space>
                    <a-button type="primary" size="small" @click="tableCurd.edit.change(record)">编辑</a-button>
                    <a-popconfirm
                        :title="`你确定删除 ${record.name} 嘛？`"
                        ok-text="确认"
                        cancel-text="关闭"
                        placement="topRight"
                        @confirm="tableCurd.delete.submit(record)"
                    >
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
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import Create from './Create.vue'
import Edit from './Edit.vue'
import tableHock from '@/packages/hook/table'
import columns from './columns'
import {toTree} from "@/packages/utils/utils";

export default defineComponent({
    name: 'sys-role',
    components: {
        Create, Edit
    },
    setup() {
        const {tableCurd} = tableHock()
        const formCreate = ref();
        const formEdit = ref();
        tableCurd.apiPrefix = '/menu'
        tableCurd.create.refForm = formCreate;
        tableCurd.edit.refForm = formEdit;
        tableCurd.all.handle((res: any) => {
            tableCurd.tableData = toTree(res)
        })
        return {
            tableCurd,
            formCreate,
            formEdit,
            columns
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
