const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js', 
    },
    resolve : {
        extensions : ['.js'],
    },
    module : { 
        rules : [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]    
    },
    plugins : [
        new HtmlWebpackPlugin({
            inject: true,
            template: './index.html',
            filename: './index.html'
        }),
       
        new CopyPlugin({
            patterns : [{
                from : path.resolve(__dirname, 'dist', './Img/'),
                to: "assets/images"
            }]
        })
    ]
}