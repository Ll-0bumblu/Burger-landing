const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './script.js',   // можно оставить пустой файл, если в нём нет кода
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "index.html", to: "" },
                { from: "style_header.css", to: "" },
                { from: "style_main.css", to: "" },
                { from: "images", to: "images" }
            ]
        })
    ]
};