<template>
    <a-form :model="form.formState" :label-col="form.labelCol">
        <a-form-item v-for="(item,idx) in form.lists" :key="idx" :label="item.name">
            <a-input v-if="item.key !== 'describe'" v-model:value="form.formState[item.key]" />
            <a-textarea readonly v-else v-model:value="form.formState[item.key]" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 2 }">
            <a-button block disabled type="primary">提交</a-button>
        </a-form-item>
    </a-form>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import userPinia from '@/packages/pinia/user'

export default defineComponent({
    setup() {
        const lists = [
            {
                name: '用户名',
                key: 'username',
            },
            {
                name: '邮箱',
                key: 'email',
            },
            {
                name: '公司',
                key: 'company',
            },
            {
                name: '职业',
                key: 'job',
            },
            {
                name: '地址',
                key: 'address',
            },
            {
                name: '登录次数',
                key: 'login_number',
            },
            {
                name: '创建时间',
                key: 'createTime',
            },
            {
                name: '描述',
                key: 'describe',
            },
        ]
        const formState = {}
        lists.map((item) => {
            formState[item.key] = ''
        })
        const userStore = userPinia()
        const userInfo = userStore.userInfo
        const form = reactive({
            formState: { ...userInfo },
            lists,
            labelCol: { style: { width: '100px' } },
            wrapperCol: { span: 14 },
        })
        return {
            form,
        }
    },
})
</script>
