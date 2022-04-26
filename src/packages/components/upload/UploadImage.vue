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
                    :fixedBox="fixedBox"
                    :autoCropWidth="autoCropWidth"
                    :autoCropHeight="autoCropHeight"
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
                 v-for="(item,idx) in preview.list"
            >
                <a-image style="object-fit:cover;height:100%;" :height="100" :width="100"
                         :key="item" :src="item.url" alt=""
                />
                <DeleteOutlined
                    style="position: absolute;top: 0;right: 0;cursor: pointer;background-color: #36cfc9;padding: 5px;color:#fff"
                    @click="preview.handleDelete(idx)"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'
import { apiUploadImage } from '@/packages/service/upload'
import { message } from 'ant-design-vue'
import base64ToFile from '__ROOT__/bag-utils/file/base64ToFile'
import fileToBase64 from '__ROOT__/bag-utils/file/fileToBase64'


interface FileItem {
    uid: string;
    name: string;
    status?: string;
    response?: string;
    url?: string;
    type?: string;
    size: number;
    originFileObj: any;
}

interface FileInfo {
    file: FileItem;
    fileList: FileItem[];
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
        fileSize: {
            type: Number,
            default: 1,
        },
        fixedBox: {
            type: Boolean,
            default: false,
        },
        autoCropWidth: {
            type: Number,
            default: 850,
        },
        autoCropHeight: {
            type: Number,
            default: 350,
        },
    },
    setup(props, { emit }) {
        const cropper = ref()

        const preview = reactive({
            list: <any>[],
            handleDelete: (idx: number) => {
                preview.list.splice(idx, 1)
                emitImages()
            },
        })

        const tailor = reactive({
            visible: false,
            loading: false,
            base64: '',
            fileName: '',
            handleConfirm: () => {
                tailor.loading = true
                cropper.value.getCropData((base64: any) => {
                    const file = base64ToFile(base64, tailor.fileName)
                    const isLt2M = file.size / 1024 / 1024 < props.fileSize
                    if (!isLt2M) {
                        message.error(`文件小于${props.fileSize}MB`)
                        return false
                    }
                    apiUploadImage(file).then((data: any) => {
                        tailor.visible = false
                        tailor.loading = false
                        preview.list.push({ url: data, source: data })
                        message.success('上传成功')
                        emitImages()
                    })
                })
            },
        })

        watch(() => props.image, (newVal) => {
            if (newVal) {
                preview.list = newVal?.split(',').map((item: any) => {
                    return { url: item, source: item }
                })
            }
        })

        const emitImages = () => {
            const str = preview.list.map(function(item: any) {
                return item.source
            }).join(',')
            emit('update:image', str)
        }

        const beforeUpload = (file: FileItem) => {
            tailor.fileName = file.name
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
            if (!isJpgOrPng) {
                message.error('请上传图片为,jpeg、png')
                return false
            }
            fileToBase64(file, ({ base64 }: { base64: any }) => {
                tailor.base64 = base64
                tailor.visible = true
            })
        }


        return {
            fileList: ref([]),
            beforeUpload,
            cropper,
            tailor,
            preview,
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
