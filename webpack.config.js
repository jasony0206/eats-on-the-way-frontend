var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: {
    react: APP_DIR + '/index.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].bundle.js"
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      { 
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

module.exports = config;
