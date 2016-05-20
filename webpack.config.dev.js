var webpack=require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig,{
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase:"./build"

  },
  devtool:'eval-source-map'
  
});