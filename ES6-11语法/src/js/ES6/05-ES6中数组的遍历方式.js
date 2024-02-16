// ES6中数组的遍历方式

/**
 * find() 返回第一个通过测试的元素
 * findIndex() 返回的值为第一个通过测试的元素的索引
 * for of()
 * values()
 * keys()
 * entries()
 */

const arr = [1, 2, 33, 44, 2, 1, 5, 66, 99];

// find()
const result1 = arr.find(function (value, index, arr) {
	return value > 2;
});
console.log(result1);

// findIndex()
const result2 = arr.findIndex(function (value, index, arr) {
	return value > 2;
});
console.log(result2);

// for of
for (const item of arr) {
	console.log(item);
}

// values()
for (const item of arr.values()) {
	console.log(item); // 遍历索引
}

// keys();
for (const item of arr.keys()) {
	console.log(item); // 遍历下标
}

// entries()
for (const [index, item] of arr.entries()) {
	console.log(index, item); // 索引及下标
}
