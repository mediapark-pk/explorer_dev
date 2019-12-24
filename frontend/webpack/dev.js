const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const WebpackBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const DIR = path.resolve(__dirname, '..');
const ROOT_DIR = path.resolve(__dirname, '../..');
const OUTPUT_DIR = path.join(DIR, 'dist');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.join(DIR, 'src', 'index.tsx'),
    context: path.resolve(DIR),
    watch: true,
    output: {
        filename: 'app.js',
        path: path.join(OUTPUT_DIR),
        publicPath: '/',
        pathinfo: false,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            // TODO: Consider using peerDependencies instead aliases for packages
            src: path.resolve(DIR, 'src'),
            react: path.resolve(DIR, './node_modules/react'),
            // Wathch out for other components may also be duplicated and produce unwanted effects
            // rxjs: path.resolve(DIR, './node_modules/rxjs'),
            // 'react-dom': path.resolve(DIR, './node_modules/react-dom'),
            // 'react-router': path.resolve(DIR, './node_modules/react-router'),
            // 'react-router-dom': path.resolve(DIR, './node_modules/react-router-dom'),
            mobx: path.resolve(DIR, './node_modules/mobx'),
            // 'mobx-react-lite': path.resolve(DIR, './node_modules/mobx-react-lite'),
            // 'mobx-react-router': path.resolve(DIR, './node_modules/mobx-react-router'),
            // classnames: path.resolve(DIR, './node_modules/classnames'),
            '@material-ui': path.resolve(DIR, './node_modules/@material-ui'),
            packages: path.resolve(ROOT_DIR, 'packages')
        },
    },
    devServer: {
        host: process.env.FRONTEND_HOST,
        hot: true,
        quiet: true,
        port: process.env.FRONTEND_PORT,
        historyApiFallback: true,
        contentBase: path.join(DIR, 'dist'),
        disableHostCheck: true,
        watchContentBase: true,
        watchOptions: {
            poll: true
        }
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
        new BundleAnalyzerPlugin({
            openAnalyzer: true,
            analyzerPort: 4444
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: path.resolve('tsconfig.json'),
        }),
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
