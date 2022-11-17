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
                <a-button> 上传图片</a-button>
            </a-upload>&nbsp;
            <a-button @click="handleSelectImage" type="primary">选择图库</a-button>
        </div>
        <div class="preview">
            <div style="margin-right: 10px;display: inline-block;margin-top: 10px;position: relative"
                 v-for="(item,idx) in preview.list"
            >
                <a-image style="object-fit:cover;height:100%;border-radius:3px" :height="100" :width="100"
                         :key="item" :src="getImageFullPath(item.url)" alt=""
                />
                <DeleteOutlined
                    style="position: absolute;top: 3px;right: 3px;border-radius:3px;cursor: pointer;background-color: #36cfc9;padding: 5px;color:#fff"
                    @click="preview.handleDelete(idx)"
                />
            </div>
        </div>
        <bag-modal v-model:visible="visible" title="从图库选择" width="85%" @ok="handleAffirm">
            <div class="gallery">
                <a-row :gutter="[16,16]">
                    <a-col v-for="item in images" :key="item.id" :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                        <img @click="handleSelect(item)" :src="getImageFullPath(item.image)" alt="">
                    </a-col>
                </a-row>
            </div>
        </bag-modal>
    </div>
</template>
<script lang="ts">
import { defineComponent, inject, nextTick, reactive, ref, watch } from 'vue'
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'
import { apiUploadImage } from '@/packages/service/upload'
import { message } from 'ant-design-vue'
import PmUtils from 'pm-utils'
import { apiAll } from '@www/admin/service/material'

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
            default: 512,
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
        isFileMore: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['update:image'],
    setup(props, { emit }) {
        const cropper = ref()
        const visible = ref(false)
        const images = ref([])
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
                    const file = PmUtils.file.base64ToFile(base64, tailor.fileName)
                    if ((file.size / 1024) < props.fileSize) {
                        message.error(`文件小于${props.fileSize}KB`)
                    } else {
                        apiUploadImage(file).then((data: any) => {
                            tailor.visible = false
                            tailor.loading = false
                            if (props.isFileMore) {
                                preview.list.push({ url: data, source: data })
                            } else {
                                preview.list[0] = { url: data, source: data }
                            }
                            message.success('上传成功')
                            emitImages()
                        })
                    }
                })
            },
        })
        const { getImageFullPath } = inject<any>('bagGlobal')
        watch(() => props.image, (newVal) => {
            if (newVal) {
                preview.list = newVal?.split(',').map((item: any) => {
                    return { url: item, source: item }
                })
            }
        }, { deep: true, immediate: true })

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
            PmUtils.file.fileToBase64(file, ({ base64 }: { base64: any }) => {
                tailor.base64 = base64
                tailor.visible = true
            })
        }

        const handleAffirm = () => {

        }

        const handleSelect = (item: any) => {
            if (props.isFileMore) {
                preview.list.push({ url: item.image, source: item.image })
            } else {
                preview.list[0] = { url: item.image, source: item.image }
            }
            emitImages()
            visible.value = false
        }

        const handleSelectImage = () => {
            visible.value = true
            nextTick(() => {
                apiAll().then((res: any) => {
                    images.value = res
                })
            })
        }

        return {
            fileList: ref([]),
            beforeUpload,
            cropper,
            tailor,
            preview,
            getImageFullPath,
            visible,
            images,
            handleSelectImage,
            handleAffirm,
            handleSelect,
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

.gallery {
    img {
        border-radius: 3px;
        height: 120px;
        width: 100%;
        object-fit: cover;
    }
}
</style>
