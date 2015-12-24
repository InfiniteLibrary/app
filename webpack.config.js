var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    all: './source/javascripts/all.js'
  },

  resolve: {
    root: __dirname + '/source/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },

  module: {
    loaders: [
      { // use vue-loader for *.vue files
        test: /\.vue$/,
        loader: 'vue'
      },
      { // use babel-loader for *.js files
        test: /source\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel',
      }
    ],
  },

  node: {
    console: true,
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  plugins: [
    new Clean(['.tmp']),
  ],
};
