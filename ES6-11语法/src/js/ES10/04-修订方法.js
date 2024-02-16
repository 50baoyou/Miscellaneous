// 修订 Function.prototype.toString() 方法
// 修订

/**
 * 修订 Function.prototype.toString()
 * 返回代码中的实际文本片段
 */

function foo(params) {
	// ES10
	const tag = 'xk';
	console.log(params + tag);
}

console.log(foo.toString()); // 修订后，所有文本都会返回，包括空格、注释等
