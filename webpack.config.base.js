var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack=require('webpack');

module.exports = {
	entry:{
		app:path.resolve(__dirname, 'src/js/app.js'),
		vendors:["angular","angular-animate","angular-route","angular-resource","jquery"],
	},
	//输出的文件名 合并以后的js会命名为bundle.js
	resolve:{
		alias:{
			angular:path.resolve(__dirname,"node_modules/angular/angular.min.js"),
			"angular-animate":path.resolve(__dirname,"node_modules/angular-animate/angular-animate.min.js"),
			"angular-route":path.resolve(__dirname,"node_modules/angular-route/angular-route.min.js"),
			"angular-resource":path.resolve(__dirname,"node_modules/angular-resource/angular-resource.min.js"),
			jquery:path.resolve(__dirname,"node_modules/jquery/dist/jquery.min.js")
		}
	},
	resolveLoader: {
		fallback: [path.resolve(__dirname, 'node_modules')]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new ExtractTextPlugin("styles.css"),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	module : {
		loaders : [
			{
				test: /\.css$/,
				loader:ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.(png|jpg|woff|svg|ttf|eot)$/,
				loader: 'url?limit=40000'
			},
			{
				test:/\.js?$/,
				loader: 'babel',
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