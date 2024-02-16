// Async Await

/**
 * 一句话，async 函数是 Generator 函数的语法糖。
 * async 函数就是将  Generator 函数的星号（*）替换成 async，将 yield 替换成 await。
 *
 * async函数对 Generator 函数的改进，体现在以下四点：
 *
 * 一 内置执行器
 * 自带执行器。async 函数的执行，与普通函数一模一样，只要一行。
 *
 * 二 更好的语义
 * async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。
 *
 * 三 更广的适用性
 * async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）
 *
 * 四 返回值是 Promise
 * async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖
 *
 */

// async函数返回一个 Promise 对象，可以使用then方法添加回调函数
async function foo() {
	/**
	 * 正常情况下，await 命令后面是一个 Promise 对象（异步操作），返回该对象的结果。
	 * 如果不是 Promise 对象，就直接返回对应的值。
	 */
	let result = await 'success'; // 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
	console.log(result);
	return result; // 相当于 Promise.resolve(result)
}

//foo();
console.log(foo());

// 用法
function timeout(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			// console.log('第一步');
			resolve(1);
		}, ms);
	});
}

async function asyncPrint(value, ms) {
	const res = await timeout(ms);
	console.log(res);
	console.log(value);
}

asyncPrint('第二步', 1000);

// 错误处理
function toDo(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('出现异常');
		}, ms);
	});
}

async function f1() {
	const result = await toDo(1000);
	return result;
}

// 链式调用，使用 catch 处理
f1()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

// 放入 try... catch 代码块中
async function f2() {
	let result = 0;
	try {
		result = await toDo(1000);
	} catch (error) {
		console.log('错误：' + error);
	}
	return result;
}

f2();
