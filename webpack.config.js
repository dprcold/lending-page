const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
const webpack = require('webpack');
const { test } = require('media-typer');
module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          }),
          require('precss')
    ],
    module:{
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [
                   devMode ? "style-loader" : MiniCssExtractPlugin.loader ,
                 "css-loader"],
              },
              {
                test: /\.scss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
              },
              {
                test: /\.(woff|woff2|ttf|eot)$/,
                    type: 'asset/resource',
                    generator: {

                       filename: "fonts/[name].[ext]"
                     }
                    }
                  ]
              }
              
              
        
    }
