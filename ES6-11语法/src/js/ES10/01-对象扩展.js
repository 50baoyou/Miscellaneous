// 对象扩展

/**
 * Object.fromEntries() 方法是 Object.entries() 的逆操作，用于将一个键值对数组转为对象
 */

const obj = {
	name: 'xk',
	age: 30,
};

const entries = Object.entries(obj);
console.log(entries);

// ES10 Object.fromEntries()
const fromEntries = Object.fromEntries(entries);
console.log(fromEntries);

// 应用场景
// 将 map 转换为对象
const map = new Map();
map.set('name', 'xkk');
map.set('tag', '443');
console.log(map);
console.log(Object.fromEntries(map));

// 过滤对象
const course = {
	math: 80,
	english: 85,
	chinese: 90,
};
// 数组方法较多
const result = Object.entries(course).filter(([key, value]) => {
	return value > 80;
});

console.log(Object.fromEntries(result));
