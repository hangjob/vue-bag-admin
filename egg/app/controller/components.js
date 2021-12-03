'use strict';

const baseController = require('./baseController');

class ComponentsController extends baseController {
    async index() {
        let result = `<div class="async">测试http网络异步组件<YsIonfontDviceMna/><YsIonfontCrtAdit/></div>`
        this.result({data: result})
    }
}

module.exports = ComponentsController;
