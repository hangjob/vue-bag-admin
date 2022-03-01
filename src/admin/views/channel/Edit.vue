<template>
    <div class="add">
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="栏目名称" name="name">
                        <a-input v-model:value="formState.name" placeholder="输入角色名称" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择父级" name="pid">
                        <a-select v-model:value="formState.pid" placeholder="选择父级">
                            <a-select-option value="shanghai">Zone one</a-select-option>
                            <a-select-option value="beijing">Zone two</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="描述" name="image">
                        <a-upload
                            v-model:file-list="fileList"
                            name="avatar"
                            list-type="picture-card"
                            class="avatar-uploader"
                            :show-upload-list="false"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            :before-upload="beforeUpload"
                            @change="handleChange"
                        >
                            <img v-if="formState.image" :src="formState.image" alt="avatar" />
                            <div v-else>
                                <loading-outlined v-if="loading"></loading-outlined>
                                <plus-outlined v-else></plus-outlined>
                                <div class="ant-upload-text">上传图片</div>
                            </div>
                        </a-upload>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="排序" name="order">
                        <a-input v-model:value="formState.order" placeholder="输入排序号" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRaw, UnwrapRef, watch } from 'vue'
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
import { apiUpdate, apiFind } from '@/admin/service/channel'
import { filterData } from '@/packages/utils/lodash'
import { toTree } from '@/packages/utils/utils'

interface FormState {
    name: String;
    tag?: String | Number,
    describe?: String | Number,
    order?: String | Number,
    id?: Number | String,
}

export default defineComponent({
    props: {
        id: {
            required: true,
            type: [Number, String],
        },
    },
    setup(props, { emit }) {
        const formRef = ref()
        const visible = ref(false)
        const formState: any = reactive({
            name: '',
            tag: '',
            order: '',
            describe: '',
            id: '',
        })
        const rules = {
            name: [
                { required: true, message: '名称为必填项', trigger: 'blur' },
            ],
        }
        const onSubmit = async () => {
            return formRef.value.validate()
                .then(() => {
                    apiUpdate(toRaw(formState), { notify: true }).then(() => {
                        return Promise.resolve()
                    })
                })
                .catch((error: ValidateErrorEntity<FormState>) => {
                    return Promise.reject(error)
                })
        }

        const getMenuData = () => {
            apiFind({ id: props.id }).then((res: any) => {
                let { createTime, updateTime, ...profileData } = res
                Object.keys(formState).forEach((key: string) => {
                    formState[key] = profileData[key]
                })
            })
        }

        watch(() => props.id, (newVal, oldVal) => {
            getMenuData()
        }, { immediate: true })

        const handleSelected = (icon: string) => {
            visible.value = false
        }

        const fileList = ref([])
        const fileLoading = ref(false)
        const beforeUpload = () => {

        }
        const handleChange = () => {

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
            fileList,
            beforeUpload,
            handleChange,
            fileLoading
        }
    },
})
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
