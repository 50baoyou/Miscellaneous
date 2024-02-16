// Promise静态方法

/**
 * Promise.resolve() 方法返回一个以给定值解析后的 Promise 对象
 * Promise.reject() 方法返回一个带有拒绝原因的 Promise 对象
 * Promise.all() 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例（只有所有 Promise 实例的状态都变成 fulfilled，状态才会变成 fulfilled）
 * Promise.race() 方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例（只要其中一个 Promise 实例的状态改变，状态就会变化）
 */

// Promise.resolve()
const p1 = Promise.resolve('success');
console.log(p1);
p1.then((res) => {
	console.log(res);
});

// Promise.reject()
const p2 = Promise.reject('error');
console.log(p2);
p2.catch((err) => {
	console.log(err);
});

// 例子
function foo(flag) {
	if (flag) {
		return new Promise((resolve) => {
			// 异步操作
			resolve('success!');
		});
	} else {
		return Promise.reject('error!');
	}
}

// foo(false).then(
// 	(res) => {
// 		console.log(res);
// 	},
// 	(err) => {
// 		console.log(err);
// 	}
// );

// Promise.all()
const p3 = new Promise((resolve, reject) => {
	// 异步操作
	setTimeout(() => {
		console.log('异步操作 111');
		resolve('success 1');
	}, 1000);
});

const p4 = new Promise((resolve, reject) => {
	// 异步操作
	setTimeout(() => {
		console.log('异步操作 222');
		resolve('success 2');
	}, 2000);
});

// 注意：参数要写全，如果只有一个参数，那么调用的都是 resolve() 方法
const p5 = new Promise((resolve, reject) => {
	// 异步操作
	setTimeout(() => {
		console.log('异步操作 333');
		reject('error 3');
	}, 3000);
});

// Promise.all([p3, p4, p5]).then(
// 	(res) => {
// 		console.log(res);
// 	},
// 	(err) => {
// 		console.log(err);
// 	}
// );

// 应用场景，多图片上传，只有当所有图片都上传成功才正常，否则提示创新上传

// Promise.race()
Promise.race([p3, p4, p5]).then(
	(res) => {
		console.log(res);
	},
	(err) => {
		console.log(err);
	}
);

// 应用场景，加载图片，如果从服务器获取图片超时，则加载默认图片
