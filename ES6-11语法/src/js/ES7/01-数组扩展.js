// 数组扩展

/**
 * Array.prototype.includes 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
 * includes VS indexOf
 */

// includes(searchElement, fromIndex)
const arr = ['es5', 'es6', 'es7', [3, 4, 7]];

console.log(arr.includes('es7'));

console.log(arr.includes('es7', 3)); // 第二个参数表示搜索的起始位置，默认为 0
console.log(arr.includes('es7', -1)); // 如果第二个参数为负数，则表示倒数的位置

console.log(arr.includes([3, 4, 7])); // 只能查找基本数据类型

console.log(arr.indexOf('es7')); // indexOf，返回参数值的第一个出现位置

// includes VS indexOf
const nan = [NaN, 3, 4, 7];

/**
 * indexOf方法有两个缺点
 * 一是不够语义化，它的含义是找到参数值的第一个出现位置
 * 二是，它内部使用严格相等运算符（===）进行判断，会导致对NaN的误判
 */
console.log(nan.indexOf('NaN')); // 不存在，则返回 -1
console.log(nan.includes('NaN'));
