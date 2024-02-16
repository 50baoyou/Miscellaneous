// 字符串扩展

/**
 * 字符串扩展方法 用另一个字符串填充当前字符串（如果需要的话，会重复多次），以便产生的字符串达到给定的长度。
 * String.prototype.padStart(targetLength, padString) 从当前字符串的左侧开始填充。
 * String.prototype.padEnd(targetLength, padString) 从当前字符串的末尾（右侧）开始填充。
 */

// 不会修改原字符串
const str1 = 'xk';
const str2 = 'kx';

// padStart
const result1 = str1.padStart(10, '443');
console.log(result1);

// padEnd
const result2 = str2.padEnd(10, '443');
console.log(result2);

// 常见用途是为数值补全指定位数
'1'.padStart(10, '0'); // "0000000001"
'12'.padStart(10, '0'); // "0000000012"
'123456'.padStart(10, '0'); // "0000123456"

// 另一个用途是提示字符串格式
'12'.padStart(10, 'YYYY-MM-DD'); // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD'); // "YYYY-09-12"

// 数据脱敏处理
const id = '123456443347';
const newId = id.slice(-6).padStart(id.length, '*');
console.log(newId);
