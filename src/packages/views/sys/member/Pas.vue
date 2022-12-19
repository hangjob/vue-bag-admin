<template>
    <a-modal v-model:visible="compData.visible" title="更改密码" width="85%" @ok="compData.handleSubmit">
        <a-form ref="formRef" :model="compData.formState" :rules="compData.rules">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <a-form-item label="原密码" name="rawpassword">
                        <a-input-search
                            v-model:value="compData.formState.rawpassword"
                            placeholder="查看原密码"
                            @search="compData.handleRawPass"
                            :type="compData.inputType ? 'password' : 'text'"
                        >
                            <template #enterButton>
                                <EyeOutlined />
                            </template>
                        </a-input-search>
                    </a-form-item>
                    <a-form-item label="新密码" name="password">
                        <a-input v-model:value="compData.formState.password" placeholder="输入3~20位新密码" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </a-modal>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from 'vue'
import { apiGetPas, apiUpdatePas } from '@/packages/service/member'


export default defineComponent({
    setup(props, { emit }) {
        const formRef = ref()
        const compData = reactive({
            visible: false,
            row: <any>{},
            inputType: true,
            formState: {
                password: '',
                rawpassword: '',
                id: '',
            },
            rules: {
                password: [
                    { required: true, message: '请输入3~20位新密码', trigger: 'blur' },
                ],
            },
            handleOpen({ record }) {
                this.visible = true
                this.formState.rawpassword = record.password
                this.formState.id = record.id
                compData.row = record
            },
            handleSubmit() {
                return formRef.value.validate()
                    .then(() => {
                        const formData: any = toRaw(compData.formState)
                        apiUpdatePas({ ...formData, username: compData.row.username }, { notify: true }).then(() => {
                            compData.visible = false
                        })
                    })
            },
            handleRawPass() {
                compData.inputType = false
                apiGetPas({ password: compData.row.password }).then((data: any) => {
                    if (data) {
                        compData.formState.rawpassword = JSON.parse(data).password
                    }
                })
            },
        })
        
        return {
            formRef,
            compData,
        }
    },
})
</script>
