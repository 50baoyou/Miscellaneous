// c有默认值的情况
function side1(arr) {
	arr[0] = arr[2];
	console.log(arr);
}
function a(a, b, c = 3) {
	c = 10;

	// 当非严格模式中的函数有包含剩余参数、默认参数和解构赋值，
	// 那么arguments对象中的值不会跟踪参数的值
	side1(arguments);
	console.log(a, b, c);
	return a + b + c;
}
// function a(a, b, c = 3) {
// 	c = 10;
// 	arguments[0] = arguments[2];
// 	return a + b + c;
// }

console.log(a(1, 1, 1));

// c没有默认值的情况
function side2(arr) {
	arr[0] = arr[2];
	console.log(arr);
}
function b(a, b, c) {
	c = 10;

	// 当非严格模式中的函数没有包含剩余参数、默认参数和解构赋值，
	// 那么arguments对象中的值会跟踪参数的值
	side2(arguments);
	console.log(a, b, c);
	return a + b + c;
}
// function a(a, b, c = 3) {
// 	c = 10;
// 	arguments[0] = arguments[2];
// 	return a + b + c;
// }

console.log(b(1, 1, 1));
