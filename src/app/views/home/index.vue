<template>
    <div>
        <n-button @click="largeUploadFile.handlePauseUpload">断点</n-button>
        <n-button @click="largeUploadFile.handleKeepUpload">检查-续传</n-button>
        <button class="large-upload-file" onclick="upload.click()">上传大文件测试</button>
        <input type="file" multiple="multiple" name="upload"
               id="upload" ref="upload"
               @change="(e)=>largeUploadFile.handleChangeFile(e)"/>
    </div>
</template>
<script setup>
const largeUploadFile = new $global.helpers.LargeUploadFile({
    handleProgress({progress}) {
        console.log(progress[0].number)
    },
    handleMerge(res) {
        console.log(res)
    }
})
</script>


