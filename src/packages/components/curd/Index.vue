<template>
    <div class="bag-curd">
        <div class="bag-curd-container">
            <div class="bag-curd-header">
                <a-row type="flex">
                    <slot name="action">
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
                    <slot name="search">
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="18">
                            <div class="bag-curd-header-search">
                                <a-form class="bag-curd-header-search-form" layout="inline" :model="formSearch">
                                    <a-form-item label="Activity zone" name="region">
                                        <a-select style="width:100px" v-model:value="formSearch.aaaa"
                                                  placeholder="please select your zone"
                                        >
                                            <a-select-option value="shanghai">Zone one</a-select-option>
                                            <a-select-option value="beijing">Zone two</a-select-option>
                                        </a-select>
                                    </a-form-item>
                                    <a-form-item label="Activity time" name="date1">
                                        <a-date-picker
                                            v-model:value="formSearch.fieldA"
                                            show-time
                                            type="date"
                                            placeholder="Pick a date"
                                        />
                                    </a-form-item>
                                    <a-form-item label="Field A">
                                        <a-input v-model:value="formSearch.fieldA"
                                                 placeholder="input placeholder"
                                        />
                                    </a-form-item>
                                    <a-form-item label="Field B">
                                        <a-input v-model:value="formSearch.fieldA"
                                                 placeholder="input placeholder"
                                        />
                                    </a-form-item>
                                    <a-form-item>
                                        <a-button type="primary">
                                            <template #icon>
                                                <SearchOutlined/>
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
            </div>
            <div class="bag-curd-footer"></div>
        </div>
    </div>
</template>
<script lang="ts">
/**
 * 该组件一键Curd
 */
import {defineComponent, reactive} from 'vue'

export default defineComponent({
    name: 'bag-curd-table',
    props: {
        tableCurd: {
            type: Object,
            default: () => {
            }
        }
    },
    setup(props) {
        const formSearch = reactive({
            layout: '',
            fieldA: '',
            aaaa: ""
        })
        const tableCurd = reactive(props.tableCurd)
        return {
            tableCurd,
            formSearch
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
    }

    &-body {

    }
}
</style>
