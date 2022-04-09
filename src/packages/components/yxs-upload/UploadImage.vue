<template>
    <div class="upload-image">
        <a-modal v-model:visible="tailor.visible" width="1000px" okText="确认上传" cancelText="关闭"
                 :cancelButtonProps="{danger: true,type: 'primary'}" title="上传图片" @ok="tailor.handleConfirm"
                 :confirm-loading="tailor.loading"
        >
            <div style="width: 100%;height: 500px">
                <vueCropper
                    ref="cropper"
                    :img="tailor.base64"
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
import {defineComponent, reactive, ref, watch} from 'vue'
import 'vue-cropper/dist/index.css'
import {VueCropper} from 'vue-cropper'
import {apiUploadImage} from '@/packages/service/upload'
import {message} from 'ant-design-vue'
import {imageConfig} from "@/packages/config";
import base64ToFile from "__ROOT__/web-utils/file/base64ToFile";
import fileToBase64 from "__ROOT__/web-utils/file/fileToBase64";


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
        const cropper = ref()
        const previewList = ref<any>([])
        const tailor = reactive({
            visible: false,
            loading: false,
            base64: '',
            fileName: '',
            handleConfirm: () => {
                tailor.loading = true
                cropper.value.getCropData((base64: any) => {
                    const file = base64ToFile(base64, tailor.fileName)
                    apiUploadImage(file).then((data: any) => {
                        const url = `${imageConfig.prefix}${data}`
                        tailor.visible = false
                        tailor.loading = false
                        previewList.value.push({url, source: data})
                        message.success('上传成功')
                        emitImages()
                    })
                })
            }
        })

        watch(
            () => props.image,
            (newVal, oldVal) => {
                if (newVal) {
                    previewList.value = newVal?.split(',').map((item: any) => {
                        return {url: `${imageConfig.prefix}${item}`, source: item}
                    });
                }
            }
        )

        const emitImages = () => {
            const str = previewList.value.map(function (item: any) {
                return item.source
            }).join(',')
            emit('update:image', str)
        }

        const beforeUpload = (file: any) => {
            tailor.fileName = file.name
            fileToBase64(file, ({base64}: { base64: any }) => {
                tailor.base64 = base64
                tailor.visible = true
            })
        }

        const handleDeletePreview = (idx: number) => {
            previewList.value.splice(idx, 1)
            emitImages()
        }


        return {
            fileList: ref([]),
            beforeUpload,
            cropper,
            previewList,
            handleDeletePreview,
            tailor
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
