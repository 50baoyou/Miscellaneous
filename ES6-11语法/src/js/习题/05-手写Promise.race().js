function all(list) {
	if (typeof list.forEach === 'undefined') {
		return new Error('params is not iterable');
	}

	if (list.length === 0) {
		return new Promise.resolve(list);
	}

	let count = 0;
	let length = list.length;
	let result = [];

	return new Promise((resolve, reject) => {
		for (const item of list) {
			Promise.resolve(item)
				.then((res) => {
					result.push(res);
					count += 1;
					if (count === length) {
						resolve(result);
					}
				})
				.catch((err) => {
					reject(err);
				});
		}
	});
}

function race(list) {
	if (typeof list.forEach === 'undefined') {
		return new Error('params is not iterable');
	}

	return new Promise((resolve, reject) => {
		for (const item of list) {
			Promise.resolve(item)
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				});
		}
	});
}

const p1 = new Promise((res, rej) => {
	setTimeout(() => {
		res('p1调用成功');
		console.log('p1执行完毕！');
	}, 500);
});

const p2 = new Promise((res, rej) => {
	setTimeout(() => {
		res('p2调用成功');
		console.log('p2执行完毕！');
	}, 1000);
});

const p3 = new Promise((res, rej) => {
	setTimeout(() => {
		// rej('p3失败了...');
		res('p3调用成功');
		console.log('p3执行完毕！');
	}, 1000);
});

all([p1, p2, p3])
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

race([p1, p2, p3])
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
