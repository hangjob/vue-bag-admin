'use strict';
const {yup} = require("@strapi/utils");
const {object, string} = yup;
const jwt = require("jsonwebtoken");
const _ = require("lodash");
/**
 * user-profile controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-profile.user-profile', ({strapi}) => {
    return {
        async register(ctx) {
            const $utils = strapi.$utils;
            try {
                const validate = object().shape({
                    username: string().min(2).max(30).required('输入用户名'),
                    password: string().min(6).required("输入你的密码"),
                    phone: string().min(11).required("输入你的手机号"),
                    code: string().required('输入验证码')
                });
                const {username, password, phone, code} = await validate.validate(
                    ctx.request.body,
                    {stripUnknown: true, abortEarly: false,}
                );
                const findData = await strapi.query("api::user-profile.user-profile")
                    .findOne({where: {phone}});
                if (findData) {
                    $utils.resultError('手机号已注册')
                }
                const result = await strapi.documents('api::user-profile.user-profile').create({
                    data: {
                        username,
                        password: $utils.rsaEncrypt(password),
                        phone,
                        code
                    },
                    status: 'published',
                })
                return ctx.send({data: result});
            } catch (error) {
                $utils.resultError(error)
            }
        },
        async login(ctx) {
            const $utils = strapi.$utils;
            try {
                const validate = object().shape({
                    username: string().min(2).max(30).required('输入用户名'),
                    password: string().min(6).required("输入你的密码"),
                });
                const {username, password} = await validate.validate(
                    ctx.request.body,
                    {stripUnknown: true, abortEarly: false,}
                );
                const findData = await strapi.query("api::user-profile.user-profile")
                    .findOne({
                        where: {username},
                    });
                if (!findData) {
                    $utils.resultError('用户不存在，请先注册')
                }
                const pas = $utils.rsaDecrypt(findData.password);
                if (pas !== password) {
                    $utils.resultError('密码错误')
                }
                const token = $utils.createJwtToken(findData);
                return ctx.send({
                    data: {
                        token,
                        user: findData
                    }
                });
            } catch (error) {
                $utils.resultError(error)
            }
        }
    }
});
