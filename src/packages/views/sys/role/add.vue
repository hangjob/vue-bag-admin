<template>
    <div class="add">
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="名称" name="name">
                        <a-input v-model:value="formState.name" placeholder="输入角色名称"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="标识符" name="tag">
                        <a-input v-model:value="formState.tag" placeholder="输入标识符"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="描述" name="describe">
                        <a-textarea v-model:value="formState.describe" placeholder="输入描述"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="排序" name="order">
                        <a-input v-model:value="formState.order" placeholder="输入排序号"/>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref, toRaw, UnwrapRef} from 'vue';
import {ValidateErrorEntity} from 'ant-design-vue/es/form/interface';
import {apiCreate} from '@/packages/service/role'

interface FormState {
    name: String;
    tag?: String | Number,
    describe?: String | Number,
    order?: String | Number,
}

export default defineComponent({
    setup(props, {emit}) {
        const formRef = ref();
        const visible = ref(false);
        const formState: UnwrapRef<FormState> = reactive({
            name: '',
            tag: '',
            order: '',
            describe: ''
        });
        const rules = {
            name: [
                {required: true, message: '名称为必填项', trigger: 'blur'}
            ],
            tag: [
                {required: true, message: '标识符为必填项', trigger: 'blur'}
            ]
        };
        const onSubmit = async () => {
            return formRef.value.validate()
                .then(() => {
                    apiCreate(toRaw(formState), {notify: true}).then(() => {
                        return Promise.resolve();
                    })
                })
                .catch((error: ValidateErrorEntity<FormState>) => {
                    return Promise.reject(error);
                });
        };

        const handleSelected = (icon: string) => {
            visible.value = false;
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
            handleSelected,
        };
    },
});
</script>
<style lang="less" scoped>
.item-icons {
    .item {
        text-align: center;
        padding: 10px 0;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
            border: 1px solid #ddd;
            width: 45px;
            border-radius: 3px;
        }
    }
}
</style>
