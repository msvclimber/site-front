const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
    context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        publicPath: '/',
        filename: `pricing${Date.now()}.js`,
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

            {
                test: /\.(png|jpe?g|gif|woff2|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ценообразование',
            // favicon: path.resolve(__dirname, 'src/assets/images/favicon.ico'),
            template: path.resolve(__dirname, 'template/index.html'),
            minify: false,
        }),
    ],
};

module.exports = (env) => {
    // if (env && env.WEBPACK_SERVE) {
    //     // eslint-disable-next-line global-require
    //     const devConfig = require('./webpack.dev');

    //     const mergedConfig = merge(commonConfig, devConfig);

    //     return mergedConfig;
    // }

    // eslint-disable-next-line global-require
    // const prodConfig = require('./webpack.prod');

    // const mergedConfig = merge(commonConfig, prodConfig);

    return commonConfig;
};