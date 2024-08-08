<template>
    <bag-global-table :modal="compTable.modal">
        <template #search="{tableCompData}">
            <n-form
                ref="formRef"
                inline
                :label-width="80"
                :model="formValue"
                :rules="rules"
                label-placement="left"
            >
                <n-grid responsive="screen" cols="1 s:1 m:2 l:2 xl:4 2xl:6">
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
                        <n-form-item label="申请状态:" path="user.name">
                            <n-input v-model:value="formValue.name" placeholder="输入申请状态"/>
                        </n-form-item>
                    </n-gi>
                    <n-gi>
                        <n-form-item label="申请状态:" path="user.name">
                            <n-input v-model:value="formValue.name" placeholder="输入申请状态"/>
                        </n-form-item>
                    </n-gi>
                    <n-gi>
                        <n-form-item label="申请状态:" path="user.name">
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
        <template #header="{tableCompData}">
            <n-space>
                <n-button type="primary" @click="handleClick(tableCompData)">新增数据</n-button>
                <n-button dashed type="error">批量删除</n-button>
            </n-space>
        </template>
        <template #table="{tableCompData}">
            <n-data-table flex-height :style="{height:tableCompData.height+'px'}" :single-line="false"
                          :columns="compTable.columns"
                          :data="compTable.data" :pagination="compTable.pagination"/>
        </template>
        <template #form="{tableCompData}">
            <n-form
                ref="formRef"
                inline
                :label-width="80"
                :model="formValue"
                :rules="rules"
                label-placement="left"
            >
                <n-grid x-gap="12" :cols="1">
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

                </n-grid>
            </n-form>
        </template>
        <template #form-footer="{tableCompData}">
            <n-space justify="end">
                <n-button type="primary">提交数据</n-button>
                <n-button @click="tableCompData.showModal = false">关闭</n-button>
            </n-space>
        </template>
    </bag-global-table>
</template>
<script setup>
const formValue = reactive({})
const compTable = reactive({
    data: Array.from({length: 46}).map((_, index) => ({
        key: index,
        name: `Edward Edward Edward Edward Edward Edward King ${index}`,
        age: 32,
        address: `London, Park Lane no. ${index}`
    })),
    modal: {
        title: '编辑',
    },
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
const handleClick = (tableCompData) => {
    tableCompData.showModal = true
}
</script>
