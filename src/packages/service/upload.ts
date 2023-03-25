import { upload } from '@/packages/http/request'
import { getApiInstanceUrl } from '@/packages/utils/api'

// 上图片图片
export const apiUploadImage = (params?: any) => {
    return upload(getApiInstanceUrl(`/upload/uploadImg`), params)
}

// oss上传
export const apiOssUploadImage = (params?: any) => {
    return upload(getApiInstanceUrl(`/upload/img`), params)
}
