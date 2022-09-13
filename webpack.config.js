const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    entry: '/script/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(jpeg|png|gif|jpg)$/i,
                loader: 'img-optimize-loader',
                options: {
                    compress: {
                        mode: 'high',
                        webp: true,
                        gifsicle: true,
                        disableOnDevelopment: false
                    }
                }
            },
            {
                test: /\.(mp[3|4])$/i,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') })
    ],
    devServer: {
        port: 5500,
        liveReload: false
    }
};