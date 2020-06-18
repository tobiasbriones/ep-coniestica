const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  new HtmlWebpackPlugin(
    {
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
      favicon: './src/favicon.png'
    }
  ),
  new HtmlWebpackPlugin(
    {
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about'],
      favicon: './src/favicon.png'
    }
  ),
  new HtmlWebpackPlugin(
    {
      template: './src/clients.html',
      filename: 'clients.html',
      chunks: ['clients'],
      favicon: './src/favicon.png'
    }
  ),
  new HtmlWebpackPlugin(
    {
      template: './src/contact.html',
      filename: 'contact.html',
      chunks: ['contact'],
      favicon: './src/favicon.png'
    }
  ),
  new HtmlWebpackPlugin(
    {
      template: './src/legal.html',
      filename: 'legal.html',
      chunks: ['legal'],
      favicon: './src/favicon.png'
    }
  ),
  new HtmlWebpackPlugin(
    {
      template: './src/services.html',
      filename: 'services.html',
      chunks: ['services'],
      favicon: './src/favicon.png'
    }
  ),
  new HtmlWebpackPlugin(
    {
      template: './src/suggestions.html',
      filename: 'suggestions.html',
      chunks: ['suggestions'],
      favicon: './src/favicon.png'
    }
  )
];

module.exports = {
  entry: {
    main: './src/js/main.mjs',
    about: './src/js/about.mjs',
    clients: './src/js/clients.mjs',
    contact: './src/js/contact.mjs',
    legal: './src/js/legal.mjs',
    services: './src/js/services.mjs',
    suggestions: './src/js/suggestions.mjs'
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: './'
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: ['html-loader']
      }
    ]
  }
};
