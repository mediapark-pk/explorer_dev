const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const WebpackBar = require('webpackbar');

const DIR = path.resolve(__dirname, '..');

const config = {
    mode: 'production',
    entry: path.join(DIR, 'src', 'index.tsx'),
    context: path.resolve(DIR),
    output: {
        path: path.resolve(DIR, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
        pathinfo: false,
    },
    mode: 'development',
    context: path.resolve(DIR),
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            src: path.resolve(DIR, 'src'),

            // TODO
            'react': path.resolve(DIR, './node_modules/react'),
            'mobx': path.resolve(DIR, './node_modules/mobx'),
            'react-router': path.resolve(DIR, './node_modules/react-router'),
            '@material-ui/core': path.resolve(DIR, './node_modules/@material-ui/core'),
            'reflect-metadata': path.resolve(DIR, './node_modules/reflect-metadata'),
            'class-validator': path.resolve(DIR, './node_modules/class-validator'),
            'notistack': path.resolve(DIR, './node_modules/notistack'),
        },
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: 'source-map-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: [
                    DIR,
                    path.resolve(DIR, '../packages'),
                ],
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
            template: path.resolve(DIR, 'public/index.html'),
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(DIR, 'public'),
                to: path.resolve(DIR, 'dist/public'),
            },
        ]),
        new webpack.EnvironmentPlugin(Object.keys(process.env)),
    ]
};

module.exports = config;
