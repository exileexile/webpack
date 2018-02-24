let glob = require('glob');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const CONFIG = {
	Entries: getEntry('./src/views/**/*.js').entries,
	HtmlPlugin: getEntry('./src/views/**/*.js').HtmlPlugin
}

function getEntry(globPath) {
	let files = glob.sync(globPath);
	let result = {}, entries = {}, name, HtmlPlugin = [];

	files.forEach(file => {
		name = path.basename(file, '.js');
		entries[name] = file;
		HtmlPlugin.push(new HtmlWebpackPlugin({
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			hash: true,
			filename: name == 'index' ? (name + '.html') : name + '/' + name + '.html', // 访问路径
			template: file.replace('.js', '.html'),
			inject: true,
			chunks: ['jquery', name]
		}));
	});

	entries['jquery'] = 'jquery';
	result = {entries, HtmlPlugin};
	return result;
}

// 模块化
module.exports = CONFIG;