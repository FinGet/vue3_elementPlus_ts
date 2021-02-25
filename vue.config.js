module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
	devServer: {
		open: false,
		disableHostCheck: true,
		proxy: {
			'/api': {
				target: 'http://www.kuaidi100.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
};
