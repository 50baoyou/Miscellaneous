// JSON扩展

/**
 * JSON superset 超集
 * JSON.stringify() 增强能力
 */

// JSON superset 让 ES 支持 行分隔符，段分隔符
eval('2 + 2');
eval('const str="xk";\u2029 function foo(){return str;};'); // eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。(不要使用 eval 方法)

// console.log(foo());

// JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串
// 默认支持字符 0xD800~OxDfff，ES10 扩大字符解析范围
console.log(JSON.stringify('\uD83D\uDE0E'));
console.log(JSON.stringify('\uD83D')); // 修复
