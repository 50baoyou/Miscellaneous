// ES5中数组的遍历方式

/**
 * for循环
 * forEach() 无返回值，针对每个元素调用func
 * map() 返回新的Array，每个元素为调用func的结果
 * filter() 返回符合func条件的元素数组
 * some() 返回boolean，判断是否有元素符合func条件
 * every() 返回boolean，判断每个元素是否符合func条件
 * reduce() 接收一个函数作为累加器（从左往右处理）
 * for in 更适合遍历对象，会遍历所有的可枚举属性，包括原型
 */

let arr = [1, 22, 33, 44, 55, 66, 1, 22];

// for
for (let index = 0, length = arr.length; index < length; index++) {
	const element = arr[index];
	console.log(element);
}

// forEach()
arr.forEach(function (elem, index, array) {
	console.log(elem, index, array);
});

// map()
const newArr1 = arr.map(function (value) {
	value += 1;
	return value;
});
console.log(arr, newArr1);

// filter
const newArr2 = arr.filter(function (value) {
	return value > 1;
});
console.log(arr, newArr2);

// some()
const result1 = arr.some(function (elem, index, arr) {
	return elem > 22;
});
console.log(result1);

// every()
const result2 = arr.every(function (elem, index, arr) {
	return elem > 22;
});
console.log(result2);

// reduce()
const result3 = arr.reduce(function (prev, cur) {
	console.log(prev, cur);
	return prev + cur;
});
console.log(result3);

const result4 = arr.reduce(function (prev, cur) {
	return Math.max(prev, cur); // 求出数组中的最大值
});
console.log(result4);

const result5 = arr.reduce(function (prev, cur) {
	// 且运算符（&&）,使用“短路”机制可代替if，谨慎使用
	// prev.indexOf(cur) == -1 && prev.push(cur);
	if (prev.indexOf(cur) == -1) {
		prev.push(cur); // 对数组去重
	}
	return prev;
}, []);
console.log(result5);

// for in
Array.prototype.foo = function () {
	console.log('定义在原型上的方法');
};
for (const index in arr) {
	console.log(index, arr[index]);
	// if (Object.hasOwnProperty.call(arr, index)) {
	// 	console.log(index, arr[index]); // 判断是否为实例的属性
	// }
}
