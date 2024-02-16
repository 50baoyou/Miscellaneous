const promise = new Promise((resolve, reject) => {
	resolve('success');
	console.log('resolve before');
}).then((res) => {
	console.log(res);
});

console.log('同步任务');

/**
 * Promise 本身是同步任务 ("resolve before" 在"同步任务"之前先执行)
 * then() 则是异步任务 ("success" 在"同步之后再执行")
 */
