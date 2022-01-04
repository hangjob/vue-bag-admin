<template>
    <div class="add">
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <a-form-item label="原密码" name="rawpassword">
                        <a-input-search
                            v-model:value="formState.rawpassword"
                            placeholder="查看原密码"
                            @search="handleRawPass"
                            :type="inputType ? 'password' : 'text'"
                        >
                            <template #enterButton>
                                <EyeOutlined/>
                            </template>
                        </a-input-search>

                    </a-form-item>
                    <a-form-item label="新密码" name="password">
                        <a-input v-model:value="formState.password" placeholder="输入3~20位新密码"/>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref, toRaw} from 'vue';
import {apiGetPas, apiUpdatePas} from '@/packages/service/member'


export default defineComponent({
    props: {
        id: {
            required: true,
            type: [Number, String]
        },
        record: {
            required: true,
            type: [Object]
        }
    },
    setup(props, {emit}) {
        const formRef = ref();
        const visible = ref(false);
        const inputType = ref(true)
        const formState: any = reactive({
            password: '',
            rawpassword: props.record.password,
            id: props.id,
        });
        const rules = {
            password: [
                {required: true, message: '请输入3~20位新密码', trigger: 'blur'}
            ],
        };
        const onSubmit = async () => {
            return formRef.value.validate()
                .then(() => {
                    const formData: any = toRaw(formState);
                    apiUpdatePas({...formData}, {notify: true}).then(() => {
                        return Promise.resolve();
                    })
                })
                .catch((error: any) => {
                    return Promise.reject(error);
                });
        };
        const handleRawPass = () => {
            inputType.value = false
            apiGetPas({password: props.record.password}).then((data: string) => {
                formState.rawpassword = data
            })
        }
        return {
            labelCol: {
                span: 6,
            },
            wrapperCol: {
                span: 15,
            },
            formState,
            rules,
            formRef,
            onSubmit,
            visible,
            handleRawPass,
            inputType
        };
    },
});
</script>
