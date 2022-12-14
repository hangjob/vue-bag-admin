<template>
    <div class="bag-curd">
        <div class="bag-curd-container">
            <div class="bag-curd-header">
                <div class="bag-curd-action">
                    <slot name="header-action">
                        <a-row :wrap="true">
                            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <div class="bag-curd-header-action">
                                    <a-button type="primary">刷新</a-button>
                                    <a-button type="primary" class="bag-button-color-green">新增</a-button>
                                    <a-button type="primary" danger>删除</a-button>
                                </div>
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <div class="bag-curd-header-action">
                                    <a-row :wrap="true" type="flex" justify="end">
                                        <a-button type="primary">刷新</a-button>
                                        <a-button type="primary" class="bag-button-color-green">新增</a-button>
                                        <a-button type="primary" danger>删除</a-button>
                                    </a-row>
                                </div>
                            </a-col>
                        </a-row>
                    </slot>
                </div>
            </div>
            <div class="bag-curd-search" v-if="curdTable.search.formItem.length">
                <a-form ref="searchFormRef" :model="curdTable.search.formState">
                    <a-row :gutter="24">
                        <template v-for="(item,idx) in curdTable.search.formItem" :key="idx">
                            <a-col :span="6">
                                <a-form-item v-bind="item.$formItemAttrs">
                                    <component v-model:value="curdTable.search.formState[item.$formItemAttrs.name]"
                                               :is="item.el" v-bind="compData.filter$elAttrs(item.$elAttrs).$attrs"
                                    >
                                    </component>
                                </a-form-item>
                            </a-col>
                        </template>
                        <a-col :span="4">
                            <a-button type="primary" @click="curdTable.all.getData()">搜索</a-button>
                            <a-button style="margin: 0 8px" @click="curdTable.search.resetFields(searchFormRef)">重置
                            </a-button>
                        </a-col>
                    </a-row>
                </a-form>
            </div>
            <div class="bag-curd-table">
                <a-table v-bind="curdTable.$tableAttrs" v-on="curdTable.$tableAttrs">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.slot">
                            <slot :name="column.slot.name" v-bind="{record,column}"></slot>
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
    <bag-curd-create-plus :curdTable="curdTable"></bag-curd-create-plus>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'ant-design-vue'

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
            filter$elAttrs(attrs) {
                const { value, ...$attrs } = attrs
                return { $attrs }
            },
        })
        return {
            curdTable,
            searchFormRef,
            compData,
        }
    },
})
</script>
<style lang="less" scoped>
.bag-curd-header-action .ant-btn {
    margin: 4px 6px;
}

.bag-curd-header {
    margin-bottom: 24px;
}

.bag-curd-search {
    padding: 0 6px;
}

.bag-curd-table {
    padding: 0 6px;
}
</style>
