import CryptoJS from "crypto-js"
import {JSEncrypt} from "jsencrypt"


// 加密
function aes_encrypt(plainText: string) {
    const encrypted = CryptoJS.AES.encrypt(plainText, CryptoJS.enc.Utf8.parse(window.AES_KEY), {iv: CryptoJS.enc.Utf8.parse(window.AES_IV)})
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

// 解密
function aes_decrypt(ciphertext: string) {
    const decrypted = CryptoJS.AES.decrypt(ciphertext, CryptoJS.enc.Utf8.parse(window.AES_KEY), {iv: CryptoJS.enc.Utf8.parse(window.AES_IV)})
    return decrypted.toString(CryptoJS.enc.Utf8)
}

/* 非对称加密 */
function rsaEncrypt(word: string) {
    const encrypted = new JSEncrypt() // 创建加密对象实例
    encrypted.setPublicKey(window.publicKey) // 设置公钥
    return encrypted.encrypt(word) // 对内容进行加密
}

export {
    aes_encrypt,
    aes_decrypt,
    rsaEncrypt
}
