'use strict';

/**
 * menu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::menu.menu');
