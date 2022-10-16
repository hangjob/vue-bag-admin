// const {generateKeyPairSync, publicEncrypt, privateDecrypt} = require('crypto')
//
// const key = 'BAG20220526';
// const {publicKey, privateKey} = generateKeyPairSync('rsa', {
//     modulusLength: 1024,
//     publicKeyEncoding: {
//         type: 'spki',
//         format: 'pem'
//     },
//     privateKeyEncoding: {
//         type: 'pkcs8',
//         format: 'pem'
//     }
// });
//
//
// // 非对称加密
// const rsaEncrypt = (data) => {
//     const pub = publicKey.toString(key);
//     return publicEncrypt(pub, Buffer.from(data)).toString('base64');
// }
//
// // 非对称解密
// const rsaDecrypt = (data) => {
//     try {
//         const pri = privateKey.toString(key)
//         const decryptData = privateDecrypt(pri, Buffer.from(data.toString('base64'), 'base64'));
//         return decryptData.toString();
//     } catch (err) {
//         return false;
//     }
// }
//
// const rsaPublicKey = () => {
//     return {}
// }
//
// module.exports = {
//     rsaEncrypt,
//     rsaDecrypt
// }
