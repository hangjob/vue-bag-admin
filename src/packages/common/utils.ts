const tableFormatterBooleConvertText = (item: any) => {
    return item.text === true || item.text === 1 ? '是' : '否'
}

const tableFormatterImage = (item: any) => {
    return item.image ? `/api${item.image}` : ''
}

export {
    tableFormatterBooleConvertText,
    tableFormatterImage,
}
