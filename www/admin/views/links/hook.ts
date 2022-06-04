import {reactive, ref} from 'vue'
import columns from './columns'
import {createFormItem} from '@/packages/utils/form'

export default function () {
    const formRef = ref()
    const {rules, fields, formItem} = createFormItem(columns)
    const formState: any = reactive(fields)
    const baseResources = reactive({
        keywords: [],
        updateLogo: (data: any) => {
            formState.logo = data
        },
    })

    return {
        formRef,
        formState,
        rules,
        baseResources,
        formItem
    }
}
