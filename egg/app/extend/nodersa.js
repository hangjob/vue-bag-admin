const nodeRSA = require('node-rsa')
const rsa = require('./config')

const publicKey = rsa.publicKey // 公钥
const privateKey = rsa.privateKey // 私钥
const txt = JSON.stringify({ name: 'bag' })
//
// console.log(publicKey)
// console.log(privateKey)

// 使用公钥加密
async function rsaEncrypt(data) {
    const pubKey = new nodeRSA(publicKey, 'pkcs8-public')
    return pubKey.encrypt(Buffer.from(data), 'base64')
}

// 使用私钥解密
async function rsaDecrypt(data) {
    const priKey = new nodeRSA(privateKey)
    priKey.setOptions({ encryptionScheme: 'pkcs1' }) // 因为jsencrypt自身使用的是pkcs1加密方案, nodejs需要修改成pkcs1。
    return priKey.decrypt(data, 'utf8')
}

// const sign = rsaEncrypt(txt)
// const _src = rsaDecrypt(sign)
//
// console.log('加密：', sign)
// console.log('解密：', _src)
/*
加密： fBaBFVPv+96I/r6a2tfPbYWa0yjgJKQ+K2/E9obGNo0dYBOSBzW2PgnPOHX+/pq0wUZPxJzcwt5YcMtOsUNuZAYpaPZJ9o6IOEKj823HBNbyerDMUfU3rINCk2FilRuxFpQPmBZTbSvSumKligdtsh1Vz02DwdRgbJHp5bm4Hjk=
解密： 123
*/

// 使用私钥对消息签名
function signRSA(data) {
    const priKey = new nodeRSA(privateKey, 'pkcs8-private')
    return priKey.sign(Buffer.from(data), 'hex')
}

// 使用公钥验证签名
function verifyRSA(decrypt, signs) {
    const pubKey = new nodeRSA(publicKey, 'pkcs8-public')
    return pubKey.verify(Buffer.from(decrypt), signs, 'utf8', 'hex')
}

// const signature = signRSA(sign)

// console.log('私钥签名：' + signature)
// console.log('公钥验证：' + verifyRSA(sign, signature))
/*
私钥签名：873ae60fa3a5a89850185632b53e54b7c9919d146f2464a857f83679d9862e0612973c891994f6f576d4c04913a8b0a17b9b3adaa3577fcb81d637b2ede0c4a1cffadcaa99b81d09a7edfa69a813cd9f87fe52d96c371f6af533dd5577fdc0f6f7dc6857e1a78d425c0be71f7c440e44e8f932c4ed8890dba007721d10832e92
公钥验证：true
*/

module.exports = {
    rsaEncrypt,
    rsaDecrypt,
    signRSA,
    verifyRSA,
}
