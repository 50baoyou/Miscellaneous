// 对象的扩展

/**
 * 属性简洁表示法
 * 属性名表达式
 * Object.is()方法判断两个值是否为同一个值
 * 扩展运算符 与 Object.assign()
 * in 判断指定的属性在指定的对象或其原型链中
 * 对象的遍历方式
 */

// 属性简洁表示法和属性名表达式
const foo = 'bar';
const baz = { foo };
baz; // 等同于 const baz = {foo: foo};

const tag = 'abc';
let birth = '2000/01/01';
const Person = {
	name: '张三',
	[tag]: '属性名表达式', // 等同于 abc:'属性名表达式'
	birth, // 等同于 birth: birth

	// 等同于hello: function ()...
	hello() {
		console.log('我的名字是', this.name);
	},
};

function getPoint() {
	const x = 1;
	const y = 10;
	return { x, y }; // 用于函数的返回值
}
getPoint(); // {x:1, y:10}

// Object.is()
console.log(Object.is(2, '2'));
console.log(Object.is(NaN, NaN));

const obj1 = {
	name: 'xk', // new Object()
	age: 30,
};
const obj2 = {
	name: 'xk', // new Object()
	age: 30,
};
console.log(Object.is(obj1, obj2));

// 扩展运算符
const x = {
	tag: '白给',
};
const newObj = { ...obj1, ...x };
console.log(newObj);

// Object.assign() 方法将所有可枚举（Object.propertyIsEnumerable() 返回 true）的自有（Object.hasOwnProperty() 返回 true）属性从一个或多个源对象复制到目标对象，返回修改后的对象。
const targetObj = {
	a: 3,
	b: 4,
	c: 7,
};
const soutceObj = {
	tag: '源对象属性',
};
const result = Object.assign(targetObj, soutceObj);
console.log(targetObj, Object.is(targetObj, result));

// in
console.log('tag' in soutceObj);

const arr = [3, 4, , 7];
console.log(1 in arr, 2 in arr); // 判断指定下标是否存在值

// 对象的遍历方式
for (const key in targetObj) {
	//
	if (Object.hasOwnProperty.call(targetObj, key)) {
		const value = targetObj[key];
		console.log(key, value);
	}
}

// Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致。
Object.keys(targetObj).forEach((key) => {
	const value = targetObj[key];
	console.log(key, value);
});

// Object.getOwnPropertyNames() 方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组。
Object.getOwnPropertyNames(targetObj).forEach((key) => {
	const value = targetObj[key];
	console.log(key, value);
});

// 静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组。
Reflect.ownKeys(targetObj).forEach((key) => {
	const value = targetObj[key];
	console.log(key, value);
});
