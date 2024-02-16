// 对象属性描述符

/**
 * Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符
 *  value: 属性默认值
    writable: 是否可写
    enumerable: 是否可通过 for...in 循环
    configurable: 是否可通过 delete 删除
 */

const obj = {
	name: 'xk',
	age: 30,
	tag: [347, 443, 666],
};

// Object.getOwnPropertyDescriptors()
const result = Object.getOwnPropertyDescriptors(obj); // Reflect 上也有

console.log(result);

// 配合 Object.defineProperties() 方法修改对象（Object.defineProperties 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象）
const nullObj = {};
Reflect.defineProperties(nullObj, result);

obj.tag = [123, 456, 789];
console.log(obj);
console.log(nullObj);

console.log(obj === nullObj);
