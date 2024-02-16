// Symbol

/**
 * 一种新的原始数据类型 表示独一无二的值
 * 声明方式 Symbol 值通过Symbol()函数生成
 * 应用场景
 */

// 声明方式
let s1 = Symbol('347');
let s2 = Symbol('347');
console.log(s1.description);
console.log(s1, s2); // 可以接受一个字符串作为参数，表示对 Symbol 实例的描述
console.log(s1 === s2); // 相同参数的Symbol函数的返回值是不相等的

// Symbol.for()方法接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值
// 如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。
let s3 = Symbol.for('443');
let s4 = Symbol.for('443');
let s5 = Symbol('443');
// Symbol.for()为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行
console.log(s3 === s4);
console.log(s4 === s5);

// Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key
// 未登记的 Symbol 值则返回 undefined
console.log(Symbol.keyFor(s3), Symbol.keyFor(s1));

// 应用场景--作为属性名的 Symbol,
// 只要 Symbol 值作为标识符，用于对象的属性名，就能保证不会出现同名的属性
const grade1 = {
	李三: { address: 'xxx', tel: '111' },
	李四: { address: 'yyy', tel: '222' },
	李四: { address: 'zzz', tel: '333' },
};
console.log(grade1);
const stu1 = Symbol('李三');
const stu2 = Symbol('李四');
const stu3 = Symbol('李四');
const grade2 = {
	[stu1]: { address: 'xxx', tel: '111' },
	[stu2]: { address: 'yyy', tel: '222' },
	[stu3]: { address: 'zzz', tel: '333' },
};
console.log(grade2);

// for in 无法遍历到 Symbol 值作为的属性名
const tag = Symbol('xk');
class User {
	constructor(name) {
		this.name = name;
		this[tag] = '30';
	}

	getName() {
		return this.name + this[tag];
	}
}
const user = new User('xxk');
console.log(user.getName());

for (const key in user) {
	console.log(key);
}

// Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
// 数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致
for (const iterator of Object.keys(user)) {
	console.log(iterator);
}

// Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有 Symbol 属性的数组
for (const iterator of Object.getOwnPropertySymbols(user)) {
	console.log(iterator); // 只能访问到 Symbols 属性
}

// Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组
for (const iterator of Reflect.ownKeys(user)) {
	console.log(iterator);
}

// 应用场景--消除魔术字符串
// 魔术字符串指的是，在代码中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。
// 风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。

// 魔术字符串
function getArea1(shape, options) {
	let area = 0;

	switch (shape) {
		case 'Triangle': // 魔术字符串
			area = 0.5 * options.width * options.height;
			break;
		/* ... more code ... */
	}

	return area;
}

getArea1('Triangle', { width: 100, height: 100 }); // 魔术字符串

// 使用 Symbol()
const shapeType = {
	triangle: Symbol('triangle'),
};
function getArea2(shape, options) {
	let area = 0;

	switch (shape) {
		case shapeType.triangle:
			area = 0.5 * options.width * options.height;
			break;
		/* ... more code ... */
	}

	return area;
}

getArea2(shapeType.triangle, { width: 100, height: 100 });
