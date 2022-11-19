<template>
    <a-form-item :name="formItem.formData.name">
        <div style="margin-bottom:10px;text-align:right">
            <a-button type="primary" @click="dataForm.addItem">添加</a-button>
        </div>
        <a-table size="small" bordered :data-source="dataSource" :columns="columns">
            <template #bodyCell="{ column, record,text }">
                <template v-if="column.dataIndex === 'name'">
                    <div class="editable-cell">
                        <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
                            <a-input v-model:value="editableData[record.key].name"
                                     @pressEnter="dataForm.saveItem(record.key)"
                            />
                            <check-outlined class="editable-cell-icon-check" @click="dataForm.saveItem(record.key)" />
                        </div>
                        <div v-else class="editable-cell-text-wrapper">
                            {{ text || ' ' }}
                            <edit-outlined class="editable-cell-icon" @click="dataForm.editItem(record.key)" />
                        </div>
                    </div>
                </template>
                <template v-if="column.dataIndex === 'url'">
                    <div class="editable-cell">
                        <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
                            <a-input v-model:value="editableData[record.key].url"
                                     @pressEnter="dataForm.saveItem(record.key)"
                            />
                            <check-outlined class="editable-cell-icon-check" @click="dataForm.saveItem(record.key)" />
                            <a-button size="small" style="margin:0 10px">上传文件</a-button>
                        </div>
                        <div v-else class="editable-cell-text-wrapper">
                            {{ text || ' ' }}
                            <edit-outlined class="editable-cell-icon" @click="dataForm.editItem(record.key)" />
                        </div>
                    </div>
                </template>
                <template v-if="column.dataIndex === 'action'">
                    <a-space :size="10">
                        <a-button size="small" @click="dataForm.addItem">添加</a-button>
                        <a-button danger size="small" @click="dataForm.deleteItem(record.key)">删除</a-button>
                    </a-space>
                </template>
            </template>
        </a-table>
    </a-form-item>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef, computed, watchEffect, watch, onMounted } from 'vue'
import { cloneDeep } from 'lodash-es'

export default defineComponent({
    props: {
        formItem: {
            type: Object,
            require: true,
            default: () => {
            },
        },
        formState: {
            type: Object,
            require: true,
            default: () => {
            },
        },
    },
    setup(props, { emit }) {
        const dataSource: any = ref([])
        const editableData: any = reactive({})
        const count = computed(() => dataSource.value.length + 1)
        const dataForm = reactive({
            deleteItem: (key: string) => {
                dataSource.value = dataSource.value.filter(item => item.key !== key)
            },
            addItem: () => {
                const newData = {
                    key: `${count.value}`,
                    name: ``,
                }
                dataSource.value.push(newData)
            },
            saveItem: (key: string) => {
                Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key])
                delete editableData[key]
            },
            editItem: (key: string) => {
                editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0])
            },
        })
        const columns = [
            {
                title: '来源',
                dataIndex: 'name',
                width: '20%',
            },
            {
                title: '地址',
                dataIndex: 'url',
            },
            {
                title: '操作',
                dataIndex: 'action',
                width: '10%',
            },
        ]
        watchEffect(() => {
            props.formState[props.formItem.formData.name] = JSON.stringify(dataSource.value)
        })
        return {
            dataForm,
            columns,
            dataSource,
            editableData,
            count,
        }
    },
})
</script>
<style lang="less">
.editable-cell {
    position: relative;

    .editable-cell-input-wrapper,
    .editable-cell-text-wrapper {
        padding-right: 24px;
        display: flex;
        align-items: center;
    }

    .editable-cell-text-wrapper {
        padding: 5px 24px 5px 5px;
    }

    .editable-cell-icon,
    .editable-cell-icon-check {
        position: absolute;
        right: 0;
        width: 20px;
        cursor: pointer;
    }

    .editable-cell-icon {
        margin-top: 4px;
        display: none;
    }

    .editable-cell-icon:hover,
    .editable-cell-icon-check:hover {
        color: #108ee9;
    }

    .editable-add-btn {
        margin-bottom: 8px;
    }
}

.editable-cell:hover .editable-cell-icon {
    display: inline-block;
}
</style>
