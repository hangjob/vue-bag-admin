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


const crypto = require('crypto');

const key = 'ABCDEFGHIJ654321POIUYTRE'
const iv = 'ABCDEFGHIJ654321'
const algorithm = 'aes192'
const encoding = 'hex'

module.exports = {
    setToken({password}) {
        const cipher = crypto.createCipheriv(algorithm, key, iv)
        cipher.update(password)
        return cipher.final(encoding)
    },
    getDecodeToken(token) {
        const decipher = crypto.createDecipheriv(algorithm, key, iv)
        decipher.update(token, encoding)
        return decipher.final('utf8')
    },
    randomString() {
        let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = 'yxs_2022_';
        for (let i = 8; i > 0; --i) {
            result += str[Math.floor(Math.random() * str.length)];
        }
        return result;
    }
};
