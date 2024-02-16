/// Symbol扩展

/**
 * Symbol.prototype.description 是一个只读属性，它会返回 Symbol 对象的可选描述的字符串
 */

const s = Symbol('xk');

console.log(s);
console.log(s.description); // ES10，获取当前 Symbol 的描述
s.description = 'es'; // 只读属性， 无法对 description 属性赋值
console.log(s.description);

const s2 = Symbol();
console.log(s2.description);
