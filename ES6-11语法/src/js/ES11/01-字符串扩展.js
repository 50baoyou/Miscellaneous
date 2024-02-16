// 字符串扩展

/**
 * 全局模式捕获
 * String.prototype.matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
 */

const str = `
    <html>
        <body>
            <div>这是第一个div</div>
            <p>这是p</p>
            <div>这是第二个div</div>
            <span>这是span</span>
        </body>
    </html>
`;

// exec g
function selectDiv(regExp, str) {
	let matches = [];
	while (true) {
		const match = regExp.exec(str);
		if (match === null) {
			break;
		}
		matches.push(match[1]); // 捕获组
	}
	return matches;
}

const regExp = /<div>(.*)<\/div>/g;
const result1 = selectDiv(regExp, str);
console.log(result1);

// match() 方法检索返回一个字符串匹配正则表达式的结果
const result2 = str.match(regExp);
console.log(result2);

// replace
/**
 * 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。
 * 模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。
 * 如果 pattern 是字符串，则仅替换第一个匹配项。
 */
function selectDiv2(regExp, str) {
	let matches = [];
	str.replace(regExp, (all, first) => {
		matches.push(first);
	});
	return matches;
}
const result3 = selectDiv2(regExp, str);
console.log(result3);

// matchAll()
function selectDiv3(regExp, str) {
	let matches = [];
	for (const match of str.matchAll(regExp)) {
		matches.push(match[1]);
	}
	return matches;
}
const result4 = selectDiv3(regExp, str);
console.log(result4);
