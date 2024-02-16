// 可选链

/**
 * Optional chaining 可选链
 */

const user = {
	address: {
		street: 'xx街道',
		getNum() {
			return '80号';
		},
	},
};

// 检查 属性/方法 是否存在
const street = user && user.address && user.address.street;
console.log(street);

// 可选链
const num = user?.address?.getNum?.();
console.log(num);
