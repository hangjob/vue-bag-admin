'use strict';
const utils = require('./helpers/utils') // 扩展工具
module.exports = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register({strapi}) {
        utils.createJwtToken = utils.createJwtToken(strapi)
        strapi.$utils = utils
    },

    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    bootstrap(/*{ strapi }*/) {
    },
};
