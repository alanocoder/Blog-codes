"use strict";
const path = require('path');

var csr = { // client side rendering
    mode: 'development',
    target: 'web',
    entry: "./Scripts/entry.tsx",
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: '/dist', // needed for UseWebpackDevMiddleware()
        filename: "bundle.js"
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

var ssr = { // server side rendering
    mode: 'development',
    target: 'node',
    entry: './Scripts/entry-server.tsx',
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, './Scripts/Dist'),
        filename: 'bundle-server.js'
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

module.exports = [csr, ssr];
