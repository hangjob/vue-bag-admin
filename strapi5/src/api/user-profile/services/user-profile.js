'use strict';

/**
 * user-profile service
 */

const {createCoreService} = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-profile.user-profile');
