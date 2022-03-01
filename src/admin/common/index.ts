import { message } from 'ant-design-vue'
import { getBase64 } from '@/packages/utils/utils'

interface FileItem {
    uid: string;
    name?: string;
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

interface CallbackFileInfo {
    uploading?: Function;
    done?: Function;
    error?: Function;
}

/**
 * 验证上传图片的类型
 * @param file
 */
function fileImageVerify(file: FileItem) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
        message.error('嘿，上传jpeg或者png')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
        message.error('嘿，你上传的图片过大')
    }
    return isJpgOrPng && isLt2M
}

function changeImage(info: FileInfo, callback: CallbackFileInfo) {
    if (info.file.status === 'uploading') {
        callback.uploading && callback.uploading()
        return
    }
    if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, (base64Url: string) => {
            callback.done && callback.done(base64Url)
        })
    }
    if (info.file.status === 'error') {
        message.error('上传出错')
        callback && callback.error && callback.error()
    }
}

export {
    fileImageVerify,
    FileItem,
    FileInfo,
    changeImage,
}
