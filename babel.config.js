module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset'
	],
	plugins: [
		'@vue/babel-plugin-jsx',
		[
			'component',
			{
				libraryName: 'element-plus',
				styleLibraryName: 'theme-chalk'
			}
		]
	]
};
