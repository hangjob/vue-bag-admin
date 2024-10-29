'use strict';
const crypto = require('crypto')
const utils = require("@strapi/utils");
const {ApplicationError, ValidationError} = utils.errors;
const {publicKey, privateKey, aesIv, aesKey} = require('./config');
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const CryptoJS = require("crypto-js");


const checkIsJsonString = (str) => {
    try {
        let obj = JSON.parse(str);
        return !!(typeof obj === 'object' && obj);
    } catch (error) {
        return false;
    }
}

const isString = (arg) => {
    return typeof arg === 'string';
}


// 非对称加密
const rsaEncrypt = (str) => {
    let word = isString(str) ? str : JSON.stringify(str);
    const srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, aesKey, {
        iv: aesIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

// 非对称解密
const rsaDecrypt = (str) => {
    const decrypt = CryptoJS.AES.decrypt(str, aesKey, {
        iv: aesIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    const result = CryptoJS.enc.Utf8.stringify(decrypt);
    return checkIsJsonString(result) ? JSON.parse(result) : result;
}


// 对称加密
const aesEncrypt = (str) => {
    let word = isString(str) ? str : JSON.stringify(str);
    const cipher = crypto.createCipheriv('aes-128-cbc', aesKey, aesIv);
    return cipher.update(word, 'utf8', 'hex') + cipher.final('hex');
}

// 对称解密
const aesDecrypt = (str) => {
    const decipher = crypto.createDecipheriv('aes-128-cbc', aesKey, aesIv);
    return decipher.update(str, 'hex', 'utf8') + decipher.final('utf8');
}


// 统一处理错误信息
const resultError = (error) => {
    if (isString(error)) {
        throw new ApplicationError(error)
    }
    if (error.name === "ValidationError") {
        throw new ValidationError("小可爱，仔细检查下参数", error.errors);
    }
    throw error;
}


// 生成token
const createJwtToken = (strapi) => {
    return function (payload, jwtOptions) {
        _.defaults(jwtOptions, strapi.config.get("plugin.users-permissions.jwt"));
        return jwt.sign(
            _.clone(payload.toJSON ? payload.toJSON() : payload),
            strapi.config.get("plugin.users-permissions.jwtSecret"),
            jwtOptions
        );
    }
}

module.exports = {
    rsaDecrypt,
    rsaEncrypt,
    resultError,
    createJwtToken,
    aesEncrypt,
    aesDecrypt
}
