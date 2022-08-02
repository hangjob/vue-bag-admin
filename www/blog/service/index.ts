import axios from 'axios';
import {aes_decrypt, aes_encrypt} from '@www/blog/utils/crypto'
import {nanoid} from 'nanoid'
import {rsaEncrypt} from "@/common/utils/crypto";

// 获取文章
const v1IndexArticle = () => {
    const vipbic = 'vipbic'
    const version = '1'
    const sign = aes_encrypt(`version=1&vipbic=vipbic&time=${nanoid()}`)
    return axios.post('/api/v1/index/article?page=1', {}, {baseURL: '/bic', headers: {vipbic, version, sign}})
        .then((res: any) => {
            return Promise.resolve(JSON.parse(aes_decrypt(res.data.data)))
        })
}

// 发送邮件
const userSendEmail = (params = {}) => {
    const sign: any = rsaEncrypt(JSON.stringify({name: 'bag', nanoid: nanoid()}))
    return axios.post('/user/sendEmail', params, {baseURL: '/api', headers: {sign}})
}

// 保存留言
const webLeaveCreate = (params = {}) => {
    const sign: any = rsaEncrypt(JSON.stringify({name: 'bag', nanoid: nanoid()}))
    return axios.post('/web/leave/create', params, {baseURL: '/api', headers: {sign}})
}

// 获取留言
const webLeaveAll = (params = {}) => {
    const sign: any = rsaEncrypt(JSON.stringify({name: 'bag', nanoid: nanoid()}))
    return axios.post('/web/leave/all', params, {baseURL: '/api', headers: {sign}})
}

// 获取网站配置
const webWebsiteFind = () => {
    const sign: any = rsaEncrypt(JSON.stringify({name: 'bag', nanoid: nanoid()}))
    return axios.post('/web/website/find', {url: 'http://192.168.1.24:8290/'}, {baseURL: '/api', headers: {sign}})
}

export {
    v1IndexArticle,
    userSendEmail,
    webLeaveCreate,
    webLeaveAll,
    webWebsiteFind
}
