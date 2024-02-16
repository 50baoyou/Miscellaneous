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
    // 入口
    entry: {
        index: 'pages/index/index.js',
    },
    resolve: {
        // 自动补全（可以省略）的扩展名
        extensions: ['.js'],
        // 倾向于将模块请求解析为相对请求
        preferRelative: true,
        // 路径别名
        alias: {
            '@': resolve('src'),
            api: resolve('src/api'),
            fonts: resolve('src/assets/fonts'),
            images: resolve('src/assets/images'),
            styles: resolve('src/assets/styles'),
            components: resolve('src/components'),
            pages: resolve('src/pages'),
        },
    },
    plugins: [
        // 生成 html 文件，自动引入所有bundle
        new HtmlWebpackPlugin({
            // 设置 html 文件中 <title> 标签的内容
            title: 'release_v1.0',
            filename: 'index.html',
            template: resolve('src/pages/index/index.art'),
        }),
        // 进度条
        new ProgressBarPlugin({
            format: ' :msg [:bar] :percent (:elapsed s)',
        }),
    ],
    // 不同类型模块的处理规则
    module: {
        rules: [
            // 模板文件
            {
                test: /\.art$/i,
                loader: 'art-template-loader',
            },
            // html
            {
                test: /\.html$/i,
                use: 'html-withimg-loader',
            },
            // css
            {
                test: /\.css$/i,
                // 多个 loder 从右到左被应用（从最后到最先配置）
                use: ['style-loader', 'css-loader'],
                generator: {
                    // 指定资源访问公共路径
                    publicPath: 'css/',
                    // 指定资源生成路径
                    outputPath: 'css/',
                },
            },
            // 图片
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // 指定需要 loder 处理的目录
                include: resolve.src,
                parser: {
		    // 如果一个模块源码大小小于 maxSize，那么模块会被作为一个 Base64 编码的字符串注入到包中
		    // 否则模块文件会被生成到输出的目标目录中。
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 10kb
                    },
                },
                generator: {
		    // cdn 方式引入
                    publicPath: 'img/',
                    outputPath: 'img/',
                },
            },
            // 字体文件
            {
                test: /.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                include: resolve.src,
                generator: {
                    publicPath: 'font/',
                    outputPath: 'font/',
                },
            },
        ],
    },
};
