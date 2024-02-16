// 异步迭代

/**
 * for-await-of
 * Symbol.asyncIterator
 */

/**
 *  for await...of 循环则是专门用来迭代异步可迭代对象的语法。
 * 异步可迭代对象是指具有 Symbol.asyncIterator 属性的对象，该属性返回一个异步迭代器对象。
 * 异步迭代器对象是一个包含 next() 方法的对象，该方法返回一个 Promise 对象，
 * 异步迭代器对象将在 Promise 对象解析为 fulfilled 状态时返回当前元素的值，
 * 或在 Promise 对象解析为 rejected 状态时抛出异常。
 */

function getPromise(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				value: time,
				done: false,
			});
		}, time);
	});
}

const arr = [getPromise(1000), getPromise(2000), getPromise(3000)];

// 异步迭代器
arr[Symbol.asyncIterator] = function () {
	let nextIndex = 0;

	return {
		next() {
			return nextIndex < arr.length
				? arr[nextIndex++]
				: Promise.resolve({
						value: undefined,
						done: true,
				  });
		},
	};
};

// 同步遍历
for (const iterator of arr) {
	console.log(iterator);
}

// 异步遍历
async function foo(list) {
	for await (const iterator of list) {
		console.log(iterator); // 等待异步操作完成，才会继续迭代
	}
}

foo(arr);
