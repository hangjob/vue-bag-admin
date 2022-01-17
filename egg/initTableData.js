const http = require('http');

/**
 * 添加假数据-用户表
 * @type {string}
 */
const data = JSON.stringify({
    username: 'admin', // 登录名
    password: 123456, // 密码
    phone: '12345678911',
    describe: '描述文件',
    email: '470193837@qq.com',
    roles: 'admin',
})

const options = {
    hostname: 'localhost',
    port: 8001,
    path: '/member/create',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Cookie': 'token=qo3n89f_0OGQ2N7_ub1wZqzPGAq_XhUfdvsOJlJ-yB-xlLuJh_1XDWkf41DG-1TI'
    }
}

let req = http.request(options) //请求并没发出

// 当服务器把请求体发回来的时候，或者说客户端接受到响应的时候
req.on('response', (res) => {
    const buffers = [];
    res.on('data', (chunk) => {
        buffers.push(chunk);
    })
    res.on('end', () => {
        const wholeData = Buffer.concat(buffers);
        const dataStr = wholeData.toString('utf8');
        console.log(dataStr);
    })
})

// 向请求体写数据
req.write(data)
req.end()
