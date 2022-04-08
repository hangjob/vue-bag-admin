import { reactive, ref } from 'vue'
import { apiAll } from '@www/admin/service/member'
import { apiAll as apiAllChannel } from '@www/admin/service/channel'

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


    return {
        formState,
        rules,
        formRef,
        baseResources,
    }
}
