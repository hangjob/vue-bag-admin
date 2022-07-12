/**
 * 生成form表单每一项
 * @param columns
 */
const createFormItem = (columns: Array<any>) => {
    const rules = <any>{}
    const fields = <any>{}
    const formItem = columns.filter(item => item.formData).map((item: any) => {
        if (item.formData.rules) {
            rules[item.formData.name] = item.formData.rules
        }
        fields[item.formData.name] = item.formData?.defaultValue || ''
        fields['autoLink'] = 'autoLink' in item.formData ? true : item.formData.autoLink
        return {
            ...item,
            xs: item.formData?.xs || 24,
            sm: item.formData?.sm || 24,
            md: item.formData?.md || 24,
            lg: item.formData?.lg || 12,
            xl: item.formData?.xl || 12,
        }
    })

    return {
        rules,
        fields,
        formItem,
    }
}

export {
    createFormItem,
}
