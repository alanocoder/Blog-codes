"use strict";
const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: { bundle: "./Scripts/entry.tsx" },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: '/dist/', // needed for UseWebpackDevMiddleware()
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.tsx{0,1}$/, loader: 'ts-loader', options: { configFile: 'tsconfig.json' } },
            { test: /\.jsx$/, loader: 'babel-loader', query: { presets: ['react', ['env', { 'targets': { 'browsers': '> 5%' } }]] } }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js'] // with this, you don't need extension when importing modules
    }
};