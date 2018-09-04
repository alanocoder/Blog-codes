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
            { test: /\.jsx{0,1}$/, loader: 'babel-loader', query: { presets: ['react', ['env', { 'targets': { 'browsers': '> 5%' } }]] } }
        ]
        /* setup suggested by react-hot-loader
        rules: [{
            test: /\.tsx{0,1}$/,
            use: [
                { loader: 'babel-loader', query: { babelrc: false, plugins: ['react-hot-loader/babel'], presets: ['react', ['env', { 'targets': { 'browsers': '> 5%' } }]] } },
                { loader: 'ts-loader', options: { configFile: 'tsconfig.json' } }
            ]
        }]
        */
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js'] // with this, you don't need extension when importing modules
    }
};