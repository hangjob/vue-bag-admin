<template>
    <bag-global-table>
        <template #search="{cols}">
            <n-form
                ref="formRef"
                inline
                :label-width="80"
                :model="formValue"
                :rules="rules"
                label-placement="left"
            >
                <n-grid x-gap="12" :cols="cols">
                    <n-gi>
                        <n-form-item label="申请状态" path="user.name">
                            <n-input v-model:value="formValue.name" placeholder="输入申请状态"/>
                        </n-form-item>
                    </n-gi>
                    <n-gi>
                        <n-form-item label="申请状态:" path="user.name">
                            <n-input v-model:value="formValue.name" placeholder="输入申请状态"/>
                        </n-form-item>
                    </n-gi>
                    <n-gi>
                        <n-form-item label="申请状态" path="user.name">
                            <n-input v-model:value="formValue.name" placeholder="输入申请状态"/>
                        </n-form-item>
                    </n-gi>
                    <n-gi>
                        <n-form-item label="申请状态" path="user.name">
                            <n-input v-model:value="formValue.name" placeholder="输入申请状态"/>
                        </n-form-item>
                    </n-gi>
                    <n-gi>
                        <n-form-item label="申请状态" path="user.name">
                            <n-input v-model:value="formValue.name" placeholder="输入申请状态"/>
                        </n-form-item>
                    </n-gi>
                    <n-gi>
                        <n-form-item label="申请状态" path="user.name">
                            <n-input v-model:value="formValue.name" placeholder="输入申请状态"/>
                        </n-form-item>
                    </n-gi>
                    <n-gi>
                        <n-form-item label=" ">
                            <n-space>
                                <n-button attr-type="button" type="success">查询</n-button>
                                <n-button attr-type="button">重置</n-button>
                            </n-space>
                        </n-form-item>
                    </n-gi>
                </n-grid>
            </n-form>
        </template>
        <template #header>
            <n-space>
                <n-button type="primary">新增数据</n-button>
                <n-button dashed type="error">批量删除</n-button>
            </n-space>
        </template>
        <template #table="{height}">
            <n-data-table flex-height :style="{height:height+'px'}" :single-line="false" :columns="compTable.columns"
                          :data="compTable.data" :pagination="compTable.pagination" />
        </template>
    </bag-global-table>
</template>
<script setup>
import $ from "jquery"

const formValue = reactive({})
const compTable = reactive({
    data: Array.from({length: 46}).map((_, index) => ({
        key: index,
        name: `Edward Edward Edward Edward Edward Edward King ${index}`,
        age: 32,
        address: `London, Park Lane no. ${index}`
    })),
    columns: [{title: 'Name', key: 'name'}, {title: 'Age', key: 'age'}, {title: 'Address', key: 'address'}],
    pagination: {
        page: 1,
        pageSize: 30,
        showSizePicker: true,
        pageSizes: [10, 20, 50],
        onChange: (page) => {
            compTable.pagination.page = page
        },
        onUpdatePageSize: (pageSize) => {
            compTable.pagination.pageSize = pageSize
            compTable.pagination.page = 1
        }
    }
})
const rules = {}
const formRef = ref();

</script>
