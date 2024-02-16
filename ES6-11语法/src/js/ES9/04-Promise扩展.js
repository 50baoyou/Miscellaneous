// Promise扩展

/**
 * Promise.prototype.finally() 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作
 */

new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 1000);
})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	})
	.finally(() => {
		console.log('结束'); // 可以用于关闭连接
	});
