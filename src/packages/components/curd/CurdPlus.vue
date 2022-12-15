<template>
    <div class="bag-curd">
        <div class="bag-curd-container">
            <div class="bag-curd-header">
                <div class="bag-curd-action">
                    <slot name="header-action">
                        <a-row :wrap="true">
                            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <div class="bag-curd-header-action">
                                    <a-button type="primary" :loading="curdTable.$tableAttrs.loading"
                                              @click="curdTable.refreshTable"
                                    >刷新
                                    </a-button>
                                    <a-button type="primary" @click="curdTable.$cModalAttrs.visible = true"
                                              class="bag-button-color-green"
                                    >新增
                                    </a-button>
                                    <a-button type="primary" @click="curdTable.deletes.submit" danger>删除</a-button>
                                </div>
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <div class="bag-curd-header-action">
                                    <a-row :wrap="true" type="flex" justify="end">
                                        <a-button type="primary">数据导出</a-button>
                                        <a-button type="primary" class="bag-button-color-green">表格大小</a-button>
                                    </a-row>
                                </div>
                            </a-col>
                        </a-row>
                    </slot>
                </div>
            </div>
            <div class="bag-curd-search" v-if="curdTable.search.formItem.length">
                <a-form ref="searchFormRef" :model="curdTable.search.formState">
                    <a-row :gutter="10">
                        <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="(item,idx) in curdTable.search.formItem"
                               :key="idx"
                        >
                            <a-form-item v-bind="item.$formItemAttrs">
                                <component v-model:value="curdTable.search.formState[item.$formItemAttrs.name]"
                                           :is="item.el" v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                                >
                                </component>
                            </a-form-item>
                        </a-col>
                        <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                            <a-form-item>
                                <a-button type="primary" @click="curdTable.all.getData()">搜索</a-button>
                                <a-button style="margin: 0 8px" @click="curdTable.search.resetFields(searchFormRef)">重置
                                </a-button>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-form>
            </div>
            <div class="bag-curd-table">
                <a-table v-bind="curdTable.$tableAttrs" v-on="curdTable.$tableAttrs">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.slot">
                            <a-space v-if="column.slot.name === 'action'">
                                <a-button type="primary" size="small" @click="curdTable.edit.change({record})">编辑
                                </a-button>
                                <a-popconfirm
                                    :title="`你确定删除嘛？`"
                                    ok-text="确认"
                                    cancel-text="关闭"
                                    placement="topRight"
                                    @confirm="curdTable.delete.submit({record})"
                                >
                                    <a-button type="primary" danger size="small">删除</a-button>
                                </a-popconfirm>
                            </a-space>
                            <slot v-else :name="column.slot.name" v-bind="{record,column}"></slot>
                        </template>
                    </template>
                </a-table>
                <a-pagination style="text-align: right;margin-top:20px"
                              v-bind="curdTable.$pageAttrs"
                              v-on="curdTable.$pageAttrs"
                />
            </div>
        </div>
    </div>
    <bag-curd-create-plus :curdTable="curdTable">
        <template v-for="(item) in curdTable.create.formItem" v-slot:[item.slot.name]>
            <slot :name="item.slot.name" v-bind="{formState:curdTable.create.formState,item}"></slot>
        </template>
    </bag-curd-create-plus>
    <bag-curd-edit-plus :curdTable="curdTable">
    
    </bag-curd-edit-plus>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'ant-design-vue'
import { useSlots, useAttrs } from 'vue'

export default defineComponent({
    props: {
        curdTable: {
            type: Object,
            default: () => {
            },
        },
    },
    setup(props, { emit }) {
        const curdTable = props.curdTable
        console.log(useSlots())
        const searchFormRef = ref<FormInstance>()
        return {
            curdTable,
            searchFormRef,
        }
    },
})
</script>
<style lang="less" scoped>
.bag-curd-header-action .ant-btn {
    margin: 4px 6px;
}

.bag-curd-header-action {
    margin-bottom: 14px;
}

.bag-curd-search {
    padding: 0 6px;
}

.bag-curd-table {
    padding: 0 6px;
}
</style>
