<template>
    <div>
        <BagLargeUploadFile @chang="handleChange"/>
        <div>
            <p v-for="item in compData.progress">{{ item.number }}</p>
        </div>
        <n-button @click="handlePauseUpload">断点</n-button>
        <n-button @click="handleKeepUpload">检查-续传</n-button>
    </div>
</template>
<script setup>
import axios from "axios"

const CancelToken = axios.CancelToken;
let source = CancelToken.source()

const compData = reactive({
    progress: [],
    locaFileSuccess: {},
    files: {},
    chunkFiles: {},
    cancel: []
})

// 清空缓存
const httpClearCaches = async (params) => {
    return await axios.get('/clearCaches', {
        params,
        baseURL: '/bigfile'
    })
}
// 网络上传
const httpUploadFile = (params) => {
    (function (params) {
        axios.post('/upload', params, {
            baseURL: '/bigfile',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            cancelToken: new CancelToken(function executor(c) {
                compData.cancel.push(c);
            }),
            onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent;
                const progress = Math.round((loaded / total) * 100);
                const number = ((progress + (params.idx * 100)) / (params.blockCnt * 100)) * 100;
                const findData = compData.progress.find((item) => item.fileMd5 === params.fileMd5)
                findData.number = number
            }
        }).then((res) => {
            const data = res.data
            if (data.code === '1') {
                if (!compData.locaFileSuccess[params.fileMd5]) {
                    compData.locaFileSuccess[params.fileMd5] = []
                }
                compData.locaFileSuccess[params.fileMd5].push(params.bmd5)
                $global.helpers.lscache.set('locaFiles', compData.locaFileSuccess)
                if (data.data.zoneNowIndex === params.blockCnt - 1) {
                    httpMergeFile({fileMd5: params.fileMd5})
                }
            }
        }).catch((err) => {
        })
    })(params)
}
// 网络合并
const httpMergeFile = (params) => {
    axios.post(`/merge?fmd5=${params.fileMd5}`, ["bigFile"], {baseURL: '/bigfile'}).then((res) => {
        const locaFiles = $global.helpers.lscache.get('locaFiles')
        locaFiles[params.fileMd5] = []
        $global.helpers.lscache.set('locaFiles', locaFiles)
    })
}

const handleChange = async (e) => {
    console.log(e)
    compData.files = e.files;
    compData.chunkFiles = e.chunkFiles;
    $global.helpers.lscache.set('locaFiles', [])
    for (const eKey in e.chunkFiles) {
        const fileMd5 = eKey
        compData.progress.push({number: 0, fileMd5})
        await httpClearCaches({fileMd5})
        const itemChunkFiles = e.chunkFiles[eKey]
        for (const item of itemChunkFiles) {
            httpUploadFile({
                fileMd5: fileMd5,
                md5: fileMd5,
                blockCnt: itemChunkFiles.length,
                bmd5: item.fileMD5,
                idx: item.number,
                file: item.file
            })
        }
    }
}
// 暂停
const handlePauseUpload = () => {
    compData.cancel.forEach((val) => {
        val();
    });
    // source.cancel("中断上传!");
    // source = CancelToken.source(); // 重置source，确保能续传
}
// 续传
const handleKeepUpload = () => {
    const locaFiles = $global.helpers.lscache.get('locaFiles')
    console.log(locaFiles)
    for (const fileKey in compData.chunkFiles) {
        const itemChunkFiles = compData.chunkFiles[fileKey]
        compData.chunkFiles[fileKey].forEach((chunkFile) => {
            if (locaFiles[fileKey] && locaFiles[fileKey].length) {
                const findData = locaFiles[fileKey].find((locaFile) => locaFile === chunkFile.fileMD5)
                if (!findData) {
                    httpUploadFile({
                        fileMd5: fileKey,
                        md5: fileKey,
                        blockCnt: itemChunkFiles.length,
                        bmd5: chunkFile.fileMD5,
                        idx: chunkFile.number,
                        file: chunkFile.file
                    })
                }
            }
        })
    }
}
</script>


