'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'www/build'),
        port: 9000
    },
    devtool: 'source-map',

    entry: {
        app: [ path.resolve(rootDir, 'src', 'app/main.dev') ],
        vendor: [ path.resolve(rootDir, 'src', 'app/main.prod') ]
    },
     module: {
        loaders: [
            { loader: 'raw', test: /\.(css|html)$/ },
            { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ },
            {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
        path.join(__dirname, 'app'),
        path.join(__dirname, 'test')
    ],
    exclude: path.join(__dirname, 'node_modules')
},
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'www/build'),
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        })
    ],
    tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'app'
  },
     resolve: {
        extensions: [ '', '.js', '.ts' ]
    },
    node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};