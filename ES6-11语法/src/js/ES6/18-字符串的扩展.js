// 字符串的扩展

/**
 * 字符的 Unicode 表示法 eg：𠮷 码点0x20BB7
 * 字符串的遍历器接口
 * 模板字符串 用反引号（`）标识，可嵌入变量（${}）
 * String.fromCodePoint() 方法，用于从 Unicode 码点返回对应字符，可以识别大于0xFFFF的字符
 * String.prototype.includes() 返回布尔值，表示是否找到了参数字符串
 * String.prototype.startsWith() 返回布尔值，表示参数字符串是否在原字符串的头部
 * String.prototype.endsWith() 返回布尔值，表示参数字符串是否在原字符串的尾部
 * String.prototype.repeat() 方法返回一个新字符串，表示将原字符串重复n次
 */

// 字符的 Unicode 表示法
// ES6 加强了对 Unicode 的支持，允许采用\uxxxx形式表示一个字符（xxxx表示码点）
// 码点范围 \u0000 ~ \uFFFF
console.log('\u20BB7', '\u20BB'); // js 解析成 \u20BB+7
console.log('\uD842\uDFB7'); // 超出范围的字符，必须用两个双字节的形式表示

// ES6 改进，超出访问的码点放入大括号，就能正确解读
console.log('\u{20BB7}');
console.log('\u{1F680}', '\uD83D\uDE80', '\u{1F680}' === '\uD83D\uDE80');

// 字符串的遍历器接口
for (const iterator of 'object') {
	console.log(iterator);
}

// 模板字符串
let tag = 'Bob',
	time = 'today';
console.log(`Hello ${tag}, how are you ${time}?`);

const check = () => {
	return true;
};
const result = `run 1 + 1 = ${check() ? 1 : 2}`; // 嵌套模板
console.log(result);

// 带标签的模板字符串
const foo = (a, b, c, d) => {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
};
const str1 = 'xk';
const str2 = 30;
foo`这是${str1}，他的年龄是${str2}，${'这是参数'}`;

// String.fromCodePoint() 静态方法
console.log(String.fromCodePoint(0x20bb7));
// 如果 String.fromCodePoint 方法有多个参数，则它们会被合并成一个字符串返回
console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');

// String.prototype.includes()
// String.prototype.startsWith()
// String.prototype.endsWith()
// （都是实例方法）这三个方法都支持第二个参数，表示开始搜索的位置
const s = 'Hello world!';
console.log(s.startsWith('world', 6));
console.log(s.endsWith('Hello', 5));
console.log(s.includes('Hello', 6));

// String.prototype.repeat()
console.log('hello'.repeat(2));
