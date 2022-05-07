/**
 * 点击下载
 * @param data 文件流 Blob
 * @param fileName 文件名称
 */
const fileDownload = (data: Blob, fileName: string = '下载') => {
    let blob = new Blob([data], {
        type: 'application/octet-stream',
    })
    if ('download' in document.createElement('a')) {
        // 不是IE浏览器
        let url = window.URL.createObjectURL(blob)
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
    } else {
        // IE10+
        const navigator: any = window.navigator
        navigator.msSaveBlob(blob, fileName)
    }
}


export default fileDownload
