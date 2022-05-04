/**
 * base64 转 file
 * @param data base64
 * @param fileName
 */
const base64ToFile = function (data: any, fileName: string) {
    let arr = data.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        buster = atob(arr[1]),
        n = buster.length,
        u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = buster.charCodeAt(n)
    }
    return new File([u8arr], fileName, {type: mime})
}


export default base64ToFile;
