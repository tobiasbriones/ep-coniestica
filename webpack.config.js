const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const copyrightHeader = `
  Example Project - Coniestica
  Copyright (C) 2019-2020 Tobias Briones <tobiasbriones.dev@gmail.com>. All rights reserved.
  Licensed under the GNU General Public License v3.0 License. 
  
  Source code published at https://github.com/TobiasBriones/example.programming.web.coniestica.
  This project includes images and icons, see the NOTICE file at the root of the
  source code for more details.
`;

module.exports = {
  mode: 'production',
  entry: {
    main: './src/js/main.mjs',
    about: './src/js/about.mjs',
    clients: './src/js/clients.mjs',
    contact: './src/js/contact.mjs',
    legal: './src/js/legal.mjs',
    services: './src/js/services.mjs',
    suggestions: './src/js/suggestions.mjs',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: './',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new webpack.BannerPlugin(copyrightHeader),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
      favicon: './src/favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      template: './src/clients.html',
      filename: 'clients.html',
      chunks: ['clients'],
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
      chunks: ['contact'],
    }),
    new HtmlWebpackPlugin({
      template: './src/legal.html',
      filename: 'legal.html',
      chunks: ['legal'],
    }),
    new HtmlWebpackPlugin({
      template: './src/services.html',
      filename: 'services.html',
      chunks: ['services'],
    }),
    new HtmlWebpackPlugin({
      template: './src/suggestions.html',
      filename: 'suggestions.html',
      chunks: ['suggestions'],
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new FixStyleOnlyEntriesPlugin(),
    new OptimizeCSSAssetsPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
    ],
  },
};
