import { upload } from '@/packages/http/request'

// 上图片图片
export const apiUploadImage = (params?: any) => {
    return upload(`/upload/uploadImg`, params)
}

// oss上传
export const apiOssUploadImage = (params?: any) => {
    return upload(`/upload/img`, params,{baseURL:'/papi'})
}
