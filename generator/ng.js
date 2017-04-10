const path           = require('path');
const Q              = require('q');
const jsonfile       = require('jsonfile');
const logger         = require('../logger');
const PATH_TO_CONFIG = path.join(__dirname, '..', 'config.json');

module.exports = {
    app() {
        console.log('create a new app');
    },

    component() {
        console.log('generate a new component');
    },

    directive() {
        console.log('generate a new directive');
    },

    filter() {
        console.log('generate a new filter');
    },

    interceptor() {
        console.log('generate a new interceptor');
    },

    route() {
        console.log('generate a new route');
    },

    service() {
        console.log('generate a new service');
    }
}
