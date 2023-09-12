import axios from "axios"
import {aes_decrypt, aes_encrypt, rsaEncrypt} from "@/app/web/utils/crypto.ts"
import {nanoid} from "nanoid"

// 获取文章
const v1IndexArticle = () => {
    const vipbic = "vipbic"
    const version = "1"
    const sign = aes_encrypt(`version=1&vipbic=vipbic&time=${nanoid()}`)
    return axios.post("/api/v1/index/article?page=1", {}, {baseURL: "/bic", headers: {vipbic, version, sign}})
        .then((res: any) => {
            return Promise.resolve(JSON.parse(aes_decrypt(res.data.data)))
        })
}

const webWebsiteFind = ()=>{
    const vipbic = "vipbic"
    const version = "1"
    const sign = aes_encrypt(`version=1&vipbic=vipbic&time=${nanoid()}`)
    return axios.post("/api/v1/deploy/qrcode", {}, {baseURL: "/bic", headers: {vipbic, version, sign}})
        .then((res: any) => {
            return Promise.resolve(JSON.parse(aes_decrypt(res.data.data)))
        })
}

// 发送邮件
const userSendEmail = (params = {}) => {
    const sign: any = rsaEncrypt(JSON.stringify({name: "bag", nanoid: nanoid()}))
    return axios.post("/user/sendEmail", params, {baseURL: "/api", headers: {sign}})
}

// 保存留言
const webLeaveCreate = (params = {}) => {
    const sign: any = rsaEncrypt(JSON.stringify({name: "bag", nanoid: nanoid()}))
    return axios.post("/web/leave/create", params, {baseURL: "/api", headers: {sign}})
}

// 获取留言
const webLeaveAll = (params = {}) => {
    const sign: any = rsaEncrypt(JSON.stringify({name: "bag", nanoid: nanoid()}))
    return axios.post("/web/leave/all", params, {baseURL: "/api", headers: {sign}})
}

export {
    v1IndexArticle,
    userSendEmail,
    webLeaveCreate,
    webLeaveAll,
    webWebsiteFind
}
