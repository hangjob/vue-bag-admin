<template>
    <div class="upload-image">
        <a-modal v-model:visible="visible" width="1000px" okText="确认上传" cancelText="关闭"
                 :cancelButtonProps="{danger: true,type: 'primary'}" title="上传图片" @ok="handleOk"
                 :confirm-loading="confirmLoading"
        >
            <div style="width: 100%;height: 500px">
                <vueCropper
                    ref="cropper"
                    :img="picture.base64"
                    :outputSize="0.8"
                    :autoCrop="true"
                    autoCropWidth="800"
                    autoCropHeight="300"
                    outputType="png"
                ></vueCropper>
            </div>
        </a-modal>
        <div class="action-btn">
            <a-upload :file-list="fileList" :before-upload="beforeUpload">
                <a-button>
                    上传图片
                </a-button>
            </a-upload>&nbsp;
        </div>
        <div class="preview">
            <div style="margin-right: 10px;display: inline-block;margin-top: 10px;position: relative"
                 v-for="(item,idx) in previewList"
            >
                <a-image style="object-fit:cover;height:100%;" :height="100" :width="100"
                         :key="item" :src="item.url" alt=""
                />
                <DeleteOutlined style="position: absolute;top: 10px;right: 10px;cursor: pointer"
                                @click="handleDeletePreview(idx)"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import 'vue-cropper/dist/index.css'
import {VueCropper} from 'vue-cropper'
import {apiUploadImage} from '@/packages/service/upload'
import {message} from 'ant-design-vue'

interface FileItem {
    uid: string;
    name?: string;
    status?: string;
    response?: string;
    url?: string;
    size: number;
}

interface FileInfo {
    file: FileItem;
    fileList: FileItem[];
}

const dataURLtoFile = (data: any, fileName: string) => {
    let arr = data.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        buster = atob(arr[1]),
        n = buster.length,
        u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = buster.charCodeAt(n)
    }
    return new File([u8arr], fileName, {type: mime})
}
export default defineComponent({
    components: {
        VueCropper,
    },
    props: {
        image: {
            type: String,
            default: '',
        },
    },
    setup(props, {emit}) {
        const visible = ref<boolean>(false)
        const confirmLoading = ref<boolean>(false)
        const cropper = ref()
        const previewList = ref<any>([]);
        const picture = reactive({
            change: () => {

            },
            base64: '',
            fileName: '',
        })
        const emitImages = () => {
            const str = previewList.value.map(function (item: any) {
                return item.source;
            }).join(",");
            emit('update:image', str)
        }

        const handleOk = () => {
            confirmLoading.value = true
            cropper.value.getCropData((base64: any) => {
                const file = dataURLtoFile(base64, picture.fileName)
                apiUploadImage(file).then((data: any) => {
                    const url = `${window.location.origin}/api${data}`
                    visible.value = false
                    confirmLoading.value = false
                    previewList.value.push({url, source: data})
                    emitImages()
                    message.success('上传成功')
                })
            })
        }

        const beforeUpload = (file: any) => {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            picture.fileName = file.name
            reader.onload = function (e: any) {
                picture.base64 = e.target.result
                visible.value = true
            }
        }

        const handleDeletePreview = (idx: number) => {
            previewList.value.splice(idx, 1);
            emitImages()
        }


        return {
            visible,
            picture,
            handleOk,
            fileList: ref([]),
            beforeUpload,
            confirmLoading,
            cropper,
            previewList,
            handleDeletePreview
        }
    },
})
</script>
<style lang="less" scoped>

.upload-image {
    .cropper {
        height: 600px;
        width: 600px;
        background-color: #dddddd;
    }

    .action-btn {
        display: flex;
        margin-top: 5px;
    }

    .preview {
        img {

        }
    }
}
</style>
