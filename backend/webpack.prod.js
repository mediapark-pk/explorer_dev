const path = require('path');
const nodeExternals = require('webpack-node-externals');

const DIR = path.resolve(__dirname);
const OUTPUT_DIR = path.join(DIR, 'dist');

const config = {
    mode: 'production',
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
        extensions: [ '.ts', '.js' ]
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
    plugins: []
};

module.exports = config;
