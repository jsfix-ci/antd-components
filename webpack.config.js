/* global require, __dirname, module */
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.common');

const DOCS_DIR = path.resolve(__dirname, 'docs');

const config = {
    mode: 'development',
    devtool: 'eval-source-map',
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 9091,
        hot: true,
        contentBase: DOCS_DIR,
        publicPath: '/dist/'
    }
};

module.exports = merge(common, config);
