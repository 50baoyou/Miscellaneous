// 数组的扩展

/**
 * 类数组 / 伪数组 可以通过索引访问元素，拥有length属性，没有数组的其它方法。
 * Array.from() 用于将类似数组的对象和可遍历对象（Set和Map）转为真正的数组。
 * Array.of() 用于将一组值，转换为数组。
 * copyWithin() 将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
 * fill() 使用给定值，填充一个数组。
 * includes() 返回一个布尔值，表示某个数组是否包含给定的值。
 */

// 类数组 / 伪数组
const nodes1 = document.getElementsByClassName('node');
console.log(nodes1, Array.isArray(nodes1)); // HTMLCollection

const nodes2 = document.querySelectorAll('.node');
console.log(nodes2, Array.isArray(nodes2)); // NodeList

function demo() {
	// const args = Array.from(arguments);
	console.log(arguments, Array.isArray(arguments)); // arguments对象
}
demo(1, 2, 'xixi', true);

// Array.from()
const result1 = Array.from(nodes1);
result1.push('ES6方法');
console.log(result1);

const result2 = [].slice.call(nodes2); // ES5 的写法
result2.push('ES5方法');
console.log(result2);

// Array.of()
const result3 = Array.of(3, 4, 7);
console.log(result3);

// copyWithin()
const result4 = [1, 2, 3, 4, 5].copyWithin(0, 3, 4); // 将3号位复制到0号位
console.log(result4);

// fill()
const result5 = [3, 4, 7, 443].fill('baigei');
console.log(result5);

// includes()
const result6 = [3, 4, 7, 443, NaN].includes(NaN);
console.log(result6);

const result7 = [3, 4, 7, NaN].indexOf(NaN); // ES5写法
console.log(result7);

console.log('注意：', NaN == NaN, NaN === NaN);
