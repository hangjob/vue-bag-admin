<template>
    <div class="bag-curd">
        <div class="bag-curd-container">
            <div class="bag-curd-header">
                <a-row type="flex">
                    <slot name="header-action">
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="6">
                            <div class="bag-curd-header-action">
                                <a-space :size="20">
                                    <a-button type="primary" size="middle" :loading="tableCurd.loading"
                                              @click="tableCurd.refreshTable"
                                    >
                                        刷新
                                    </a-button>
                                    <a-button class="bag-button-color-green" size="middle"
                                              @click="tableCurd.create.visible = true"
                                    >新增
                                    </a-button>
                                    <a-button type="primary" danger size="middle" @click="tableCurd.deletes.submit">删除
                                    </a-button>
                                </a-space>
                            </div>
                        </a-col>
                    </slot>
                    <slot name="header-search">
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="18">
                            <div class="bag-curd-header-search">
                                <a-form class="bag-curd-header-search-form" layout="inline"
                                        :model="tableCurd.all.search.formState"
                                >
                                    <a-form-item v-for="item in tableCurd.all.search.formItem" :label="item.label"
                                                 :name="item.name"
                                    >
                                        <component v-if="item.element === 'a-input'" :is="item.element"
                                                   v-model:value="tableCurd.all.search.formState[item.name]"
                                                   :placeholder="item.props.placeholder"
                                        ></component>
                                        <template v-if="item.element === 'a-select'">
                                            <a-select
                                                v-model:value="tableCurd.all.search.formState[item.name]"
                                                :mode="item.props.mode"
                                                style="width:120px"
                                                :placeholder="item.props.placeholder"
                                            >
                                                <a-select-option value="">请选择</a-select-option>
                                                <a-select-option v-for="(opt,idx) in item.options" :key="idx"
                                                                 :value="opt.value"
                                                >
                                                    {{ opt.name }}
                                                </a-select-option>
                                            </a-select>
                                        </template>
                                    </a-form-item>
                                    <a-form-item>
                                        <a-button @click="tableCurd.searchTable" type="primary">
                                            <template #icon>
                                                <SearchOutlined />
                                            </template>
                                            搜索
                                        </a-button>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-col>
                    </slot>
                </a-row>
            </div>
            <div class="bag-curd-body">
                <a-table rowKey="id" :scroll="{ x: '85%' }" :columns="tableCurd.columns" size="middle" :bordered="true"
                         :data-source="tableCurd.tableData" :row-selection="tableCurd.selection"
                >
                    <template #action="{ record }">
                        <a-space>
                            <slot name="table-action" v-bind="{record}"></slot>
                            <a-button type="primary" size="small" @click="tableCurd.edit.change(record)">编辑</a-button>
                            <a-popconfirm
                                :title="`你确定删除嘛？`"
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
            </div>
            <div class="bag-curd-footer">
            </div>
        </div>
    </div>
    <bag-modal v-model:visible="tableCurd.create.visible" title="新增" width="85%" @ok="tableCurd.create.submit">
        <bag-curd-create :tableCurd="tableCurd" :form="createForm" ref="curdCreate">
            <!-- 多层级插槽传递 -->
            <template v-for="(item) in createForm.formItem" v-slot:[item.formData.slotName]>
                <slot :name="item.formData.slotName" v-bind="{formState:createForm.formState,item}"></slot>
            </template>
        </bag-curd-create>
    </bag-modal>
    <bag-modal v-model:visible="tableCurd.edit.visible" title="编辑" width="85%" @ok="tableCurd.edit.submit">
        <bag-curd-create :tableCurd="tableCurd" :form="editForm" ref="curdEdit">
            <template v-for="(item) in createForm.formItem" v-slot:[item.formData.slotName]>
                <slot :name="item.formData.slotName" v-bind="{formState:createForm.formState,item}"></slot>
            </template>
        </bag-curd-create>
    </bag-modal>
</template>
<script lang="ts">
/**
 * 该组件一键Curd
 */
import { defineComponent, watch, reactive, ref, shallowReactive } from 'vue'

export default defineComponent({
    name: 'bag-curd-table',
    props: {
        tableCurd: {
            type: Object,
            default: () => {
            },
        },
        createForm: {
            type: Object,
            default: () => {
                return { rules: {}, formItem: {}, formState: [] }
            },
        },
        editForm: {
            type: Object,
            default: () => {
                return { rules: {}, formItem: {}, formState: [] }
            },
        },
    },
    setup(props) {
        const curdCreate = ref()
        const curdEdit = ref()
        const tableCurd = reactive(props.tableCurd)
        tableCurd.create.refForm = curdCreate // 添加组件
        tableCurd.edit.refForm = curdEdit // 编辑组件
        return {
            tableCurd,
            curdCreate,
            curdEdit,
        }
    },
})
</script>
<style lang="less" scoped>
.bag-curd {
    background-color: #ffffff;
    min-height: 100%;
    border-radius: 3px;

    &-container {

    }

    &-header {
        padding: 15px;

        &-search {
            &-form {
                flex: 1;
                display: flex;
                justify-content: end;
            }
        }

        .ant-form-inline .ant-form-item:last-of-type {
            margin-right: 0;
        }
    }

    &-body {

    }
}
</style>
