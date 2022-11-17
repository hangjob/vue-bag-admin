<template>
    <bag-view>
        <div class="clearfix">
            <a-upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card"
                v-model:file-list="fileList"
                @preview="handlePreview"
            >
                <div v-if="fileList.length < 8">
                    <plus-outlined/>
                    <div class="ant-upload-text">上传</div>
                </div>
            </a-upload>
            <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage"/>
            </a-modal>
        </div>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
function getBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

interface FileItem {
    uid: string;
    name?: string;
    status?: string;
    response?: string;
    percent?: number;
    url?: string;
    preview?: string;
    originFileObj?: any;
}

interface FileInfo {
    file: FileItem;
    fileList: FileItem[];
}

export default defineComponent({
    name:'module-fileUploadImg',
    setup() {
        const previewVisible = ref<boolean>(false);
        const previewImage = ref<string | undefined>('');

        const fileList = ref<FileItem[]>([
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://z3.ax1x.com/2021/11/03/IAqlVA.jpg',
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://z3.ax1x.com/2021/11/03/IAqlVA.jpg',
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://z3.ax1x.com/2021/11/03/IAqlVA.jpg',
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://z3.ax1x.com/2021/11/03/IAqlVA.jpg',
            },
            {
                uid: '-5',
                name: '无效链接',
                status: 'error',
            },
        ]);

        const handleCancel = () => {
            previewVisible.value = false;
        };
        const handlePreview = async (file: FileItem) => {
            if (!file.url && !file.preview) {
                file.preview = (await getBase64(file.originFileObj)) as string;
            }
            previewImage.value = file.url || file.preview;
            previewVisible.value = true;
        };
        const handleChange = ({fileList: newFileList}: FileInfo) => {
            fileList.value = newFileList;
        };

        return {
            previewVisible,
            previewImage,
            fileList,
            handleCancel,
            handlePreview,
            handleChange,
        };
    },
});
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
}
</style>
