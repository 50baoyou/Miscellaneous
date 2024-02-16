// 异步操作前置知识
// 测试接口：https://jsonplaceholder.typicode.com/users

/**
 * JS是单线程的
 * 同步任务 与 异步任务
 * Ajax 原理
 * Callback Hell
 */

// 同步任务 与 异步任务
const a = 2;
const b = 3;

console.log(a + b); // 同步任务

setTimeout(() => {
	console.log(a + b + 1); // 异步任务
}, 0); // 最小时间 4ms

console.log('异步任务');

// Ajax 原理

// 使用ES5封装Ajax方法
function ajax(url, callback) {
	// 1.创建XMLHttpRequest对象
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}

	// 2.发送请求
	xmlhttp.open('GET', url, true);
	xmlhttp.send();

	// 3.服务端响应
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
			var result = JSON.parse(xmlhttp.responseText);
			callback(result);
		}
	};
}

var url = 'https://jsonplaceholder.typicode.com/users';
ajax(url, function (params) {
	console.log(params);
});

// Callback Hell 回调地狱

// ajax(url1,res=>{
// 	dosometing
// 	ajax(url2,res=>{
// 		dosometing
// 		ajax(url3,res=>{
// 			dosometing
// 		})
// 	})
// })
