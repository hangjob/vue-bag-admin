<template>
    <div>
        <a-upload
            list-type="picture"
            v-model:file-list="fileList"
            :before-upload="beforeUpload"
        >
            <a-button type="primary">
                选择文件
            </a-button>
        </a-upload>
    </div>
</template>
<script lang="ts">
import {UploadOutlined} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
import FileBreakpoint from './fileBreakpoint'
import {FileItem} from './file.type'

export default defineComponent({
    components: {
        UploadOutlined,
    },
    setup() {
        const fileList = ref<FileItem[]>([]);
        const uploading = ref<boolean>(false);

        const fileBreakpoint = new FileBreakpoint()
        const beforeUpload = (file: FileItem) => {
            fileBreakpoint.getFileChunks(file);
            return false;
        };


        const handleUpload = () => {

        };

        return {
            beforeUpload,
            fileList,
            uploading,
            handleUpload
        };
    },
});
</script>