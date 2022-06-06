import { reactive, ref } from 'vue'
import columns from './columns'
import { createFormItem } from '@/packages/utils/form'
import { apiAll } from '@www/admin/service/member'
import { apiAll as apiAllChannel } from '@www/admin/service/channel'

export default function() {
    const formRef = ref()
    const { rules, fields, formItem } = createFormItem(columns)
    const formState: any = reactive(fields)
    // apiAll().then((res: any) => {
    //     baseResources.users = res
    // })
    //
    // apiAllChannel().then((res: any) => {
    //     baseResources.channels = res
    // })
    console.log(formItem)
    const baseResources = reactive({
        keywords: [],
        updateLogo: (data: any) => {
            formState.image = data
        },
        updateLoginbg: (data: any) => {
            formState.loginbg = data
        },
    })

    return {
        formRef,
        formState,
        rules,
        baseResources,
        formItem,
    }
}
