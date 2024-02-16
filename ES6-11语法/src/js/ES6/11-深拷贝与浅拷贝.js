// 深拷贝与浅拷贝

/**
 * 深拷贝
 *      是将一个对象从内存中完整的拷贝一份出来
 *      从堆内存中开辟一个新的区域存放新对象
 *      且修改新对象不会影响原对象
 *
 * 浅拷贝
 *      如果属性是基本类型，拷贝的就是基本类型的值
 *      如果属性是引用类型，拷贝的就是内存地址
 */

// 浅拷贝
let source = {
	name: 'baigei',
	age: '30',
	tag: {
		a: 3,
		b: 4,
		c: 7,
	},
};
let target = {
	tag: {
		a: 3,
		b: 4,
		c: 7,
		e: 443,
	},
};
Object.assign(target, source); // 引用类型属性，只会复制其引用引用值（浅拷贝）

console.log(target, target.tag === source.tag);

// 深拷贝
const obj1 = {
	name: 'xk',
	age: 30,
	tag: ['443', '347', 'baigei'],
};

// JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串
const str = JSON.stringify(obj1);
console.log(str);

// JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象
const obj2 = JSON.parse(str);
console.log(obj2, obj1 === obj2);

obj1.age = 35;
console.log(obj1, obj2);

// 自定义深拷贝方法
const checkType = (data) => {
	return Object.prototype.toString.call(data).slice(8, -1);
};

const deepClone = (target) => {
	const targetType = checkType(target);
	let result;

	if (targetType === 'Object') {
		result = {};
	} else if (targetType === 'Array') {
		result = [];
	} else {
		return target;
	}

	for (const key in target) {
		// 忽略从原型链上继承的属性
		if (Object.hasOwnProperty.call(target, key)) {
			const value = target[key];
			const type = checkType(value);

			if (type === 'Object' || type === 'Array') {
				result[key] = deepClone(value);
			} else {
				result[key] = value;
			}
		}
	}

	return result;
};

const obj3 = deepClone(obj1);
console.log(obj3, obj1 === obj3);
obj1.tag = 443;
console.log(obj1, obj3);
