// 对象扩展

/**
 * Rest & Spread
 */

// 扩展运算符
// 对象的扩展运算符，只会返回参数对象自身的、可枚举的属性
const obj1 = {
	name: 'xk',
	age: 29,
	course: 'es',
};

const obj2 = {
	age: 30,
	tag: '347',
};

// 克隆对象
const obj3 = {
	...obj2,
};

obj2.tag = '443';
console.log(obj3); // 深拷贝

// 合并对象
const obj4 = {
	...obj1,
	...obj2,
};

console.log(obj4); // 属性相同，后 覆盖 前

// 解构赋值
const { name, ...rest } = obj1;
console.log(name, rest);
