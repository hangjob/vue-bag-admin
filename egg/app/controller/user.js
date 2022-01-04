'use strict';

const baseController = require('./baseController');

class UserController extends baseController {
    userinfo() {

    }

    login() {
        const body = this.ctx.request.body;
        try {
            this.ctx.validate({
                username: {type: 'string', min: 3, max: 20, require: true},
                password: {type: 'string', min: 3, max: 20, require: true}
            });
            this.result({})
        } catch (error) {
            const {errors = []} = error;
            this.result({data: '', message: errors[0], code: 1001})
        }
    }

    logout() {

    }

    register() {

    }
}

module.exports = UserController;
