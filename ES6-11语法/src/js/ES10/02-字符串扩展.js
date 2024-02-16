// 字符串扩展

/**
 * String.prototype.trimStart() 消除字符串头部的空格
 * String.prototype.trimEnd() 消除尾部的空格
 * 注意：它们返回的都是新字符串，不会修改原始字符串。
 */

const str = '  xkAnd443     ';
console.log(str);

// 正则表达式
const result1 = str.replace(/^\s+/g, ''); // 去掉开头空格
console.log(result1);
const result2 = str.replace(/\s+$/g, ''); // 去掉尾部空格
console.log(result2);

// trimStart()
console.log(str.trimStart());

// trimEnd()
console.log(str.trimEnd());

/**
 * 注意：浏览器还部署了额外的两个方法：
 * trimLeft() 是 trimStart() 的别名
 * trimRight() 是 trimEnd() 的别名。
 */

// trim() 去掉前后空格
console.log(str.trim());
