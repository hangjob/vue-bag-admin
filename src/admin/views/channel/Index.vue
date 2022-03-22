<template>
    <yxs-form-table>
        <div class="table-action">
            <div class="table-action-btn">
                <a-space :size="20">
                    <a-button type="primary" size="middle" :loading="tableCurd.loading" @click="refreshTableCurdLoad">刷新
                    </a-button>
                    <a-button class="yxs-button-color-green" size="middle" @click="tableCurd.create.visible = true">新增
                    </a-button>
                    <a-button type="primary" danger size="middle" @click="deletesHandle">删除</a-button>
                </a-space>
            </div>
            <div class="table-action-search hidden-xs">
                <a-input-search
                    v-model:value="tableCurd.all.ks"
                    placeholder="输入关键词搜索"
                    enter-button
                    @search="handleTableCurdSearch"
                />
            </div>
        </div>
        <a-table rowKey="id" :scroll="{ x: 1500 }" :columns="columns" size="middle" :bordered="true"
                 :data-source="tableCurd.tableData" :row-selection="tableCurd.selection"
        >
            <template #action="{ record }">
                <a-space>
                    <a-button type="primary" size="small" @click="updateVisible({record})">编辑</a-button>
                    <a-popconfirm
                        :title="`你确定删除 ${record.name} 嘛？`"
                        ok-text="确认"
                        cancel-text="关闭"
                        placement="topRight"
                        @confirm="deleteHandle({record})"
                    >
                        <a-button type="primary" danger size="small">删除</a-button>
                    </a-popconfirm>
                </a-space>
            </template>
        </a-table>
    </yxs-form-table>
    <yxs-modal v-model:visible="tableCurd.create.visible" title="新增" width="85%" @ok="createHandle">
        <Create ref="formCreate" :treeData="tableCurd.tableData" />
    </yxs-modal>
    <yxs-modal v-model:visible="tableCurd.update.visible" title="编辑" width="85%" @ok="updateHandle">
        <Edit ref="formEdit" :treeData="tableCurd.tableData" :id="tableCurd.update.id" />
    </yxs-modal>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Create from './Create.vue'
import Edit from './Edit.vue'
import columns from './columns'
import tableCurd from '@/admin/mixin/table'
import { toTree } from '@/packages/utils/utils'

export default defineComponent({
    name: 'articleIndex',
    mixins: [tableCurd],
    components: {
        Create, Edit,
    },
    created() {
        this.tableCurd.apiPrefix = '/web/channel'
        this.allHandle()
    },
    methods: {
        tableDataParent(res: any) {
            this.tableCurd.tableData = toTree(res)
        },
    },
    setup() {
        return {
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
