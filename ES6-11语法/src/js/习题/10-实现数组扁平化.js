// 根据所学知识，使用尽可能多的方式实现数组扁平化。

/**
 * 输入：[1, 2, [3, [4, 5]]]
 * 输出：[1, 2, 3, 4, 5]
 */

const arr = [1, 2, [3, [4, 5]]];

// 递归
/**
 * 这个方法使用了递归函数，如果数组元素是数组，则递归调用 flatten 函数，否则将元素添加到结果数组中。
 */
function flatten1(arr) {
	let result = [];
	for (let i = 0, length = arr.length; i < length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten1(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}
console.log(flatten1(arr));

// 使用 reduce 方法
/**
 * 这个方法使用了数组的 reduce 方法，每个元素都会被传入 reduce 回调函数中。
 * 如果元素是数组，则递归调用 flatten 函数并将结果合并到结果数组中。
 */

/**
 * 数组的 reduce 方法是 JavaScript 中的一个高阶函数，它用于将数组中的所有元素归约（reduce）为单个值，并返回该值。

reduce 方法接受一个回调函数作为参数，该回调函数在每次迭代过程中被调用。回调函数接受两个参数：

累加器（accumulator）：初始值为数组的第一个元素，然后在每次迭代过程中更新。

当前元素（currentValue）：当前被处理的数组元素。

回调函数可以返回任何类型的值，并且这个值会成为下一次迭代中的累加器的值。最终，reduce 方法返回最后一次迭代后的累加器的值。

reduce 方法有两种形式：带有初始值和不带初始值。如果不传入初始值，则累加器的初始值为数组的第一个元素，并从数组的第二个元素开始循环迭代；如果传入初始值，则累加器的初始值为传入的值，并从数组的第一个元素开始循环迭代。

例如，以下是一个使用 reduce 方法计算数组元素总和的示例代码：
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 输出 15
在上面的例子中，回调函数 (accumulator, currentValue) => accumulator + currentValue 将累加器和当前元素相加，并返回相加后的值，最终得到数组中所有元素的总和。} arr 

 */
function flatten2(arr) {
	return arr.reduce((result, item) => {
		if (Array.isArray(item)) {
			result = result.concat(flatten2(item));
		} else {
			result.push(item);
		}
		return result;
	}, []);
}
console.log(flatten2(arr));

// 使用 flat 方法
/**
 * ES2019 引入了数组的 flat 方法，可以用来将多维数组扁平化。
 * 通过传入参数 Infinity 可以将任意维度的数组扁平化为一维数组。
 */
const result = arr.flat(Infinity);
console.log(result);
