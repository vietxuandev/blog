'use strict';

/**
 * chap service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chap.chap');
