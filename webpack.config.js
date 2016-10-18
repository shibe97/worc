var webpack = require('webpack');

module.exports = {
  context : __dirname,
  entry : {
    main  : './app/main.js',
    entry : './app/entry.js'
  },
  output : {
    path : './dist',
    filename : '[name].js',
  },
  node : {
    __filename : false,
    __dirname  : false
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel-loader',
        exclude : /node_modules/
      },
      {
        test : /\.json$/,
        loader : 'json?sourceMap'
      }
    ]
  },
  target : 'electron'
};
