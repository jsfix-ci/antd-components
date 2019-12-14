/* global require, __dirname, module */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { version } = require('./package');

const DOCS_DIR = path.resolve(__dirname, 'docs');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [
        DOCS_DIR + '/index.jsx',
        SRC_DIR + '/antd-components.less'
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@root': SRC_DIR
        }
    },
    output: {
        path: __dirname + '/docs/dist',
        publicPath: '/dist/'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'less-loader',
                    options: { javascriptEnabled: true }
                }],
            },
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: 'node_modules/tinymce/skins', to: 'skins' }
        ]),
        new DefinePlugin({
            PACKAGE_VERSION: JSON.stringify(version)
        })
    ]
};
