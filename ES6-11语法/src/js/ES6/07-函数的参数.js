// 函数的参数

/**
 * 参数的默认值
 * 与解构赋值结合
 * length属性 指定了默认值后，length属性将失真。
 * 作用域 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。
 * 函数的name属性 返回该函数的函数名。
 */

// 参数的默认值
function foo1(x, y = '默认值') {
	console.log(x, y);
}
foo1(347);

// 与解构赋值结合
function ajax(url, { data = '测试', method = 'GET', headers = {} } = {}) {
	console.log(url, method);
}
ajax('www.hao123.com', 'POST');

// length属性
const result1 = function (a, b, c) {}.length;
console.log(result1);

const result2 = function (a, b = 1, c = 5) {}.length;
console.log(result2);

// 作用域
const x = 1;
function f(x, y = x) {
	// 调用函数f时，参数形成一个单独的作用域。
	console.log(y);
}
f(2);

const test = 347;
function foo2(y = test) {
	// 参数y = x形成一个单独的作用域。
	// 这个作用域里面，变量x本身没有定义，所以沿着作用域链向外层找到的全局变量x。
	let test = 998;
	console.log(y);
}
foo2();

// name
const result3 = function demo(a, b) {}.name;
console.log(result3);

console.log(new Function().name); // 匿名的

/**
 * Function.prototype.bind() bind() 方法
 * 创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
 * 而其余参数将作为新函数的参数，供调用时使用。
 */
const foo3 = function (a, b, c) {
	console.log(this.tag);
	console.log(a, b, c);
};
foo3.bind({ tag: 'baigei' }, 3, 4, 7)();
