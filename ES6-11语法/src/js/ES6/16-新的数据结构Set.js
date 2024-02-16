// Set

/**
 * 一种新的数据结构 类似于数组，但是成员的值都是唯一的，没有重复的值
 * 常用方法
 * 遍历
 * 应用场景
 * WeakSet 成员是对象，且不可遍历
 */

// 常用方法
const s = new Set([3, 4, 7]);
s.add(3);
s.add('3');
s.delete(7);
// s.clear() 清空
console.log(s);
console.log(s.has('3')); // 判断值是否为 Set 成员
console.log(s.size); // 返回Set实例的成员总数

// 遍历
for (const iterator of s.entries()) {
	console.log(iterator);
}

// 应用场景--数组去重
const arr = [1, 1, 2, 2, 3, 3, 4, 4, 7, 7];
const newArr1 = [...new Set(arr)];
console.log(newArr1);

const arr1 = [3, 4, 7];
const arr2 = [4, 4, 3, 443];
const newArr2 = [...new Set([...arr1, ...arr2])];
console.log(newArr2);

// 应用场景--取出数组中的交集
const s1 = new Set(arr1);
const s2 = new Set(arr2);
// filter() 方法创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素
const result1 = new Set(arr1.filter((item) => s2.has(item)));
console.log(result1);

// 应用场景--取出数组中的差集
const s3 = new Set(arr1.filter((item) => !s2.has(item)));
const s4 = new Set(arr2.filter((item) => !s1.has(item)));
const result2 = [...s3, ...s4];
console.log(result2);

// WeakSet
const ws = new WeakSet();
const obj1 = {
	tag: 443,
};
const obj2 = {
	name: 'xk',
};
ws.add(obj1);
ws.add(obj2);
console.log(ws.has(obj1), ws);

// ws.array.forEach((element) => {
// 	console.log(element); 无法遍历
// });

/**
 * WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，
 * 遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。
 * WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
 */
const foos = new WeakSet();
class Foo {
	constructor() {
		// 使用 WeakSet 的好处是，foos对实例的引用，
		// 不会被计入内存回收机制，所以删除实例的时候，不用考虑foos，也不会出现内存泄漏。
		foos.add(this);
	}
	// 保证了Foo的实例方法，只能在Foo的实例上调用。
	method() {
		if (!foos.has(this)) {
			throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
		}
	}
}
