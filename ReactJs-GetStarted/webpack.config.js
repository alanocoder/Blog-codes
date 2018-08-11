"use strict";
const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: { bundle: "./Scripts/entry.jsx" },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: '/dist/', // needed for UseWebpackDevMiddleware()
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.jsx$/, loader: 'babel-loader', query: { presets: ['react', ['env', { 'targets': { 'browsers': '> 5%' }}]]}}
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js'] // with this, you don't need extension when importing modules
    }
};