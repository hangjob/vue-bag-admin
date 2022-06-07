import { inject, reactive, ref } from 'vue'
import columns from './columns'
import { createFormItem } from '@/packages/utils/form'
import { apiAll } from '@www/admin/service/member'
import { apiAll as apiAllChannel } from '@www/admin/service/channel'
import { message } from 'ant-design-vue'
import { apiUploadImage } from '@/packages/service/upload'

export default function() {
    const formRef = ref()
    const { rules, fields, formItem } = createFormItem(columns)
    const formState: any = reactive(fields)

    const baseResources = reactive({
        keywords: [],
        updateImage: (data: any) => {
            formState.image = data
        },
        updateLoginbg: (data: any) => {
            formState.loginbg = data
        },
        opts: {
            channel: [],
            user: [],
        },
    })

    apiAllChannel().then((res: any) => {
        baseResources.opts.channel = res
    })
    apiAll().then((res: any) => {
        baseResources.opts.user = res
    })

    const { configApp } = <any>inject('$configAppOptions')
    const onUploadImg = async (files: any, callback: Function) => {
        const res = await Promise.all(
            Array.from(files).map((file: any) => {
                return new Promise((rev, rej) => {
                    const isLt2M = file.size / 1024 / 1024 < 2 // 如需压缩，需要在处理
                    if (!isLt2M) {
                        message.error(`文件小于${2}MB`)
                    } else {
                        apiUploadImage(file).then((data: any) => {
                            const { baseURL } = configApp?.httpNetwork
                            rev(baseURL + data)
                        }).catch((err: any) => {
                            rej(err)
                        })
                    }
                })
            }),
        )
        callback(res.map((item: any) => item))
    }
    return {
        formRef,
        formState,
        rules,
        baseResources,
        formItem,
        onUploadImg,
    }
}
