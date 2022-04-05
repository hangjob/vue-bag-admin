const isEnglishNumberChinese = (data: string) => {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(data)
}

export {
    isEnglishNumberChinese
}
