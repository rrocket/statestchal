const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ],
  },
  devServer: {
    'static': {
      directory: './dist'
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: 'index.html',
    }),
  ]
};

module.exports = config;