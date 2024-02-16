// 正则表达式的扩展

/**
 * ES5 修饰符，i（忽略大小写） m（多行匹配） g（全局匹配）
 * y修饰符 粘连修饰符
 * u修饰符 开启 Unicode 模式，用来正确处理大于\uFFFF的 Unicode 字符
 */

// y修饰符
const str1 = 'aaa_aa_a';
const reg1 = /a+/g; // 每次匹配剩余的字符串
const reg2 = /a+/y; // 每次从剩余的第一个字符开始匹配

// aaa_aa_a
console.log(reg1.exec(str1)); // aaa
console.log(reg2.exec(str1)); // aaa

// _aa_a
console.log(reg1.exec(str1)); // aa
console.log(reg2.exec(str1)); // null

// _a
console.log(reg1.exec(str1)); // a
// aaa_aa_a
console.log(reg2.exec(str1)); // aaa

// u修饰符
const str2 = '\uD842\uDFB7'; // 四个字节的 UTF-16 编码，代表一个字符

console.log(/^\uD842/.test(str2)); // ES5 不支持四个字节的 UTF-16 编码，会将其识别为两个字符
console.log(/^\uD842/u.test(str2)); // 加了 u修饰符以后，ES6 就会识别其为一个字符

// .除了换行符以外的任意单个字符
// 对于码点大于0xFFFF的 Unicode 字符，点字符不能识别，必须加上u修饰符
console.log(/^.$/.test(str2));
console.log(/^.$/u.test(str2));

// 使用大括号表示 Unicode 字符
// 这种表示法在正则表达式中必须加上u修饰符，才能识别当中的大括号，否则会被解读为量词
console.log(/\u{61}/.test('a'));
console.log(/\u{61}/u.test('a'));
