// ES5中的类与继承

// 构造函数（类）
function People(name, age) {
	// 实例属性
	this.name = name;
	this.age = age;
	People.tag += 1;
}

// 静态属性
People.tag = 0;

// 静态方法
People.say = function () {
	console.log('hello world');
};

// 原型对象的作用，就是定义所有实例对象共享的属性和方法
People.prototype.showName = function () {
	console.log('我的名字：' + this.name);
};

const p1 = new People('xk', 30);
p1.showName();
console.log(p1.__proto__);

People.say();
console.log(People.tag);

// 父类
function Animal(name) {
	this.name = name;
}
Animal.prototype.showName = function () {
	console.log('名字是：' + this.name);
};

// 子类
function Dog(name, color) {
	Animal.call(this, name); // 调用父类构造函数，继承属性
	this.color = color;
}
Dog.prototype = Object.create(Animal.prototype); // 让子类的原型指向父类的原型，继承父类原型上的方法

const dog1 = new Dog('xk', 'blue');
dog1.showName();
