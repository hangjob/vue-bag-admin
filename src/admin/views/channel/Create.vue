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
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <a-form-item :labelCol="{span: 3, offset: 0}" label="描述" name="image">
                        <a-upload
                            v-model:file-list="fileList"
                            name="avatar"
                            list-type="picture-card"
                            class="avatar-uploader"
                            :show-upload-list="false"
                            action="/api/upload/uploadImg"
                            :before-upload="beforeUpload"
                            @change="handleChange"
                        >
                            <img v-if="formState.image" :src="formState.image" alt="avatar" />
                            <div v-else>
                                <loading-outlined v-if="fileLoading"></loading-outlined>
                                <plus-outlined v-else></plus-outlined>
                                <div class="ant-upload-text">上传图片</div>
                            </div>
                        </a-upload>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="描述" name="file">
                        <a-upload
                            list-type="picture"
                            action="/api/upload/uploadFile"
                            :preview-file="previewFile"
                            v-model:file-list="fileList"
                        >
                            <a-button>
                                <upload-outlined></upload-outlined>
                                上传文件
                            </a-button>
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
import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue'
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
import { apiCreate } from '@/admin/service/channel'
import { message } from 'ant-design-vue'
import { UploadOutlined } from '@ant-design/icons-vue'
import { changeImage, fileImageVerify, FileItem, FileInfo } from '@/admin/common'

interface FormState {
    name: String;
    pid?: Number,
    image?: String,
    order?: String | Number,
}

export default defineComponent({
    components: {
        UploadOutlined,
    },
    setup(props, { emit }) {
        const formRef = ref()
        const visible = ref(false)
        const formState: UnwrapRef<FormState> = reactive({
            name: '',
            image: '',
            order: '',
        })
        const rules = {
            name: [
                { required: true, message: '名称为必填项', trigger: 'blur' },
            ],
            tag: [
                { required: true, message: '标识符为必填项', trigger: 'blur' },
            ],
        }
        const onSubmit = async () => {
            return formRef.value.validate()
                .then(() => {
                    apiCreate(toRaw(formState), { notify: true }).then(() => {
                        return Promise.resolve()
                    })
                })
                .catch((error: ValidateErrorEntity<FormState>) => {
                    return Promise.reject(error)
                })
        }

        const handleSelected = (icon: string) => {
            visible.value = false
        }
        const fileList = ref([])
        const fileLoading = ref<boolean>(false)
        const beforeUpload = (file: FileItem) => {
            return fileImageVerify(file)
        }
        const handleChange = (info: FileInfo) => {
            changeImage(info, {
                uploading: () => {
                    fileLoading.value = true
                },
                done: (base64Url: string) => {
                    fileLoading.value = false
                    formState.image = base64Url
                },
                error: () => {
                    fileLoading.value = false
                },
            })
        }

        const previewFile = async (file: any): Promise<any> => {
            console.log('Your upload file:', file)
            return {}
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
            fileLoading,
            previewFile,
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
