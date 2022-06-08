<template>
    <a-form-item :name="formItem.formData.name">
        <a-table size="small" bordered :data-source="dataSource" :columns="columns">
            <template #name="{ text, record }">
                <div class="editable-cell">
                    <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
                        <a-input v-model:value="editableData[record.key].name" @pressEnter="save(record.key)"/>
                        <check-outlined class="editable-cell-icon-check" @click="save(record.key)"/>
                    </div>
                    <div v-else class="editable-cell-text-wrapper">
                        {{ text || ' ' }}
                        <edit-outlined class="editable-cell-icon" @click="edit(record.key)"/>
                    </div>
                </div>
            </template>
            <template #url="{ text, record }">
                <div class="editable-cell">
                    <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
                        <a-input v-model:value="editableData[record.key].url" @pressEnter="save(record.key)"/>
                        <check-outlined class="editable-cell-icon-check" @click="save(record.key)"/>
                        <a-button size="small" style="margin:0 10px">上传文件</a-button>
                    </div>
                    <div v-else class="editable-cell-text-wrapper">
                        {{ text || ' ' }}
                        <edit-outlined class="editable-cell-icon" @click="edit(record.key)"/>
                    </div>
                </div>
            </template>
            <template #action="{ record }">
                <a-space :size="10">
                    <a-button size="small">添加</a-button>
                    <a-button danger size="small">删除</a-button>
                </a-space>
            </template>
        </a-table>
    </a-form-item>
</template>
<script lang="ts">
import {defineComponent, reactive, ref, UnwrapRef, computed} from 'vue';
import {cloneDeep} from 'lodash-es';

export default defineComponent({
    props: {
        formItem: [Object]
    },
    setup() {
        const dateForm = reactive({
            items: [],
            removeItem: (item) => {

            },
            addItem: () => {

            }
        })
        const columns = [
            {
                title: '来源',
                dataIndex: 'name',
                width: '20%',
                slots: {customRender: 'name'},
            },
            {
                title: '地址',
                dataIndex: 'url',
                slots: {customRender: 'url'},
            },
            {
                title: '操作',
                dataIndex: 'action',
                width: '10%',
                slots: {customRender: 'action'},
            },
        ];
        const dataSource: any = ref([
            {
                key: '0',
                name: '百度',
                age: 32,
                address: 'London, Park Lane no. 0',
            },
            {
                key: '1',
                name: '其他网盘',
                age: 32,
                address: 'London, Park Lane no. 1',
            },
        ]);
        const count = computed(() => dataSource.value.length + 1);
        const editableData: any = reactive({});

        const edit = (key: string) => {
            editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
        };
        const save = (key: string) => {
            Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
            delete editableData[key];
        };

        const onDelete = (key: string) => {
            dataSource.value = dataSource.value.filter(item => item.key !== key);
        };
        const handleAdd = () => {
            const newData = {
                key: `${count.value}`,
                name: `Edward King ${count.value}`,
                age: 32,
                address: `London, Park Lane no. ${count.value}`,
            };
            dataSource.value.push(newData);
        };
        return {
            dateForm,
            columns,
            onDelete,
            handleAdd,
            dataSource,
            editableData,
            count,
            edit,
            save,
        }
    }
});
</script>
<style lang="less">
.editable-cell {
    position: relative;
    .editable-cell-input-wrapper,
    .editable-cell-text-wrapper {
        padding-right: 24px;
        display:flex;
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
