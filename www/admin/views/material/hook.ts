import {reactive, ref} from 'vue'
import columns from './columns'
import {createFormItem} from '@/packages/utils/form'
import {apiAll} from '@www/admin/service/groupimg'

export default function () {
    const formRef = ref()
    const {rules, fields, formItem} = createFormItem(columns)
    const formState: any = reactive(fields)
    const baseResources = reactive({
        updateImage: (data: any) => {
            formState.image = data
        },
        opts: {
            groupimg: [],
            keywords: []
        }
    })

    apiAll().then((res: any) => {
        baseResources.opts.groupimg = res
    })


    return {
        formRef,
        formState,
        rules,
        baseResources,
        formItem
    }
}
