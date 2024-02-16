// 路径配置

/**
 * npm 配置"type": "module"" 表示你的 JavaScript 代码使用了 ECMAScript 模块 (ES modules) 的语法规范，而不是以前常用的 CommonJS 规范。
 * 在 ES modules 中，应该使用 import 和 export 来导入和导出模块，而不是使用 require 和 module.exports。
 *
 * 如果你在 ES module 中使用了 require 关键字，就会出现 ReferenceError: require is not defined in ES module scope, you can use import instead 错误提示。
 * 这是因为 require 是 CommonJS 规范的语法，不能在 ES module 中使用。
 *
 * 解决方法是将所有的 require 替换成对应的 import 语句，并且将文件扩展名改为 .mjs。
 * 或者，在 Node.js 版本 14 及以上，可以在文件头部添加 "type": "commonjs"，强制使用 CommonJS 规范加载模块。
 *
 * 需要注意的是，使用 ES modules 还有许多其他细节需要注意，例如文件路径解析、循环依赖、动态导入等。
 * 建议先学习相关文档和教程，并确保所使用的运行环境支持 ES modules。
 */

/**
 * 使用了 Node.js 的文件系统模块（fs）和路径模块（path）。
 */
const fs = require('fs');
const path = require('path');

/**
 * resolve 函数用于获取项目根目录下的相对路径所对应的绝对路径。
 * process.cwd() 是 Node.js 中的一个方法，返回当前工作目录。
 * fs.realpathSync() 用于获取指定路径的真实路径。它将返回解析后的绝对路径，其中包括所有符号链接的路径
 */
const directory = fs.realpathSync(process.cwd());
const resolve = (relativePath) => path.resolve(directory, relativePath);

module.exports = {
	resolve,
};
