'use strict';
const crypto = require('crypto')
const utils = require("@strapi/utils");
const {ApplicationError, ValidationError} = utils.errors;
const {publicKey, privateKey} = require('./config');
const jwt = require("jsonwebtoken");
const _ = require("lodash");

// 加密
const rsaEncrypt = (str) => {
    return crypto.publicEncrypt(publicKey, str).toString('hex');
}

// 解密
const rsaDecrypt = (str) => {
    return crypto.privateDecrypt(privateKey, Buffer.from(str, 'hex')).toString();
}

const isString = (arg) => {
    return typeof arg === 'string';
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
    createJwtToken
}
