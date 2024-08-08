'use strict';

/**
 * A set of functions called "actions" for `secretkey`
 */

module.exports = {
    getSecreKey: async (ctx, next) => {
        ctx.body  = await strapi.services['api::secretkey.secretkey']['getSecreKey'](ctx.query)
    }
};
