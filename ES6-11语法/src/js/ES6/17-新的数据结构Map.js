// Map

/**
 * 一种新的数据结构 键值对的集合，但是各种类型的值（包括对象）都可以当作键
 * 常用方法
 * 遍历
 * 应用场景
 * WeakMap 只接受对象作为键名，且键名所指向的对象，不计入垃圾回收机制
 */

// 常用方法
const m = new Map();
const o = { p: 'Hello World' };

m.set(o, 'content');
m.get(o); // "content"

console.log(m.size, m);
// console.log(m.has(o), m.delete(o), m.has(o));

m.set('xk', 30);
m.set('xk', 443); // 相同键名后者覆盖前者
console.log(m);

// 遍历
m.forEach((value, key) => {
	console.log(key, value);
});

for (const [key, value] of m) {
	console.log(key, value);
}

// 应用场景
// 使用到 Object 的场景都可以使用 Map

// Weakmap
// 如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。
// 一个典型应用场景是，在网页的 DOM 元素上添加数据，就可以使用WeakMap结构。
// 当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除。
const wm = new WeakMap();
const element = document.getElementById('box');

// WeakMap 里面对element的引用就是弱引用，不会被计入垃圾回收机制
wm.set(element, 'some information');
wm.get(element); // "some information"
// 上面的 DOM 节点对象除了 WeakMap 的弱引用外，其他位置对该对象的引用一旦消除，
// 该对象占用的内存就会被垃圾回收机制释放。WeakMap 保存的这个键值对，也会自动消失

// 注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用
