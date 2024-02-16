// 所有的Promise操作都可以使用Async/Await代替吗？

/**
 * 是的，所有使用Promise的操作都可以使用async/await语法糖来代替。
 * Async/await是一种异步编程的方式，它基于Promise，并且使得代码更加简洁、易读和易于维护。
 * 使用async关键字定义一个函数，这个函数会总是返回一个Promise对象，然后在这个函数中使用await关键字，等待Promise对象被解决或拒绝。
 * 如果Promise对象被解决，await将返回解决的值；
 * 如果Promise对象被拒绝，await将抛出一个异常。
 * 以下是一个使用async/await代替Promise的示例：
 */

// 使用Promise实现异步操作
function fetchUserData(userId) {
	return fetch(`https://api.example.com/user/${userId}`).then((response) => response.json());
}

fetchUserData(123)
	.then((data) => console.log(data))
	.catch((error) => console.error(error));

// 使用async/await实现同样的操作
async function fetchUserData(userId) {
	const response = await fetch(`https://api.example.com/user/${userId}`);
	return response.json();
}

try {
	const userData = await fetchUserData(123);
	console.log(userData);
} catch (error) {
	console.error(error);
}

// Async/Await的性能会更好吗？

/**
 * Async/Await和Promise在性能方面没有本质上的区别，因为async/await实际上是基于Promise实现的语法糖，Promise仍然是异步编程的基础。
 * 在某些情况下，async/await甚至可能会导致一些额外的开销和延迟，例如大量异步操作嵌套的情况下，每个await都需要等待前一个Promise被解决之后才能继续执行下一个操作。
 * 此外，async/await只是一种语法糖，它不会改变代码的执行顺序或异步机制，因此不能保证在所有情况下都比Promise更快。
 *
 * 总之，Async/Await和Promise的性能并无明显差异，选择哪种方式可以根据具体情况和个人偏好进行考虑。
 * 通常情况下，Async/Await更易读、易于理解和管理，而Promise则更加灵活和可组合。
 */
