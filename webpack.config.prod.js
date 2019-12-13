/* global require, __dirname, module */
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const config = {
    mode: 'production'
};

module.exports = merge(common, config);
