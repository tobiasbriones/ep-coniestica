/*
 * This is the only config for this project and it's targeted at production.
 * It yields two configurations, say, legacy and module each for differential
 * loading for old browsers and ES Module supporting browsers respectively.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyrightHeader = `
  Example Project - Coniestica
  Copyright (C) 2019-2020 Tobias Briones <tobiasbriones.dev@gmail.com>. All rights reserved.
  Licensed under the GNU General Public License v3.0 License. 
  
  Source code published at https://github.com/TobiasBriones/example.programming.web.coniestica.
  This project includes images and icons, see the NOTICE file at the root of the
  source code for more details.
`;
const mode = 'production';
const entry = {
  main: './src/js/main.mjs',
  about: './src/js/about.mjs',
  clients: './src/js/clients.mjs',
  contact: './src/js/contact.mjs',
  legal: './src/js/legal.mjs',
  services: './src/js/services.mjs',
  suggestions: './src/js/suggestions.mjs',
};
const plugins = [
  new CleanWebpackPlugin({
    cleanStaleWebpackAssets: false,
  }),
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
    favicon: './src/favicon.png',
  }),
  new HtmlWebpackPlugin({
    template: './src/clients.html',
    filename: 'clients.html',
    chunks: ['clients'],
    favicon: './src/favicon.png',
  }),
  new HtmlWebpackPlugin({
    template: './src/contact.html',
    filename: 'contact.html',
    chunks: ['contact'],
    favicon: './src/favicon.png',
  }),
  new HtmlWebpackPlugin({
    template: './src/legal.html',
    filename: 'legal.html',
    chunks: ['legal'],
    favicon: './src/favicon.png',
  }),
  new HtmlWebpackPlugin({
    template: './src/services.html',
    filename: 'services.html',
    chunks: ['services'],
    favicon: './src/favicon.png',
  }),
  new HtmlWebpackPlugin({
    template: './src/suggestions.html',
    filename: 'suggestions.html',
    chunks: ['suggestions'],
    favicon: './src/favicon.png',
  }),
  new ScriptExtHtmlWebpackPlugin({
    module: /\.mjs$/,
    custom: [
      {
        test: /\.js$/,
        attribute: 'nomodule',
        value: '',
      },
    ],
  }),
  new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
  new FixStyleOnlyEntriesPlugin(),
  new OptimizeCSSAssetsPlugin({}),
];
const htmlRules = {
  test: /\.html$/i,
  exclude: /node_modules/,
  use: ['html-loader'],
};
const cssRules = {
  test: /\.css$/i,
  exclude: /node_modules/,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
};
const fileRules = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[contentHash].[ext]',
        outputPath: 'img',
      },
    },
  ],
};
const devServer = {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9000,
};

const legacyConfig = {
  mode: mode,
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: './',
  },
  devServer: devServer,
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: 3,
                targets: {
                  esmodules: false,
                },
              },
            ],
          ],
        },
      },
      htmlRules,
      cssRules,
      fileRules,
    ],
  },
};

const moduleConfig = {
  mode: mode,
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contentHash].mjs',
    publicPath: './',
  },
  devServer: devServer,
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: 3,
                targets: {
                  esmodules: true,
                },
              },
            ],
          ],
        },
      },
      htmlRules,
      cssRules,
      fileRules,
    ],
  },
};

module.exports = [legacyConfig, moduleConfig];
