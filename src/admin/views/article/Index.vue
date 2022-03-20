<template>
    <yxs-form-table>
        <div class="table-action">
            <div class="table-action-btn">
                <a-space :size="20">
                    <a-button type="primary" size="middle" :loading="table.loading" @click="table.refreshLoad">刷新
                    </a-button>
                    <a-button class="yxs-button-color-green" size="middle" @click="table.create.visible = true">新增
                    </a-button>
                    <a-button type="primary" danger size="middle" @click="table.deletes.handle">删除</a-button>
                </a-space>
            </div>
            <div class="table-action-search hidden-xs">
                <a-input-search
                    v-model:value="table.all.ks"
                    placeholder="输入关键词搜索"
                    enter-button
                    @search="table.handleSearch"
                />
            </div>
        </div>
        <a-table rowKey="id" :scroll="{ x: 1500 }" :columns="columns" size="middle" :bordered="true" :data-source="table.all.tableData" :row-selection="table.selection">
            <template #action="{ record }">
                <a-space>
                    <a-button type="primary" size="small" @click="table.update.change({record})">编辑</a-button>
                    <a-popconfirm
                        :title="`你确定删除 ${record.name} 嘛？`"
                        ok-text="确认"
                        cancel-text="关闭"
                        placement="topRight"
                        @confirm="table.delete.handle({record})"
                    >
                        <a-button type="primary" danger size="small">删除</a-button>
                    </a-popconfirm>
                    <a-button type="primary" @click="table.delete.handle" danger size="small">
                        删除
                    </a-button>
                </a-space>
            </template>
        </a-table>
    </yxs-form-table>
    <yxs-modal v-model:visible="table.create.visible" title="新增" width="1000px" @ok="table.create.handle">
        <Create ref="create" :treeData="table.tableData" />
    </yxs-modal>
    <yxs-modal v-model:visible="table.update.visible" title="编辑" width="1000px" @ok="table.update.handle">
        <Edit ref="edit" :treeData="table.tableData" :id="table.update.id" />
    </yxs-modal>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Create from './Create.vue'
import Edit from './Edit.vue'
import TableCurd from '@/admin/common/curd'
import columns from './columns'

export default defineComponent({
    name: 'articleq',
    components: {
        Create, Edit,
    },
    setup() {
        const create = ref()
        const edit = ref()
        let obj = {...TableCurd({ apiPrefix: '/web/article' })}
        const table = reactive(obj)
        table.all.handle()
        return {
            table,
            create,
            edit,
            columns,
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
