// 对象扩展

/**
 * Object.values() 方法返回一个给定对象自身的所有可枚举属性值的数组
 * Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组
 */

const obj = {
	name: 'xk',
	age: 30,
	tag: [347, 443, 666],
};

// Object.values()
const result1 = Object.values(obj);
console.log(result1);

// Object.entries()
const result2 = Object.entries(obj);
console.log(result2);
