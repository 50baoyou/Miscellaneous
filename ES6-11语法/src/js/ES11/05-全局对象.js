// 全局对象

/**
 * globalThis 提供了一个标准的方式去获取不同环境下的全局对象
 */

/**
 * 不同环境下获取全局对象
 * node: global
 * web: window self
 */

// console.log(window);
// console.log(self);

// 封装获取全局对象的方法
const getGlobal = () => {
	if (typeof self !== 'undefined') {
		return self;
	}
	if (typeof window !== 'undefined') {
		return window;
	}
	if (typeof global !== 'undefined') {
		return global;
	}
	throw new Error('无法找到全局对象');
};

const global = getGlobal();
console.log(global);

console.log(globalThis);
