// ES6中的类与继承

// 类，class关键字
class Animal {
	constructor(name) {
		this.name = name;
	}

	// 取值函数（getter）和存值函数（setter）
	// 可自定义相关操作
	get sex() {
		// 定义 0：male，1：famle
		if (this._sex === 0) {
			return 'male';
		} else if (this._sex === 1) {
			return 'female';
		} else {
			return 'NULL';
		}
	}

	set sex(value) {
		if (value === 0 || value === 1) {
			this._sex = value;
		}
	}

	showName() {
		console.log(this.name);
	}

	// 静态方法
	static getTag() {
		return 347;
	}

	// ES6 明确规定，Class 内部只有静态方法，没有静态属性
	// 提案 static myStaticProp = 443;
}

const a1 = new Animal('xk');
a1.showName();

// 继承
class Dog extends Animal {
	constructor(name, color) {
		super(name); // 调用父类的constructor(name)
		this.color = color;
		this._sex = 0;
	}

	getColor() {
		console.log(this.color);
	}
}

console.log(Animal.getTag());
console.log(Dog.getTag());

const dog = new Dog('xk', 'red');
dog.sex = 1;
dog.showName();
dog.getColor();
console.log(dog.sex);
