import { reactive, ref } from 'vue'

export default function() {
    const formRef = ref()
    const formState: any = reactive({
        name: '',
        user_id: '',
        order: '',
        shows: true,
    })
    const rules = {
        name: [
            { required: true, message: '关键词为必填项', trigger: 'blur' },
        ],
    }


    const baseResources = reactive({
        keywords: [],
        updateImage: (data: any) => {
            formState.image = data
        },
    })

    return {
        formRef,
        formState,
        rules,
        baseResources,
    }
}
