const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
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
