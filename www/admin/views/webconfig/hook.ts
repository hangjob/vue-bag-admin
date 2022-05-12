import { reactive, ref } from 'vue'
import { apiAll } from '@www/admin/service/member'
import { apiAll as apiAllChannel } from '@www/admin/service/channel'
import { apiUploadImage } from '@/packages/service/upload'
import { message } from 'ant-design-vue'

export default function() {
    const formRef = ref()

    const formState: any = reactive({
        title: '',
        content: '',
        describe: '',
        image: '',
        views: 10,
        likes: 10,
        dislikes: 0,
        is_guest: true,
        is_comment: true,
        keywords: [],
        flag: '',
        title_style: '',
        user_id: '',
        channel_id: '',
        createTime: undefined,
        order: 0,
        images: '',
        images_type: '',
    })


    const rules = {
        title: [
            { required: true, message: '标题为必填项', trigger: 'blur' },
        ],
        describe: [
            { required: true, message: '简述为必填项', trigger: 'blur' },
        ],
        content: [
            { required: true, message: '内容为必填项', trigger: 'blur' },
        ],
    }

    const baseResources = reactive({
        users: [],
        channels: [],
        keywords: [],
        updateImage: (data: any) => {
            formState.image = data
        },
        updateImages: (data: any) => {
            formState.images = data
        },
    })

    apiAll().then((res: any) => {
        baseResources.users = res
    })

    apiAllChannel().then((res: any) => {
        baseResources.channels = res
    })

    const onUploadImg = async (files: any, callback: Function) => {
        const res = await Promise.all(
            Array.from(files).map((file: any) => {
                return new Promise((rev, rej) => {
                    const isLt2M = file.size / 1024 / 1024 < 2 // 如需压缩，需要在处理
                    if (!isLt2M) {
                        message.error(`文件小于${2}MB`)
                    } else {
                        apiUploadImage(file).then((data: any) => {
                            rev(data)
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
        formState,
        rules,
        formRef,
        baseResources,
        onUploadImg,
    }
}
