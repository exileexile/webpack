const path = require('path');
const glob = require('glob-all');
const webpack = require('webpack');
const config = require("../config/config");
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractWebpackPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

console.log('env···', process.env.type);

module.exports = {
	// 入口文件的配置项
	entry: config.Entries,
	// 出口文件的配置项
	output: {
		// 打包的路径文职
		path: path.resolve(__dirname, '../dist'),
		// 打包的文件名称
		filename: 'js/[name]-[chunkHash].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		modules: [path.resolve(__dirname, '../src'), 'node_modules'],
		alias: {
			'src': path.resolve(__dirname, '../src')
		}
	},
	// 模块：例如解读CSS,图片如何转换，压缩
	module: {
		rules: [{
	      test: /\.vue$/,
	      use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractWebpackPlugin.extract({
			          fallback: 'style-loader',
			          use: 'css-loader'
			        })
            }
          }
        }]
	    }, {
	    	test: /\.js$/,
	    	use: 'babel-loader',
	    	exclude: /node_modules/
	    }, {
				test: /\.css$/,
				use: ExtractWebpackPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
			}, {
				test: /\.less$/,
				use: ExtractWebpackPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
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
		new CleanWebpackPlugin(['dist'], {
				root: path.join(__dirname, '../'),
				verbose: true,
				dry: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			comments: false, 
			compress: {
				warnings: false, 
				drop_debugger: true,
    		drop_console: true
    	}
    }),
		new ExtractWebpackPlugin('css/[name]-[chunkHash].css'),
		new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
		new webpack.BannerPlugin('88375439 版权所有'), // 注意位置
    new webpack.ProvidePlugin({
    	$: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
    	// name对应入口文件中的名字 公用css打包到common
    	names: ['jquery'],
    	// 把文件打包到哪里，是一个路径
    	filename: 'lib/[name].min.js',
    	// 最小打包的文件模块数 Infinity 这个配置保证没其它的模块会打包进
    	minChunks: Infinity 
    })
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
	}
}