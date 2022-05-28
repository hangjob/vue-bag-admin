// @ts-ignore
import CryptoJS from 'crypto-js'
import { JSEncrypt } from 'jsencrypt'

const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF') //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412') //十六位十六进制数作为密钥偏移量
const publicKey = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCGZ9nIiSJT+N66Y44G4R1exi9Zg7C141cCzHL9avlYdpxGHtXUWvUX2wcOXe2AtCTH54cBVbWdudlFpN0M2PBUDfFE+rx5KzRWqDm3vAolAb8Tr7+LHVLdcPGc3j8h/XUnsM6rVCxDGM/PcdMp1sM5Nec5BJ3oGwCgt92HgT8BtwIDAQAB-----END PUBLIC KEY-----'

//  对称 加密方法
function aseEncrypt(word: any) {
    let secs = CryptoJS.enc.Utf8.parse(word)
    let encrypted = CryptoJS.AES.encrypt(secs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    return encrypted.ciphertext.toString()
}

// 对称 解密方法
function aseDecrypt(word: any) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
    let secs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    let decrypt = CryptoJS.AES.decrypt(secs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
}

/* 非对称加密 */
function rsaEncrypt(word: any) {
    const encrypted = new JSEncrypt() // 创建加密对象实例
    encrypted.setPublicKey(publicKey) // 设置公钥
    return encrypted.encrypt(word) // 对内容进行加密
}



export {
    aseDecrypt,
    aseEncrypt,
    rsaEncrypt,
}
