// Module

/**
 * 模块化规范
 * CommonJS: Node.js
 * AMD: require.js
 * CMD: sea.js
 * ES6: import export
 */

/**
 * ES6 模块是编译时加载
 * ES6 的模块自动采用严格模式
 * 在 Node.js 环境中使用 ES6 的模块化特性需要在 package.json 文件指明 type 类型为 module
 */

// 导入模块
import foo, { TEMP as temp } from './module.js'; // 可以使用as关键字重命名

console.log(temp);
foo();
