'use strict';

const services = require("./server/services");
console.log(services)
module.exports = () => {
    return {
        services,
    };
};
