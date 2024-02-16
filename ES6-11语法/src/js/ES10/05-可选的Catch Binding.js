// 可选的 Catch Binding

/**
 * 省略 catch 绑定的参数和括号
 */

// function
const validJSON = (json) => {
	try {
		JSON.parse(json);
		return true;
	} catch {
		// ES10 不使用 catch 后的参数可省略
		//console.log(error);
		return false;
	}
};

const json = '{"name":"xk"}';
console.log(validJSON(json));
