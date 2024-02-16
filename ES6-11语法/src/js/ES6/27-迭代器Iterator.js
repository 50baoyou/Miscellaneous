// Iterator

/**
 * 遍历器（Iterator）是一种接口机制，为各种不同的数据结构提供统一的访问机制。
 * 任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
 *
 * Iterator 的作用有三个：
 * 一是为各种数据结构，提供一个统一的、简便的访问接口；
 * 二是使得数据结构的成员能够按某种次序排列；
 * 三是 ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费。
 *
 * 一句话：不支持遍历的数据结构“可遍历”
 */

/**
 * 原生具有 Iterator 接口的数据结构
 * Array
 * Map
 * Set
 * String
 * TypedArray
 * 函数的 arguments 对象
 * NodeList
 */

// 模拟 Iterator 的 next 方法返回值的例子
function makeIterator(array) {
	let nextIndex = 0;

	return {
		next() {
			return nextIndex < array.length
				? { value: array[nextIndex++], done: false }
				: { value: undefined, done: true };
		},
	};
}

const it = makeIterator(['a', 'b']);

it.next(); // { value: "a", done: false }
it.next(); // { value: "b", done: false }
it.next(); // { value: undefined, done: true }

// 让不支持遍历的数据结构“可遍历”

/**
 * 可迭代协议：对象具有 Symbol.iterator 属性
 * 迭代器协议：必须符合（具有next方法） return { next(){ return{value,done } } }
 */
const obj = {
	data: {
		web: ['443', '347', '123'],
		app: ['a', 'b', 'c'],
		system: ['windows', 'ios', 'android'],
	},
};

// 为对象添加 Iterator 接口
obj[Symbol.iterator] = function () {
	let data = this.data;
	let keys = Reflect.ownKeys(data);
	let values = [];

	return {
		next() {
			if (values.length === 0) {
				if (keys.length > 0) {
					values = data[keys[0]];
					keys.shift();
				}
			}

			return {
				done: !values.length,
				value: values.shift(),
			};
		},
	};
};

console.log('对象添加 Iterator 接口');
// for (const iterator of obj) {
// 	console.log(iterator);
// }

// 使用 generator 语法为对象添加 Iterator 接口
obj[Symbol.iterator] = function* () {
	let data = this.data;
	let keys = Reflect.ownKeys(data);
	let values = [];

	while (true) {
		if (values.length === 0) {
			if (keys.length > 0) {
				values = data[keys[0]];
				keys.shift();
				// yield values.shift();
			} else {
				return false;
			}
		} else {
			yield values.shift();
		}
	}
};

console.log('使用 generator 语法为对象添加 Iterator 接口');
for (const iterator of obj) {
	console.log(iterator);
}
