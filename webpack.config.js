const path = require('path');

const EXAMPLE_DIR = path.resolve(__dirname, 'example');

module.exports = {
    entry: [
        EXAMPLE_DIR + '/index.jsx'
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    devServer: {
        host: '0.0.0.0',
        hot: true,
        contentBase: EXAMPLE_DIR
    }
};
