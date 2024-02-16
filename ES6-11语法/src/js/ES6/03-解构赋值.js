// 解构赋值

/**
 * 按照一定模式，从数组和对象中提取值，对变量进行赋值
 * 数组解构
 * 对象解构
 * 字符串解构
 */

// 数组解构
const [a, b, c, d = 66] = [1, 2, [3, 4]];
console.log(a, b, c, d);

// 对象解构(username 是匹配模式，user 才是变量)
const { username: user } = {
	username: 'baigei',
	password: '123456',
	tag: 'demo',
};
console.log(user);

let x; // 将一个已经声明的变量用于解构赋值，需要放在一个括号里面
({ x } = { x: 'xiix' });
console.log(x);

// 字符串解构
const [aa, bb] = 'hello';
console.log(aa, bb);

// 参数解构
function foo([a, b, c]) {
	console.log(a, b, c);
}
const arr = [11, 22, 33];
foo(arr);

// 返回值解构
function run() {
	return { name: 'bai', age: 11 };
}
const { name, age } = run();
console.log(name, age);

// JSON解构
const json = '{"code":200,"data":[{"a":"hello"},{"b":"xixi"}]}';
const {
	code,
	data: [n1, n2],
} = JSON.parse(json);
console.log(code, n1, n2);
