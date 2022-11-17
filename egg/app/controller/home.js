'use strict';

const baseController = require('./baseController');

class HomeController extends baseController {
    async index() {
        const {ctx} = this;
        ctx.body = 'hi, i am 羊先生';
    }

    async library() {
        let result = `<div class="async">这个是测试http网络异步的组件,${+new Date()}</div>`
        this.result({data: result})
    }

}

module.exports = HomeController;
