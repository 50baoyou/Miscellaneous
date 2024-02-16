// Generator

/**
 * Generator 函数有多种理解角度。
 *
 * 语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
 * 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。
 * 返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
 *
 * 形式上，Generator 函数是一个普通函数，但是有两个特征。
 * 一是，function 关键字与函数名之间有一个星号
 * 二是，函数体内部使用 yield 表达式，定义不同的内部状态
 */

// 如何使用
function* helloWorldGenerator() {
	yield 'hello'; // yield 表达式（只能在 Generator 函数的内部使用，不能在其他函数内部中使用）
	yield 'world'; // yield 表达式
	return 'ending';
}
const hw = helloWorldGenerator();

/**
 * 每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个 yield 表达式（或return语句）为止。
 * 换言之，Generator 函数是分段执行的，yield 表达式是暂停执行的标记，而 next 方法可以恢复执行。
 */

/**
 * 调用 Generator 函数，会返回一个遍历器对象，代表 Generator 函数的内部指针。
 * 以后，每次调用遍历器对象的 next 方法，就会返回一个有着 value 和 done 两个属性的对象。
 * value 属性表示当前的内部状态的值，是 yield 表达式后面那个表达式的值；
 * done 属性是一个布尔值，表示是否遍历结束。
 */
console.log(hw.next()); // { value: 'hello', done: false }
console.log(hw.next()); // { value: 'world', done: false }
console.log(hw.next()); // { value: 'ending', done: true }
console.log(hw.next()); // { value: undefined, done: true }

// next 方法的参数

/**
 * yield表达式本身没有返回值，或者说总是返回undefined。
 * next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
 */
function* foo(x) {
	let y = 2 * (yield x + 1);
	let z = yield y / 3;
	return x + y + z;
}

const a = foo(5);
console.log(a.next()); // {value:6, done:false}
console.log(a.next()); // {value:NaN, done:false}
console.log(a.next()); // {value:NaN, done:true}

const b = foo(5);
console.log(b.next()); // { value:6, done:false } x=5
console.log(b.next(12)); // { value:8, done:false } x=5,y=2*12
console.log(b.next(13)); // { value:42, done:true } x=5,y=24,z=13

// 通过next方法的参数，向 Generator 函数内部输入值
function* dataConsumer() {
	console.log('Started');
	console.log(`1. ${yield}`);
	console.log(`2. ${yield}`);
	return 'result';
}

let genObj = dataConsumer();
genObj.next(); // Started
genObj.next('a'); // 1. a
genObj.next('b'); // 2. b

// 可以在 Generator 函数外面再包一层，实现第一次调用next方法时，就能够输入值
function wrapper(generatorFunction) {
	return function (...args) {
		let generatorObject = generatorFunction(...args);
		generatorObject.next(); // 先调用一次 next()
		return generatorObject;
	};
}

const wrapped = wrapper(function* () {
	// console.log('111'); 如果有语句则会先执行
	console.log(`First input: ${yield}`);
	return 'DONE';
});

wrapped().next('hello!'); // First input: hello!
