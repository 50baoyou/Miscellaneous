// 导出模块
const TEMP = 443;
const obj = {
	name: 'xk',
	age: '30',
};
const foo = (a, b) => {
	return a + b;
};

export { TEMP, obj, foo };

// 使用 export default 命令，可为模块指定默认输出，它的默认输出是一个函数。
// 其他模块加载该模块时，import 命令可以为该匿名函数指定任意名字。

export default function (str) {
	console.log('使用 export default 导出');
}
