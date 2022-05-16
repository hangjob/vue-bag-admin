import axios from 'axios';
import { aes_decrypt, aes_encrypt } from '@www/blog/utils/crypto'
import { nanoid } from 'nanoid'

// 获取文章
const v1IndexArticle = () => {
    const vipbic = 'vipbic'
    const version = '1'
    const sign = aes_encrypt(`version=1&vipbic=vipbic&time=${nanoid()}`)
    return axios.post('v1/index/article?page=1', {}, { baseURL: '/vip', headers: { vipbic, version, sign } })
        .then((res: any) => {
            return Promise.resolve(JSON.parse(aes_decrypt(res.data.data)))
        })
}

// 发送邮件
const userSendEmail = (params)=>{
    return axios.post('/user/sendEmail',params,{baseURL:'/api'}).then((res)=>{
        console.log(res)
    })
}

export {
    v1IndexArticle,
    userSendEmail
}
