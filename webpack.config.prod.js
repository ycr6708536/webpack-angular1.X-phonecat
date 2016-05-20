var webpack=require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig,{
  devtool:'#source-map'
});