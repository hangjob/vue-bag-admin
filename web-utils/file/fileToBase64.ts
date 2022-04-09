/**
 * file 转 base64
 * @param file
 * @param callback
 */
const fileToBase64 = function(file: any, callback: Function) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(res: any) {
        callback({ base64: res.target.result, file: res })
    }
}

export default fileToBase64
