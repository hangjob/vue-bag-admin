<template>
    <div class="h-full flex flex-col">
        <n-card content-style="padding:24px 10px 0px 10px">
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
        </n-card>
        <n-card content-style="padding:10px" header-style="padding:10px" style="margin-top: 10px;flex: 1">
            <template #header>
                <n-space>
                    <n-button type="primary" @click="handleClick(true)">新增数据</n-button>
                    <n-button dashed type="error">批量删除</n-button>
                    <n-button type="success" @click="handleSkip($global)">跳转路由</n-button>
                </n-space>
            </template>
            <n-data-table flex-height class="h-full min-h-[350px]" :single-line="false"
                          :columns="compTable.columns"
                          :data="compTable.data" :pagination="compTable.pagination"/>
        </n-card>
    </div>
    <bag-global-form @handleSubmit="handleSubmit" :modal="compTable.modal" v-model:showModal="compTable.showModal">
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
    </bag-global-form>
</template>
<script setup>
import {NButton} from "naive-ui"

const formValue = reactive({})
const compTable = reactive({
    data: Array.from({length: 46}).map((_, index) => ({
        key: index,
        name: `Edward Edward Edward Edward Edward Edward King ${index}`,
        age: 32,
        address: `London, Park Lane no. ${index}`
    })),
    modal: {
        title: '新增',
    },
    showModal: false,
    columns: [{title: 'Name', key: 'name'}, {title: 'Age', key: 'age'},
        {title: 'Address', key: 'address'},
        {
            title: 'Action',
            key: 'actions',
            render(row) {
                return h(
                    NButton,
                    {
                        size: 'small',
                        onClick: () => {
                            compTable.modal.title = '编辑'
                            handleClick(true)
                        }
                    },
                    {default: () => 'Send Email'}
                )
            }
        }
    ],
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
const handleClick = (val) => {
    compTable.showModal = val
}
const handleSkip = (ctx)=>{
    window.$wujie?.props.jump({ path: "/md" });
    // ctx.router.push({path:'/md'})
}
const handleSubmit = () => {

}
</script>
