/*
需求：
    1. 开发环境使用 http://localhost:3000  生产环境使用 http://localhost:5000
    2. 成功由then触发 失败由catch触发
    3. 成功只需要成功的数据  失败只需要失败的错误信息
 */
import axios from 'axios';

// 怎么区分开发环境和生产环境
console.log(process.env.NODE_ENV); // 是nodejs的一个模块process
const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:5000';

//创建axios的实例
const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout:10000,
});

//设置拦截器、中间件
axiosInstance.interceptors.response.use(
	//响应成功的回调
	(response) => {
		// 2. 成功由then触发 失败由catch触发
		// 3. 成功只需要成功的数据  失败只需要失败的错误信息
		const result = response.data;
		console.log(result);
		if(result.status === 0){
			// 请求成功
			// 默认返回的成功的promise
			return result.data || {};
		} else {
			// 请求失败
			// 默认返回的失败的promise
			return Promise.reject(result.msg || '请求失败~~~~~');
		}
	},
	// 响应失败的回调
	// 默认返回的成功的promise
	(error) => {
		return Promise.reject('网络出现故障，请刷新试试');
	}
);

export default axiosInstance;