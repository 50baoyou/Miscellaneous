// 字符串扩展

/**
 * 放松了模板字符串转义序列的语法限制
 */

const foo = (a, b, c, d) => {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
};

const name = 'xk';
const age = 30;

// 带标签的模板字符串用法
foo`这是${name}，他的年龄是${age}岁`;

const foo2 = (arg) => {
	console.log(arg);
};

foo2`\u{61} and \u{62}`;
// foo2`\u{61} and \unicode`; // 在 ES9 之前，会报无效的转义序列错误，ES9 则会输出 undefind

// const str = `\u{61} and \unicode`; // 报错
