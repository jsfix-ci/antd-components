const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const DOCS_DIR = path.resolve(__dirname, 'docs');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [
        DOCS_DIR + '/index.jsx',
        SRC_DIR + '/index.less'
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/docs/dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css|less)$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'less-loader',
                    options: {javascriptEnabled: true}
                }],
            },
        ]
    },
    plugins: [
        new CopyPlugin([
            {from: 'node_modules/tinymce/skins', to: 'skins'}
        ])
    ],
    devServer: {
        host: '0.0.0.0',
        port: 9091,
        hot: true,
        contentBase: DOCS_DIR,
        publicPath: '/antd-components/dist/'
    }
};
