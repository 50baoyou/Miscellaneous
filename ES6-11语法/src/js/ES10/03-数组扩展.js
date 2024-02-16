// 数组扩展

/**
 * 数组的成员有时还是数组，Array.prototype.flat() 用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
 * Array.prototype.flatMap() 方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行 flat() 方法。该方法返回一个新数组，不改变原数组。
 */

const arr = [1, [347, 443, [3, 4, 7]], 2];
console.log(arr);

// Array.prototype.flat()
console.log(arr.flat()); // flat() 默认只会“拉平”一层
console.log(arr.flat(2)); // 将 flat() 方法的参数写成一个整数，表示想要拉平的层数，默认为 1
console.log(arr.flat(Infinity)); // 不常用

// Array.prototype.flatMap()
console.log(arr.flatMap((x) => x + 1)); // flatMap() 只能展开一层数组

// flatMap() 方法的参数是一个遍历函数，该函数可以接受三个参数，分别是 当前数组成员、当前数组成员的位置（从零开始）、原数组。

arr.flatMap(function callback(currentValue, index, array) {
	// ...
}, thisArg);

// flatMap() 方法还可以有第二个参数，用来绑定遍历函数里面的 this。
