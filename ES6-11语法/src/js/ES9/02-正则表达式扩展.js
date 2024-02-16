// 正则表达式扩展

/**
 * dotAll(s修饰符) 点号(.)将匹配包括行终止符在内的任何字符
 * 具名组匹配
 * 后行断言
 */

// dotAll
const reg = /./;
console.log(reg.test('x'));
console.log(reg.test(5));

// 不匹配行终止符
console.log(reg.test('\n'));
console.log(reg.test('\r'));

const sreg = /./s; // 开启 dotAll 模式
console.log(sreg.test('\n'));
console.log(sreg.test('\r'));

// 具名组匹配
const dateReg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
console.log(dateReg.test('2023-04-23'));
console.log(dateReg.exec('2023-04-23'));

const groups = dateReg.exec('2023-04-23').groups;
console.log(groups);

const { year, month, day } = groups; // 解构赋值

const str = 'ecmascript';

// 先行断言 代表字符串中的一个位置，紧接该位置之后的字符序列能够匹配 pattern
console.log(str.match(/ecma(?=script)/)); // 即 匹配 ecma 后有 script 的字符串

// 后行断言 代表字符串中的一个位置，紧接该位置之前的字符序列能够匹配 pattern
console.log(str.match(/(?=ecma)script/)); // 即 匹配 script 前有 ecma 的字符串
