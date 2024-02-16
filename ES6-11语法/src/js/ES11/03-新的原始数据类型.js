// 新的原始数据类型

/**
 * 大整数
 * BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。
 * BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。
 */

// 普通整数最大值
const max = 2 ** 53;

console.log(max);
console.log(max === max + 1);
console.log(Number.MAX_SAFE_INTEGER);

// 大整数
const bigInt = 9007199254740993n; // BigInt 类型的数据必须添加后缀n
console.log(bigInt);
console.log(typeof bigInt);

console.log(1n === 1); // 数值相等，类型不同

const bigInt2 = BigInt(9007199254740993n);
console.log(bigInt2);

const sum = bigInt + bigInt2;
console.log(sum.toString());
