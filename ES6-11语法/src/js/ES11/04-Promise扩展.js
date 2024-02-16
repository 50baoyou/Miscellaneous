// Promise扩展

/**
 * Promise.allSettled() 方法，用来确定一组异步操作是否都结束了（不管成功或失败）。
 * 所以，它的名字叫做 Settled ，包含了 fulfilled 和 rejected 两种情况。
 *
 * Promise.allSettled() 方法以 promise 组成的可迭代对象作为输入，并且返回一个 Promise 实例。
 *
 * allSettled() VS all()
 */

// Promise.allSettled()
Promise.allSettled([
	Promise.resolve({
		code: 200,
		data: [1, 2, 3],
	}),
	Promise.reject({
		code: 500,
		data: [],
	}),
	Promise.resolve({
		code: 200,
		data: [1, 2, 3],
	}),
])
	.then((res) => {
		// 过滤失败操作
		const data = res.filter((item) => item.status === 'fulfilled');
		console.log('success: ' + data);
	})
	.catch((err) => {
		console.log('erroe: ' + err);
	});

// allSettled() VS all() 的不同
/**
 * Promise.allSettled() 返回一个 Promise，该 Promise 在所有传入的 Promise 完成后才被解决，而不管它们成功或失败。
 * 返回的 Promise 解决的值是一个数组，其中包含每个传入的 Promise 的结果，无论其是否成功。
 *
 * Promise.all() 也返回一个 Promise，在所有传入的 Promise 都完成后才被解决。
 * 但是，如果任何一个 Promise 失败，则返回的 Promise 将立即被拒绝，并带有失败 Promise 的原因。
 * 只有在所有 Promise 都成功时，返回的 Promise 才会被解决，其解决值是一个数组，包含每个 Promise 的结果。
 */
