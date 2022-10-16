'use strict';

/** @type Egg.EggPlugin */

exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}

// exports.io = {
//     enable: true,
//     package: 'egg-socket.io',
// };

exports.validate = {
    enable: true,
    package: 'egg-validate',
}


exports.redis = {
    enable: true,
    package: 'egg-redis',
};
