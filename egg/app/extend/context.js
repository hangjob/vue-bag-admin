// const JWT = require('jsonwebtoken');
// const SECRET_KEY = 'I_LOVE_YANGHANG';
// module.exports = {
//     setToken({name, password}) {
//         let payload = {name, password};
//         return JWT.sign(payload, SECRET_KEY, {expiresIn: 60 * 3}) // 还有一种写法 "24h"
//     },
//     getDecodeToken(token) {
//         return JWT.verify(token, secret)
//     }
// };


const CryptoJS = require('crypto-js')

const key = CryptoJS.enc.Utf8.parse('1234123412QWERTY')  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('QWERTY1234123412')   //十六位十六进制数作为密钥偏移量
const email = require('./email')
const nodersa = require('./nodersa')
module.exports = {
    setToken({password, username}) {
        let str = CryptoJS.enc.Utf8.parse(JSON.stringify({password, username}))
        let encrypted = CryptoJS.AES.encrypt(str, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        })
        return encrypted.ciphertext.toString().toUpperCase()
    },
    getDecodeToken(token) {
        let encryptedHexStr = CryptoJS.enc.Hex.parse(token)
        let str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
        let decrypt = CryptoJS.AES.decrypt(str, key, {iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7})
        let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
        return decryptedStr.toString()
    },
    randomString() {
        let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let result = 'yxs_2022_'
        for (let i = 8; i > 0; --i) {
            result += str[Math.floor(Math.random() * str.length)]
        }
        return result
    },
    email,
    nodersa
}
