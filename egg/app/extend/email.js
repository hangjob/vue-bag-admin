const nodemailer = require('nodemailer')
const emailTmp = require('./emailTmp')

// 封装发送者信息
const transporter = nodemailer.createTransport({
    host: 'smtp.163.com', // 调用qq服务器 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known
    secure: true, // 启动SSL
    port: 994, // SMTP端口
    auth: {
        user: 'vipbic@163.com', // 账号
        pass: 'QWERTYKVRJAKIXVAXJKD', // SMTP授权码 -- 申请自己的
    },
})

module.exports = {
    async sendEmail({userEmail, title}) {
        const mailOptions = {
            from: 'vipbic@163.com', // 发送者,与上面的user一致
            to: userEmail, // 接收者,可以同时发送多个,以逗号隔开
            subject: title, // 标题
            // text: '测试内容', // 文本
            html: emailTmp({userEmail, downloads: 6000}),
        }
        return await transporter.sendMail(mailOptions)
    },
}
