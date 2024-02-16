/**
 * 1-reject 是 Promise 的方法，而 catch 是 Promise 实例的方法
 * 2-reject 是用来抛出异常，而 catch 是用来处理异常
 * 3-reject 是 Promise 的方法，而 catch 是 Promise 实例的方法
 * 4-reject 后的东西，一定会进入 then 中的第二个回调，如果 then 中没有写第二个回调，则进入 catch
 * 5-网络异常（比如断网），会直接进入 catch 而不会进入 then 的第二个回调
 */

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve('success');
		reject('error');
		console.log('执行完毕');
	}, 1000);
});

promise
	.then((res) => {
		console.log('resolve: ' + res);
	})
	.catch((err) => {
		console.log(err);
	});

promise
	.then(
		(res) => {
			console.log('resolve: ' + res);
		},
		(rej) => {
			console.log('reject: ' + rej);
		}
	)
	.catch((err) => {
		console.log(err);
	});
