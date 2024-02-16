// 新的声明方式 let

/**
 * 不属于顶层对象 window
 * 不允许重复声明
 * 不存在变量提升
 * 暂时性死区
 * 块级作用域
 */

// 不属于顶层对象 window
let demo = 11;
console.log(window.demo);

// 不允许重复声明
//let demo = 12;

// 不存在变量提升(在浏览器中显示 undefind)
console.log(top);
let top = '提升';

// 暂时性死区，在代码块内，使用let命令声明变量之前，该变量都是不可用的
if (true) {
	tmp = 'abc'; // ReferenceError
	let tmp;
}

// 块级作用域
{
	let block = 999;
}
console.log(block);
