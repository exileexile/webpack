const path = require('path');
const glob = require('glob-all');
const webpack = require('webpack');
const config = require("../config/config");

console.log('env···', process.env.type);

module.exports = {
	// 入口文件的配置项
	entry: config.Entries,
	// 出口文件的配置项
	output: {
		// 打包的路径文职
		path: path.resolve(__dirname, '../dist'),
		// 打包的文件名称
		filename: 'js/[name]-[hash].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		// 添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索
		modules: [path.resolve(__dirname, '../src'), 'node_modules'],
		alias: {
			'src': path.resolve(__dirname, '../src')
		}
	},
	// 模块：例如解读CSS,图片如何转换，压缩
	module: {
		rules: [{
	      test: /\.vue$/,
	      use: 'vue-loader'
	    }, {
	    	test: /\.js$/,
	    	use: 'babel-loader',
	    	exclude: /node_modules/
	    }, {
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}, {
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			}, {
				test: /\.(png|jpg|gif|woff|svg|eot|ttf)/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 500000, // 500000B
						outputPath: 'images/' // >500000B
					}
				}]
			}]
	},
	externals: {
		'$': 'window.jquery'
	},
	// 插件，用于生产模版和各项功能
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({ $: 'jquery' })
	].concat(config.HtmlPlugin),
	// 配置webpack开发服务功能
	devServer: {
		// 设置基本目录结构
		contentBase: path.resolve(__dirname, '../dist'),
		// 服务器的IP地址，可以使用IP也可以使用localhost
		host: 'localhost',
		// 服务端压缩是否开启
		compress: true,
		// 配置服务端口号
		port: 1313,
		hot: true
	},
	devtool: 'cheap-module-eval-source-map'
}