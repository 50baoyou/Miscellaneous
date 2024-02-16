// Promise对象

/**
 * Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
 * 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
 * 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
 *
 * 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
 * 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
 *
 * 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
 * Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。
 * 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。
 */

// 状态管理
const promise = new Promise((resolve, reject) => {
	let temp = 1; // 异步操作
	if (temp === 1) {
		// 异步操作成功
		resolve(temp);
	} else {
		// 异步操作失败
		reject(temp);
	}
});

promise.then(
	(value) => {
		// console.log('执行成功：' + value);
	},
	(error) => {
		// console.log('执行失败：' + error);
	}
);

// 无法取消Promise，一旦新建它就会立即执行，无法中途取消
const p = new Promise((resolve, reject) => {
	console.log(1111);
	resolve(333);
});
console.log(2222);

// 等待主线程中的任务执行完毕后，才执行
p.then((res) => {
	console.log(res);
});
console.log(443);
