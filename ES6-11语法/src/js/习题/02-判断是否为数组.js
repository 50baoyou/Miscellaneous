const arr = [3, 4, 7];

/**
 * 1.通过instanceof运算符判断
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 */
const result1 = arr instanceof Array;
console.log(result1);

/**
 * 2.通过constructor判断
 * constructor 属性返回 Object 的构造函数（用于创建实例对象）。
 */
const result2 = arr.constructor === Array;
console.log(result2);

/**
 * 3.通过数组自带的isArray()方法判断
 * Array.isArray() 用于确定传递的值是否是一个 Array
 */
const result3 = Array.isArray(arr);
console.log(result3);

/**
 * 4.通过isPrototypeOf()方法判断
 * isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。
 */
const result4 = Array.prototype.isPrototypeOf(arr);
console.log(result4);

/**
 * 5.通过Object.getPrototypeOf方法判断
 * Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。
 */
const result5 = Object.getPrototypeOf(arr) === Array.prototype;
console.log(result5);

/**
 * 6.通过Object.prototype.toString.call()判断
 * Object.prototype.toString() 方法默认被所有对象继承，返回 "[object type]" 字符串。
 * 但此方法经常被原型链上的同名方法覆盖，需要通过 Object.prototype.toString.call() 强行调用。
 */
const result6 = Object.prototype.toString.call(arr) === '[object Array]';
console.log(result6);
