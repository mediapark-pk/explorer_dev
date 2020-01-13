const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const DIR = path.resolve(__dirname);

module.exports = function (options) {
    return {
        ...options,
        entry: ['webpack/hot/poll?100', './src/main.ts'],
        externals: [
            nodeExternals({
                whitelist: [
                    'webpack/hot/poll?100',
                    /^@app/
                ],
            }),
        ],
        node: {
            __dirname: false,
            __filename: false,
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            alias: {
                src: path.resolve(DIR, 'src'),

                // TODO
                '@nestjs/common': path.resolve(DIR, './node_modules/@nestjs/common'),
                '@nestjs/core': path.resolve(DIR, './node_modules/@nestjs/core'),
                'typeorm': path.resolve(DIR, './node_modules/typeorm'),
                '@nestjs/typeorm': path.resolve(DIR, './node_modules/@nestjs/typeorm'),

            },
        },
        plugins: [
            ...options.plugins,
            new webpack.HotModuleReplacementPlugin(),
        ],
    };
};
