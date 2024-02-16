// Proxy

/**
 * 1.代理
 * Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，
 * 所以属于一种“元编程”（meta programming），即对编程语言进行编程。
 *
 * Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，
 * 都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
 * Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
 *
 * 2.钩子（挂钩）函数
 * 使用代理对目标对象进行“拦截”后，执行操作的处理方法。
 *
 * 主要用于通过“拦截”在软件组件之间传递的函数调用或消息或事件来改变或增强操作系统，
 * 应用程序或其他软件组件的行为。
 * 处理这种截获的函数调用，事件或消息的代码称为钩子，
 * 它的本质就是用以处理系统消息的程序，通过系统调用，把它挂入系统。
 * 钩子函数可用于许多目的，包括调试和扩展功能。
 * 常见的钩子函数：react的生命周期函数、vue的生命周期函数等
 *
 * 3.常用拦截方法
 */

// ES5 代理
// const obj1 = {};
// let newName = '';
// Object.defineProperty(obj1, 'name', {
// 	get() {
// 		return newName;
// 	},
// 	set(str) {
// 		newName = str;
// 		console.log(newName);
// 	},
// });
// obj1.name = 'xk';
// console.log(obj1.name);

// ES6 代理
const obj2 = {};
const p = new Proxy(obj2, {});
p.name = 'xxk';
console.log(p.name);
console.log(obj2);

// 常用拦截方法

// get(target, propKey, receiver)：拦截对象属性的读取
const arr = [3, 4, 7];
arr.proxy = new Proxy(arr, {
	get(target, propKey) {
		return propKey in target ? target[propKey] : 'error';
	},
});
console.log(arr.proxy[-11]);

const dict = {
	hello: '你好',
	world: '世界',
};
dict.proxy = new Proxy(dict, {
	get(target, propKey) {
		return propKey in target ? target[propKey] : propKey;
	},
});
console.log(dict.proxy['xxx']);

// set(target, propKey, value, receiver)：拦截对象属性的设置
const arr1 = [4, 4, 3];
arr1.proxy = new Proxy(arr1, {
	set(target, propKey, value) {
		if (!Number.isNaN(value)) {
			target[propKey] = value;
			return true;
		} else {
			return false;
		}
	},
});
arr1.proxy[3] = 347;
arr1.proxy[4] = 0 / 0;
console.log(arr1);

// has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值
const range = {
	start: 1,
	end: 9,
};
range.proxy = new Proxy(range, {
	has(target, propKey) {
		return propKey >= target.start && propKey <= target.end;
	},
});
console.log(2 in range.proxy, 347 in range.proxy);

// ownKeys(target)
// 拦截 Object.getOwnPropertyNames(proxy)、
// Object.getOwnPropertySymbols(proxy)、
// Object.keys(proxy)、for...in循环,返回一个数组。
// 该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
const obj3 = {
	name: 'xk',
	age: 30,
	tag: '347 or 443',
	_pwd: 'es6',
};
const info = new Proxy(obj3, {
	ownKeys(target) {
		return Object.keys(target).filter((key) => !key.startsWith('_'));
	},
});
for (const key in info) {
	if (Object.hasOwnProperty.call(info, key)) {
		const element = info[key];
		console.log(element);
	}
}

//  deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值
const temp = {
	username: 'xk',
	age: 30,
	tag: '443',
	_password: '***',
};
const userinfo = new Proxy(temp, {
	get(target, propKey) {
		return propKey.startsWith('_') ? '无法访问' : target[propKey];
	},
	set(target, propKey, value) {
		if (propKey.startsWith('_')) {
			console.log('禁止设置');
			return false;
		} else {
			target[propKey] = value;
			return true;
		}
	},
	deleteProperty(target, propKey) {
		if (propKey.startsWith('_')) {
			console.log('不可删除');
			return false;
		} else {
			delete target[propKey];
			return true;
		}
	},
	ownKeys(target) {
		return Object.keys(target).filter((key) => !key.startsWith('_'));
	},
});
userinfo.tag = 347;
userinfo._password = 111;
delete userinfo._password;
delete userinfo.tag;
console.log(userinfo.tag, userinfo._password);
console.log(userinfo);
for (const key in userinfo) {
	if (Object.hasOwnProperty.call(userinfo, key)) {
		const element = userinfo[key];
		console.log(element);
	}
}

//  apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作
// 比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
const temp1 = (...args) => {
	let num = 0;
	args.forEach((element) => (num += element));
	return num;
};
const sum = new Proxy(temp1, {
	apply(target, ctx, args) {
		return target(...args) * 2;
	},
});
console.log(sum(1, 2));
console.log(sum.call(null, 3, 4, 7));

// construct(target, args,newTarget)：拦截 Proxy 实例作为构造函数调用的操作
// 比如new proxy(...args)
const temp3 = class {
	constructor(name) {
		this.name = name;
	}
};
const User = new Proxy(temp3, {
	construct(target, args, newTarget) {
		console.log('construct');
		return new target(...args);
	},
});
console.log(new User('xkkkk'));
