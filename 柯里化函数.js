/**
 * 柯里化函数
 * 是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
 * 并且返回接受余下的参数而且返回结果的新函数的技术。
 *
 * JavaScript 中的柯里化函数通常使用闭包的方式实现
 * 在柯里化函数中，通过将参数传递给嵌套的函数，
 * 并使用闭包将参数逐层保存下来，从而实现参数传递、组合和最终结果返回的过程。
 */

// 原始函数
function sum1(num1, num2) {
    return num1 + num2;
}

// 柯里化函数
const sum2 = (num1) => (num2) => {
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    return num1 + num2;
};

const add1 = sum2(1);
console.log(add1.toString());

const result = add1(2);
console.log(result);

// 在 vuex 中格式化日期的柯里化函数
const url = 'https://moment.nodejs.cn/downloads/moment.js';
const getDate = (state) => (fm) => {
    return moment(state.date).format(fm ? fm : 'dddd'); // 使用 moment(日期库)
};
// 使用方式 store.getters.getDate('MM Do YY')
/**
 * 当调用 store.getters.getDate(‘MM Do YY’) 时，
 * Vuex 内部会自动将 state 参数传递给 getDate 函数，
 * 而 getDate 函数则返回一个可以直接使用的函数
 * (fm) => { return moment(state.date).format(fm ? fm : ‘dddd’) }，
 * 这个函数可以直接使用 fm 参数来给日期进行格式化。
 *
 * 在这个顺利的调用过程中，state 参数被 Vuex 转换为一个内部变量，
 * 不需要在外部进行手动传递，
 * 这也是整个 getter 的封装思想的一部分，
 * 让程序员在使用 getter 时能够更加简单、直接，同时减少编码复杂度和错误的概率。
 */

const getUrl = (protocol, domain, path) => `${protocol}://${domain}/${path}`;

const getHttpsUrl = getUrl.curry('https'); // lodash 中 _.curry(func) 用于将函数柯里化
console.log(getHttpsUrl('google.com', 'search')); // 'https://google.com/search'
console.log(getHttpsUrl('github.com', 'user')); // 'https://github.com/user'

/**
 * 在这个例子中，通过在 getUrl 上调用 .curry('https')，
 * 生成一个只接受两个参数的柯里化函数 getHttpsUrl，
 * 该函数接受 domain 和 path 两个参数，并返回带有 https 协议的 url。
 */
