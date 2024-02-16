// 箭头函数

/**
 * 箭头函数使得表达更加简洁
 * 没有自己的this对象，this指向定义时所在的对象，而不是调用时所在的对象
 * 不可以当作构造函数
 * 不可以使用arguments对象
 */

// 箭头函数使得表达更加简洁
const sum = (x, y) => {
	return x + y;
};
console.log(sum(347, 443));

const isEven = (n) => n % 2 === 0;
const square = (n) => n * n;

// 没有自己的this对象，this指向定义时所在的对象，而不是调用时所在的对象
const obj = {
	tag: '箭头函数',
	/**
	 * 对象内部的不适合箭头函数
	 *  因为对象不构成单独的作用域，
	 *  导致对象内部的箭头函数定义时的作用域是全局作用域
	 * */
	func1: () => console.log(this),
	func2: function () {
		console.log(this);
	},
};
obj.func1();
obj.func2();

// 不可以当作构造函数
const People = (name, age) => {
	this.name = name;
	this.age = age;
};
// let p1 = new People('xl', 30);
// console.log(p1);

// 不可以使用arguments对象
const foo1 = () => {
	console.log(arguments);
};
foo1(3, 4, 7);

const foo2 = (...args) => {
	console.log(args);
};
foo2(3, 4, 7);
