// 扩展运算符与rest参数

/**
 * 扩展运算符 把数组或类数组展开 用逗号隔开的值
 * rest参数 把逗号隔开的值 组合成一个数组
 */

// 扩展运算符
const arr1 = [3, 4, 7];
const arr2 = [4, 4, 3];
console.log(...arr1);

const str = 'baigei';
console.log(...str);

// rest参数
const newArr = [...arr1, ...arr2];
console.log(newArr);

function foo(...args) {
	console.log(args); // 获取函数的多余参数
	let sum = 0;
	args.forEach(function (item) {
		sum += item;
	});

	return sum;
}
console.log(foo(3, 4, 7));

const [x, ...y] = [4, 4, 3];
console.log(x, y);
