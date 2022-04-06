import { upload } from '@/packages/http/request'

// 查询所有
export const apiUploadImage = (params?: any) => {
    return upload(`/upload/uploadImg`, params)
}

