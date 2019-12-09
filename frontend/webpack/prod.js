const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const WebpackBar = require('webpackbar');

const DIR = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(DIR, 'dist');

const config = {
    mode: 'production',
    entry: path.join(DIR, 'src', 'index.tsx'),
    context: path.resolve(DIR),
    output: {
        filename: 'app.js',
        path: path.join(OUTPUT_DIR),
        publicPath: '/',
        pathinfo: false,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            src: path.resolve(DIR, 'src'),
        },

    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                },
            },
            {
                test: /\.css$/,
                include: path.join(DIR, 'src'),
                loaders: [
                    'style-loader',
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                        },
                    },
                ],
            },
            {
                test: /\.(svg|jpg|png)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                },
            },
        ],
    },
    plugins: [
        new WebpackBar(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(DIR, 'index.html'),
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(DIR, 'public'),
                to: path.resolve(DIR, 'dist/public'),
            },
        ]),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({
                WORKSPACE: process.env.WORKSPACE,
                FRONTEND_PORT: process.env.FRONTEND_PORT,
                FRONTEND_HOST: process.env.FRONTEND_HOST,
            }),
        })
    ]
};

module.exports = config;
