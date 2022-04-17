import { reactive, ref } from 'vue'

export default function() {
    const formRef = ref()
    const formState: any = reactive({
        name: '',
        image: '',
        order: '',
        url: '',
        is_contribute: 1,
        shows: 1,
        keywords: [],
        pid: null,
    })
    const rules = {
        name: [
            { required: true, message: '名称为必填项', trigger: 'blur' },
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
