const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const DIR = path.resolve(__dirname);
const OUTPUT_DIR = path.join(DIR, 'dist');

const config = {
    mode: 'development',
    target: 'node',
    externals: [nodeExternals()],
    node: {
        __dirname: false,
        __filename: false,
    },
    entry: './src/index.ts',
    output: {
    path: path.join(OUTPUT_DIR),
    filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [
        new NodemonPlugin({
            watch: path.resolve(OUTPUT_DIR),
            nodeArgs: [ '--trace-warnings' ],
            script: 'dist/app.js'
        })
    ],

};

module.exports = config;

