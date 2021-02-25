import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
const instance = axios.create({
	baseURL: process.env.VUE_APP_API_BASE_URL || '',
	timeout: 120 * 1000,
	withCredentials: true
});

const err = (error) => {
	if (error.message.includes('timeout')) {
		// console.log('error---->',error.config)
		ElMessage({
			message: '请求超时，请刷新网页重试',
			type: 'error'
		});
	}
	if (error.response) {
		const data = error.response.data;
		const token = '';
		if (error.response.status === 403) {
			ElMessage({
				message: 'Forbidden',
				type: 'error'
			});
		}
		if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
			ElMessage({
				message: 'Unauthorized',
				type: 'error'
			});
			if (token) {
				// store.dispatch('Logout').then(() => {
				// 	setTimeout(() => {
				// 		window.location.reload();
				// 	}, 1500);
				// });
			}
		}
	}
	return Promise.reject(error);
};
instance.interceptors.request.use((config: AxiosRequestConfig) => {
	return config;
}, err);

instance.interceptors.response.use((response: AxiosResponse) => {
	console.log(response);
	const config: AxiosRequestConfig = response.config || '';

	const code = Number(response.data.status);
	if (code === 200) {
		if (config && config.successNotice) {
			ElMessage({
				message: response.data.msg,
				type: 'success'
			});
		}
		return response.data;
	} else {
		let errCode = [402, 403];
		if (errCode.includes(response.data.code)) {
			ElMessage({
				message: response.data.msg || '暂不不支持全屏',
				type: 'warning'
			});
			setTimeout(() => {
				window.location.reload();
			}, 500);
		}
	}
}, err);

export default instance;
