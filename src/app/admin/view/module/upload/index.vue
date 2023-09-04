<template>
    <n-space vertical>
        <n-card>
            <n-upload
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :default-file-list="fileList"
                list-type="image"
                show-download-button
                @download="handleDownload"
            >
                <n-button>上传文件</n-button>
            </n-upload>
        </n-card>
        <n-card>
            <n-upload
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :default-file-list="fileList2"
                list-type="image-card"
            >
                点击上传
            </n-upload>
            <n-divider />
            <n-upload
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :default-file-list="previewFileList"
                list-type="image-card"
                @preview="handlePreview"
            />
            <n-modal
                v-model:show="showModal"
                preset="card"
                style="width: 600px"
                title="一张很酷的图片"
            >
                <img :src="previewImageUrl" style="width: 100%">
            </n-modal>
        </n-card>
        <n-card>
            <n-upload
                multiple
                directory-dnd
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :max="5"
            >
                <n-upload-dragger>
                    <div style="margin-bottom: 12px">
                        <n-icon size="48" :depth="3">
                            <ArchiveOutline/>
                        </n-icon>
                    </div>
                    <n-text style="font-size: 16px">
                        点击或者拖动文件到该区域来上传
                    </n-text>
                    <n-p depth="3" style="margin: 8px 0 0 0">
                        请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
                    </n-p>
                </n-upload-dragger>
            </n-upload>
        </n-card>
    </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useMessage } from "naive-ui"
import type { UploadFileInfo } from "naive-ui"
export default defineComponent({
    setup () {
        const message = useMessage()
        const showModalRef = ref(false)
        const previewImageUrlRef = ref("")
        function handlePreview (file: UploadFileInfo) {
            const { url } = file
            previewImageUrlRef.value = url as string
            showModalRef.value = true
        }
        const fileListRef = ref<UploadFileInfo[]>([
            {
                id: "a",
                name: "我错了，但我可以改.png",
                status: "error"
            },
            {
                id: "d",
                name: "现在还不行呢.doc",
                status: "uploading",
                percentage: 50
            },
            {
                id: "c",
                name: "现在就可下载哟.png",
                status: "finished",
                url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            }
        ])
        const handleDownload = (file: UploadFileInfo) => {
            message.success(`下载成功：${file.name}`)
        }
        return {
            fileList: fileListRef,
            handleDownload,
            handlePreview,
            showModal: showModalRef,
            previewImageUrl: previewImageUrlRef,
            fileList2: ref([
                {
                    id: "a",
                    name: "我是上传出错的普通文件.png",
                    status: "error"
                },
                {
                    id: "b",
                    name: "我是普通文本.doc",
                    status: "finished",
                    type: "text/plain"
                },
                {
                    id: "c",
                    name: "我是自带url的图片.png",
                    status: "finished",
                    url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                },
                {
                    id: "d",
                    name: "我是上传进度99%的文本.doc",
                    status: "uploading",
                    percentage: 99
                }
            ]),
            previewFileList: ref([
                {
                    id: "react",
                    name: "我是react.png",
                    status: "finished",
                    url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                },
                {
                    id: "vue",
                    name: "我是vue.png",
                    status: "finished",
                    url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                }
            ])
        }
    }
})
</script>
