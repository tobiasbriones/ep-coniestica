/*
 * It yields two configurations, say, legacy and module each for differential
 * loading for old browsers and ES Module supporting browsers respectively.
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const copyrightHeader = `
  Example Project - Coniestica
  Copyright (C) 2019-2020 Tobias Briones <tobiasbriones.dev@gmail.com>. All rights reserved.
  Licensed under the GNU General Public License v3.0 License. 
  
  Source code published at https://github.com/TobiasBriones/example.programming.web.coniestica.
  This project includes images and icons, see the NOTICE file at the root of the
  source code for more details.
`;
const mode = 'production';
const plugins = [
  new webpack.BannerPlugin(copyrightHeader),
  new ScriptExtHtmlWebpackPlugin(
    {
      module: /\.mjs$/,
      custom: [
        {
          test: /\.js$/,
          attribute: 'nomodule',
          value: ''
        }
      ]
    }
  ),
  new FixStyleOnlyEntriesPlugin(),
  new MiniCssExtractPlugin({ filename: './css/[name].[contentHash].css' }),
  new OptimizeCSSAssetsPlugin({})
];
const cssRules = {
  test: /\.css$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../'
      }
    },
    'css-loader'
  ]
};
const fileRules = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[contentHash].[ext]',
        outputPath: 'img'
      }
    }
  ]
};

const legacyConfig = {
  mode: mode,
  output: {
    filename: './js/[name].bundle.js'
  },
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
                  esmodules: false
                }
              }
            ]
          ]
        }
      },
      cssRules,
      fileRules
    ]
  }
};

const moduleConfig = {
  mode: mode,
  output: {
    filename: './js/[name].[contentHash].mjs'
  },
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
                  esmodules: true
                }
              }
            ]
          ]
        }
      },
      cssRules,
      fileRules
    ]
  }
};

module.exports = [
  merge(commonConfig, legacyConfig),
  merge(commonConfig, moduleConfig)
];
