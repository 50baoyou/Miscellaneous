// 通用环境配置

/**
 * Webpack 配置文件使用 module.exports 来将配置对象暴露出去，
 * 使其能被 Webpack 命令行工具使用。
 * 文件是 webpack 打包的最小单位，chunk 则是由多个文件组成的逻辑单元。
 * chunk 的划分可以优化模块加载的速度，提高页面的加载性能。
 * 在 webpack 中，可以通过配置 entry 和 output 来控制 chunk 的生成和文件的输出。
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { resolve } = require('./path.config');

module.exports = {
	// 指定主目录
	context: resolve('src'),
	// 单入口
	entry: '/index.js',
	resolve: {
		// 自动补全（可以省略）的扩展名
		extensions: ['.js'],
		// 倾向于将模块请求解析为相对请求
		preferRelative: true,
		// 路径别名
		alias: {
			js: resolve('src/js'),
		},
	},
	plugins: [
		// 生成 html 文件，自动引入所有bundle
		new HtmlWebpackPlugin({
			// 设置 html 文件中 <title> 标签的内容
			title: 'release_v1.0',
			filename: 'index.html',
			template: resolve('src/index.html'),
		}),
		// 进度条
		new ProgressBarPlugin({
			format: ' :msg [:bar] :percent (:elapsed s)',
		}),
	],
	// 不同类型模块的处理规则
	module: {
		rules: [
			{
				test: /\.js$/i,
				use: {
					loader: 'babel-loader',
				},
				exclude: /node_modules/,
			},
		],
	},
};
