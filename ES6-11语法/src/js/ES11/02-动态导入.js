// 动态导入

/**
 * Dynamic import() 动态导入
 */

btn.addEventListener('click', () => {
	// 动态导入（按需加载），当点击按钮时才会加载所需组件
	import('./ajax').then((mod) => {
		mod.defalt('www.xxx.com/a.json', (res) => {
			console.log(res);
		});
	});
});
