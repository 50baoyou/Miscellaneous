// 空值合并运算符

/**
 * Nullish coalescing Operator 空值合并运算符
 */

const b = false;
// const a = b || 5; // 无法设置 0 flase ''
const a = b ?? 6; // 空值合并运算符，只有当 b 为 null或undefined 时，才会取默认值
console.log(a);
