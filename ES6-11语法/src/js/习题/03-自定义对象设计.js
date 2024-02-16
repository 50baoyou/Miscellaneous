const obj = {
	[Symbol.for('xk')]: 'xk',
	['name']: '白给',
	[347]: 347,
	[{ tag: 'obj' }]: 'obj',
	[true]: 'true',
	[[4, 4, 3]]: 'array',
	[function foo(params) {
		console.log(params);
	}]: 'function',
};

for (const iterator of Reflect.ownKeys(obj)) {
	const value = Reflect.get(obj, iterator);
	console.log(iterator, value);
}
