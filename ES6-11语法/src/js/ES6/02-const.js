// 新的声明方式 const

/**
 * 不属于顶层对象 window
 * 不允许重复声明
 * 不存在变量提升
 * 暂时性死区
 * 块级作用域
 * 声明一个只读的常量
 */

// 常量不可修改
const test = 1;
//test = 2;

// 复合类型存储的是引用地址
const obj = {
	age: 12,
};
obj.tag = 'obj';
console.log(obj);

obj = {
	test: 'new obj',
};
