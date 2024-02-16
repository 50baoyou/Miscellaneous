// 数值的扩展

/**
 * 二进制 前缀0B  八进制 前缀0O
 * Number.isFinite() 用来检查一个数值是否为有限的（finite），即不是Infinity
 * Number.isNaN() 用来检查一个值是否为NaN
 * ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变
 * Number.parseInt() 方法依据指定基数，解析字符串并返回一个整数
 * Number.parseFloat() 方法依据指定基数，解析字符串并返回一个浮点数
 * Number.isInteger() 用来判断一个数值是否为整数
 * 0.1 + 0.2 === 0.3 js 精度缺失问题 IEEE 754 双精度标准
 * Math新增方法
 */

// 十进制 -> 二进制
const x = 5;
console.log(x.toString(2));

// 二进制 -> 十进制
const y = 101;
console.log(parseInt(y, 2));

// 二进制 前缀0B  八进制 前缀0O
const a = 0b0101;
console.log(a);

const b = 0o0777;
console.log(b);

// Number.isFinite()
console.log(Number.isFinite(5));
console.log(Number.isFinite(5 / 0));

// Number.isNaN()
console.log(Number.isNaN('xk'));
console.log(Number.isNaN(15));

// Number.parseInt()
console.log(Number.parseInt(5.5));

// Number.parseFloat()
console.log(Number.parseFloat(5.5));

// Number.isInteger()
console.log(Number.isInteger(5.5));

// 0.1 + 0.2 === 0.3
console.log(0.1 + 0.2, 0.1 + 0.2 === 0.3);
console.log(0.1000000000000001);
console.log(0.10000000000000001); // 超出存储范围

const max = Math.pow(2, 53);
console.log(max, max + 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(max)); // 判断是否为安全的整数

// Math新增方法
console.log(Math.trunc(5.5)); // 去除小数部分
console.log(Math.trunc(true), Number.parseInt(true));

console.log(Math.sign(5)); // 返回一个数字的符号，指示数字是正数，负数还是零
console.log(Math.sign(-5));
console.log(Math.sign(0));
console.log(Math.sign(true));

console.log(Math.cbrt(2)); // 返回任意数字的立方根
