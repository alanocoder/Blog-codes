"use strict";
const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: "./Scripts/entry.jsx",
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.jsx$/, loader: 'babel-loader', query: { presets: ['react', ['env', { 'targets': { 'browsers': '> 5%' }}]]}}
        ]
    }
};