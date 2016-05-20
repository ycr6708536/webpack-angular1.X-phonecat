var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack=require('webpack');
//定义了一些文件夹的路径
var APP_PATH = path.resolve(__dirname, 'src/js/app.js');
var BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry:{
    app:APP_PATH,
    vendors:["angular","angular-animate","angular-route","angular-resource","jquery"],
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.[chunkhash].js'
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    
    })
  ],
  resolve:{
    alias:{
      "angular":path.resolve(__dirname,"./node_modules/angular/angular.min.js"),
      "angular-animate":path.resolve(__dirname,"./node_modules/angular-animate/angular-animate.min.js"),
      "angular-route":path.resolve(__dirname,"./node_modules/angular-route/angular-route.min.js"),
      "angular-resource":path.resolve(__dirname,"./node_modules/angular-resource/angular-resource.min.js"),
      "jquery":path.resolve(__dirname,"./node_modules/jquery/dist/jquery.min.js")
    }
  },
  "module": {
    "loaders": [
      {test: /\.css$/,loader:'style!css'},
      {
        test: /\.(png|jpg|woff|svg|ttf|eot)$/,
        loader: 'url?limit=40000'
      },
      {
        test:/\.js?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/, // Only .html files
        loader: 'raw' // Run html loader
      }
    ]
  }
};