/**
 * 生成form表单每一项
 * @param columns
 */
const createFormItem = (columns: Array<any>) => {
    const rules = <any>{}
    const fields = <any>{}

    columns.forEach((item, index) => {
        item.sortIndex = index
    })

    const formItem = columns.filter(item => item.formData).map((item: any) => {
        if (item.formData.rules) {
            rules[item.formData.name] = item.formData.rules
        }
        fields[item.formData.name] = item.formData?.props?.defaultValue || '' // v-model值
        item.formData.autoLink = 'autoLink' in item.formData ? item.formData.autoLink : true
        item.formData.labelCol = 'labelCol' in item.formData ? item.formData.labelCol : { span: 4, offset: 0 }
        item.formData.wrapperCol = 'wrapperCol' in item.formData ? item.formData.wrapperCol : { span: 18, offset: 0 }
        if (item.formData.props && item.formData.element === 'a-textarea') {
            item.formData.props.rows = 'rows' in item.formData.props ? item.formData.props.rows : 4
        }
        item.formData.change = 'change' in item.formData ? item.formData.change : () => {
            console.log('触发了change事件')
        }
        return {
            ...item,
            xs: item.layout?.xs || 24,
            sm: item.layout?.sm || 24,
            md: item.layout?.md || 24,
            lg: item.layout?.lg || 12,
            xl: item.layout?.xl || 12,
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
