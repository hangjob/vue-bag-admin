<template>
    <div class="bag-curd">
        <div class="bag-curd-container">
            <div v-if="compData.getEffectBtn(1) || compData.getEffectBtn(2)" class="bag-curd-header">
                <div class="bag-curd-action">
                    <slot name="header-action">
                        <a-row :wrap="true">
                            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <div class="bag-curd-header-action">
                                    <template :key="idx" v-for="(item,idx)  in curdTable.btns">
                                        <a-button v-if="item.effect === 1" v-on="item" v-bind="item">
                                            {{ item.name }}
                                        </a-button>
                                    </template>
                                </div>
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <div class="bag-curd-header-action">
                                    <a-row :wrap="true" type="flex" justify="end">
                                        <template :key="idx" v-for="(item,idx)  in curdTable.btns">
                                            <a-button v-if="item.effect === 2" v-on="item" v-bind="item">
                                                {{ item.name }}
                                            </a-button>
                                        </template>
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
                                <!--                                <component v-model:value="curdTable.search.formState[item.$formItemAttrs.name]"-->
                                <!--                                           :is="item.el" v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"-->
                                <!--                                >-->
                                <!--                                </component>-->
                                <component v-if="curdTable.utils.compatibleCompValue(item.el) === '1'"
                                           v-model:value="curdTable.search.formState[item.$formItemAttrs.name]"
                                           :is="item.el" v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                                >
                                </component>
                                <component v-if="curdTable.utils.compatibleCompValue(item.el) === '2'"
                                           v-model:checked="curdTable.search.formState[item.$formItemAttrs.name]"
                                           :is="item.el" v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                                >
                                </component>
                                <component v-if="curdTable.utils.compatibleCompValue(item.el) === '3'"
                                           v-model:file-list="curdTable.search.formState[item.$formItemAttrs.name]"
                                           :is="item.el" v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                                >
                                </component>
                                <template v-if="item.slot.name">
                                    <slot :name="item.slot.name" v-bind="{formState:curdTable.search.formState,item}"></slot>
                                </template>
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
                                <template :key="idx" v-for="(item,idx)  in curdTable.btns">
                                    <a-button type="primary" v-if="item.effect === 3" size="small" v-bind="item"
                                              @click="item.click({record})"
                                    >
                                        {{ item.name }}
                                    </a-button>
                                </template>
                            </a-space>
                            <slot v-else :name="column.slot.name" v-bind="{record,column,curdTable}"></slot>
                        </template>
                    </template>
                </a-table>
                <a-pagination v-if="curdTable.all.isPage" style="text-align: right;margin-top:20px"
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
        <template v-for="(item) in curdTable.edit.formItem" v-slot:[item.slot.name]>
            <slot :name="item.slot.name" v-bind="{formState:curdTable.edit.formState,item}"></slot>
        </template>
    </bag-curd-edit-plus>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'ant-design-vue'
import { columnsCheckbox, findNearestTarget, exportTableData } from './utils'

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
        const searchFormRef = ref<FormInstance>()
        const compData = reactive({
            getEffectBtn(effect) {
                return curdTable.btns.find((item) => item.effect === effect)
            },
        })
        return {
            curdTable,
            searchFormRef,
            exportTableData,
            compData,
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
        padding: 15px;
    }
    
    &-header {
    
    }
}

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
