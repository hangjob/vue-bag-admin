<template>
    <button class="large-upload-file" onclick="upload.click()">
        {{ props.text }}
    </button>
    <input type="file" multiple="multiple" name="upload" id="upload" ref="upload"
           @change="(e)=>handleChangeFile(e,$global)"/>
</template>
<script setup>
const emit = defineEmits(["chang"]);
const props = defineProps({
    text: {
        type: String,
        default: '上传'
    }
})

const compData = reactive({
    md5s: [], // 所有的files的md5
    files: {}, // 所有的文件
    chunkFiles: {} // 所有切片文件
})

// 同步文件转换base64
const fileToBase = (file) => {
    return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (ev) => {
            resolve(ev.target.result)
        };
    });
}

function bufToFile(buf, filename) {
    return new File([buf], filename);
}

// 上传chang事件
const handleChangeFile = async (e, ctx) => {
    for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        const base64 = await fileToBase(file)
        const fileMD5 = ctx.helpers.md5(base64)
        compData.files[fileMD5] = file
        compData.chunkFiles[fileMD5] = await getFileChunkList(file, 1024 * 3000)
        compData.md5s.push(fileMD5)
    }
    emit('chang', compData)

}

// 分割切片
async function getFileChunkList(files, chunkSize) {
    let fileChunkList = []
    let cur = 0
    let index = 0
    while (cur < files.size) {
        const blob = files.slice(cur, cur + chunkSize)
        const file = bufToFile(blob, files.name)
        const base64 = await fileToBase(blob)
        fileChunkList.push({
            blob,
            file,
            name: files.name,
            number: index,
            fileMD5: $global.helpers.md5(base64)
        })
        index++;
        cur += chunkSize;
    }
    return fileChunkList
}

</script>
<style lang="less">
.large-upload-file {
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 6px 20px;

    &:hover {
        background-color: #0069d9;
    }
}

input[type="file"] {
    display: none;
}
</style>
